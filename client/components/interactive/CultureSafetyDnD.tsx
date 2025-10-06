import React, { useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type PillarId = "observer" | "anticiper" | "communiquer" | "agir";

type Pillar = {
  id: PillarId;
  label: string;
  desc: string;
};

const PILLARS: Pillar[] = [
  {
    id: "observer",
    label: "Observer",
    desc: "Repérer les signaux faibles, les comportements à risque.",
  },
  {
    id: "anticiper",
    label: "Anticiper",
    desc: "Prévenir avant d’avoir à corriger.",
  },
  {
    id: "communiquer",
    label: "Communiquer",
    desc: "Partager l’information et la vigilance.",
  },
  {
    id: "agir",
    label: "Agir",
    desc: "Intervenir vite, efficacement et en sécurité.",
  },
];

export default function CultureSafetyDnD() {
  const [bins, setBins] = useState<Record<PillarId, PillarId | null>>({
    observer: null,
    anticiper: null,
    communiquer: null,
    agir: null,
  });
  const [picked, setPicked] = useState<PillarId | null>(null);
  const [showResult, setShowResult] = useState(false);

  const remaining = useMemo(
    () => PILLARS.filter((p) => !Object.values(bins).includes(p.id)),
    [bins],
  );
  const score = useMemo(
    () => Object.entries(bins).filter(([k, v]) => k === v).length,
    [bins],
  );

  function onDragStart(e: React.DragEvent<HTMLButtonElement>, id: PillarId) {
    e.dataTransfer.setData("text/plain", id);
    setPicked(id);
  }
  function onDragEnd() {
    setPicked(null);
  }

  function allowDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  function onDrop(e: React.DragEvent<HTMLDivElement>, target: PillarId) {
    e.preventDefault();
    const id = (e.dataTransfer.getData("text/plain") as PillarId) || picked;
    if (!id) return;
    setBins((b) => ({ ...b, [target]: id }));
    setPicked(null);
  }

  function removeFromBin(target: PillarId) {
    setBins((b) => ({ ...b, [target]: null }));
  }

  function reset() {
    setBins({ observer: null, anticiper: null, communiquer: null, agir: null });
    setShowResult(false);
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-2 mb-1">
          <Badge className="badge-soft">Drag & Drop</Badge>
          <Badge className="badge-soft">Culture prévention</Badge>
        </div>
        <CardTitle className="text-lg font-heading font-semibold">
          Culture sécurité FPSG
        </CardTitle>
        <CardDescription>
          Associez chaque pilier à sa définition pour valider votre
          compréhension.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        {/* Draggables */}
        <div className="grid gap-3 sm:grid-cols-2">
          {remaining.map((p) => (
            <button
              key={p.id}
              draggable
              onDragStart={(e) => onDragStart(e, p.id)}
              onDragEnd={onDragEnd}
              className={`text-left p-3 rounded-md border hover:bg-accent transition ${picked === p.id ? "opacity-60" : ""}`}
              aria-label={`Glisser « ${p.label} »`}
            >
              <div className="font-medium">{p.label}</div>
              <div className="text-sm text-muted-foreground">
                Glissez sur la bonne définition
              </div>
            </button>
          ))}
        </div>

        {/* Drop bins */}
        <div className="mt-6 grid gap-4">
          {PILLARS.map((p) => {
            const dropped = bins[p.id];
            const isCorrect = dropped === p.id;
            const hasValue = dropped != null;
            return (
              <div key={p.id} className="p-4 rounded-md border">
                <div className="text-sm text-muted-foreground">Définition</div>
                <div className="font-medium">{p.desc}</div>
                <div
                  className={`mt-3 min-h-12 rounded-md border-dashed border-2 grid place-items-center text-sm ${
                    hasValue
                      ? "border-foreground/20 bg-accent/40"
                      : "border-muted-foreground/30"
                  }`}
                  onDragOver={allowDrop}
                  onDrop={(e) => onDrop(e, p.id)}
                  aria-label={`Zone de dépôt pour ${p.label}`}
                >
                  {!hasValue ? (
                    <span className="text-muted-foreground">Déposez ici…</span>
                  ) : (
                    <div className="w-full flex items-center justify-between px-3 py-2">
                      <div className="font-medium">
                        {PILLARS.find((x) => x.id === dropped)!.label}
                      </div>
                      <div
                        className={`text-xs ${isCorrect ? "text-green-700" : "text-red-700"}`}
                      >
                        {isCorrect ? "Correct" : "À revoir"}
                      </div>
                    </div>
                  )}
                </div>
                {hasValue && (
                  <div className="mt-2 text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeFromBin(p.id)}
                    >
                      Retirer
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {showResult && (
          <div className="mt-4" aria-live="polite">
            {score === PILLARS.length ? (
              <Alert className="border-green-500/50">
                <AlertTitle>Bravo</AlertTitle>
                <AlertDescription>
                  Toutes les associations sont correctes.
                </AlertDescription>
              </Alert>
            ) : (
              <Alert variant="destructive">
                <AlertTitle>À approfondir</AlertTitle>
                <AlertDescription>
                  Revoyez les associations incorrectes puis validez à nouveau.
                </AlertDescription>
              </Alert>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          Extrait de démonstration – FPSG Digital Learning.
        </span>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={reset}>
            Réinitialiser
          </Button>
          <Button onClick={() => setShowResult(true)}>Valider</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
