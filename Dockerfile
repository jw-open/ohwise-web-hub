# Stage 1: Create the build image
FROM node:20.11.1-slim AS build

# Create app directory
WORKDIR /app

# Copy package files
COPY . .

# Set Env vars
ARG VITE_STRAPI_API_URL
ENV VITE_STRAPI_API_URL=$VITE_STRAPI_API_URL
ARG VITE_STRAPI_API_TOKEN
ENV VITE_STRAPI_API_TOKEN=$VITE_STRAPI_API_TOKEN


RUN npm install --loglevel=error

# Build the application
RUN npm run build

# Stage 2: Create the production image
FROM node:20.11.1-slim AS production

# Set the working directory
WORKDIR /app

# Install serve package
RUN npm install -g serve

COPY package.json ./package.json
# Copy the built application files
COPY --from=build /app/dist ./dist
COPY --from=build /app/package-lock.json ./package-lock.json
COPY --from=build /app/node_modules ./node_modules
COPY tsconfig* ./
COPY *config* ./
COPY components.json ./components.json
COPY index.html ./index.html
COPY public ./public

# Expose port 8080
EXPOSE 8080

# Start the server
CMD ["serve", "-s", "dist", "-l", "8080"] 
