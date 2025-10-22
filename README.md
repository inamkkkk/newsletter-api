# Newsletter API

A Node.js backend for a newsletter subscription service.

## Features

- Subscribe to the newsletter with email validation.
- Unsubscribe from the newsletter.
- Retrieve all subscribers (protected with JWT).
- User registration and login with JWT authentication.

## Technologies

- Node.js
- Express.js
- Mongoose
- MongoDB
- JSON Web Tokens (JWT)
- bcrypt
- dotenv
- cors

## Installation

1.  Clone the repository:

    
    git clone <repository-url>
    cd newsletter-api
    

2.  Install dependencies:

    
    npm install
    

3.  Set up environment variables:

    Create a `.env` file in the root directory and add the following variables:

    
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/newsletterDB
    JWT_SECRET=your_secret_key
    

    Replace `your_secret_key` with a strong, random secret.

4.  Run the application:

    
    npm start
    

## API Endpoints

### User Authentication

-   `POST /api/users/register`: Register a new user.

    Request body:

    
    {
        "username": "<username>",
        "password": "<password>"
    }
    

-   `POST /api/users/login`: Login and get a JWT token.

    Request body:

    
    {
        "username": "<username>",
        "password": "<password>"
    }
    

### Newsletter Subscription

-   `POST /api/newsletter/subscribe`: Subscribe to the newsletter.

    Request body:

    
    {
        "email": "<email>"
    }
    

-   `POST /api/newsletter/unsubscribe`: Unsubscribe from the newsletter.

    Request body:

    
    {
        "email": "<email>"
    }
    

-   `GET /api/newsletter/subscribers`: Get all subscribers (requires JWT).

    Authorization: `Bearer <token>`
