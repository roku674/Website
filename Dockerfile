# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application to the container
COPY . .

# Build the React application for production
RUN npm run build

# Use a lightweight Node server to serve the React application
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the built files from the previous stage
COPY --from=build /app/build .

# Install a lightweight HTTP server for serving static content
RUN npm install -g serve

# Expose port 3000 to the Railway infrastructure
ENV PORT=$PORT
EXPOSE $PORT

# Start the application on port specified by the $PORT environment variable
CMD ["serve", "-s", ".", "-l", "${PORT}"]
