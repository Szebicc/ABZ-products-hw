import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router"

import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/ui/theme-provider.tsx"
import DronePage from "./pages/DronePage.tsx"
import ErrorPage from "./pages/ErrorPage.tsx"

const router = createBrowserRouter([
  {
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />,
},
{
  path: "/drones/:id",
  element: <DronePage />,
}
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)
