FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) first to leverage Docker caching
COPY package*.json ./

# Install dependencies
RUN npm install --production=false

# Copy the rest of the application files
COPY . .

# Expose the application's port
EXPOSE 5000

# Start the application
CMD ["npm", "run", "dev"]

