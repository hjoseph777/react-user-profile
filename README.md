# React Learning Portfolio

This project is a comprehensive React application showcasing various fundamental React concepts through interactive components. It serves as a learning portfolio demonstrating skills in React development.

# ## Live Demo

View the live demo of this application: [React Learning Portfolio](https://hjoseph777.github.io/react-user-profile)

## Application Overview

This React application built with Vite showcases several key React concepts through interactive components:

- **User Profile Card**: Demonstrates components and props
- **Counter**: Illustrates state management
- **Todo List**: Shows event handling and conditional rendering
- **Blog Posts**: Demonstrates API fetching and data handling
- **Navigation**: Implements routing between Home and About pages

## Component Details

### Main Components

1. **UserProfile** ([View Code](https://github.com/hjoseph777/react-user-profile/blob/main/src/userProfile.jsx))
   - Displays user information using props
   - Shows profile picture, name, and bio

2. **Counter** ([View Code](https://github.com/hjoseph777react-user-profile/blob/main/src/Counter.jsx))
   - Demonstrates React state management
   - Features increment, decrement, and reset functionality
   - Uses useState hook for state management

3. **TodoList** ([View Code](https://github.com/hjoseph7777/react-user-profile/blob/main/src/TodoList.jsx))
   - Showcases event handling and conditional rendering
   - Allows adding, editing, completing, and removing todo items
   - Uses session storage for data persistence
   - Demonstrates form handling and list manipulation

4. **PostList** ([View Code](https://github.com/hjoseph777/react-user-profile/blob/main/src/PostList.jsx))
   - Demonstrates API fetching and data handling
   - Fetches blog posts from JSONPlaceholder API
   - Shows loading, error, and success states
   - Includes retry functionality for failed requests
   - Features manual fetch and clear buttons

### Navigation Components

- **Navbar** ([View Code](https://github.com/hjoseph777/reactuUser-profile/blob/main/src/Components/Navbar.jsx))
  - Provides navigation between Home and About pages
  - Uses React Router for client-side routing

### Pages

- **Home** ([View Code](https://github.com/hjoseph777/react-user-profile/blob/main/src/Pages/Home.jsx))
  - Main page displaying all component cards
  - Organized in a responsive layout

- **About** ([View Code](https://github.com/hjoseph777/react-user-profile/blob/main/src/Pages/About.jsx))
  - Information about the application and its features

## Code Examples

The application includes several snippet files that demonstrate specific React concepts:

- **PostList_state_management.jsx**: Shows React state setup for data fetching
- **PostList_Conditional_Rendering.jsx**: Demonstrates conditional rendering patterns
- **PostList_Data_Fetching.jsx**: Shows async/await pattern for API calls
- **PostList_useEffect_Hooknew.jsx**: Demonstrates the useEffect hook for side effects

## Project Structure

```
react-User-profile/
├── public/                  # Static assets
│   ├── icon-api.svg         # API section icon
│   ├── icon-counter.svg     # Counter section icon
│   ├── icon-todo-list.svg   # Todo list section icon
│   ├── icon-navigation-route.svg  # Routing section icon
│   ├── male-profile.svg     # Profile picture
│   └── vite.svg             # Vite logo
├── src/                     # Source code
│   ├── assets/              # Application assets
│   │   └── react.svg        # React logo
│   ├── Components/          # Reusable components
│   │   ├── Navbar.css       # Navigation styling
│   │   └── Navbar.jsx       # Navigation component
│   ├── Pages/               # Application pages
│   │   ├── About.jsx        # About page
│   │   ├── Home.jsx         # Home page
│   │   └── Pages.css        # Pages styling
│   ├── App.css              # Main application styles
│   ├── App.jsx              # Main application component
│   ├── Counter.css          # Counter component styles
│   ├── Counter.jsx          # Counter component
│   ├── index.css            # Global styles
│   ├── main.jsx             # Application entry point
│   ├── PostList.css         # PostList component styles
│   ├── PostList.jsx         # PostList component
│   ├── TodoList.css         # TodoList component styles
│   ├── TodoList.jsx         # TodoList component
│   ├── userProfile.css      # UserProfile component styles
│   └── userProfile.jsx      # UserProfile component
├── .gitignore               # Git ignore file
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML entry point
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation
└── vite.config.js           # Vite configuration
```

## Technologies Used

- React 19
- React Router
- Vite
- ES6+ JavaScript
- CSS3
- Fetch API


## Live Demo

View the live demo of this application: [React Learning Portfolio](https://hjoseph777.github.io/react-User-profile)
