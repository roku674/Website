# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies (npm ci is recommended for a clean install)
RUN npm ci

# Copy the rest of the application to the container
COPY . .

# Build the React application for production
RUN npm run build

# Use an Nginx image to serve the built application
FROM nginx:alpine

# Copy the built files from the previous stage to Nginx's default public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
