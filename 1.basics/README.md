# React Fundamentals & Prerequisites

This section provides a complete foundational understanding required before learning React.js. It focuses on the essential JavaScript concepts and core ideas that React is built upon.

---

# Why This Section Matters

React is built on top of JavaScript. A clear understanding of JavaScript fundamentals is necessary to properly learn and use React. Without this foundation, it becomes difficult to understand how React works internally.

This section ensures that all required prerequisites are covered in a structured and clear manner.

---

# JavaScript Prerequisites (Before Learning React)

A complete knowledge of JavaScript is not required, but a strong understanding of the following topics is essential:

---

## Core JavaScript Topics

* Variables: `let`, `const`, scope
* Data types: primitive and reference types
* Operators and expressions
* Conditional statements: `if`, `switch`
* Loops: `for`, `while`

---

## Functions

* Function declarations and expressions
* Arrow functions
* Parameters and return values
* Callback functions
* Higher-order functions

---

## Arrays

* Array structure and indexing
* Important methods:

  * `map()`
  * `filter()`
  * `reduce()`
  * `forEach()`

---

## Objects

* Object structure (key-value pairs)
* Nested objects
* Object destructuring

---

## ES6+ Features

* Arrow functions
* Template literals
* Destructuring
* Spread and rest operators
* Default parameters
* Modules (`import` and `export`)

---

## DOM Basics

* What is the DOM
* Selecting elements
* Basic DOM manipulation
* Event handling

---

## Asynchronous JavaScript

* Callbacks
* Promises
* `async/await`
* Fetch API

---

## Additional Important Concepts

* Closures (basic understanding)
* Scope (global, local, block)
* Execution context (basic idea)

---

# What is React

React is a JavaScript library used for building user interfaces, especially for single-page applications. It enables developers to create reusable UI components and manage application updates efficiently.

---

# Who Created React

React was created by Facebook (now Meta) and was first released in 2013. It was initially developed by Jordan Walke.

---

# Why React Was Created

React was created to solve several problems faced in building large and dynamic web applications:

* Managing complex UI updates became difficult with direct DOM manipulation
* Performance issues due to frequent full-page updates
* Poor code maintainability in large applications
* Lack of reusable UI structure

React introduced solutions such as:

* Component-based architecture
* Efficient UI updates using a virtual representation of the DOM
* Declarative approach to building interfaces

---

# Core Concepts You Will Learn Next

The following concepts will be covered in detail in subsequent sections of this repository:

* Components
* JSX
* Props
* State
* Event Handling
* Hooks
* Routing
* API Integration
* State Management

---

# React with Modern Tooling

React applications are commonly built using modern tools such as Vite, which provides:

* Fast development server
* Optimized production builds
* Efficient development workflow

---

# React Project Structure (Overview)

Understanding the project structure is important for working efficiently with React applications. A well-organized structure improves readability, scalability, and maintainability.

Below is a standard structure commonly used in React applications (especially with Vite):

```id="ygm2ru"
project-root/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
```

Note: In larger or structured projects, additional folders may be present inside `src` (such as for logic, state handling, routing, or API interactions). These are used to organize code by responsibility and improve scalability.

---

## Root Level Files

### index.html

* The single HTML file used in the application
* Contains a root `<div>` where the React app is mounted
* React injects the UI into this root element

---

### package.json

* Manages project dependencies
* Contains scripts (development, build, etc.)
* Stores metadata about the project

---

### vite.config.js

* Configuration file for Vite
* Used to customize build settings and plugins

---

## Public Folder

### public/

* Stores static assets
* Files are served directly without processing
* Suitable for:

  * Images
  * Icons
  * Static files

---

## Source Folder (src)

The `src` folder is the core of the React application.

---

### main.jsx

* Entry point of the React application
* Connects React with the DOM
* Renders the main App component into the root element

---

### App.jsx

* Root component of the application
* Acts as the main container for all other components
* Defines overall layout and structure

---

### components/

* Contains reusable UI components
* Each component represents a part of the UI
* Promotes modular and maintainable code

---

### assets/

* Stores images, styles, and resources used inside components
* These files are processed by the build system

---

## How React Application Works

1. The browser loads `index.html`
2. `main.jsx` initializes the React application
3. React renders the `App` component
4. The UI is built using components
5. Updates happen efficiently without full page reload

---

## Importance of Proper Structure

* Improves code organization
* Makes debugging easier
* Helps scale applications
* Encourages reusable components
* Follows industry standards

---

# Conclusion

A strong understanding of the listed JavaScript concepts is sufficient to begin learning React effectively. Mastering these fundamentals makes it easier to understand advanced concepts and build scalable applications.
