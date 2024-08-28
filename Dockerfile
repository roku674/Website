# Dockerfile

# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY frontend/package*.json ./frontend/
COPY backend/package*.json ./backend/
COPY proxy/package*.json ./proxy/

# Install dependencies for all services
RUN cd frontend && npm install && cd ..
RUN cd backend && npm install && cd ..
RUN cd proxy && npm install && cd ..

# Copy all the files for each service
COPY frontend ./frontend
COPY backend ./backend
COPY proxy ./proxy

# Build-time arguments for environment variables
ARG REACT_APP_PROXY_DOMAIN
ARG REACT_APP_PROXY_PORT
ARG API_KEY
ARG API_KEY_NAME
ARG BACKEND_PORT
ARG DOMAIN
ARG MONGO_URI
ARG PORT
ARG PROXY_PORT
ARG MONGODB_CLUSTER_LOGS
ARG MONGODB_DATABASE_TRADER

# Set environment variables
ENV REACT_APP_PROXY_DOMAIN=$REACT_APP_PROXY_DOMAIN
ENV REACT_APP_PROXY_PORT=$REACT_APP_PROXY_PORT
ENV API_KEY=$API_KEY
ENV API_KEY_NAME=$API_KEY_NAME
ENV BACKEND_PORT=$BACKEND_PORT
ENV DOMAIN=$DOMAIN
ENV MONGO_URI=$MONGO_URI
ENV PORT=$PORT
ENV PROXY_PORT=$PROXY_PORT
ENV MONGODB_CLUSTER_LOGS=$MONGODB_CLUSTER_LOGS
ENV MONGODB_DATABASE_TRADER=$MONGODB_DATABASE_TRADER

RUN cd frontend && npm run build && cd ..

# Use a lightweight Node server to serve the React application
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the backend and proxy files
COPY --from=build /app/backend ./backend
COPY --from=build /app/proxy ./proxy

# Copy the built frontend files to serve
COPY --from=build /app/frontend/build ./frontend/build

# Install a lightweight HTTP server for serving static content
RUN npm install -g serve

# Expose necessary ports
EXPOSE 3000 7000

# Start all services
CMD ["sh", "-c", "serve -s ./frontend/build -l 3000 & node backend/server.js & node proxy/proxy.js"]
