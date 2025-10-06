import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { to: "/", label: "Accueil" },
  { to: "/notre-approche", label: "Notre approche" },
  { to: "/nos-formations", label: "Nos formations" },
  { to: "/demonstrations", label: "Démonstrations" },
  { to: "/contact", label: "Contact" },
];

const LOGO_URL = "https://cdn.builder.io/api/v1/image/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2F44c8eb4ad92449dfa7ec72baf68f9623?format=webp&width=800";

export default function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur shadow-sm animate-fade-down">
      <div className="container-padded flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={LOGO_URL}
            alt="Logo FPSG Digital Learning"
            className="h-11 w-auto transition-transform group-hover:scale-105"
          />
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
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/contact" className="btn-cta">Demander une démo</Link>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-[8px] border px-3 py-2"
          aria-expanded={open}
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container-padded py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 ${isActive || location.pathname === item.to ? "text-primary" : "text-foreground"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-cta w-full text-center">Demander une démo</Link>
          </div>
        </div>
      )}
    </header>
  );
}
