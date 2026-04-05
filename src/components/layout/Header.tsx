import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import logo from "@/assets/logo.png"

export function Header() {
  return (
    <header className="border-b text-foreground">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <header className="flex items-center justify-between px-6 py-6 boarder-b">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </header>
          <span className="text-lg font-semibold">ABZ Drone Explorer</span>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/" className="text-primary hover:underline">
            <Button variant="outline" size="sm">
              All Drones
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
