import Reveal from "@/components/Reveal";
import { ProgressOnView, CountUpOnView } from "@/components/metrics";
import { Link } from "react-router-dom";
import { BarChart3, BookOpenCheck, CheckCircle2, FileDown, Languages, LineChart, Search } from "lucide-react";

export default function Approche() {
  const heroVideo = "https://cdn.coverr.co/videos/coverr-working-in-the-office-7935/1080p.mp4";
  const heroPoster = "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop";
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0E1E2B] text-white section-y">
        <div className="absolute inset-0 -z-10">
          <video className="h-full w-full object-cover opacity-25" autoPlay muted loop playsInline poster={heroPoster}>
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E1E2B]/70 via-[#0E1E2B]/60 to-[#0E1E2B]" />
        </div>
        <div className="container-padded py-16 md:py-24">
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight">Une approche simple, mesurable et centrée sur l’humain.</h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-lg md:text-xl text-white/80">De la salle au digital, FPSG transforme la formation en expérience apprenante.</p>
          </Reveal>
        </div>
      </section>

      {/* Méthode en 4 étapes */}
      <section className="bg-white section-y">
        <div className="container-padded section-y">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Notre méthode en 4 étapes simples</h2>
          </Reveal>
          <div className="relative mt-12">
            <div className="hidden md:block absolute left-0 right-0 top-5 h-0.5 bg-[#E6ECEF]" />
            <div className="grid gap-10 md:grid-cols-4">
              {[
                { t: "Analyse du besoin", d: "Identifier les compétences à renforcer.", icon: Search },
                { t: "Conception pédagogique (Bloom)", d: "Structurer du savoir à la maîtrise.", icon: BookOpenCheck },
                { t: "Diffusion multilingue & déploiement", d: "Tous supports, plusieurs langues.", icon: Languages },
                { t: "Suivi & mesure du ROI", d: "Complétion, réussite, export.", icon: BarChart3 },
              ].map((s, i) => (
                <Reveal key={s.t} delay={i * 100}>
                  <div className="flex md:block items-start gap-4">
                    <div className="relative">
                      <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#006B46] text-white grid place-items-center shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
                        <s.icon className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      {i < 3 && (
                        <div className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 w-16 h-0.5 bg-[#E6ECEF]" />
                      )}
                    </div>
                    <div className="md:mt-4">
                      <h3 className="font-heading font-semibold text-lg">{s.t}</h3>
                      <p className="text-muted-foreground mt-1">{s.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pédagogie Bloom */}
      <section className="bg-[#F9FAFB] section-y">
        <div className="container-padded section-y">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Une pédagogie active et mesurable – le modèle Bloom</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-3 max-w-3xl text-muted-foreground">Nos formations s’appuient sur la taxonomie de Bloom pour accompagner chaque apprenant dans un parcours progressif, du savoir à la compétence.</p>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-2 items-start">
            <div className="space-y-3">
              {[
                { t: "Mémoriser", d: "Acquérir les notions essentielles." },
                { t: "Comprendre", d: "Expliquer et interpréter." },
                { t: "Appliquer", d: "Mettre en pratique dans des cas concrets." },
                { t: "Analyser", d: "Relier, comparer, prioriser." },
                { t: "Évaluer", d: "Mesurer, argumenter, décider." },
                { t: "Créer", d: "Produire des solutions adaptées." },
              ].map((b, i) => (
                <Reveal key={b.t} delay={i * 80}>
                  <div className="rounded-[10px] bg-[#E5F4ED] p-4">
                    <div className="font-heading font-semibold">{b.t}</div>
                    <div className="text-sm text-foreground/70">{b.d}</div>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop"
                alt="Schéma de la pyramide de Bloom"
                className="rounded-[8px] shadow-none md:shadow-[0_12px_32px_rgba(0,0,0,0.1)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approche data-driven */}
      <section className="bg-white section-y">
        <div className="container-padded section-y">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Une approche data-driven pour mesurer la performance</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-3 max-w-3xl text-muted-foreground">Nos outils de suivi permettent d’évaluer l’efficacité des formations et le retour sur investissement (ROI) de vos parcours e-learning.</p>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { t: "Suivi en temps réel", d: "Tableaux de bord interactifs.", icon: LineChart },
              { t: "Indicateurs clés", d: "Réussite, temps, complétion.", icon: BarChart3 },
              { t: "Rapports exportables", d: "Données actionnables.", icon: FileDown },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 100}>
                <div className="card p-6 bg-[#F9FAFB]">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary grid place-items-center">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-heading font-semibold text-lg">{c.t}</h3>
                  <p className="mt-1 text-muted-foreground">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact humain mesurable */}
      <section className="bg-[#F9FAFB] section-y">
        <div className="container-padded section-y">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">L’humain au cœur du digital</h2>
          </Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-2 items-center">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop"
              alt="Formateur FPSG avec un groupe en formation"
              className="rounded-[10px] shadow-[0_12px_32px_rgba(0,0,0,0.1)]"
            />
            <div>
              <p className="text-muted-foreground">Chaque module est conçu et validé par nos formateurs experts, psychologues et ingénieurs pédagogiques. Le digital ne remplace pas l’humain : il le renforce.</p>
              <ul className="mt-4 space-y-2">
                {[
                  "Formations conçues avec nos experts terrain",
                  "Retours personnalisés et évaluations qualitatives",
                  "Accessibles aux personnes en situation de handicap",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres et preuves */}
      <section className="bg-white section-y">
        <div className="container-padded section-y">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Des résultats concrets</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card p-6 text-center">
              <CountUpOnView value={96} suffix=" %" className="text-4xl font-heading font-extrabold text-primary" />
              <div className="mt-2 text-muted-foreground">satisfaction apprenants</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-heading font-extrabold text-primary">
                +<CountUpOnView value={40} suffix=" %" />
              </div>
              <div className="mt-2 text-muted-foreground">de rétention après 3 mois</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-heading font-extrabold text-primary">
                -<CountUpOnView value={30} suffix=" %" />
              </div>
              <div className="mt-2 text-muted-foreground">de coûts de formation</div>
            </div>
            <div className="card p-6 text-center">
              <CountUpOnView value={3} suffix=" à 10 jours" className="text-4xl font-heading font-extrabold text-primary" />
              <div className="mt-2 text-muted-foreground">pour le déploiement</div>
            </div>
          </div>
          <ProgressOnView value={85} label="Taux de réussite moyen" />
        </div>
      </section>

      {/* CTA finale */}
      <section className="bg-[#0E1E2B] text-white">
        <div className="container-padded py-14 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold">Digitalisez vos formations avec FPSG.</h3>
              <p className="mt-2 text-white/80">Contactez nos experts pour une démonstration personnalisée.</p>
            </div>
            <div className="cta-group">
              <Link to="/nos-formations" className="btn-outline-green border-[#006B46] text-[#006B46] hover:bg-[#006B46]/10 bg-white">Voir les modules</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
