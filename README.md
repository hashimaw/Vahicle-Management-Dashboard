# Vehicle Management Web App

## Tech Stack

### Frontend
- **React** - JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server for React
- **Tailwind CSS** - Utility-first CSS framework
- **Mantine** - React component library for building modern UIs
- **React Query** - Data fetching, caching, and state management

### Backend
- **Node.js** - JavaScript runtime for building server-side applications
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database for storing vehicle data
- **Mongoose** - MongoDB object modeling for Node.js


### Development Setup (Frontend)

1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

Your frontend should now be running at `http://localhost:5173`.



### Development Setup (Backend)

1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```


4. Start the server:
    ```bash
    node server
    ```

The backend server should now be running at `http://localhost:3000`.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) ( MongoDB Atlas)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Steps to Run the Project

1. Clone the repository:
    ```bash
    git clone https://github.com/hashimaw/Vahicle-Management-Dashboard.git
    ```

2. Navigate to the project directory:
    ```bash
    cd vehicle-management-app
    ```

3. Install dependencies for both frontend and backend:
    - For the frontend:
        ```bash
        cd frontend
        npm install
        ```

    - For the backend:
        ```bash
        cd backend
        npm install
        ```

4. Configure environment variables for MongoDB in the `.env` file in the `backend` directory.

5. Start both frontend and backend servers (in two separate terminal windows or tabs):
    - Start the frontend:
        ```bash
        cd frontend
        npm run dev
        ```

    - Start the backend:
        ```bash
        cd backend
        node server
        ```

6. Access the application at `http://localhost:5173` for the frontend and `http://localhost:3000` for the backend API.



Feel free to reach out if you have any questions or need help setting up the application. Happy coding!

