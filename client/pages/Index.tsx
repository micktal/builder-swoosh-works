import { ArrowRight, CheckCircle2, Shield, Sparkles, TrendingUp } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";

const why = [
  {
    title: "Flexible",
    desc: "Formats courts, accessibles partout, adaptés à vos rythmes et métiers.",
    icon: Sparkles,
  },
  {
    title: "Impactant",
    desc: "Mesurez les résultats: +40% de rétention, transferts concrets au poste.",
    icon: TrendingUp,
  },
  {
    title: "Conforme",
    desc: "Aligné aux exigences sécurité/sûreté et à la culture prévention du groupe.",
    icon: Shield,
  },
];

const steps = [
  { title: "Cadrage", desc: "Objectifs, publics, contexte métier" },
  { title: "Conception", desc: "Parcours modulaires, pédagogie Bloom" },
  { title: "Déploiement", desc: "Lancement rapide, accompagnement de proximité" },
  { title: "Mesure", desc: "Tableau de bord, indicateurs d'impact" },
];

const modules = [
  {
    title: "Compétences managériales",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Sécurité & sûreté",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Accueil & posture professionnelle",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Gestion de crise & communication",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Index() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />
        <div className="container-padded py-16 md:py-24">
          <Reveal>
            <span className="badge-soft">Former. Innover. Digitaliser.</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 text-5xl md:text-6xl font-heading font-extrabold leading-tight">
              FPSG Digital Learning
              <span className="block text-foreground/80 text-[1.6rem] md:text-3xl font-semibold mt-3">
                Une approche simple, mesurable et centrée sur l'humain.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Développez les compétences comportementales et managériales, renforcez la sécurité/sûreté et la culture prévention. Des modules modernes, animés et efficaces.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn-cta">Demander une démo</Link>
              <Link to="/nos-formations" className="rounded-[10px] px-6 py-3 border text-foreground hover:bg-accent transition inline-flex items-center gap-2">
                Découvrir nos formations <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pourquoi FPSG */}
      <section className="container-padded py-12 md:py-20">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Pourquoi FPSG ?</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {why.map((w, i) => (
            <Reveal key={w.title} delay={i * 80}>
              <div className="card p-6">
                <w.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-xl font-heading font-semibold">{w.title}</h3>
                <p className="mt-2 text-muted-foreground">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Processus en 4 étapes */}
      <section className="bg-accent/50">
        <div className="container-padded py-12 md:py-20">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Notre approche en 4 étapes</h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="card p-6 h-full">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 text-primary grid place-items-center font-heading font-bold">
                      {i + 1}
                    </div>
                    <h3 className="text-lg font-heading font-semibold">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/notre-approche" className="inline-flex items-center text-primary font-semibold">En savoir plus sur l'approche <ArrowRight className="ml-1 h-4 w-4"/></Link>
          </div>
        </div>
      </section>

      {/* Formations */}
      <section className="container-padded py-12 md:py-20">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Exemples de formations</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {modules.map((m, i) => (
            <Reveal key={m.title} delay={i * 80}>
              <article className="card overflow-hidden">
                <img src={m.img} alt="" className="h-44 w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-heading font-semibold">{m.title}</h3>
                  <Link to="/nos-formations" className="mt-3 inline-flex items-center text-primary font-semibold">Voir le programme <ArrowRight className="ml-1 h-4 w-4"/></Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="bg-accent/50">
        <div className="container-padded py-12 md:py-20">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Des résultats mesurables</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "96%", v: "de satisfaction moyenne" },
              { k: "+40%", v: "de rétention des acquis" },
              { k: "2x", v: "plus d'engagement des apprenants" },
              { k: "3 semaines", v: "pour lancer un parcours" },
            ].map((stat, i) => (
              <Reveal key={stat.k} delay={i * 80}>
                <div className="card p-6 text-center">
                  <div className="text-4xl font-heading font-extrabold text-primary">{stat.k}</div>
                  <div className="mt-2 text-muted-foreground">{stat.v}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="container-padded py-12 md:py-20">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Ils nous font confiance</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[1,2,3].map((i) => (
            <Reveal key={i} delay={i * 80}>
              <figure className="card p-6 h-full">
                <div className="flex items-center gap-3">
                  <img className="h-10 w-10 rounded-full object-cover" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="" />
                  <div>
                    <figcaption className="font-heading font-semibold">Responsable formation</figcaption>
                    <div className="text-sm text-muted-foreground">Secteur services</div>
                  </div>
                </div>
                <blockquote className="mt-4 text-[1.05rem] leading-relaxed">
                  "Des contenus concrets et engageants. Nos équipes appliquent immédiatement les bonnes pratiques, avec un vrai impact terrain."
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-padded py-14 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold">La sécurité, partout, tout le temps.</h3>
              <p className="mt-2 text-primary-foreground/80">Passez à l'action dès maintenant avec une démonstration personnalisée.</p>
            </div>
            <Link to="/contact" className="btn-cta bg-white text-primary hover:bg-white/90">Demander une démo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
