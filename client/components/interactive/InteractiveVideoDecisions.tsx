import React, { useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Maximize2, Minimize2 } from "lucide-react";

type Choice = {
  id: string;
  label: string;
  correct: boolean;
  feedback: string;
  rewind?: number; // seconds to rewind on incorrect
};

type Hotspot = {
  id: string;
  x: number; // left percent 0..100
  y: number; // top percent 0..100
  w: number; // width percent 0..100
  h: number; // height percent 0..100
  label: string;
  correct: boolean;
  feedback: string;
  rewind?: number;
};

type DecisionPoint = {
  t: number; // seconds
  prompt: string;
  choices?: Choice[];
  hotspots?: Hotspot[];
};

interface InteractiveVideoDecisionsProps {
  src: string;
  poster?: string;
  title: string;
  description?: string;
  points: DecisionPoint[];
}

export default function InteractiveVideoDecisions({ src, poster, title, description = "Faites les bons choix au bon moment.", points }: InteractiveVideoDecisionsProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [currentIdx, setCurrentIdx] = useState<number>(-1);
  const [answered, setAnswered] = useState<Record<number, boolean>>({});
  const [lastFeedback, setLastFeedback] = useState<{ ok: boolean; msg: string } | null>(null);
  const [isFs, setIsFs] = useState(false);

  const total = points.length;
  const correctCount = useMemo(() => Object.values(answered).filter(Boolean).length, [answered]);
  const progress = Math.round((correctCount / total) * 100);

  // Pause at decision timestamps
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => {
      if (currentIdx >= 0) return; // overlay already open
      const t = v.currentTime;
      const nextIdx = points.findIndex((p, i) => !answered[i] && Math.floor(t) >= Math.floor(p.t));
      if (nextIdx !== -1) {
        v.pause();
        setCurrentIdx(nextIdx);
        setLastFeedback(null);
      }
    };
    v.addEventListener("timeupdate", onTime);
    return () => v.removeEventListener("timeupdate", onTime);
  }, [points, answered, currentIdx]);

  function handleChoice(c: Choice) {
    const v = videoRef.current;
    if (!v) return;
    if (c.correct) {
      setAnswered((a) => ({ ...a, [currentIdx]: true }));
      setLastFeedback({ ok: true, msg: c.feedback });
      // small delay then resume
      window.setTimeout(() => {
        setCurrentIdx(-1);
        setLastFeedback(null);
        v.play();
      }, 900);
    } else {
      setLastFeedback({ ok: false, msg: c.feedback });
      if (typeof c.rewind === "number" && c.rewind > 0) {
        v.currentTime = Math.max(0, v.currentTime - c.rewind);
      }
    }
  }

  async function toggleFullscreen() {
    const v = videoRef.current;
    if (!v) return;
    try {
      if (!document.fullscreenElement) {
        await v.requestFullscreen();
        setIsFs(true);
      } else {
        await document.exitFullscreen();
        setIsFs(false);
      }
    } catch {}
  }

  function restart() {
    const v = videoRef.current;
    setAnswered({});
    setCurrentIdx(-1);
    setLastFeedback(null);
    if (v) {
      v.currentTime = 0;
      v.play();
    }
  }

  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <CardHeader>
        <div className="flex items-center gap-2 mb-1">
          <Badge className="badge-soft">Vidéo interactive</Badge>
          <Badge className="badge-soft">Réagir au bon moment</Badge>
        </div>
        <CardTitle className="text-lg font-heading font-semibold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <Progress value={progress} />
        <div className="mt-3 text-sm text-muted-foreground">{correctCount} / {total} décisions validées</div>

        <div className="relative mt-4">
          <video ref={videoRef} className="w-full rounded-[8px]" controls playsInline poster={poster}>
            <source src={src} type="video/mp4" />
          </video>

          {currentIdx >= 0 && (
            <div className="absolute inset-0 bg-black/60 text-white grid place-items-center p-4">
              <div className="relative w-full max-w-5xl">
                <div className="text-sm text-white/80">Décision {currentIdx + 1} / {total}</div>
                <div className="mt-2 text-lg font-semibold">{points[currentIdx].prompt}</div>

                {/* Hotspots mode */}
                {points[currentIdx].hotspots && (
                  <div className="mt-3 text-sm text-white/80">Cliquez sur la zone adéquate dans la vidéo.</div>
                )}

                <div className="relative mt-3">
                  {/* Mirror the video surface for hotspot clicks */}
                  {points[currentIdx].hotspots ? (
                    <div className="relative">
                      <video className="w-full rounded-[8px] opacity-30" muted playsInline poster={poster}>
                        <source src={src} type="video/mp4" />
                      </video>
                      {points[currentIdx].hotspots!.map(h => (
                        <button
                          key={h.id}
                          aria-label={h.label}
                          onClick={() => handleChoice({ id: h.id, label: h.label, correct: h.correct, feedback: h.feedback, rewind: h.rewind })}
                          style={{ left: `${h.x}%`, top: `${h.y}%`, width: `${h.w}%`, height: `${h.h}%` }}
                          className={`absolute border-2 rounded-[6px] transition focus:outline-none focus-visible:ring-2 ${h.correct ? "border-green-400/70 hover:bg-green-400/10" : "border-primary/70 hover:bg-primary/10"}`}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="mt-4 grid gap-2 max-w-xl">
                      {points[currentIdx].choices?.map((c) => (
                        <Button key={c.id} onClick={() => handleChoice(c)} className="justify-start">
                          {c.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>

                {lastFeedback && (
                  <div className="mt-3 max-w-xl" aria-live="polite">
                    {lastFeedback.ok ? (
                      <Alert className="border-green-500/50">
                        <AlertTitle>Bon choix</AlertTitle>
                        <AlertDescription>{lastFeedback.msg}</AlertDescription>
                      </Alert>
                    ) : (
                      <Alert variant="destructive">
                        <AlertTitle>Ajustez votre action</AlertTitle>
                        <AlertDescription>{lastFeedback.msg}</AlertDescription>
                      </Alert>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">Extrait de démonstration – FPSG Digital Learning.</span>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={restart}>Recommencer</Button>
          <Button variant="outline" onClick={toggleFullscreen} aria-label={isFs ? "Quitter le plein écran" : "Plein écran"}>
            {isFs ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
