# Blog Viewer Application

This is a simple blog viewer application built using Next.js. It demonstrates how to work with routing, server and client components, dynamic routes, authentication, and data fetching. The app includes functionality for viewing blog posts, navigating between pages, and protecting certain routes with authentication.

## Features

- **Home Page (Static Route):**
  - Displays a list of blog post titles fetched from a mock API.
  - Each title links to a detailed page for that specific post.

- **Blog Details Page (Dynamic Route):**
  - Displays detailed content of a specific blog post based on the post's ID from the URL.
  - Fetches blog details dynamically using Next.js dynamic routes (`/blog/[id]`).

- **Protected Profile Page (Static Route):**
  - Displays a static message: "Welcome to your profile!".
  - The page is protected using **Kinde Auth** to ensure only authenticated users can access it.
  - Users are redirected to the login page if they are not authenticated.

- **Navigation:**
  - Includes a header with links to the "Home" and "Profile" pages.
  - Shows a "Login" button if the user is not authenticated, and a "Logout" button if they are.

- **Styling:**
  - The application is styled using basic CSS or a CSS library like **Tailwind CSS** to ensure the UI is visually clean and responsive.

## Setup

### Clone the repository

```bash
git clone https://github.com/your-username/blog-viewer-app.git
cd blog-viewer-app
