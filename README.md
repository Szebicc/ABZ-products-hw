# ABZ Drone Lister

A modern, responsive web application for browsing and exploring ABZ Innovation's heavy-duty drone lineup. Built as part of an interview assignment with a focus on clean UI, scalability, and user experience.

![App Screenshot](/abz-drone-lister/public/abz-md-picture.png)

## 🚀 Features

## 🚀 Features

- **Interactive Drone Catalog**  
  Browse drones by category with a clean, card-based layout and quick access to key specs.

- **Dynamic Filtering**  
  Instantly filter drones by series using a multi-select component.

- **Detailed Product Pages**  
  View full specifications, accessories, and use cases for each drone.

- **Smooth UX**  
  Expandable cards, scroll behavior, and responsive layout for seamless navigation.

## 🛠 Tech Stack

- **React + TypeScript** – Type-safe, scalable frontend architecture  
- **Vite** – Fast development and optimized builds  
- **Tailwind CSS** – Utility-first styling  
- **shadcn/ui** – Accessible, reusable UI components  
- **React Router** – Client-side navigation  

## 📦 Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Szebicc/ABZ-products-hw.git
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

