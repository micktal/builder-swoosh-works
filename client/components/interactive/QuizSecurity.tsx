import React, { useMemo, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, XCircle } from "lucide-react";

type Option = { id: string; label: string };

type Question = {
  id: string;
  q: string;
  options: Option[];
  correct: string; // option id
  feedbackCorrect: string;
  feedbackIncorrect: string;
};

const QUESTIONS: Question[] = [
  {
    id: "q1",
    q: "A l'entrée, un visiteur élève la voix suite à un refus d'accès. Quelle est la meilleure première action ?",
    options: [
      { id: "a", label: "Lui demander de partir immédiatement sans discussion" },
      { id: "b", label: "Adopter une posture calme, se présenter, écouter et reformuler sa demande" },
      { id: "c", label: "Ignorer la situation pour éviter l'escalade" },
    ],
    correct: "b",
    feedbackCorrect: "Bonne réponse. Posture calme + écoute active désamorcent l'émotion avant toute décision.",
    feedbackIncorrect: "Non. Éviter le conflit ou imposer sans écoute aggrave la situation. Calme + écoute d'abord.",
  },
  {
    id: "q2",
    q: "Vous repérez un bagage isolé sans propriétaire apparent dans le hall. Que faites‑vous ?",
    options: [
      { id: "a", label: "Le déplacer dans un local pour libérer le passage" },
      { id: "b", label: "Signaler immédiatement et sécuriser le périmètre selon la procédure" },
      { id: "c", label: "Demander au public s'il appartient à quelqu'un et attendre" },
    ],
    correct: "b",
    feedbackCorrect: "Exact. On ne manipule pas l'objet ; on alerte et on sécurise selon le protocole." ,
    feedbackIncorrect: "Incorrect. Ne pas déplacer l'objet et ne pas retarder l'alerte. Sécuriser et prévenir immédiatement.",
  },
  {
    id: "q3",
    q: "Une personne se trouve dans une zone à accès restreint sans badge visible. Quelle conduite adopter ?",
    options: [
      { id: "a", label: "L'interpeller sèchement pour la faire sortir sans explication" },
      { id: "b", label: "Vérifier calmement l'autorisation, proposer un accompagnement ou alerter si refus" },
      { id: "c", label: "Ne rien faire si la personne semble sûre d'elle" },
    ],
    correct: "b",
    feedbackCorrect: "Bien vu. Contrôle serein + orientation/alerte si besoin assurent sûreté et respect.",
    feedbackIncorrect: "Non. Ni passivité, ni agressivité. On vérifie sereinement et on oriente ou alerte.",
  },
  {
    id: "q4",
    q: "L'alarme incendie se déclenche. Quelle est la priorité immédiate au point d'accueil ?",
    options: [
      { id: "a", label: "Terminer l'accueil en cours puis s'occuper de l'alarme" },
      { id: "b", label: "Organiser l'évacuation et guider le public selon les issues prévues" },
      { id: "c", label: "Couper l'alarme pour éviter la panique" },
    ],
    correct: "b",
    feedbackCorrect: "Correct. Evacuation rapide et guidage calqué sur la procédure, la sécurité d'abord.",
    feedbackIncorrect: "Incorrect. On ne coupe pas l'alarme et on ne diffère pas. On évacue et on guide immédiatement.",
  },
  {
    id: "q5",
    q: "Un livreur arrive sans badge avec un colis pour un service interne. Que faire ?",
    options: [
      { id: "a", label: "Laisser passer pour éviter de bloquer l'activité" },
      { id: "b", label: "Vérifier l'identité, consigner la livraison et faire accompagner jusqu'au service" },
      { id: "c", label: "Refuser systématiquement toute livraison" },
    ],
    correct: "b",
    feedbackCorrect: "Exact. Vérification + traçabilité + accompagnement : sûreté sans bloquer l'opérationnel.",
    feedbackIncorrect: "Non. Ni laxisme ni blocage. On contrôle, consigne et on accompagne.",
  },
];

export default function QuizSecurity() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showFeedback, setShowFeedback] = useState(false);

  const q = QUESTIONS[step];
  const progress = useMemo(() => Math.round(((step) / QUESTIONS.length) * 100), [step]);
  const finished = step >= QUESTIONS.length;
  const score = useMemo(
    () => QUESTIONS.reduce((acc, cur) => acc + (answers[cur.id] === cur.correct ? 1 : 0), 0),
    [answers]
  );

  function onSelect(value: string) {
    setAnswers((prev) => ({ ...prev, [q.id]: value }));
    setShowFeedback(true);
  }

  function onNext() {
    if (!showFeedback) return;
    setShowFeedback(false);
    setStep((s) => s + 1);
  }

  function onRestart() {
    setStep(0);
    setAnswers({});
    setShowFeedback(false);
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg font-heading font-semibold">Quiz sécurité / sûreté</CardTitle>
        <CardDescription>5 questions rapides avec feedback immédiat.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        {!finished ? (
          <div>
            <Progress value={progress} />
            <div className="mt-4">
              <div className="text-sm text-muted-foreground">Question {step + 1} sur {QUESTIONS.length}</div>
              <h4 className="mt-2 font-medium">{q.q}</h4>
              <RadioGroup className="mt-4 space-y-3" value={answers[q.id] || ""} onValueChange={onSelect}>
                {q.options.map((opt) => (
                  <label key={opt.id} className="flex items-center gap-3 p-3 rounded-md border hover:bg-accent cursor-pointer">
                    <RadioGroupItem id={`${q.id}-${opt.id}`} value={opt.id} />
                    <Label htmlFor={`${q.id}-${opt.id}`} className="cursor-pointer flex-1">{opt.label}</Label>
                  </label>
                ))}
              </RadioGroup>

              {showFeedback && (
                <div className="mt-4" aria-live="polite">
                  {answers[q.id] === q.correct ? (
                    <Alert className="border-green-500/50">
                      <CheckCircle2 className="text-green-600" />
                      <AlertTitle>Bonne réponse</AlertTitle>
                      <AlertDescription>{q.feedbackCorrect}</AlertDescription>
                    </Alert>
                  ) : (
                    <Alert variant="destructive">
                      <XCircle />
                      <AlertTitle>Mauvaise réponse</AlertTitle>
                      <AlertDescription>{q.feedbackIncorrect}</AlertDescription>
                    </Alert>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="text-3xl font-heading font-extrabold text-primary">{score} / {QUESTIONS.length}</div>
            <p className="mt-2 text-muted-foreground">Score obtenu. Vous pouvez revoir les questions ou recommencer.</p>
            <div className="mt-4 grid gap-3 text-left">
              {QUESTIONS.map((qq) => (
                <div key={qq.id} className="p-3 rounded-md border">
                  <div className="font-medium">{qq.q}</div>
                  <div className="mt-1 text-sm">
                    Votre réponse: {qq.options.find(o => o.id === answers[qq.id])?.label || "—"}
                    {" "}•{" "}
                    <span className={answers[qq.id] === qq.correct ? "text-green-700" : "text-red-700"}>
                      {answers[qq.id] === qq.correct ? "Correct" : "Incorrect"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        {!finished ? (
          <>
            <span className="text-xs text-muted-foreground">Extrait de démonstration – FPSG Digital Learning.</span>
            <Button onClick={onNext} disabled={!showFeedback} className="ml-auto">{step + 1 === QUESTIONS.length ? "Terminer" : "Suivant"}</Button>
          </>
        ) : (
          <div className="w-full flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Merci pour votre participation.</span>
            <Button onClick={onRestart}>Recommencer</Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
