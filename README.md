# 🌐 URL Shortener

A simple and efficient full-stack web application that allows users to convert long URLs into shorter, easy-to-share links. This project demonstrates practical use of the MERN stack (MongoDB, Express, Node.js, and EJS) following the MVC architecture.

---

## 🔍 Project Overview

The URL Shortener project enables users to:

- 🔗 **Shorten URLs**: Generate a compact, unique version of any long URL.
- 🔁 **Redirect**: Navigate users to the original URL via the shortened link.
- 🖥️ **User Interface**: Interact with a user-friendly web interface built using EJS.

---

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, EJS (Embedded JavaScript)
- **Database**: MongoDB
- **Architecture**: MVC (Model-View-Controller)

---

## 📁 Project Structure

```plaintext
URL-SHORTENER/
│
├── controllers/       # Business logic for URL handling
├── middlewares/       # Middleware functions for validation, etc.
├── models/            # MongoDB schema for storing URLs
├── routers/           # Application routes
├── service/           # Utility functions (e.g., short code generation)
├── views/             # EJS templates for rendering the UI
│
├── connection.js      # Database connection setup
├── index.js           # Application entry point
├── package.json       # Project metadata and dependencies


