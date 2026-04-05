import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      
      <h1 className="text-6xl font-bold">404</h1>

      <p className="text-muted-foreground mt-2">
        Page not found
      </p>

      <div className="mt-6">
        <Link to="/">
          <Button>
            Go back home
          </Button>
        </Link>
      </div>

    </div>
  );
}