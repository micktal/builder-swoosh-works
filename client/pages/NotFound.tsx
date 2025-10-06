import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen grid place-items-center bg-accent/50">
      <div className="text-center card p-8">
        <h1 className="text-5xl font-heading font-extrabold mb-3 text-primary">404</h1>
        <p className="text-lg text-muted-foreground mb-6">Page introuvable</p>
        <a href="/" className="btn-cta">Retour à l'accueil</a>
      </div>
    </div>
  );
};

export default NotFound;
