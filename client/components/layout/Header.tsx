import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Accueil" },
  { to: "/notre-approche", label: "Notre approche" },
  { to: "/nos-formations", label: "Nos formations" },
  { to: "/demonstrations", label: "Démonstrations" },
];

export default function Header() {
  const location = useLocation();
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="container-padded flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-[10px] bg-primary/10 grid place-items-center">
            <span className="text-primary font-heading text-lg">F</span>
          </div>
          <div className="leading-tight">
            <div className="font-heading font-bold text-lg">FPSG Digital Learning</div>
            <div className="text-sm text-muted-foreground -mt-1">Groupe FIDUCIAL</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive || location.pathname === item.to
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild className="rounded-[10px] font-heading">
            <Link to="/contact">Demander une démo</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
