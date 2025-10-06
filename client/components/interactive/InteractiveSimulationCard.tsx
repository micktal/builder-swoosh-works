import React, { useEffect, useMemo, useRef, useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ExternalLink, Maximize2, Play } from "lucide-react";

interface InteractiveSimulationCardProps {
  title: string;
  description: string;
  src: string;
  objectives?: string[];
  badges?: string[];
}

export function InteractiveSimulationCard({ title, description, src, objectives = [], badges = ["Simulation", "Communication"] }: InteractiveSimulationCardProps) {
  const [mountEmbed, setMountEmbed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setMountEmbed(true);
          }
        });
      },
      { rootMargin: "200px 0px", threshold: 0.1 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const openNewTabHref = useMemo(() => src, [src]);

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {badges.map((b) => (
            <Badge key={b} variant="secondary" className="badge-soft">
              {b}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-lg font-heading font-semibold">{title}</CardTitle>
        <CardDescription className="mt-1 text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div ref={containerRef} className="relative">
          <AspectRatio ratio={16 / 9} className="bg-black/5 rounded-[8px] overflow-hidden">
            {!mountEmbed && (
              <div className="absolute inset-0 grid place-items-center">
                <div className="w-full h-full absolute inset-0">
                  <Skeleton className="w-full h-full" />
                </div>
                <Button
                  onClick={() => setMountEmbed(true)}
                  className="relative z-10 inline-flex items-center gap-2 bg-[#006B46] hover:bg-[#006B46]/90"
                >
                  <Play className="h-4 w-4" />
                  Lancer la simulation
                </Button>
              </div>
            )}
            {mountEmbed && (
              <iframe
                src={src}
                title={title}
                className="absolute inset-0 w-full h-full"
                frameBorder={0}
                allowFullScreen
                loading="lazy"
                onLoad={() => setLoaded(true)}
              />
            )}
          </AspectRatio>
          {!loaded && mountEmbed && (
            <div className="pointer-events-none absolute inset-0">
              <Skeleton className="w-full h-full" />
            </div>
          )}
        </div>
        {objectives.length > 0 && (
          <div className="mt-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="objectifs">
                <AccordionTrigger>Objectifs pédagogiques</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {objectives.map((obj) => (
                      <li key={obj}>{obj}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex items-center justify-between gap-3">
        <span className="text-sm text-muted-foreground">Extrait de démonstration – FPSG Digital Learning.</span>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={() => setOpen(true)} className="hidden sm:inline-flex">
            <Maximize2 className="h-4 w-4 mr-2" /> Plein écran
          </Button>
          <a href={openNewTabHref} target="_blank" rel="noreferrer" className="inline-flex items-center text-primary text-sm font-medium">
            Ouvrir <ExternalLink className="h-4 w-4 ml-1" />
          </a>
        </div>
      </CardFooter>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 max-w-[1000px]">
          <DialogHeader className="px-4 pt-4">
            <DialogTitle className="text-base">{title}</DialogTitle>
          </DialogHeader>
          <div className="px-4 pb-4">
            <AspectRatio ratio={16 / 9} className="bg-black/5 rounded-[8px] overflow-hidden">
              {/* Mount a second iframe instance inside the dialog when opened for best UX */}
              {open && (
                <iframe
                  src={src}
                  title={`${title} (plein écran)`}
                  className="absolute inset-0 w-full h-full"
                  frameBorder={0}
                  allowFullScreen
                />
              )}
            </AspectRatio>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
}

export default InteractiveSimulationCard;
