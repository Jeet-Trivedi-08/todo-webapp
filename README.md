# Todo Management Application

A simple Todo management application with CRUD operations built with React as the frontend and Spring Framework as the backend.

## Features

- **User Authentication**: Allows users to log in and access their todo tasks.
- **CRUD Operations**: Users can create, read, update, and delete their todo tasks.

## Frontend

The frontend is built using React and includes:

- **React Concepts**: Utilizes fundamental React concepts such as State (`useState`,`useAuth`,`useEffect`), Functional Components, and Props.
- **Authentication**: Implements Auth Context for managing user authentication.
- **Routing**: Uses React Router for routing, including authenticated/protected routes.
- **HTTP Requests**: Axios is used for making asynchronous HTTP requests to the backend REST APIs.
- **Form Handling**: Formik library is used for efficient form handling.
- **UI Design**: Basic Bootstrap and CSS are used for designing the user interface.

## Backend

The backend is developed using the Spring Framework and includes:

- **Spring Boot**: For application setup and configuration.
- **Spring Data JPA and Hibernate**: For database interactions and ORM.
- **Spring Web and Spring MVC**: For building RESTful web services.
- **Spring Security**: For securing the application.
- **Database**: Uses an in-memory H2 database during development. Can be switched to any other database for production.
- **HTTP Methods**: Supports GET, POST, PUT, and DELETE methods for CRUD operations.

## Security

The backend implements robust security measures:

- **Stateless Authentication**: Uses JWT (JSON Web Tokens) and OAuth 2.0 to authenticate each request and protect endpoints from unauthorized access.
