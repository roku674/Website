# Use Node.js 18 as the base image
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies for both backend and frontend
COPY ./backend/package.json ./backend/
COPY ./frontend/package.json ./frontend/

RUN npm install -g concurrently
RUN cd backend && npm install
RUN cd frontend && npm install

# Copy all backend and frontend files
COPY ./backend ./backend
COPY ./frontend ./frontend

# Build the frontend
RUN cd frontend && npm run build

# Expose ports for backend and frontend
EXPOSE 5000
EXPOSE 3000

# Start both backend and frontend using concurrently
CMD ["concurrently", "\"npm start --prefix backend\"", "\"serve -s frontend/build -l 3000\""]
