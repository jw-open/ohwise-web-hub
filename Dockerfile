FROM node:21.5-alpine3.19 as base


WORKDIR /app/web

# Copy package.json and package-lock.json
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install


# Copy the entrypoint script and set executable permissions
COPY entrypoint.sh /app/web/entrypoint.sh
RUN chmod +x /app/web/entrypoint.sh

# Expose the port
EXPOSE 8080

# Use the entrypoint script to start the application
ENTRYPOINT ["/bin/sh", "/app/web/entrypoint.sh"]
