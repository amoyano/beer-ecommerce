# Beer E-Commerce Full Stack Application

This repository contains the code for a full-stack beer e-commerce application, consisting of a React frontend and an Express.js backend API.

## Project Structure

-   `/client`: Contains the React 19 frontend application built with Vite.
-   `/api`: Contains the Express.js backend server.

## Getting Started

Follow the setup instructions within each respective directory:

1.  **Backend API (`/api`)**
    -   Navigate to the `api` directory.
    -   Follow the instructions in `api/README.md` to set up environment variables (`.env`) and install dependencies (`npm install`).

2.  **Frontend Client (`/client`)**
    -   Navigate to the `client` directory.
    -   Follow the instructions in `client/README.md` to set up environment variables (`.env`) and install dependencies (`npm install`). Ensure `VITE_API_BASE_URL` points to your running backend.

## Running the Application

1.  **Start the Backend API:**
    ```bash
    cd api
    npm run dev
    # API typically runs on http://localhost:5000
    ```

2.  **Start the Frontend Client:**
    ```bash
    cd client
    npm run dev
    # Client typically runs on http://localhost:3000
    ```

Make sure the backend API is running before starting the frontend client.

## Further Information

For more detailed information about each part of the application, please refer to the `README.md` files within the `client` and `api` directories. 