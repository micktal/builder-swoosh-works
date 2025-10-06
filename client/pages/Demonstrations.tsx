import Reveal from "@/components/Reveal";
import { ProgressOnView, CountUpOnView } from "@/components/metrics";
import { Link } from "react-router-dom";
import { BarChart3, Gauge, LineChart, ThumbsUp } from "lucide-react";
import InteractiveSimulationCard from "@/components/interactive/InteractiveSimulationCard";
import QuizSecurity from "@/components/interactive/QuizSecurity";
import ImageRiskZones from "@/components/interactive/ImageRiskZones";
import InteractiveVideoDecisions from "@/components/interactive/InteractiveVideoDecisions";

export default function Demonstrations() {
  const heroVideo = "https://videos.pexels.com/video-files/3044654/3044654-hd_1280_720_50fps.mp4";
  const heroPoster = "https://images.pexels.com/photos/7658369/pexels-photo-7658369.jpeg";
  const articulate = [
    { t: "Gérer un visiteur mécontent", d: "Simulation interactive de communication assertive.", src: "https://modules.fpsg.fr/visiteur/index.html" },
    { t: "Réagir face à une situation suspecte", d: "Scénario immersif de sûreté et vigilance comportementale.", src: "https://modules.fpsg.fr/surete/index.html" },
    { t: "Prévenir les RPS au quotidien", d: "Module bien-être et santé au travail.", src: "https://modules.fpsg.fr/rps/index.html" },
    { t: "Culture sécurité FPSG", d: "Formation de sensibilisation à la culture prévention.", src: "https://modules.fpsg.fr/securite/index.html" },
  ] as const;
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
        <div className="container-padded">
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight">Découvrez nos formations interactives.</h1>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-3 max-w-3xl text-white/80">Plongez dans l’univers FPSG Digital Learning à travers des extraits réels de nos modules e-learning.</p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-8 cta-group">
              <Link to="/contact" className="btn-cta bg-[#006B46] hover:bg-[#006B46]/90">Demander une démo complète</Link>
              <Link to="/contact" className="btn-outline-green border-[#006B46] text-[#006B46] hover:bg-[#006B46]/10 bg-white">Contactez nos équipes</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Exemples Articulate */}
      <section className="bg-[#F9FAFB] section-y" id="articulate">
        <div className="container-padded section-y">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Modules e-learning interactifs (Articulate)</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-3 max-w-3xl text-muted-foreground">Des extraits issus de nos formations digitales, conçues avec la pédagogie FPSG.</p>
          </Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <Reveal>
              <InteractiveSimulationCard
                title={articulate[0].t}
                description={articulate[0].d}
                src={articulate[0].src}
                badges={["Simulation", "Communication assertive"]}
                objectives={[
                  "Accueillir et désamorcer l’émotion avec une posture calme et professionnelle",
                  "Reformuler et valider les attentes du visiteur pour montrer l’écoute",
                  "Poser un cadre clair et des limites sans agressivité",
                  "Proposer une solution réaliste et orienter vers la bonne ressource",
                  "Conclure positivement en s’assurant de la satisfaction finale",
                ]}
              />
            </Reveal>
            {articulate.slice(1).map((m, i) => (
              <Reveal key={m.t} delay={(i + 1) * 80}>
                <article className="card overflow-hidden">
                  <div className="p-5">
                    <h3 className="text-lg font-heading font-semibold">{m.t}</h3>
                    <p className="mt-1 text-muted-foreground">{m.d}</p>
                  </div>
                  <div className="bg-black/5">
                    <iframe src={m.src} title={m.t} className="embed-frame" frameBorder={0} />
                  </div>
                  <div className="p-4 text-center text-sm text-muted-foreground">Extrait de démonstration – FPSG Digital Learning.</div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Exercices H5P */}
      <section className="bg-white section-y" id="h5p">
        <div className="container-padded section-y">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Testez vos réflexes avec nos exercices interactifs</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-3 max-w-3xl text-muted-foreground">Simulez les comportements de vos apprenants à travers ces mini-activités H5P intégrées directement sur la page.</p>
          </Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <Reveal>
              <QuizSecurity />
            </Reveal>
            <Reveal delay={80}>
              <ImageRiskZones />
            </Reveal>
            <Reveal delay={160}>
              <InteractiveVideoDecisions
                title="Vidéo interactive – Réagir au bon moment"
                description="Exercice: se mettre en sécurité et alerter au moment opportun."
                src="https://cdn.builder.io/o/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2Fd433eeb9d698411b9587a195480bbb40?alt=media&token=b5ea1efc-988d-4828-8529-6b8da4c89041&apiKey=d93d9a0ec7824aa1ac4d890a1f90a2ec"
                points={[
                  {
                    t: 18,
                    prompt: "Des individus pénètrent dans le magasin. Quelle première réaction ?",
                    choices: [
                      { id: "obs", label: "Observer discrètement et se mettre à couvert", correct: true, feedback: "Bonne réaction: priorisez votre sécurité et l'observation.", },
                      { id: "int", label: "Intervenir immédiatement", correct: false, feedback: "Risque élevé. Ne vous exposez pas.", rewind: 8 },
                      { id: "fil", label: "Filmer la scène", correct: false, feedback: "Non: votre sécurité prime. Cachez-vous d'abord.", rewind: 8 },
                    ],
                  },
                  {
                    t: 42,
                    prompt: "Cliquez sur la zone où vous vous cacheriez derrière l'étalage.",
                    hotspots: [
                      { id: "cache-etalage", x: 18, y: 58, w: 28, h: 30, label: "Derrière l'étalage", correct: true, feedback: "Exact: se mettre à couvert derrière l'étalage réduit l'exposition.", },
                      { id: "allee", x: 55, y: 45, w: 30, h: 35, label: "Allée ouverte", correct: false, feedback: "Non: l'allée est exposée. Préférez un couvert stable.", rewind: 10 },
                    ],
                  },
                  {
                    t: 65,
                    prompt: "Le calme relatif revient. Prochaine étape ?",
                    choices: [
                      { id: "alert", label: "Alerter selon la procédure et rester à couvert jusqu'au signal", correct: true, feedback: "Exact: alerte + sécurité personnelle.", },
                      { id: "sort", label: "Sortir immédiatement sans vérifier", correct: false, feedback: "Restez en sécurité jusqu'aux consignes.", rewind: 6 },
                      { id: "rien", label: "Ne rien faire", correct: false, feedback: "Procédure d'alerte nécessaire.", rewind: 6 },
                    ],
                  },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Résultats & progression */}
      <section className="bg-[#F9FAFB] section-y">
        <div className="container-padded section-y">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Un apprentissage engageant et mesurable</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-3 max-w-3xl text-muted-foreground">Chaque module FPSG intègre des feedbacks en temps réel et des données de progression pour mesurer l’impact de la formation.</p>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card p-6 text-center">
              <ThumbsUp className="mx-auto h-6 w-6 text-primary" />
              <CountUpOnView value={96} suffix=" %" className="mt-2 text-3xl font-heading font-extrabold text-primary" />
              <div className="mt-2 text-muted-foreground">satisfaction apprenants</div>
            </div>
            <div className="card p-6 text-center">
              <LineChart className="mx-auto h-6 w-6 text-primary" />
              <div className="mt-2 text-3xl font-heading font-extrabold text-primary">+<CountUpOnView value={40} suffix=" %" /></div>
              <div className="mt-2 text-muted-foreground">rétention post-formation</div>
            </div>
            <div className="card p-6 text-center">
              <Gauge className="mx-auto h-6 w-6 text-primary" />
              <div className="mt-2 text-3xl font-heading font-extrabold text-primary"><CountUpOnView value={85} suffix=" %" /></div>
              <div className="mt-2 text-muted-foreground">taux de réussite</div>
            </div>
            <div className="card p-6 text-center">
              <BarChart3 className="mx-auto h-6 w-6 text-primary" />
              <div className="mt-2 text-3xl font-heading font-extrabold text-primary"><CountUpOnView value={10} suffix=" jours" /></div>
              <div className="mt-2 text-muted-foreground">déploiement moyen</div>
            </div>
          </div>
          <ProgressOnView value={85} label="Taux de réussite moyen" />
        </div>
      </section>

      {/* Pourquoi ces démonstrations comptent */}
      <section className="bg-white section-y">
        <div className="container-padded section-y">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">La preuve par l’expérience</h2>
          </Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-2 items-center">
            <div>
              <p className="text-muted-foreground">Nous croyons que la meilleure preuve de notre savoir-faire est dans l’expérience directe. Ces extraits reflètent notre exigence : contenus immersifs, design sobre, pédagogie active et résultats mesurables.</p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                alt="Personnes en formation digitale"
                className="rounded-[10px] shadow-[0_12px_32px_rgba(0,0,0,0.1)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="bg-[#0E1E2B] text-white section-y">
        <div className="container-padded py-14 md:py-16 text-center">
          <Reveal>
            <h3 className="text-2xl md:text-3xl font-heading font-bold">Envie d’en voir plus ?</h3>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-2 text-white/80">Demandez une démonstration complète et découvrez comment FPSG peut digitaliser vos formations.</p>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="btn-cta bg-[#006B46] hover:bg-[#006B46]/90">Demander une démo complète</Link>
              <Link to="/nos-formations" className="btn-outline-green border-[#006B46] text-[#006B46] hover:bg-[#006B46]/10 bg-white">Voir nos formations</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
