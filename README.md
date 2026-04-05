# ABZ Drone Lister

A modern, responsive web application for browsing and exploring ABZ Innovation's heavy-duty drone lineup. Built as part of an interview homework assignment to demonstrate full-stack development skills with React and TypeScript.

## 🚀 Features

- **Interactive Drone Catalog**: Browse drones by series (Spraying, Spreading, Multifunctional, Cleaning) with detailed specifications.
- **Dynamic Filtering**: Filter drones by series using a multi-selection component for easy discovery.
- **Detailed Drone Pages**: Click "Read more" on any drone card to view full specs, images, and key features.
- **Smooth Navigation**: Scroll-to functionality and expandable drone cards for better UX.

## 🛠 Tech Stack
- **Frontend**: React 18 with TypeScript for type safety and maintainability.
- **Build Tool**: Vite for fast development and optimized production builds.
- **Styling**: Tailwind CSS for utility-first styling, with shadcn/ui components for consistent UI elements.
- **Data Management**: Static JSON data with custom formatting utilities.
- **Routing**: React Router for client-side navigation.

## 📦 Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <your-repo-url>
   cd abz-drone-lister
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## 🎯 Usage

- **Home Page**: View the hero section and browse all drones. Use the filter dropdown to narrow by series.
- **Drone Details**: Click on a drone card to expand or navigate to the detail page for full specs.
- **Navigation**: Use the header links or scroll functionality for seamless exploration.

## 🔧 Key Decisions

- [![TypeScript](https://img.shields.io/badge/TypeScript-Strongly%20Typed-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)  
  Chosen for its strong typing to prevent runtime errors and improve code reliability.

- [![Vite](https://img.shields.io/badge/Vite-Fast%20Dev%20Server-purple?logo=vite&logoColor=white)](https://vitejs.dev/)  
  [![React](https://img.shields.io/badge/React-UI%20Library-61DAFB?logo=react&logoColor=black)](https://react.dev/)  
  Selected for fast hot-reloading during development and efficient bundling, aligning with modern web standards.

- [![shadcn/ui](https://img.shields.io/badge/shadcn/ui-Component%20Library-black)](https://ui.shadcn.com/)  
  Used for pre-built, accessible components to accelerate UI development while maintaining a cohesive design system.
- **Component Architecture**: Modular structure (e.g., separate components for cards, filters, hero) to promote reusability and easier testing.

## 🚀 Future Improvements

- **Search Functionality**: Add a search bar for querying drones by name, specs, or keywords using fuzzy matching.
- **Advanced Filtering**: Include range sliders for specs like flight time or capacity, and sorting options.
- **User Engagement**: Add comparison mode, favorites, and sharing features to increase interactivity.
- **Testing**: Integrate unit and integration tests with Vitest to ensure reliability.

