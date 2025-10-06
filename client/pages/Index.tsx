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
  const heroVideo = "https://cdn.builder.io/o/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2F6763bd8c32934865b7e746c20f0c9d52?alt=media&token=08262f8b-d1fa-4b78-b8c6-b5128808924a&apiKey=d93d9a0ec7824aa1ac4d890a1f90a2ec";
  const heroPoster = "https://images.pexels.com/photos/7658369/pexels-photo-7658369.jpeg";
  const [showUseCase, setShowUseCase] = useState(false);
  const [showUseCaseSuspect, setShowUseCaseSuspect] = useState(false);
  const [showUseCaseRps, setShowUseCaseRps] = useState(false);
  const [showUseCaseManager, setShowUseCaseManager] = useState(false);

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
            <source src={heroVideo} />
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
                      {i === 0 ? (
                        <button type="button" onClick={() => setShowUseCase((v) => !v)} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary hover:bg-primary/15">Use case</button>
                      ) : i === 1 ? (
                        <button type="button" onClick={() => setShowUseCaseSuspect((v) => !v)} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary hover:bg-primary/15">Use case</button>
                      ) : i === 2 ? (
                        <button type="button" onClick={() => setShowUseCaseRps((v) => !v)} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary hover:bg-primary/15">Use case</button>
                      ) : i === 3 ? (
                        <button type="button" onClick={() => setShowUseCaseManager((v) => !v)} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary hover:bg-primary/15">Use case</button>
                      ) : (
                        <Link to="/demonstrations" className="btn-cta">Voir une démo</Link>
                      )}
                    </div>
                    {i === 0 && showUseCase && (
                      <div className="mt-4 card p-6">
                        <div className="text-xs uppercase tracking-wide text-primary/80">Titre du module</div>
                        <h4 className="mt-1 text-xl font-heading font-semibold">Gérer un visiteur mécontent – Simulation FPSG : la posture assertive</h4>

                        <div className="mt-4 space-y-4 text-sm leading-relaxed">
                          <div>
                            <div className="font-semibold">Contexte du scénario</div>
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                              <li><span className="font-medium">Lieu:</span> hall d’accueil d’une entreprise (réception FPSG ou poste de sûreté).</li>
                              <li><span className="font-medium">Personnages:</span> Camille (agent d’accueil / agent de sûreté), M. Durand (visiteur mécontent).</li>
                              <li><span className="font-medium">Ambiance:</span> agitation modérée, tension croissante mais contrôlable.</li>
                            </ul>
                          </div>

                          <div>
                            <div className="font-semibold">Étape 1 – Introduction vidéo / narration</div>
                            <p className="mt-1 italic">Narrateur: “Un visiteur se présente à l’accueil, contrarié. Sa demande n’a pas été anticipée, et la situation dégénère. Comment réagir avec calme, empathie et fermeté ?”</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                              <li><span className="font-medium">Mission:</span> Maintenir la sérénité tout en gérant la frustration du visiteur.</li>
                              <li><span className="font-medium">Bouton:</span> “Commencer la simulation”</li>
                            </ul>
                          </div>

                          <div>
                            <div className="font-semibold">Étape 2 – Première interaction</div>
                            <p className="mt-1">Visiteur: “C��est pas possible, j’ai rendez-vous depuis une heure et personne ne vient me chercher !”</p>
                            <div className="mt-2">
                              <div className="font-medium">Choix</div>
                              <ul className="list-disc pl-5 mt-1 space-y-1">
                                <li>A. “Je ne suis pas responsable, appelez votre contact.” <span className="text-red-600">(réaction défensive)</span></li>
                                <li>B. “Je comprends, je vais voir ce que je peux faire pour vous aider.” <span className="text-green-700">(assertif)</span></li>
                                <li>C. “Si vous continuez à vous énerver, je ne vous reçois pas.” <span className="text-red-600">(agressif)</span></li>
                              </ul>
                              <div className="mt-2 font-medium">Feedback</div>
                              <ul className="list-disc pl-5 mt-1 space-y-1">
                                <li>A → Réponse défensive : tu risques d’augmenter la tension.</li>
                                <li>B → Bonne approche : reconnaissance + action.</li>
                                <li>C → Réponse autoritaire : tu coupes le dialogue.</li>
                              </ul>
                            </div>
                          </div>

                          <div>
                            <div className="font-semibold">Étape 3 – Deuxième séquence (émotionnelle)</div>
                            <p className="mt-1">Visiteur: “On me balade depuis tout à l’heure, c’est inadmissible !”</p>
                            <div className="mt-2">
                              <div className="font-medium">Choix</div>
                              <ul className="list-disc pl-5 mt-1 space-y-1">
                                <li>A. “Je vois que vous êtes en colère, mais restons calmes.” <span className="text-green-700">(✓)</span></li>
                                <li>B. “Ce n’est pas ma faute.”</li>
                                <li>C. “Je vais appeler la sécurité.”</li>
                              </ul>
                              <div className="mt-2 font-medium">Feedback</div>
                              <ul className="list-disc pl-5 mt-1 space-y-1">
                                <li>A → Reconnaître l’émotion permet de désamorcer la colère.</li>
                                <li>B → Évite la justification : reste sur le besoin de la personne.</li>
                                <li>C → Tu déclenches un rapport de force inutile.</li>
                              </ul>
                            </div>
                          </div>

                          <div>
                            <div className="font-semibold">Étape 4 – Troisième séquence (gestion assertive)</div>
                            <p className="mt-1">Visiteur: “Je veux parler à votre responsable, maintenant !”</p>
                            <div className="mt-2">
                              <div className="font-medium">Choix</div>
                              <ul className="list-disc pl-5 mt-1 space-y-1">
                                <li>A. “Je peux prévenir mon responsable, mais je veux d’abord comprendre ce qui pose problème.” <span className="text-green-700">(✓)</span></li>
                                <li>B. “Attendez, je ne peux pas faire ça.”</li>
                                <li>C. “Vous exagérez, tout le monde attend.”</li>
                              </ul>
                              <div className="mt-2 font-medium">Feedback</div>
                              <ul className="list-disc pl-5 mt-1 space-y-1">
                                <li>A → Tu montres ton ouverture tout en gardant le contrôle.</li>
                                <li>B → Refus sec : perte d���écoute.</li>
                                <li>C → Comparaison : tu minimises son ressenti.</li>
                              </ul>
                            </div>
                          </div>

                          <div>
                            <div className="font-semibold">Étape 5 – Conclusion / débrief</div>
                            <p className="mt-1">L’ambiance se détend, le visiteur s’excuse: “Désolé, j’étais juste stressé par mon rendez-vous.”</p>
                            <p className="mt-1 italic">Narrateur: “Bravo, tu as su adopter une posture assertive : calme, écoute et professionnalisme.”</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                              <li>Accueillir l’émotion sans l’amplifier</li>
                              <li>Exprimer sa position sans se justifier</li>
                              <li>Proposer une solution concrète</li>
                            </ul>
                            <div className="mt-2 text-xs text-muted-foreground">Bonus: barre de progression “Tension → Calme” qui descend à la fin.</div>
                          </div>

                          <div>
                            <div className="font-semibold">Étape 6 – Fiche de synthèse</div>
                            <div className="mt-1">Les 3 piliers de la communication assertive FPSG :</div>
                            <ol className="list-decimal pl-5 mt-1 space-y-1">
                              <li>Empathie → “Je comprends votre ressenti.”</li>
                              <li>Clarté → “Voici ce que je peux faire maintenant.”</li>
                              <li>Fermeté sereine → “Je ne peux pas accéder à cette demande, mais voici une alternative.”</li>
                            </ol>
                            <blockquote className="mt-2 italic">“La meilleure réponse à la colère, c’est la clarté calme.”</blockquote>
                          </div>
                        </div>

                        <div className="mt-4 text-xs text-muted-foreground">Extrait de démonstration – FPSG Digital Learning.</div>
                      </div>
                    )}
                    {i === 1 && showUseCaseSuspect && (
                      <div className="mt-4 card p-6">
                        <div className="text-xs uppercase tracking-wide text-primary/80">Titre du module</div>
                        <h4 className="mt-1 text-xl font-heading font-semibold">Réagir face à une situation suspecte – Scénario immersif de sûreté</h4>

                        <div className="mt-4 space-y-4 text-sm leading-relaxed">
                          <div>
                            <div className="font-semibold">Contexte du scénario</div>
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                              <li><span className="font-medium">Lieu:</span> zone d'accueil et circulation d'un bâtiment.</li>
                              <li><span className="font-medium">Personnages:</span> Agent FPSG, public, individu au comportement suspect.</li>
                              <li><span className="font-medium">Ambiance:</span> activité normale, signal faible détecté puis montée de tension potentielle.</li>
                            </ul>
                          </div>

                          <div>
                            <div className="font-semibold">Étape 1 – Observation discrète</div>
                            <p className="mt-1">Repérer sans alarmer des signaux faibles: errance, repérage, gestes nerveux, sac abandonné.</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                              <li>Se positionner à couvert visuel.</li>
                              <li>Confirmer l'observation sans jugement.</li>
                            </ul>
                          </div>

                          <div>
                            <div className="font-semibold">Étape 2 – Alerte selon la procédure</div>
                            <p className="mt-1">Transmettre une information claire: qui, quoi, où, quand.</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                              <li>Utiliser les canaux définis (radio, téléphone).</li>
                              <li>Rester factuel et concis.</li>
                            </ul>
                          </div>

                          <div>
                            <div className="font-semibold">Étape 3 – Mise en sécurité</div>
                            <p className="mt-1">Se mettre à couvert, éloigner le public, éviter les attroupements.</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                              <li>Bloquer/filtrer les accès si nécessaire.</li>
                              <li>Orienter calmement.</li>
                            </ul>
                          </div>

                          <div>
                            <div className="font-semibold">Étape 4 – Coordination</div>
                            <p className="mt-1">Attendre les consignes, partager l'information utile, tenir la posture calme.</p>
                          </div>

                          <div>
                            <div className="font-semibold">Débrief – 3 réflexes sûreté</div>
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                              <li>Observer sans alarmer</li>
                              <li>Alerter efficacement</li>
                              <li>Se mettre à couvert / sécuriser le périmètre</li>
                            </ul>
                          </div>
                        </div>

                        <div className="mt-4 text-xs text-muted-foreground">Extrait de démonstration – FPSG Digital Learning.</div>
                      </div>
                    )}
                    {i === 2 && showUseCaseRps && (
                      <div className="mt-4 card p-6">
                        <div className="text-xs uppercase tracking-wide text-primary/80">Titre du module</div>
                        <h4 className="mt-1 text-xl font-heading font-semibold">Prévenir les RPS au quotidien – Bien‑être et santé au travail</h4>

                        <div className="mt-4 space-y-4 text-sm leading-relaxed">
                          <div>
                            <div className="font-semibold">Contexte</div>
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                              <li><span className="font-medium">Environnement:</span> open���space / atelier avec charge de travail élevée.</li>
                              <li><span className="font-medium">Signaux faibles:</span> fatigue, irritabilité, isolement, heures tardives répétées.</li>
                            </ul>
                          </div>

                          <div>
                            <div className="font-semibold">Étape 1 – Observer sans juger</div>
                            <p className="mt-1">Repérer les changements de comportement (baisse d’échanges, tensions, erreurs inhabituelles).</p>
                          </div>

                          <div>
                            <div className="font-semibold">Étape 2 – Entretien bienveillant</div>
                            <p className="mt-1">Ouvrir le dialogue: « J’ai remarqué que tu semblais fatigué, est‑ce que tout va bien ? »</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                              <li>Écoute active, sans minimiser le ressenti.</li>
                              <li>Clarifier le besoin immédiat (priorités, charge, soutien).</li>
                            </ul>
                          </div>

                          <div>
                            <div className="font-semibold">Étape 3 – Orienter et soutenir</div>
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                              <li>Rappeler les ressources: RH, médecin du travail, numéro d’écoute.</li>
                              <li>Ajuster l’organisation: priorisation, relais, pauses.</li>
                            </ul>
                          </div>

                          <div>
                            <div className="font-semibold">Débrief – 3 réflexes RPS</div>
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                              <li>Observer les signaux faibles</li>
                              <li>En parler tôt, avec bienveillance</li>
                              <li>Agir concrètement et orienter</li>
                            </ul>
                          </div>
                        </div>

                        <div className="mt-4 text-xs text-muted-foreground">Extrait de démonstration – FPSG Digital Learning.</div>
                      </div>
                    )}
                    {i === 3 && showUseCaseManager && (
                      <div className="mt-4 card p-6">
                        <div className="text-xs uppercase tracking-wide text-primary/80">Titre du module</div>
                        <h4 className="mt-1 text-xl font-heading font-semibold">Manager une équipe en tension – Posture managériale et communication adaptée</h4>

                        <div className="mt-4 space-y-4 text-sm leading-relaxed">
                          <div>
                            <div className="font-semibold">Contexte</div>
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                              <li><span className="font-medium">Équipe:</span> charge élevée, délais serrés, désaccords récurrents.</li>
                              <li><span className="font-medium">Signaux:</span> conflits larvés, emails secs, retards, baisse de qualité.</li>
                            </ul>
                          </div>

                          <div>
                            <div className="font-semibold">Étape 1 – Diagnostiquer la tension</div>
                            <p className="mt-1">Identifier faits observables et impacts: objectifs, qualité, relation.</p>
                          </div>

                          <div>
                            <div className="font-semibold">Étape 2 – Entretiens individuel et collectif</div>
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                              <li>Écoute active, reformulation des besoins.</li>
                              <li>Règles d’atelier: respect, temps de parole, recherche de solutions.</li>
                            </ul>
                          </div>

                          <div>
                            <div className="font-semibold">Étape 3 – Cadre clair et soutien</div>
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                              <li>Clarifier rôles, priorités, modes de communication.</li>
                              <li>Proposer accompagnement (mentorat, formation, médiation).</li>
                            </ul>
                          </div>

                          <div>
                            <div className="font-semibold">Étape 4 – Plan d'action et suivi</div>
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                              <li>Actions datées, responsables, indicateurs simples.</li>
                              <li>Point régulier: ajuster, reconnaître les progrès.</li>
                            </ul>
                          </div>

                          <div>
                            <div className="font-semibold">Débrief – 3 réflexes management</div>
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                              <li>Écoute active</li>
                              <li>Cadre clair</li>
                              <li>Régulation continue</li>
                            </ul>
                          </div>
                        </div>

                        <div className="mt-4 text-xs text-muted-foreground">Extrait de démonstration – FPSG Digital Learning.</div>
                      </div>
                    )}
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
