# Role-Based Access Control (RBAC) with JWT Authentication

This project implements Role-Based Access Control (RBAC) in a Node.js application using JWT (JSON Web Token) for user authentication. The system allows different roles (Admin, Manager, User) to have specific access to different routes. The main features include user registration, login, and restricted access based on roles.

## Introduction

This application provides role-based access to different resources based on user roles. JWT (JSON Web Token) is used for securing routes and ensuring that users can only access routes corresponding to their assigned roles. The application has three roles:

- **Admin**: Full access to all resources.
- **Manager**: Access to some resources like the admin but limited access to others.
- **User**: Access to public resources.

## Motivation

The primary motivation behind this project is to implement a robust system that enforces Role-Based Access Control (RBAC). By using JWT authentication, the system ensures that only users with valid tokens and correct roles can access certain routes. This project helps in building secure applications where different roles have specific permissions, making it a perfect demonstration of role management in an API.

## Project Setup

To set up the project locally, follow these steps:

### Prerequisites

- **Node.js**: The JavaScript runtime environment to run the server.
- **MongoDB**: The NoSQL database to store user data.
- **Git (optional)**: For version control.

###  Clone the Repository

Clone the repository to your local machine:

```bash
git clone (https://github.com/ChetanSingh14/Backend_RBAC.git)
cd <project_folder>
```
##  Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```
##  .env file

MONGO_URI=<your_mongo_connection_string>
JWT_SECRET=<your_secret_key_for_jwt>
PORT=3000


## Technology Stack

- **Node.js**: JavaScript runtime for building the application.
- **Express**: Web framework for Node.js to handle HTTP requests.
- **JWT (JSON Web Token)**: Used for secure user authentication and authorization.
- **MongoDB**: NoSQL database to store user data and authentication details.
- **Mongoose**: MongoDB object modeling for Node.js.
- **Bcrypt.js**: Used for password hashing and comparison.

## Folder Structure
├── src
│   ├── Controllers
│   │   ├── authcontroller.js    # Handles registration and login logic
│   ├── Middleware
│   │   ├── authmiddleware.js    # Middleware for verifying JWT
│   │   ├── rolemiddleware.js    # Middleware for role-based access control
│   ├── Models
│   │   ├── usermodel.js         # User schema for MongoDB
│   ├── Routes
│   │   ├── authRoutes.js        # Routes for registration and login
│   │   ├── userRoutes.js        # Routes for role-based access
│   ├── servercreate.js          # MongoDB connection setup
│   ├── index.js                 # Main entry point for the application
└── .env                         # Environment variables
└── package.json                 # Project metadata and dependencies
└── README.md                    # Project documentation



