# Kandhal Shakil's Portfolio (React)

🚀 **[Live Demo](https://shakil-kandhal-portfolio.vercel.app)**  

![GitHub last commit](https://img.shields.io/github/last-commit/KandhalShakil/Portfolio_react)
![GitHub top language](https://img.shields.io/github/languages/top/KandhalShakil/Portfolio_react)
![GitHub repo size](https://img.shields.io/github/repo-size/KandhalShakil/Portfolio_react)

## Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## About The Project

This repository hosts a dynamic and responsive personal portfolio website built with React. Designed to showcase a developer's skills, educational background, certifications, and projects, this application provides an interactive user experience with various animations and modern UI elements. It serves as a comprehensive online resume, enabling potential employers or collaborators to learn more about the developer's professional journey and contact them easily.

## Features

*   **Interactive and Animated UI**: Leverages `Framer Motion` and `AOS (Animate On Scroll)` for smooth transitions and engaging scroll animations.
*   **Dynamic Background Effects**: Incorporates `TS Particles` for visually appealing, customizable background animations.
*   **Comprehensive Sections**: Dedicated sections for:
    *   **Hero**: An introductory section with dynamic typing effects.
    *   **Skills**: Showcases technical proficiencies.
    *   **Education**: Details academic background.
    *   **Certificates**: Displays professional certifications.
    *   **Projects**: A portfolio section for showcasing personal and professional projects with descriptions.
    *   **Contact**: A contact form for inquiries, likely handled via EmailJS or a custom Node.js backend.
*   **Responsive Design**: Built with `Bootstrap` and `Tailwind CSS` to ensure optimal viewing across various devices and screen sizes.
*   **Smooth Navigation**: `react-scroll` provides smooth, single-page navigation between different sections.
*   **Scroll-to-Top Functionality**: A `BackToTop` component enhances user experience by allowing quick return to the page's top.
*   **Theme Switching**: Supports dark/light mode functionality for user preference.
*   **Dynamic Typing Animation**: Utilizes `React Typed` for engaging text animations in the hero section.
*   **Rich Iconography**: Integration of `Font Awesome` and `Lucide icons` for enhanced visual appeal and clarity.

## Tech Stack

The project is built using a modern web development stack, covering both frontend and a lightweight backend for potential contact form handling.

**Frontend:**
*   **React**: A JavaScript library for building user interfaces.
*   **Bootstrap & Tailwind CSS**: CSS frameworks for responsive design and utility-first styling.
*   **Framer Motion**: A production-ready motion library for React.
*   **AOS (Animate On Scroll)**: Library to animate elements on scroll.
*   **react-scroll**: For smooth scrolling navigation.
*   **react-typed**: For dynamic typing animations.
*   **tsparticles**: For highly customizable particle backgrounds.
*   **EmailJS-com**: For sending emails directly from the client-side (optional, alongside custom backend).

**Backend:**
*   **Node.js**: JavaScript runtime for server-side logic.
*   **Express.js**: Web application framework for Node.js (implied by `server.js` and `cors`).

**Languages:**
*   JavaScript
*   HTML
*   CSS

**Key Dependencies:**

| Category          | Dependency                               | Version     | Description                                         |
| :---------------- | :--------------------------------------- | :---------- | :-------------------------------------------------- |
| **Frontend UI**   | `react`, `react-dom`                     | `^19.1.1`   | Core React libraries                                |
|                   | `bootstrap`                              | `^5.3.0`    | Responsive CSS framework                            |
|                   | `tailwindcss` (dev)                      | `^3.4.17`   | Utility-first CSS framework                         |
|                   | `lucide-react`, `@fortawesome/react-fontawesome` | `^0.541.0`, `^3.0.0` | Icon libraries                                      |
| **Animations**    | `framer-motion`                          | `^12.23.12` | Advanced animations for React                       |
|                   | `aos`                                    | `^2.3.4`    | Animate elements on scroll                          |
|                   | `@tsparticles/react`, `tsparticles`      | `^3.0.0`, `^3.9.1` | Dynamic particle backgrounds                        |
|                   | `react-typed`, `typed.js`                | `^2.0.12`, `^2.1.0` | Dynamic typing animations                           |
| **Navigation**    | `react-scroll`                           | `^1.9.3`    | Smooth scrolling for single-page applications       |
| **Utilities**     | `emailjs-com`                            | `^3.2.0`    | Client-side email sending                           |
|                   | `node-fetch`                             | `^3.3.2`    | Fetch API for Node.js                               |
| **Backend**       | `cors`                                   | `^2.8.5`    | Middleware for enabling Cross-Origin Resource Sharing |
| **Development**   | `react-scripts`                          | `5.0.1`     | Scripts for Create React App                        |
|                   | `autoprefixer`, `postcss` (dev)          | `^10.4.21`, `^8.5.6` | CSS post-processing tools                           |

## Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (LTS version recommended)
*   npm (comes with Node.js)

### Steps

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/KandhalShakil/Portfolio_react.git
    cd Portfolio_react
    ```

2.  **Install Frontend Dependencies:**
    Navigate to the root directory of the project and install the dependencies for the React application.
    ```bash
    npm install
    ```

3.  **Install Backend Dependencies:**
    Navigate into the `backend` directory and install its dependencies.
    ```bash
    cd backend
    npm install
    cd .. # Go back to the root directory
    ```

4.  **Environment Variables (Optional but Recommended):**
    If you plan to use the contact form functionality, you might need to set up environment variables.

## Usage

To run the portfolio locally, you need to start both the frontend React application and the Node.js backend server.

1.  **Start the Backend Server:**
    Open a new terminal, navigate to the `backend` directory, and start the server:
    ```bash
    cd backend
    node server.js
    ```
    You should see a message indicating the server is running (e.g., "Server running on port 5000").

2.  **Start the Frontend Application:**
    Open another terminal, navigate to the root directory of the project (`Portfolio_react/`), and start the React development server:
    ```bash
    npm start
    ```
    This will open the application in your default web browser at `http://localhost:3000` (or another available port).

You can now interact with the portfolio website in your browser.

## Project Structure

The project is organized into logical directories for clear separation of concerns, with `src` for the React application and `backend` for the Node.js server.

```
Portfolio_react/
├── public/                 # Static assets and public HTML file
│   ├── images/             # Images used across the site
│   │   ├── certificates/   # Images of certifications
│   │   └── profile.jpg     # Profile picture
│   ├── resume.pdf          # Developer's resume
│   ├── index.html          # The main HTML file for the React application
│   └── manifest.json       # Web app manifest
├── src/                    # Frontend React application source code
│   ├── components/         # Reusable React components for UI sections
│   │   ├── BackToTop.jsx   # Scroll-to-top button
│   │   ├── Certificates.jsx# Displays certifications
│   │   ├── Contact.jsx     # Contact form section
│   │   ├── Education.jsx   # Displays educational background
│   │   ├── Footer.jsx      # Page footer
│   │   ├── Hero.jsx        # Introductory hero section
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Projects.jsx    # Portfolio projects section
│   │   └── Skills.jsx      # Displays technical skills
│   ├── App.css             # Main application-wide CSS styles
│   ├── App.js              # Root component of the React application
│   ├── index.css           # Global CSS styles
│   ├── index.js            # React application entry point
│   ├── reportWebVitals.js  # Performance monitoring utility
│   └── setupTests.js       # Jest setup for testing
├── backend/                # Node.js Express server
│   ├── server.js           # Backend entry point (e.g., for contact form API)
│   └── package.json        # Backend dependencies
├── package.json            # Frontend dependencies and project scripts
├── package-lock.json       # Records exact dependency versions
└── README.md               # Project README file
```

## 📸 Screenshots
![About](public/screenshots/about.png)
![Technical Arsenal](public/screenshots/skills.png)
![Education](public/screenshots/education.png)
![Professional Certifications](public/screenshots/certificate.png)
![Projects](public/screenshots/projects.png)
![Let's Connect](public/screenshots/Contact.png)

## Contact

👤 Kandhal Shakil
🌐 Portfolio: [Portfolio Website](https://shakil-kandhal-portfolio.vercel.app/) 
💼 LinkedIn: [Linkedin](www.linkedin.com/in/kandhal-shakil-5311302b6)
📧 Email: [Gmail](kandhalshakil@gmail.com)

## License

Distributed under the MIT License. See `LICENSE` for more information.