import React, { useMemo, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

 type Step = {
  id: string;
  title: string;
  prompt: string;
  choices: { id: string; label: string; deltaStress: number; good?: boolean; feedback?: string }[];
};

 const STEPS: Step[] = [
  {
    id: "incendie",
    title: "Départ de feu",
    prompt: "Une fumée apparaît près de l'atelier. Que faites‑vous ?",
    choices: [
      { id: "alerter", label: "Alerter et confiner selon la procédure", deltaStress: -10, good: true },
      { id: "filme", label: "Filmer pour prévenir plus tard", deltaStress: 15 },
      { id: "panique", label: "Courir vers la sortie en panique", deltaStress: 20 },
    ],
  },
  {
    id: "personne",
    title: "Personne en panique",
    prompt: "Un collègue paniqué hurle. Votre action ?",
    choices: [
      { id: "calme", label: "Lui parler calmement, l'orienter vers la sortie", deltaStress: -8, good: true },
      { id: "ignore", label: "L'ignorer pour gagner du temps", deltaStress: 10 },
      { id: "reprimande", label: "Le réprimander vivement", deltaStress: 12 },
    ],
  },
  {
    id: "evac",
    title: "Evacuation",
    prompt: "Vous arrivez au point de rassemblement. Prochaine étape ?",
    choices: [
      { id: "compter", label: "Vérifier les présents et remonter l'info", deltaStress: -6, good: true },
      { id: "retour", label: "Retourner chercher un objet oublié", deltaStress: 18 },
      { id: "attendre", label: "Attendre sans vérifier", deltaStress: 6 },
    ],
  },
];

 export default function CrisisSimulation() {
  const [stepIndex, setStepIndex] = useState(0);
  const [stress, setStress] = useState(50);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const step = STEPS[stepIndex];
  const progress = useMemo(() => Math.round(((stepIndex) / STEPS.length) * 100), [stepIndex]);

  function choose(choice: Step["choices"][number]) {
    setStress((s) => Math.min(100, Math.max(0, s + choice.deltaStress)));
    setScore((sc) => sc + (choice.good ? 1 : 0));
    const next = stepIndex + 1;
    if (next >= STEPS.length) {
      setDone(true);
    } else {
      setStepIndex(next);
    }
  }

  function reset() {
    setStepIndex(0);
    setStress(50);
    setScore(0);
    setDone(false);
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-2 mb-1">
          <Badge className="badge-soft">Simulation</Badge>
          <Badge className="badge-soft">Crise</Badge>
        </div>
        <CardTitle className="text-lg font-heading font-semibold">Simulation de crise – Réflexes essentiels</CardTitle>
        <CardDescription>Prendre les bonnes décisions sous pression.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex items-center gap-3">
          <div className="flex-1"><Progress value={progress} /></div>
          <div className="text-sm text-muted-foreground">Étape {stepIndex + 1} / {STEPS.length}</div>
        </div>
        <div className="mt-2 text-xs text-muted-foreground">Stress: {stress}/100 • Score: {score}</div>

        {!done ? (
          <div className="mt-4 space-y-3">
            <div className="font-medium">{step.title}</div>
            <div className="text-muted-foreground">{step.prompt}</div>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {step.choices.map((c) => (
                <Button key={c.id} variant={c.good ? "default" : "outline"} onClick={() => choose(c)}>
                  {c.label}
                </Button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-4">
            <Alert className={score >= 2 && stress <= 70 ? "border-green-500/50" : undefined}>
              <AlertTitle>Bilan</AlertTitle>
              <AlertDescription>
                Score: {score}/{STEPS.length} • Stress final: {stress}/100. {score >= 2 && stress <= 70 ? "Gestion de crise satisfaisante." : "Rejouez pour optimiser vos réflexes."}
              </AlertDescription>
            </Alert>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">Extrait de démonstration – FPSG Digital Learning.</span>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={reset}>Réinitialiser</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
