import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";
import { BadgeCheck, BarChart3, GraduationCap, Handshake, HeartPulse, Languages, Megaphone, PlayCircle, Rocket, ShieldCheck, Users2, AlertTriangle } from "lucide-react";

export default function Formations() {
  const heroImg = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop";

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0E1E2B] text-white section-y">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Collaborateurs en formation digitale" className="h-full w-full object-cover opacity-25 blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E1E2B]/70 via-[#0E1E2B]/60 to-[#0E1E2B]" />
        </div>
        <div className="container-padded py-16 md:py-24">
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight">Nos formations e-learning, prêtes à déployer.</h1>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-3 max-w-3xl text-white/80">Des modules interactifs et mesurables pour développer les compétences humaines au cœur de la sécurité.</p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn-cta bg-[#006B46] hover:bg-[#006B46]/90">Demander une démo gratuite</Link>
              <Link to="/contact" className="btn-outline-green border-[#006B46] text-[#006B46] hover:bg-[#006B46]/10 bg-white">Contactez-nous</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Catégories */}
      <section className="bg-[#F9FAFB]" id="categories">
        <div className="container-padded py-12 md:py-20">
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
          <div className="mt-8">
            <a href="#focus" className="btn-cta">Découvrir les modules</a>
          </div>
        </div>
      </section>

      {/* Focus formations phares */}
      <section className="bg-white" id="focus">
        <div className="container-padded py-12 md:py-20">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Des modules concrets, validés par nos experts</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              { t: "Gérer un visiteur mécontent", d: "Simulation interactive de communication assertive.", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop" },
              { t: "Réagir face à une situation suspecte", d: "Scénario immersif de sûreté.", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop" },
              { t: "Prévenir les RPS au quotidien", d: "Identifier les signaux faibles et agir tôt.", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop" },
              { t: "Manager une équipe en tension", d: "Posture juste et communication adaptée.", img: "https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1200&auto=format&fit=crop" },
              { t: "Santé au travail : mieux gérer le stress", d: "Techniques de régulation et de bien-être.", img: "https://images.unsplash.com/photo-1518085250887-2f903c200fee?q=80&w=1200&auto=format&fit=crop" },
              { t: "Culture sécurité : adopter les bons réflexes", d: "Sensibilisation collective et partagée.", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop" },
            ].map((m, i) => (
              <Reveal key={m.t} delay={i * 80}>
                <article className="card overflow-hidden">
                  <img src={m.img} alt="" className="h-44 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="text-lg font-heading font-semibold">{m.t}</h3>
                    <p className="mt-1 text-muted-foreground">{m.d}</p>
                    <div className="mt-4">
                      <Link to="/demonstrations" className="btn-cta">Voir la démo</Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expérience e-learning engageante */}
      <section className="bg-[#F9FAFB] section-y">
        <div className="container-padded py-12 md:py-20">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Une pédagogie active et immersive</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-3 max-w-3xl text-muted-foreground">Chaque formation FPSG associe scénarisation, interactivité et ancrage mémoriel pour maximiser l’apprentissage.</p>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { t: "Scénarios interactifs", d: "Cas concrets et mises en situation réelles.", icon: PlayCircle },
              { t: "Feedback immédiat", d: "Évaluations int��grées et retours dynamiques.", icon: BadgeCheck },
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
        <div className="container-padded py-12 md:py-20">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Pourquoi digitaliser vos formations ?</h2>
          </Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              { t: "Rapidité de déploiement", d: "Mise en ligne en moins de 10 jours.", icon: Rocket },
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
          <div className="mt-8">
            <Link to="/contact" className="btn-cta">Obtenir une présentation complète</Link>
          </div>
        </div>
      </section>

      {/* Mini-démos */}
      <section className="bg-[#F9FAFB] section-y">
        <div className="container-padded py-12 md:py-20">
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
                  <div className="aspect-[16/10] bg-black/5">
                    <iframe src={m.src} title={m.t} className="h-full w-full" frameBorder="0" />
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
        <div className="container-padded py-12 md:py-20">
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

      {/* CTA final */}
      <section className="bg-[#0E1E2B] text-white">
        <div className="container-padded py-14 md:py-16 text-center">
          <Reveal>
            <h3 className="text-2xl md:text-3xl font-heading font-bold">Prêt à transformer vos formations ?</h3>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-2 text-white/80">Contactez nos experts pour une démonstration personnalisée.</p>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-6 cta-group">
              <Link to="/contact" className="btn-cta bg-[#006B46] hover:bg-[#006B46]/90">Demander une démo gratuite</Link>
              <Link to="/demonstrations" className="btn-outline-green border-[#006B46] text-[#006B46] hover:bg-[#006B46]/10 bg-white">Voir nos références</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
