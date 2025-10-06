import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container-padded py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-[10px] bg-primary/10 grid place-items-center">
              <span className="text-primary font-heading text-lg">F</span>
            </div>
            <div>
              <div className="font-heading font-bold">FPSG Digital Learning</div>
              <div className="text-sm text-muted-foreground">Groupe FIDUCIAL</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Former. Innover. Digitaliser. Une approche simple, mesurable et centrée sur l'humain.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Liens</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:underline" to="/notre-approche">Notre approche</Link></li>
            <li><Link className="hover:underline" to="/nos-formations">Nos formations</Link></li>
            <li><Link className="hover:underline" to="/demonstrations">Démonstrations</Link></li>
            <li><Link className="hover:underline" to="/contact">Contact / Démo</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>FIDUCIAL - FPSG Digital Learning</li>
            <li>Email: contact@fpsg-learning.fr</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} FPSG Digital Learning — Tous droits réservés.
      </div>
    </footer>
  );
}
