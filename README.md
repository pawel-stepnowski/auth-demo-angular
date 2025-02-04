# auth-demo-angular

A project demonstrating the implementation of OAuth2 authentication using a modern technology stack. This demo showcases how to integrate multiple authentication providers, switch between logged-in accounts, and edit a simple user profile.

## Technologies Used

- **Angular** — Frontend framework for building dynamic web applications.
- **Firestore** — NoSQL cloud database for storing user data.
- **Cloud Run / ExpressJS** — Server-side logic hosted on Google Cloud Run, built with ExpressJS.
- **Cloud Build / Docker** — CI/CD pipeline and containerization for deploying the application.
- **JSON Schema / AJV** — Schema validation for configuration and data integrity.
- **Nginx** — Web server and reverse proxy for serving the application locally.

## Features

- **Multi-provider OAuth2 Authentication** — Log in using various authentication providers (e.g., Google, Microsoft).
- **Account Switching** — Seamlessly switch between multiple logged-in accounts.
- **User Profile Management** — Edit and manage a simple user profile.

## Components

- **[auth-js](https://github.com/pawel-stepnowski/auth)** - JavaScript implementation of client-side authentication.
- **[auth-nodejs](https://github.com/pawel-stepnowski/auth-nodejs)** - JavaScript implementation of server-side authentication.
- **[auth-angular](https://github.com/pawel-stepnowski/auth-angular)** - A project adapting the **auth-js** library for use in the **Angular**.
- **[auth-demo-express](https://github.com/pawel-stepnowski/auth-demo-express)** - Example of using **auth-nodejs** as a Cloud Run service.
- **auth-demo-angular** - current project.