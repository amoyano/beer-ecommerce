# Beer E-Commerce api

A simple Express.js server that provides API endpoints for products and stock/price information for the Beer E-Commerce frontend application.

## Environment Setup

Before running the application, you need to set up environment variables:

1. Navigate to the api directory (if you are not already there):
   ```bash
   cd api
   ```

2. Copy the `.env.example` file to a new file named `.env`:
   ```bash
   cp .env.example .env
   ```

3. Update the values in the `.env` file as needed. Key variables might include database connection strings or port numbers.

## Setup and Installation

### Prerequisites
- Node.js (latest version recommended)
- npm or yarn

### Installation

```bash
# Navigate to the api directory (if you are not already there)
cd api

# Install dependencies
npm install

# Start the development server
npm run dev
```

The api API will typically be available at `http://localhost:5000` (or the port specified in your environment variables).

## API Endpoints

- `GET /api/products` - Returns a list of all products available.
- `GET /api/stock-price/:sku` - Returns the current price and stock level for a specific product Stock Keeping Unit (SKU).

## Deployment

Ensure the necessary environment variables (like `NODE_ENV=production`, database URLs, etc.) are set in your production environment. You can typically start the server using a command like:

```bash
npm run start
```

Consider using a process manager like PM2 for running the Node.js application in production. 