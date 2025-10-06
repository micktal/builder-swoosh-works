import { ArrowRight, BarChart3, BookOpenCheck, Languages, LineChart, Search, ShieldCheck, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function ProgressOnView({ value = 85 }: { value?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setW(value);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <div ref={ref} className="mt-6">
      <div className="h-3 w-full rounded-full bg-primary/15 overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-[width] duration-1000 ease-out"
          style={{ width: `${w}%` }}
        />
      </div>
      <div className="mt-2 text-sm text-muted-foreground">Taux de réussite moyen: <span className="font-semibold text-foreground">{value}%</span></div>
    </div>
  );
}

export default function Index() {
  const heroVideo = "https://videos.pexels.com/video-files/3044654/3044654-hd_1280_720_50fps.mp4";
  const heroPoster = "https://images.pexels.com/photos/7658369/pexels-photo-7658369.jpeg";

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0E1E2B] text-white section-y">
        <div className="absolute inset-0 -z-10">
          <video
            className="h-full w-full object-cover opacity-30"
            autoPlay
            muted
            loop
            playsInline
            poster={heroPoster}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E1E2B]/70 via-[#0E1E2B]/60 to-[#0E1E2B]" />
        </div>
        <div className="container-padded py-16 md:py-24">
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight">
              FPSG Digital Learning – La sécurité, partout, tout le temps.
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-lg md:text-xl text-white/80">Former. Innover. Digitaliser.</p>
          </Reveal>
        </div>
      </section>

      {/* Pourquoi choisir le digital learning FPSG ? */}
      <section className="container-padded section-y">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Pourquoi choisir le digital learning FPSG ?</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Flexible", desc: "Accessible 24h/24, 7j/7, sur tous supports.", icon: Sparkles },
            { title: "Impactant", desc: "Basé sur des situations réelles et interactives.", icon: ShieldCheck },
            { title: "Conforme", desc: "Des contenus validés et toujours à jour.", icon: LineChart },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="card p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary grid place-items-center">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-heading font-semibold">{c.title}</h3>
                <p className="mt-2 text-muted-foreground">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Notre méthode en 4 étapes simples */}
      <section className="bg-white section-y">
        <div className="container-padded py-12 md:py-20">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Notre méthode en 4 étapes simples</h2>
          </Reveal>
          <div className="relative mt-12">
            <div className="hidden md:block absolute left-0 right-0 top-5 h-0.5 bg-primary/20" />
            <div className="grid gap-10 md:grid-cols-4">
              {[
                { t: "Analyse du besoin", d: "Identifier les compétences à renforcer.", icon: Search },
                { t: "Conception pédagogique (Bloom)", d: "Des parcours structurés et actifs.", icon: BookOpenCheck },
                { t: "Diffusion multilingue", d: "Disponible partout, en plusieurs langues.", icon: Languages },
                { t: "Mesure du ROI", d: "Taux de réussite, progression et impact.", icon: BarChart3 },
              ].map((s, i) => (
                <Reveal key={s.t} delay={i * 100}>
                  <div className="flex md:block items-start gap-4">
                    <div className="relative">
                      <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary text-white grid place-items-center shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
                        <s.icon className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      {i < 3 && (
                        <div className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 w-16 h-0.5 bg-primary/30" />
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

      {/* Exemples de formations */}
      <section className="bg-[#F9FAFB] section-y">
        <div className="container-padded py-12 md:py-20">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Des modules concrets, ancrés dans le réel.</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              { t: "Gérer un visiteur mécontent", d: "Simulation interactive pour améliorer la communication assertive.", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop" },
              { t: "Réagir face à une situation suspecte", d: "Scénario immersif de sûreté.", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop" },
              { t: "Prévenir les RPS au quotidien", d: "Identifier les signaux faibles, agir tôt.", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop" },
              { t: "Manager une équipe en tension", d: "Posture managériale et communication adaptée.", img: "https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1200&auto=format&fit=crop" },
            ].map((m, i) => (
              <Reveal key={m.t} delay={i * 100}>
                <article className="card overflow-hidden">
                  <img src={m.img} alt="" className="h-48 w-full object-cover rounded-[8px]" />
                  <div className="p-5">
                    <h3 className="text-lg font-heading font-semibold">{m.t}</h3>
                    <p className="mt-1 text-muted-foreground">{m.d}</p>
                    <div className="mt-4">
                      <Link to="/demonstrations" className="btn-cta">Voir une démo</Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Des résultats mesurables */}
      <section className="bg-white section-y">
        <div className="container-padded py-12 md:py-20">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Des résultats mesurables à chaque étape.</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "96%", v: "satisfaction apprenants" },
              { k: "+40%", v: "de rétention après 3 mois" },
              { k: "-30%", v: "de coûts logistiques" },
              { k: "3 à 10 jours", v: "pour le déploiement" },
            ].map((stat, i) => (
              <Reveal key={stat.k} delay={i * 100}>
                <div className="card p-6 text-center">
                  <div className="text-4xl font-heading font-extrabold text-primary">{stat.k}</div>
                  <div className="mt-2 text-muted-foreground">{stat.v}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <ProgressOnView value={85} />
        </div>
      </section>

      {/* Témoignages */}
      <section className="bg-[#F9FAFB] section-y">
        <div className="container-padded py-12 md:py-20">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Ils ont choisi la pédagogie FPSG</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { n: "Responsable HSE", f: "Secteur industriel — Axiom Corp.", t: "Les modules FPSG ont transformé notre culture sécurité." },
              { n: "DRH", f: "Services — Novelia.", t: "Simple, efficace, mesurable. L'adoption a été immédiate." },
              { n: "Directeur d'agence", f: "Retail — Orbis.", t: "Des scénarios concrets et une vraie montée en compétences." },
            ].map((x, i) => (
              <Reveal key={x.n} delay={i * 100}>
                <figure className="card p-6 h-full">
                  <div className="flex items-center gap-3">
                    <img className="h-10 w-10 rounded-full object-cover" src={`https://i.pravatar.cc/100?img=${i + 12}`} alt="" />
                    <div>
                      <figcaption className="font-heading font-semibold">{x.n}</figcaption>
                      <div className="text-sm text-muted-foreground">{x.f}</div>
                    </div>
                  </div>
                  <blockquote className="mt-4 italic text-[1.05rem] leading-relaxed">“{x.t}”</blockquote>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="bg-[#0E1E2B] text-white section-y">
        <div className="container-padded py-14 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold">Digitalisez vos formations comportementales, simplement.</h3>
              <p className="mt-2 text-white/80">Contactez nos experts et découvrez comment FPSG modernise la prévention.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn-cta bg-[#006B46] hover:bg-[#006B46]/90">Demander une démo</Link>
              <Link to="/contact" className="btn-outline-green border-[#006B46] text-[#006B46] hover:bg-[#006B46]/10 bg-white">Nous contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
