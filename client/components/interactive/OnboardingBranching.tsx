import React, { useMemo, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

 type Choice = {
  id: string;
  label: string;
  next?: string;
  deltaStress?: number; // negative reduces stress
  good?: boolean;
  feedback?: string;
};

 type Node = {
  id: string;
  title: string;
  prompt: string;
  choices: Choice[];
  end?: boolean;
};

 const NODES: Record<string, Node> = {
  start: {
    id: "start",
    title: "Jour 1 – Accueil & Sécurité",
    prompt: "Vous arrivez sur site. Votre manager est pris. Par quoi commencez‑vous ?",
    choices: [
      { id: "brief", label: "Suivre le briefing sécurité obligatoire", next: "badge", deltaStress: -5, good: true, feedback: "Bon réflexe : prioriser la sécurité dès l'onboarding." },
      { id: "installe", label: "M'installer d'abord à mon poste", next: "badge", deltaStress: 3, feedback: "Installez‑vous ensuite : la sécurité d'abord." },
    ],
  },
  badge: {
    id: "badge",
    title: "Accès & Posture",
    prompt: "On vous remet votre badge. Vous remarquez un colis sans étiquette à l'accueil.",
    choices: [
      { id: "signaler", label: "Le signaler discrètement à l'accueil", next: "it", deltaStress: -5, good: true, feedback: "Observer et signaler : culture prévention." },
      { id: "ignorer", label: "Ce n'est pas mon rôle", next: "it", deltaStress: 5, feedback: "Chacun est acteur de la sûreté." },
    ],
  },
  it: {
    id: "it",
    title: "IT & Data",
    prompt: "Premier login : un mail demande vos identifiants pour activer un outil.",
    choices: [
      { id: "phishing", label: "Le transférer au support (phishing suspect)", next: "fin", deltaStress: -5, good: true, feedback: "Excellent : vérification avant action." },
      { id: "repondre", label: "Répondre rapidement pour aller plus vite", next: "fin", deltaStress: 8, feedback: "Risque de phishing. Toujours vérifier l'expéditeur." },
    ],
  },
  fin: {
    id: "fin",
    title: "Bilan onboarding",
    prompt: "Fin de parcours.",
    choices: [],
    end: true,
  },
};

 export default function OnboardingBranching() {
  const [nodeId, setNodeId] = useState<string>("start");
  const [stress, setStress] = useState<number>(40);
  const [score, setScore] = useState<number>(0);
  const [path, setPath] = useState<string[]>([]);

  const node = NODES[nodeId];
  const stepsTotal = useMemo(() => Object.values(NODES).filter(n => !n.end).length, []);
  const stepsDone = useMemo(() => path.length, [path.length]);
  const progress = Math.round((stepsDone / stepsTotal) * 100);

  function choose(c: Choice) {
    if (node.end) return;
    setStress((s) => Math.min(100, Math.max(0, s + (c.deltaStress || 0))));
    setScore((sc) => sc + (c.good ? 1 : 0));
    setPath((p) => [...p, c.id]);
    setNodeId(c.next || nodeId);
  }

  function reset() {
    setNodeId("start");
    setStress(40);
    setScore(0);
    setPath([]);
  }

  const finished = node.end;

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-2 mb-1">
          <Badge className="badge-soft">Scénario</Badge>
          <Badge className="badge-soft">Onboarding</Badge>
        </div>
        <CardTitle className="text-lg font-heading font-semibold">Scénario à embranchements – Nouvel arrivant</CardTitle>
        <CardDescription>Faites les bons choix pour réussir votre première journée.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex items-center gap-3">
          <div className="flex-1"><Progress value={progress} /></div>
          <div className="text-sm text-muted-foreground">{stepsDone}/{stepsTotal} étapes</div>
        </div>
        <div className="mt-2 text-xs text-muted-foreground">Stress: {stress}/100 • Score: {score}</div>

        {!finished ? (
          <div className="mt-4 space-y-3">
            <div className="font-medium text-base leading-snug break-words">{node.title}</div>
            <div className="text-muted-foreground text-sm leading-relaxed break-words">{node.prompt}</div>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {node.choices.map((c) => (
                <Button key={c.id} variant={c.good ? "default" : "outline"} onClick={() => choose(c)} className="h-auto min-h-10 py-2 whitespace-normal text-left leading-snug text-sm">
                  {c.label}
                </Button>
              ))}
            </div>
            <div className="text-xs text-muted-foreground">
              Astuce: privilégiez sécurité, signalement et vérification.
            </div>
          </div>
        ) : (
          <div className="mt-4 space-y-3">
            <Alert>
              <AlertTitle>Bilan</AlertTitle>
              <AlertDescription>
                Score: {score}/3 • Stress final: {stress}/100. {score >= 2 ? "Onboarding réussi : vous avez intégré les bons réflexes." : "Reprenez le parcours pour ancrer les bons réflexes."}
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
