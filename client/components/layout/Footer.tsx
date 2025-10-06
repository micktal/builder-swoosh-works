import { Link } from "react-router-dom";
import { Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0E1E2B] text-white mt-16">
      <div className="container-padded py-16 grid gap-10 md:grid-cols-3 text-center md:text-left">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2F44c8eb4ad92449dfa7ec72baf68f9623?format=webp&width=800"
              alt="Logo FPSG Digital Learning"
              className="h-12 w-auto brightness-0 invert opacity-90 transition hover:opacity-100"
            />
            <div>
              <div className="font-heading font-bold text-white">FPSG Digital Learning</div>
              <div className="text-sm text-white/70">Groupe FIDUCIAL</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/80 max-w-sm">
            FPSG Digital Learning – Une autre vision de la formation. Des solutions digitales pour renforcer la culture sécurité et le leadership humain.
          </p>
          <div className="mt-4 flex gap-3 justify-center md:justify-start">
            <a href="#" aria-label="LinkedIn" className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/20 hover:bg-white/10 transition">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" aria-label="YouTube" className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/20 hover:bg-white/10 transition">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm text-white/90">
            <li><Link className="hover:text-primary transition" to="/">Accueil</Link></li>
            <li><Link className="hover:text-primary transition" to="/notre-approche">Notre approche</Link></li>
            <li><Link className="hover:text-primary transition" to="/nos-formations">Nos formations</Link></li>
            <li><Link className="hover:text-primary transition" to="/demonstrations">Démonstrations</Link></li>
            <li><Link className="hover:text-primary transition" to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>41 rue du Capitaine Guynemer, 69002 Lyon</li>
            <li>+33 (0)4 72 57 20 00</li>
            <li>contact@fpsg.fr</li>
          </ul>
          <div className="mt-4">
            <Link to="/contact" className="btn-cta">Demander une démo</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-padded py-4 text-center text-[14px] text-[#DCE1E5]">
          © 2025 FIDUCIAL FPSG – Tous droits réservés | <a href="#" className="hover:text-primary">Mentions légales</a> | <a href="#" className="hover:text-primary">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  );
}
