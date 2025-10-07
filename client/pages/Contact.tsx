import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";
import {
  AtSign,
  Building2,
  CheckCircle2,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const heroImg =
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop";
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: payload.name,
          company: payload.company,
          email: payload.email,
          phone: payload.phone,
          subject: payload.subject,
          message: payload.message,
        }),
      });
      if (!res.ok) throw new Error("Network error");
      const json = await res.json();
      if (!json.ok) throw new Error(json.error || "Submission failed");
      setSent(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setError(err?.message || "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0E1E2B] text-white section-y">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Équipe FPSG"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E1E2B]/70 via-[#0E1E2B]/60 to-[#0E1E2B]" />
        </div>
        <div className="container-padded py-10 md:py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Reveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight">
                Contactez nos experts FPSG Digital Learning
              </h1>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-3 text-white/80">
                Nous vous accompagnons dans la digitalisation de vos formations
                sécurité et prévention.
              </p>
            </Reveal>
          </div>
          <img
            src={heroImg}
            alt="Équipe FPSG"
            className="hidden md:block rounded-[10px] shadow-[0_12px_32px_rgba(0,0,0,0.1)]"
          />
        </div>
      </section>

      {/* Form */}
      <section className="bg-[#F9FAFB] section-y">
        <div className="container-padded section-y">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Demandez une démonstration personnalisée
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-2 text-muted-foreground">
              Remplissez le formulaire ci-dessous, notre équipe vous
              recontactera sous 24 heures.
            </p>
          </Reveal>

          <div className="mt-8 mx-auto max-w-3xl">
            {sent ? (
              <div className="card p-6 text-center">
                <h3 className="text-xl font-heading font-semibold">Merci !</h3>
                <p className="mt-2 text-muted-foreground">
                  Notre équipe FPSG vous contactera très prochainement.
                </p>
                <button
                  className="mt-4 btn-outline-green"
                  onClick={() => setSent(false)}
                >
                  Envoyer une nouvelle demande
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="card p-6 bg-white">
                {error && (
                  <div className="mb-4 rounded-[8px] border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                    {error}
                  </div>
                )}
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium" htmlFor="name">
                      Nom complet
                    </label>
                    <div className="mt-1 flex items-center gap-2 rounded-[10px] border bg-white px-3 py-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <input
                        id="name"
                        name="name"
                        required
                        className="w-full bg-transparent focus:outline-none"
                        placeholder="Ex: Marie Dupont"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium" htmlFor="company">
                      Entreprise / Organisation
                    </label>
                    <div className="mt-1 flex items-center gap-2 rounded-[10px] border bg-white px-3 py-2">
                      <Building2 className="h-4 w-4 text-muted-foreground" />
                      <input
                        id="company"
                        name="company"
                        className="w-full bg-transparent focus:outline-none"
                        placeholder="Ex: FIDUCIAL"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium" htmlFor="email">
                      Adresse e-mail professionnelle
                    </label>
                    <div className="mt-1 flex items-center gap-2 rounded-[10px] border bg-white px-3 py-2">
                      <AtSign className="h-4 w-4 text-muted-foreground" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full bg-transparent focus:outline-none"
                        placeholder="prenom.nom@entreprise.fr"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium" htmlFor="phone">
                      Téléphone (optionnel)
                    </label>
                    <div className="mt-1 flex items-center gap-2 rounded-[10px] border bg-white px-3 py-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <input
                        id="phone"
                        name="phone"
                        className="w-full bg-transparent focus:outline-none"
                        placeholder="Ex: +33 6 12 34 56 78"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium" htmlFor="subject">
                      Sujet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="mt-1 w-full rounded-[10px] border bg-white px-3 py-2"
                    >
                      <option value="Demande de démo">Demande de démo</option>
                      <option value="Devis">Devis</option>
                      <option value="Informations générales">
                        Informations générales
                      </option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium" htmlFor="message">
                      Message libre (vos besoins)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="mt-1 w-full rounded-[10px] border bg-white px-3 py-2"
                      placeholder="Décrivez votre contexte, vos objectifs et publics cibles..."
                    />
                  </div>
                </div>
                <button disabled={loading} className="mt-6 btn-cta">
                  {loading ? "Envoi en cours..." : "Envoyer ma demande"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Coordonnées */}
      <section className="bg-white section-y">
        <div className="container-padded section-y">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Nos coordonnées directes
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="card p-6">
              <MapPin className="h-6 w-6 text-primary" />
              <h3 className="mt-2 font-heading font-semibold">Adresse</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                FIDUCIAL FPSG – Siège
                <br />
                41 rue du Capitaine Guynemer, 69002 Lyon
              </p>
            </div>
            <div className="card p-6">
              <Phone className="h-6 w-6 text-primary" />
              <h3 className="mt-2 font-heading font-semibold">Téléphone</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                +33 (0)4 72 57 20 00
              </p>
            </div>
            <div className="card p-6">
              <AtSign className="h-6 w-6 text-primary" />
              <h3 className="mt-2 font-heading font-semibold">E-mail</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                contact@fpsg.fr
              </p>
            </div>
          </div>
          <div className="mt-8">
            <a
              className="btn-cta"
              href="https://maps.google.com?q=41+rue+du+Capitaine+Guynemer,+69002+Lyon"
              target="_blank"
              rel="noreferrer"
            >
              Ouvrir Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="bg-white section-y">
        <div className="container-padded section-y">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Nos engagements qualité
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Accessibilité",
                d: "Formations inclusives, accessibles à tous.",
              },
              {
                t: "Réactivité",
                d: "Réponse sous 24h à toute demande de démo.",
              },
              {
                t: "Expertise terrain",
                d: "Contenus développés par nos formateurs FPSG.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-[10px] bg-[#E5F4ED] p-6 text-[#006B46] shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
              >
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <div>
                    <div className="font-heading font-semibold">{c.t}</div>
                    <div className="text-sm">{c.d}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[#0E1E2B] text-white section-y">
        <div className="container-padded py-8 md:py-12 text-center">
          <Reveal>
            <h3 className="text-2xl md:text-3xl font-heading font-bold">
              Prêt à faire évoluer vos formations ?
            </h3>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-2 text-white/80">
              FPSG Digital Learning vous accompagne pas à pas dans la
              digitalisation de votre culture sécurité.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-6 cta-group">
              <Link
                to="/contact"
                className="btn-cta bg-[#006B46] hover:bg-[#006B46]/90"
              >
                Demander une démonstration
              </Link>
              <Link
                to="/nos-formations"
                className="btn-outline-green border-[#006B46] text-[#006B46] hover:bg-[#006B46]/10 bg-white"
              >
                Voir les formations disponibles
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
