import React, { useMemo, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";
import { Check, Lightbulb } from "lucide-react";

interface Hotspot {
  id: string;
  x: number;
  y: number;
  label: string;
  description: string;
}

const IMAGE_URL = "https://images.pexels.com/photos/4483775/pexels-photo-4483775.jpeg";

const HOTSPOTS: Hotspot[] = [
  { id: "cable", x: 38, y: 78, label: "Câble au sol", description: "Risque de chute: câble non signalé traversant une zone de passage." },
  { id: "sortie", x: 82, y: 20, label: "Sortie obstruée", description: "Issue de secours partiellement bloquée: gêne à l'évacuation." },
  { id: "charge", x: 60, y: 64, label: "Charge non sécurisée", description: "Colis empilé instable: risque de chute d'objets." },
  { id: "etagere", x: 22, y: 35, label: "Étagère surchargée", description: "Rayonnage au‑delà de la charge admissible: déformation/effondrement." },
  { id: "sol", x: 50, y: 88, label: "Sol humide", description: "Glissade possible: zone humide sans signalisation." },
];

export default function ImageRiskOnboarding() {
  const [found, setFound] = useState<Record<string, boolean>>({});
  const [showHints, setShowHints] = useState(false);

  const total = HOTSPOTS.length;
  const foundCount = useMemo(() => Object.values(found).filter(Boolean).length, [found]);
  const progress = Math.round((foundCount / total) * 100);

  function markFound(id: string) {
    setFound((f) => (f[id] ? f : { ...f, [id]: true }));
  }

  function reset() {
    setFound({});
    setShowHints(false);
  }

  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <CardHeader>
        <div className="flex items-center gap-2 mb-1">
          <Badge className="badge-soft">Image interactive</Badge>
          <Badge className="badge-soft">Onboarding</Badge>
          <Badge className="badge-soft">Prévention</Badge>
        </div>
        <CardTitle className="text-lg font-heading font-semibold">Image interactive – Zones à risque</CardTitle>
        <CardDescription>Identifiez les zones dangereuses dans la scène. Cliquez sur les marqueurs.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <Progress value={progress} />
        <div className="mt-3 text-sm text-muted-foreground">{foundCount} / {total} zones identifiées</div>

        <div className="mt-4 relative">
          <AspectRatio ratio={16 / 9}>
            <img
              src={IMAGE_URL}
              alt="Scène de travail avec zones à risque"
              className="absolute inset-0 w-full h-full object-cover rounded-[8px]"
            />
            {HOTSPOTS.map((h, idx) => {
              const isFound = !!found[h.id];
              return (
                <div key={h.id} style={{ left: `${h.x}%`, top: `${h.y}%` }} className="absolute -translate-x-1/2 -translate-y-1/2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => markFound(h.id)}
                        aria-label={h.label}
                        className={`h-8 w-8 rounded-full grid place-items-center border shadow-sm transition focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                          isFound ? "bg-green-600 text-white border-green-700" : "bg-white/90 text-primary border-primary hover:bg-primary/10"
                        }`}
                      >
                        {isFound ? <Check className="h-4 w-4" /> : <span className="font-semibold text-xs">{idx + 1}</span>}
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="font-medium">{h.label}</div>
                      <div className="text-muted-foreground max-w-xs">{h.description}</div>
                    </TooltipContent>
                  </Tooltip>

                  {showHints && !isFound && (
                    <span className="absolute -inset-3 rounded-full border-2 border-primary/40 animate-pulse" aria-hidden />
                  )}
                </div>
              );
            })}
          </AspectRatio>
        </div>

        <div className="mt-4 grid gap-2">
          {HOTSPOTS.map((h) => (
            <div key={h.id} className="flex items-start gap-2 text-sm">
              <div className={`mt-1 h-2 w-2 rounded-full ${found[h.id] ? "bg-green-600" : "bg-primary"}`} />
              <div>
                <div className="font-medium">{h.label}</div>
                <div className="text-muted-foreground">{h.description}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">Extrait de démonstration – FPSG Digital Learning.</span>
        <div className="flex items-center gap-2">
          <Button type="button" variant="outline" onClick={() => setShowHints((v) => !v)}>
            <Lightbulb className="mr-2 h-4 w-4" /> {showHints ? "Masquer les indices" : "Afficher des indices"}
          </Button>
          <Button variant="outline" onClick={reset}>Réinitialiser</Button>
          <Button disabled={foundCount !== total}>Terminer</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
