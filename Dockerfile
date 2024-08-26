# Backend stage
FROM node:18-alpine AS backend

WORKDIR /app/backend

COPY ./backend/package.json ./backend/

RUN npm install

COPY ./backend .

# Frontend stage
FROM node:18-alpine AS frontend

WORKDIR /app/frontend

COPY ./frontend/package.json ./frontend/

RUN npm install

COPY ./frontend .

RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy backend from build stage
COPY --from=backend /app/backend /app/backend

# Copy frontend build files from build stage
COPY --from=frontend /app/frontend/build /app/frontend/build

# Install serve globally to serve React frontend
RUN npm install -g serve

# Install backend dependencies (again, due to different contexts)
WORKDIR /app/backend
RUN npm install

# Expose ports for backend and frontend
EXPOSE 5000 3000

# Set the environment variables
ENV PORT 3000

# Use concurrently to run both backend and frontend
WORKDIR /app

CMD ["npx", "concurrently", "\"node backend/server.js\"", "\"serve -s frontend/build -l 3000\""]
