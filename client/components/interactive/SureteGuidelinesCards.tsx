import React from "react";
import Reveal from "@/components/Reveal";
import { Eye, AlertCircle, Shield, Activity } from "lucide-react";

export default function SureteGuidelinesCards() {
  const items = [
    {
      icon: Eye,
      title: "Observer sans alarmer",
      desc:
        "Restez attentif aux signaux faibles : gestes nerveux, regards fuyants, objets déplacés. La vigilance, c’est voir sans juger.",
      accent: "#009E73",
      hover: "hover:scale-[1.01]",
      iconClass: "",
      extra: "",
    },
    {
      icon: AlertCircle,
      title: "Signaler efficacement",
      desc:
        "Communiquez rapidement selon la procédure : qui, quoi, où, quand. Une information claire évite la confusion.",
      accent: "#006B46",
      hover: "hover:ring-2 hover:ring-[#006B46]",
      iconClass: "",
      extra: "",
    },
    {
      icon: Shield,
      title: "Sécuriser le périmètre",
      desc:
        "Éloignez les personnes, bloquez les accès, évitez les attroupements. La sécurité prime avant tout.",
      accent: "#333333",
      hover: "",
      iconClass: "group-hover:rotate-6 transition-transform",
      extra: "",
    },
    {
      icon: Activity,
      title: "Agir avec sang-froid",
      desc:
        "Gardez le contrôle de vos émotions. Réagir avec calme, c’est déjà agir efficacement.",
      accent: "#00B783",
      hover: "hover:bg-gradient-to-br hover:from-[#00B783] hover:to-[#009E73] hover:text-white",
      iconClass: "",
      extra: "",
    },
  ] as const;

  return (
    <div className="space-y-6">
      {/* Intro block */}
      <Reveal>
        <div className="bg-[#F4F4F4] rounded-3xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-heading font-bold">Réagir face à une situation suspecte</h3>
          <p className="mt-1 text-muted-foreground">Développer la vigilance comportementale et la sûreté active</p>
          <p className="mt-3 text-sm md:text-base text-foreground/80 max-w-3xl mx-auto">
            FPSG forme vos équipes à reconnaître, signaler et gérer les comportements suspects avec calme et professionnalisme.
          </p>
        </div>
      </Reveal>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 100}>
            <article
              className={`group bg-white rounded-3xl p-8 shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 ${it.hover}`}
              style={{ borderTop: `4px solid ${it.accent}` }}
            >
              <div
                className="h-12 w-12 rounded-full grid place-items-center"
                style={{ backgroundColor: `${it.accent}1A`, color: it.accent }}
              >
                <it.icon className={`h-6 w-6 ${it.iconClass}`} />
              </div>
              <h4 className="mt-4 text-xl font-heading font-semibold">{it.title}</h4>
              <p className="mt-2 text-sm md:text-base text-muted-foreground">{it.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
