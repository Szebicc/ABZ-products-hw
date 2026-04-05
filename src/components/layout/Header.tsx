import { Button } from "@/components/ui/button"
import { Link, useLocation } from "react-router"
import logo from "@/assets/logo.png"

export function Header() {
  const location = useLocation()
  const isHome = location.pathname === "/"
  return (
    <header className="sticky top-0 z-10 border-b bg-background text-foreground">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <header className="boarder-b flex items-center justify-between px-6 py-6">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </header>
          <span className="text-lg font-semibold">ABZ Drone Explorer</span>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/" className="text-primary hover:underline">
            <Button variant="outline" size="sm" hidden={isHome}>
              All Drones
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
