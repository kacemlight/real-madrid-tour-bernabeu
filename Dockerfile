FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application source
COPY . .

# Build application
RUN npm run build

# Expose port
EXPOSE 3000

# Set environment to production
ENV NODE_ENV=production

# Start application
CMD ["npm", "start"]
