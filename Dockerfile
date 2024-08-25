# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json to the container
COPY package.json ./

# Install dependencies and create package-lock.json
RUN npm install

# Copy the rest of the application to the container
COPY . .

# Build the React application for production
RUN npm run build

# Use an Nginx image to serve the built application
FROM nginx:alpine

# Copy the built files from the previous stage to Nginx's default public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 
EXPOSE 3000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
