import React, { useMemo, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const CORRECT_ORDER = [
  "Se mettre à couvert",
  "Observer discrètement",
  "Alerter selon la procédure",
  "Sécuriser le périmètre",
] as const;

export default function ActionPriorityOrder() {
  const [items, setItems] = useState<string[]>([...CORRECT_ORDER]);
  const [dragIdx, setDragIdx] = useState<number | null>(null);
  const [validated, setValidated] = useState(false);

  const score = useMemo(() => items.filter((v, i) => v === CORRECT_ORDER[i]).length, [items]);

  function onDragStart(index: number) {
    setDragIdx(index);
  }
  function onDragOver(e: React.DragEvent<HTMLLIElement>) {
    e.preventDefault();
  }
  function onDrop(index: number) {
    if (dragIdx == null || dragIdx === index) return;
    const next = [...items];
    const [moved] = next.splice(dragIdx, 1);
    next.splice(index, 0, moved);
    setItems(next);
    setDragIdx(null);
  }

  function move(index: number, dir: -1 | 1) {
    const j = index + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    const tmp = next[index];
    next[index] = next[j];
    next[j] = tmp;
    setItems(next);
  }

  function reset() {
    setItems([...CORRECT_ORDER]);
    setValidated(false);
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-2 mb-1">
          <Badge className="badge-soft">Ordonner</Badge>
          <Badge className="badge-soft">Priorité sûreté</Badge>
        </div>
        <CardTitle className="text-lg font-heading font-semibold">Ordonner les actions – Réagir au bon moment</CardTitle>
        <CardDescription>Placez les étapes dans le bon ordre de priorité.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ol className="space-y-2">
          {items.map((label, i) => {
            const correct = validated && label === CORRECT_ORDER[i];
            const incorrect = validated && label !== CORRECT_ORDER[i];
            return (
              <li
                key={label}
                draggable
                onDragStart={() => onDragStart(i)}
                onDragOver={onDragOver}
                onDrop={() => onDrop(i)}
                className={`flex items-center gap-3 p-3 rounded-md border bg-white transition ${
                  correct ? "border-green-500/60 bg-green-50" : incorrect ? "border-red-500/60 bg-red-50" : "hover:bg-accent"
                }`}
                aria-label={`Étape ${i + 1}: ${label}`}
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  {i + 1}
                </span>
                <span className="flex-1">{label}</span>
                <div className="flex gap-1">
                  <Button type="button" variant="outline" size="sm" onClick={() => move(i, -1)} aria-label="Monter">↑</Button>
                  <Button type="button" variant="outline" size="sm" onClick={() => move(i, +1)} aria-label="Descendre">↓</Button>
                </div>
              </li>
            );
          })}
        </ol>

        {validated && (
          <div className="mt-4" aria-live="polite">
            {score === CORRECT_ORDER.length ? (
              <Alert className="border-green-500/50">
                <AlertTitle>Parfait</AlertTitle>
                <AlertDescription>Vous avez respecté la priorisation des actions.</AlertDescription>
              </Alert>
            ) : (
              <Alert variant="destructive">
                <AlertTitle>À améliorer</AlertTitle>
                <AlertDescription>Réorganisez pour placer les étapes dans l'ordre optimal de sûreté.</AlertDescription>
              </Alert>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">Extrait de démonstration – FPSG Digital Learning.</span>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={reset}>Réinitialiser</Button>
          <Button onClick={() => setValidated(true)}>Valider</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
