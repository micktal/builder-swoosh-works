import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { Filter, Search as SearchIcon, Clock, Layers } from "lucide-react";

type Category = "Tous" | "Management" | "Sécurité" | "Prévention" | "Accueil" | "Crise" | "Bien-être";

const CATEGORIES: Category[] = [
  "Tous",
  "Management",
  "Sécurité",
  "Prévention",
  "Accueil",
  "Crise",
  "Bien-être",
];

const MODULES = [
  {
    title: "Gérer un visiteur mécontent",
    desc: "Communication assertive et gestion des émotions.",
    category: "Accueil" as Category,
    duration: "35 min",
    level: "Intermédiaire",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Réagir face à une situation suspecte",
    desc: "Réflexes de sûreté, alerte et protection.",
    category: "Sécurité" as Category,
    duration: "40 min",
    level: "Intermédiaire",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Prévenir les RPS au quotidien",
    desc: "Identifier les signaux faibles, agir tôt.",
    category: "Bien-être" as Category,
    duration: "30 min",
    level: "Débutant",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Manager une équipe en tension",
    desc: "Posture managériale et communication adaptée.",
    category: "Management" as Category,
    duration: "45 min",
    level: "Avancé",
    img: "https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Culture prévention: les bons réflexes",
    desc: "Ancrer les comportements clés au quotidien.",
    category: "Prévention" as Category,
    duration: "25 min",
    level: "Débutant",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Communication de crise",
    desc: "Structurer les messages et rassurer efficacement.",
    category: "Crise" as Category,
    duration: "35 min",
    level: "Intermédiaire",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Formations() {
  const [category, setCategory] = useState<Category>("Tous");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const byCat = category === "Tous" ? MODULES : MODULES.filter((m) => m.category === category);
    const term = q.trim().toLowerCase();
    if (!term) return byCat;
    return byCat.filter((m) =>
      [m.title, m.desc, m.level, m.duration, m.category].some((s) => s.toLowerCase().includes(term)),
    );
  }, [category, q]);

  return (
    <main>
      {/* Header */}
      <section className="bg-[#F9FAFB] border-b">
        <div className="container-padded py-12 md:py-16">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold">Nos formations</h1>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-3 max-w-3xl text-muted-foreground">Modules e-learning concrets, immersifs et efficaces pour moderniser la sécurité, la prévention et le management au sein de vos équipes.</p>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-8 flex flex-col md:flex-row items-stretch gap-3">
              <div className="flex gap-2 overflow-x-auto">
                {CATEGORIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`rounded-[8px] px-4 py-2 border whitespace-nowrap transition ${
                      category === c ? "bg-primary text-white border-primary" : "hover:bg-accent"
                    }`}
                    aria-pressed={category === c}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <div className="md:ml-auto">
                <div className="flex items-center gap-2 rounded-[10px] border bg-white px-3 py-2">
                  <SearchIcon className="h-4 w-4 text-muted-foreground" />
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Rechercher un module..."
                    className="w-64 bg-transparent focus:outline-none"
                    aria-label="Rechercher"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section>
        <div className="container-padded py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((m, i) => (
              <Reveal key={m.title} delay={i * 60}>
                <article className="card overflow-hidden h-full flex flex-col">
                  <img src={m.img} alt="" className="h-44 w-full object-cover" />
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="badge-soft">{m.category}</span>
                      <span className="text-muted-foreground flex items-center gap-1"><Clock className="h-4 w-4" />{m.duration}</span>
                      <span className="text-muted-foreground flex items-center gap-1"><Layers className="h-4 w-4" />{m.level}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-heading font-semibold">{m.title}</h3>
                    <p className="mt-1 text-muted-foreground">{m.desc}</p>
                    <div className="mt-4 flex gap-2">
                      <Link to="/demonstrations" className="btn-cta">Voir une démo</Link>
                      <Link to="/contact" className="btn-outline-green">Obtenir un devis</Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
