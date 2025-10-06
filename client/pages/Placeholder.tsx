import { Link } from "react-router-dom";

export default function Placeholder({ title, description }: { title: string; description?: string }) {
  return (
    <main>
      <section className="container-padded py-20">
        <div className="max-w-3xl">
          <span className="badge-soft">Bientôt disponible</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-heading font-bold">{title}</h1>
          {description ? (
            <p className="mt-4 text-lg text-muted-foreground">{description}</p>
          ) : null}
          <div className="mt-8 flex gap-3">
            <Link className="btn-cta" to="/contact">Demander une démo</Link>
            <Link className="rounded-[10px] px-6 py-3 border text-foreground hover:bg-accent transition" to="/">Retour à l'accueil</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
