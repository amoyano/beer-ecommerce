# Beer E-Commerce client

A React 19 application built with Vite, serving as the client for a beer e-commerce platform. It features a Product Listing Page (PLP) and a Product Detail Page (PDP).

## Project Structure

This project is the client part of a larger application. The backend is a separate Express.js server.

1.  **Frontend**: This React 19 application.
2.  **Backend**: A simple Express.js server (see backend documentation).

## Environment Setup

Before running the application, you need to set up environment variables for the client:

1.  Copy the `.env.example` file to a new file named `.env`:
    ```bash
    cp .env.example .env
    ```

2.  Update the values in the `.env` file as needed. This typically includes the base URL for the backend API (e.g., `VITE_API_BASE_URL=http://localhost:5000/api`).

## client Setup

### Prerequisites
- Node.js (latest version)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The client will be available at `http://localhost:3000` (or the port specified by Vite).

## Backend Setup

### Installation

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Start the server
npm run dev
```

The backend API will be available at http://localhost:5000

## API Endpoints

This client consumes the following endpoints from the backend:

- `GET /api/products` - Fetches the list of all products for the PLP.
- `GET /api/stock-price/:sku` - Fetches the price and stock information for a specific SKU on the PDP.

Refer to the backend documentation for full API details.

## Features

- Product Listing Page (PLP) at `/products` using Tailwind CSS
- Product Detail Page (PDP) at `/product/:id-:brand` using SASS
- PDP checks for updated stock and price from the backend every 5 seconds
- Responsive design for mobile devices
- Mixed styling approach: Tailwind CSS for PLP and SASS for PDP

## Deployment

To build the client for production:

1.  Build the client assets:
    ```bash
    npm run build
    ```
    This will create a `dist` directory with the optimized static assets.

2.  Deploy the contents of the `dist` directory to your hosting provider (e.g., Netlify, Vercel, AWS S3).
