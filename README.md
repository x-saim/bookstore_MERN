# MERN Bookstore App 📚

Welcome to the MERN Bookstore App! This is a fullstack application built using the MERN stack (MongoDB, Express, React, Node.js).

## Overview

This app allows users to manage a collection of books. Users can create, read, update, and delete books from the bookstore. The backend is built with Node.js, Express, and MongoDB, while the frontend is developed using React.

## Key Features

- **Backend CRUD**: Implemented basic CRUD operations in the backend using Node.js, Express, and MongoDB.
- **Backend Router**: Organized RESTful backend routes efficiently with Express Router.
- **CORS Policy**: Handled CORS policy in the backend to allow cross-origin requests.
- **MongoDB Operations**: Performed database operations such as creating, reading, updating, and deleting records with Mongoose.
- **Frontend CRUD**: Implemented frontend CRUD operations using React for creating, reading, updating, and deleting books.
- **Frontend Router**: Managed frontend routes with React Router for seamless navigation.
- **Responsive Design**: Utilized Tailwind CSS to ensure the application is responsive and visually appealing on various devices.
- **User Experience**: Enhanced user experience with modals, alerts, and interactive UI components.
- **Component-Based Architecture**: Built reusable React components to maintain clean and manageable code.
- **State Management**: Used React's state and hooks to manage the application's state effectively.

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/mern-bookstore-app.git
   cd mern-bookstore-app
   ```

2. **Install backend dependencies**:

   ```bash
   cd backend
   npm install
   ```

3. **Set up environment variables**: Create a `.env` file in the backend directory and add the following:

   ```
   MONGODB_URI=your_mongodb_uri
   PORT=5000
   ```

4. **Start the backend server**:

   ```bash
   npm run dev
   ```

5. **Install frontend dependencies**:

   ```bash
   cd ../frontend
   npm install
   ```

6. **Start the frontend server**:
   ```bash
   npm run dev
   ```

## License

This project is licensed under the MIT License.
