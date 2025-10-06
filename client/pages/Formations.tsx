import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { BadgeCheck, BarChart3, GraduationCap, Handshake, HeartPulse, Languages, Megaphone, PlayCircle, Rocket, ShieldCheck, Users2, AlertTriangle } from "lucide-react";

export default function Formations() {
  const heroImg = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop";
  const allModules = [
    { t: "Gérer un visiteur mécontent", d: "Communication assertive.", domain: "Communication", level: "Essentiel", duration: 20, langs: ["FR", "EN"] },
    { t: "Réagir face à une situation suspecte", d: "Sûreté et vigilance.", domain: "Sûreté", level: "Intermédiaire", duration: 25, langs: ["FR"] },
    { t: "Prévenir les RPS au quotidien", d: "Signaux faibles et action.", domain: "RPS", level: "Essentiel", duration: 18, langs: ["FR", "EN"] },
    { t: "Manager une équipe en tension", d: "Posture managériale.", domain: "Management", level: "Intermédiaire", duration: 30, langs: ["FR"] },
    { t: "Santé au travail : mieux gérer le stress", d: "Régulation & bien‑être.", domain: "Bien‑être", level: "Essentiel", duration: 15, langs: ["FR", "EN", "ES"] },
    { t: "Culture sécurité : adopter les bons réflexes", d: "Sensibilisation.", domain: "Culture sécurité", level: "Essentiel", duration: 22, langs: ["FR"] },
  ];
  const [search, setSearch] = useState("");
  const [domain, setDomain] = useState("");
  const [level, setLevel] = useState("");
  const [duration, setDuration] = useState("");
  const filtered = useMemo(() => {
    return allModules.filter((m) => {
      const s = search.toLowerCase();
      const passSearch = !s || m.t.toLowerCase().includes(s) || m.d.toLowerCase().includes(s);
      const passDomain = !domain || m.domain === domain;
      const passLevel = !level || m.level === level;
      const passDuration = !duration || m.duration <= parseInt(duration, 10);
      return passSearch && passDomain && passLevel && passDuration;
    });
  }, [search, domain, level, duration]);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0E1E2B] text-white section-y">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Collaborateurs en formation digitale" className="h-full w-full object-cover opacity-25 blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E1E2B]/70 via-[#0E1E2B]/60 to-[#0E1E2B]" />
        </div>
        <div className="container-padded py-10 md:py-16">
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight">Nos formations e-learning, prêtes à déployer.</h1>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-3 max-w-3xl text-white/80">Des modules interactifs et mesurables pour développer les compétences humaines au cœur de la sécurité.</p>
          </Reveal>
        </div>
      </section>

      {/* Catégories */}
      <section className="bg-[#F9FAFB] section-y" id="categories">
        <div className="container-padded py-8 md:py-12">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">6 univers pour renforcer vos équipes</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-3 max-w-3xl text-muted-foreground">Nos modules sont conçus pour être concrets, adaptables et immédiatement utiles.</p>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { t: "Comportement & Management", d: "Leadership, communication, gestion d’équipe.", icon: Users2 },
              { t: "Sécurité / Sûreté", d: "Réflexes, vigilance, comportement en situation.", icon: ShieldCheck },
              { t: "Culture Prévention", d: "Responsabilité collective et anticipation des risques.", icon: AlertTriangle },
              { t: "Accueil & Posture professionnelle", d: "Image, attitude et relation client.", icon: Handshake },
              { t: "Gestion de crise / Communication", d: "Réagir efficacement sous pression.", icon: Megaphone },
              { t: "Santé & Bien-être au travail", d: "Prévention des RPS, équilibre et résilience.", icon: HeartPulse },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 80}>
                <div className="card p-6 h-full">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary grid place-items-center">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-heading font-semibold">{c.t}</h3>
                  <p className="mt-1 text-muted-foreground">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue filtrable */}
      <section className="bg-white section-y" id="focus">
        <div className="container-padded py-8 md:py-12">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Catalogue des modules</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-2 text-muted-foreground">Recherchez et filtrez par domaine, niveau et durée.</p>
          </Reveal>
          <div className="mt-6 grid gap-3 md:grid-cols-4">
            <input type="search" placeholder="Rechercher un module…" className="rounded-[8px] border px-3 py-2 md:col-span-2" value={search} onChange={(e) => setSearch(e.target.value)} />
            <select className="rounded-[8px] border px-3 py-2" value={domain} onChange={(e) => setDomain(e.target.value)}>
              <option value="">Tous domaines</option>
              <option>Communication</option>
              <option>Sûreté</option>
              <option>RPS</option>
              <option>Management</option>
              <option>Bien‑être</option>
              <option>Culture sécurité</option>
            </select>
            <select className="rounded-[8px] border px-3 py-2" value={level} onChange={(e) => setLevel(e.target.value)}>
              <option value="">Tous niveaux</option>
              <option>Essentiel</option>
              <option>Intermédiaire</option>
              <option>Avancé</option>
            </select>
            <select className="rounded-[8px] border px-3 py-2" value={duration} onChange={(e) => setDuration(e.target.value)}>
              <option value="">Toutes durées</option>
              <option value="15">≤ 15 min</option>
              <option value="30">≤ 30 min</option>
              <option value="60">≤ 60 min</option>
            </select>
          </div>
          <div className="mt-6 text-sm text-muted-foreground">{filtered.length} résultat(s)</div>
          <div className="mt-4 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((m, i) => (
              <Reveal key={m.t} delay={i * 60}>
                <article className="card p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-heading font-semibold">{m.t}</h3>
                      <p className="mt-1 text-muted-foreground">{m.d}</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{m.domain}</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                    <span className="px-2 py-0.5 rounded bg-muted">{m.level}</span>
                    <span className="px-2 py-0.5 rounded bg-muted">{m.duration} min</span>
                    <span className="px-2 py-0.5 rounded bg-muted">{m.langs.join(", ")}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expérience e-learning engageante */}
      <section className="bg-[#F9FAFB] section-y">
        <div className="container-padded py-8 md:py-12">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Une pédagogie active et immersive</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-3 max-w-3xl text-muted-foreground">Chaque formation FPSG associe scénarisation, interactivité et ancrage mémoriel pour maximiser l’apprentissage.</p>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { t: "Scénarios interactifs", d: "Cas concrets et mises en situation réelles.", icon: PlayCircle },
              { t: "Feedback immédiat", d: "Évaluations intégrées et retours dynamiques.", icon: BadgeCheck },
              { t: "Progression guidée", d: "Parcours structuré selon Bloom.", icon: GraduationCap },
            ].map((f, i) => (
              <Reveal key={f.t} delay={i * 80}>
                <div className="card p-6 h-full">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary grid place-items-center">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-heading font-semibold">{f.t}</h3>
                  <p className="mt-1 text-muted-foreground">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages entreprise */}
      <section className="bg-white section-y">
        <div className="container-padded py-8 md:py-12">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Pourquoi digitaliser vos formations ?</h2>
          </Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              { t: "Rapidité de déploiement", d: "Mise en ligne en moins de 30 jours.", icon: Rocket },
              { t: "Mesure du ROI", d: "Suivi en temps réel et indicateurs d’impact.", icon: BarChart3 },
              { t: "Scalabilité multilingue", d: "Déploiement international, plusieurs langues.", icon: Languages },
            ].map((a, i) => (
              <Reveal key={a.t} delay={i * 80}>
                <div className={`card p-6 h-full`}>
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary grid place-items-center">
                    <a.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-heading font-semibold">{a.t}</h3>
                  <p className="mt-1 text-muted-foreground">{a.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mini-démos */}
      <section className="bg-[#F9FAFB] section-y">
        <div className="container-padded py-8 md:py-12">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Essayez nos modules en ligne</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-3 max-w-3xl text-muted-foreground">Découvrez la qualité de nos contenus à travers des extraits interactifs.</p>
          </Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {[
              { t: "Réagir face à une situation suspecte", src: "https://modules.fpsg.fr/module1/index.html" },
              { t: "Prévenir les RPS au quotidien", src: "https://modules.fpsg.fr/module2/index.html" },
            ].map((m, i) => (
              <Reveal key={m.t} delay={i * 80}>
                <div className="card overflow-hidden">
                  <div className="bg-black/5">
                    <div className="text-center text-xs text-muted-foreground pt-4">Exercice interactif</div>
                    <iframe src={m.src} title={m.t} className="embed-frame" frameBorder="0" />
                  </div>
                  <div className="p-4 text-sm text-muted-foreground">Extrait de démonstration – version e-learning FPSG.</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="bg-white section-y">
        <div className="container-padded py-8 md:py-12">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Ils nous font confiance</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {["Les modules FPSG sont devenus un pilier de notre culture sécurité.", "Une approche claire, moderne et efficace.", "La qualité et la réactivité des équipes FPSG font la différence."].map((q, i) => (
              <Reveal key={q} delay={i * 80}>
                <figure className="card p-6 h-full">
                  <div className="flex items-center gap-3">
                    <img className="h-10 w-10 rounded-full object-cover" src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Portrait client" />
                    <div>
                      <figcaption className="font-heading font-semibold">Responsable formation</figcaption>
                      <div className="text-sm text-muted-foreground">Entreprise multi-sites</div>
                    </div>
                  </div>
                  <blockquote className="mt-4 italic text-[1.05rem] leading-relaxed">“{q}”</blockquote>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
