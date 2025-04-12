Netflix Clone - Full Stack Project

## Overview

This is a **full-stack Netflix clone** that replicates the functionality of the popular streaming platform. It’s built using a combination of **React** for the frontend, **Node.js** and **Express** for the backend, and **MongoDB** for database management. The project also integrates **Razorpay** for handling payments, allowing users to pay for premium subscriptions.

## Features

1. **User Authentication**
   - Users are required to **register** for an account before accessing the platform.
   - After registration, they can **log in** using their credentials and receive a **JWT token** for secure authentication.
   - Users can **log out** to invalidate their session.

2. **Content Viewing**
   - The platform allows users to watch a wide variety of content, including:
     - **Movies** from different genres.
     - **Cartoons** suitable for children or animation lovers.
     - **Songs** for music enthusiasts.
   - The content is organized and displayed in a user-friendly interface, enabling users to browse and select their preferred media.

3. **Responsive Design**
   - The app is designed to be **fully responsive**, meaning it works across all devices—desktop, tablet, and mobile—ensuring a seamless viewing experience.

4. **Payment Gateway Integration (Razorpay)**
   - Premium users can access exclusive content and features.
   - Users can **make payments** using Razorpay to subscribe to premium content.
   - The payment system is integrated to handle transactions securely.

5. **Cloud Storage for Content**
   - All movie, cartoon, and song assets are stored in **Cloudinary**, allowing for easy media management and fast delivery.

## Tech Stack

- **Frontend**: React.js, CSS3, HTML5
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (using Mongoose ORM for managing user data and content)
- **Authentication**: JWT (JSON Web Token) for user authentication
- **Payment Gateway**: Razorpay for handling payments
- **Cloud Storage**: Cloudinary for storing and retrieving media content (movies, cartoons, songs)

## Setup Instructions

### 1. Clone the Repository
Start by cloning the project to your local machine:
```bash
git clone https://github.com/yourusername/netflix-clone.git
cd netflix-clone
```

### 2. Backend Setup

- Navigate to the `backend` folder and install the required dependencies:
  ```bash
  cd backend
  npm install
  ```

- Create a `.env` file in the `backend` directory with the following environment variables:
  ```env
  MONGO_URI=your_mongo_connection_string
  JWT_SECRET=your_secret_key_for_jwt
  RAZORPAY_KEY=your_razorpay_key
  API_URL=your_api_url
  CLOUDINARY_CLOUD_NAME=your_cloud_name
  CLOUDINARY_API_KEY=your_api_key
  CLOUDINARY_API_SECRET=your_api_secret
  ```

- After setting up the `.env` file, run the backend server:
  ```bash
  npm start
  ```

### 3. Frontend Setup

- Navigate to the `frontend` folder and install the dependencies:
  ```bash
  cd frontend
  npm install
  ```

- Create a `.env` file in the `frontend` folder and set the following environment variable:
  ```env
  REACT_APP_API_URL=your_api_url
  ```

- After setting up, run the frontend development server:
  ```bash
  npm start
  ```

### 4. Access the Application

Once both the backend and frontend are running, open your browser and navigate to `http://localhost:3000` to access the Netflix clone application.

## Project Structure

### Backend

- `/models`: Contains Mongoose models (e.g., User, Content, etc.)
- `/routes`: API endpoints for user authentication, content management, and payments
- `/controllers`: Logic for processing requests (e.g., user registration, login, content fetching)
- `server.js`: Main server file that runs the backend
- `.env`: Environment variables for database connection, JWT secret, etc.

### Frontend

- `/public`: Static files (like images, icons, etc.)
- `/src`: All React components and files
  - `/components`: React components for various parts of the UI (e.g., Navbar, Movie Card)
  - `/pages`: Pages such as Home, Login, Register, Profile, etc.
  - `/context`: Context for managing global state (e.g., user session)
  - `/hooks`: Custom hooks for reusable logic
- `.env`: Environment variables for frontend API URLs

## How to Use the Application

### 1. Register and Login
- When you first visit the website, you’ll be prompted to **register** for an account.
- Once registered, you can **log in** using your email and password.
- After successful login, you'll receive a JWT token for authentication that will be used for all protected routes.

### 2. Viewing Content
- After logging in, you can access a wide variety of **movies**, **cartoons**, and **songs**.
- Browse through different categories, and click on a content item to start playing.

### 3. Payment and Premium Features
- Some content may require a **premium subscription**.
- You can use **Razorpay** to securely make payments and unlock premium content.

### 4. Logout
- You can **log out** from the platform anytime by clicking on the logout button. This will invalidate your session.

## Conclusion

This full-stack Netflix clone demonstrates how to build a streaming platform with user authentication, media streaming, and payment integration. It uses modern technologies like React for the frontend, Node.js for the backend, and MongoDB for the database to provide a seamless user experience. 

Feel free to explore, contribute, and modify the project to add more features or improve the existing ones!

