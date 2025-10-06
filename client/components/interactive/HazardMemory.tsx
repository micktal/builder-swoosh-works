import React, { useEffect, useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type CardItem = {
  id: string;
  symbol: string;
  label: string;
};

type DeckCard = CardItem & {
  key: string;
  matched: boolean;
};

const BASE_CARDS: CardItem[] = [
  { id: "chute", symbol: "⚠️", label: "Risque de chute" },
  { id: "incendie", symbol: "🔥", label: "Risque d'incendie" },
  { id: "chimique", symbol: "🧪", label: "Produit chimique" },
  { id: "electrique", symbol: "🔌", label: "Risque électrique" },
  { id: "charge", symbol: "📦", label: "Charge instable" },
  { id: "extincteur", symbol: "🧯", label: "Extincteur" },
];

function buildDeck(): DeckCard[] {
  const duplicated = BASE_CARDS.flatMap((c, i) => [
    { ...c, key: `${c.id}-a`, matched: false },
    { ...c, key: `${c.id}-b`, matched: false },
  ]);
  // Fisher–Yates shuffle
  for (let i = duplicated.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [duplicated[i], duplicated[j]] = [duplicated[j], duplicated[i]];
  }
  return duplicated;
}

export default function HazardMemory() {
  const [deck, setDeck] = useState<DeckCard[]>(() => buildDeck());
  const [flipped, setFlipped] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);

  const matchedCount = useMemo(
    () => deck.filter((c) => c.matched).length,
    [deck],
  );
  const totalPairs = BASE_CARDS.length;
  const progress = Math.round((matchedCount / (totalPairs * 2)) * 100);
  const allMatched = matchedCount === totalPairs * 2;

  useEffect(() => {
    if (flipped.length === 2) {
      setLocked(true);
      const [k1, k2] = flipped;
      const c1 = deck.find((c) => c.key === k1)!;
      const c2 = deck.find((c) => c.key === k2)!;
      const isMatch = c1.id === c2.id;
      const next = deck.map((c) =>
        c.key === k1 || c.key === k2
          ? { ...c, matched: isMatch ? true : c.matched }
          : c,
      );
      const timeout = setTimeout(() => {
        setDeck(next);
        setFlipped([]);
        setLocked(false);
      }, 650);
      setMoves((m) => m + 1);
      return () => clearTimeout(timeout);
    }
  }, [flipped, deck]);

  function onFlip(key: string) {
    if (locked) return;
    const card = deck.find((c) => c.key === key);
    if (!card || card.matched) return;
    if (flipped.includes(key)) return;
    if (flipped.length === 0) setFlipped([key]);
    else if (flipped.length === 1) setFlipped([flipped[0], key]);
  }

  function reset() {
    setDeck(buildDeck());
    setFlipped([]);
    setMoves(0);
    setLocked(false);
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-2 mb-1">
          <Badge className="badge-soft">Simulation</Badge>
          <Badge className="badge-soft">Jeu mémoire</Badge>
        </div>
        <CardTitle className="text-lg font-heading font-semibold">
          Jeu mémoire – Situations à risque
        </CardTitle>
        <CardDescription>
          Retournez les cartes et associez les paires liées à la prévention.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <Progress value={progress} />
        <div className="mt-2 text-sm text-muted-foreground">
          {matchedCount / 2} / {totalPairs} paires trouvées • {moves} coups
        </div>
        <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 gap-3 select-none">
          {deck.map((c) => {
            const isFaceUp = flipped.includes(c.key) || c.matched;
            return (
              <button
                key={c.key}
                onClick={() => onFlip(c.key)}
                aria-label={isFaceUp ? c.label : "Carte face cachée"}
                className={`relative aspect-square rounded-md border grid place-items-center text-2xl font-semibold transition-transform focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                  isFaceUp ? "bg-white" : "bg-primary/5 hover:bg-primary/10"
                } ${locked ? "cursor-wait" : "cursor-pointer"}`}
                disabled={locked || c.matched}
              >
                <span
                  className={`transition-transform ${isFaceUp ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
                >
                  {c.symbol}
                </span>
                {!isFaceUp && (
                  <span
                    className="absolute inset-0 rounded-md border-dashed border border-primary/40"
                    aria-hidden
                  />
                )}
              </button>
            );
          })}
        </div>

        {allMatched && (
          <div className="mt-4">
            <Alert className="border-green-500/50">
              <AlertTitle>Bravo !</AlertTitle>
              <AlertDescription>
                Vous avez trouvé toutes les paires de risques en {moves} coups.
              </AlertDescription>
            </Alert>
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
        </div>
      </CardFooter>
    </Card>
  );
}
