import React, { useMemo, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const CLUES = [
  { id: "poster", label: "Affiche consignes", text: "Indice 1: Le triangle de sécurité affiche 4 pictogrammes.", value: 4, order: 1 },
  { id: "locker", label: "Casier", text: "Indice 2: Dans le casier, 2 badges visiteurs.", value: 2, order: 2 },
  { id: "desk", label: "Bureau", text: "Indice 3: Le post‑it rappelle 7 règles d'or.", value: 7, order: 3 },
];

export default function EscapeGameMini() {
  const [found, setFound] = useState<string[]>([]);
  const [code, setCode] = useState<string[]>(["", "", ""]);
  const [validated, setValidated] = useState<boolean>(false);

  const allFound = useMemo(() => CLUES.every(c => found.includes(c.id)), [found]);
  const expected = useMemo(() => CLUES.sort((a,b) => a.order - b.order).map(c => String(c.value)), []);
  const isCodeOk = useMemo(() => code.join("") === expected.join("") || code.join("-") === expected.join("-"), [code, expected]);

  function toggle(clueId: string) {
    setFound((prev) => (prev.includes(clueId) ? prev : [...prev, clueId]));
  }
  function updateCode(i: number, v: string) {
    const d = v.replace(/[^0-9]/g, "").slice(0, 1);
    setCode((c) => c.map((x, idx) => (idx === i ? d : x)));
  }
  function reset() {
    setFound([]);
    setCode(["", "", ""]);
    setValidated(false);
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-2 mb-1">
          <Badge className="badge-soft">Escape game</Badge>
          <Badge className="badge-soft">Prévention</Badge>
        </div>
        <CardTitle className="text-lg font-heading font-semibold">Escape game – Ouvrir la salle de sécurité</CardTitle>
        <CardDescription>Trouvez 3 indices et déverrouillez le cadenas.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="grid grid-cols-3 gap-3">
          {CLUES.map((c) => (
            <button
              key={c.id}
              onClick={() => toggle(c.id)}
              className={`rounded-md border p-3 text-left hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/40 ${found.includes(c.id) ? "bg-white" : "bg-primary/5"}`}
              aria-pressed={found.includes(c.id)}
            >
              <div className="font-medium">{c.label}</div>
              {found.includes(c.id) ? (
                <div className="mt-1 text-sm text-muted-foreground">{c.text}</div>
              ) : (
                <div className="mt-1 text-xs text-muted-foreground">Cliquer pour inspecter</div>
              )}
            </button>
          ))}
        </div>

        <div className="mt-4">
          <div className="text-sm font-medium">Cadenas</div>
          <div className="text-xs text-muted-foreground">Saisissez le code à 3 chiffres dans l'ordre des indices.</div>
          <div className="mt-2 flex items-center gap-2">
            {code.map((v, i) => (
              <input
                key={i}
                value={v}
                onChange={(e) => updateCode(i, e.target.value)}
                className="w-12 h-12 text-center text-xl rounded-md border bg-white"
                inputMode="numeric"
                aria-label={`Chiffre ${i + 1}`}
              />
            ))}
            <Button onClick={() => setValidated(true)} disabled={!allFound}>Valider</Button>
          </div>
        </div>

        {validated && (
          <div className="mt-4">
            {isCodeOk ? (
              <Alert className="border-green-500/50">
                <AlertTitle>Bravo !</AlertTitle>
                <AlertDescription>La porte se déverrouille. Vous avez ouvert la salle de sécurité.</AlertDescription>
              </Alert>
            ) : (
              <Alert>
                <AlertTitle>Code incorrect</AlertTitle>
                <AlertDescription>Vérifiez l'ordre des indices et réessayez.</AlertDescription>
              </Alert>
            )}
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
