import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const VIDEO_URL = "https://cdn.builder.io/o/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2F89bf5066fb444077852e70c906deb222?alt=media&token=55ce4698-253e-495b-ade7-371715ec17d4&apiKey=d93d9a0ec7824aa1ac4d890a1f90a2ec";

export default function RpsVideoTranscript() {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <CardHeader>
        <div className="flex items-center gap-2 mb-1">
          <Badge className="badge-soft">Vidéo</Badge>
          <Badge className="badge-soft">Bien‑être</Badge>
          <Badge className="badge-soft">RPS</Badge>
        </div>
        <CardTitle className="text-lg font-heading font-semibold">Prévenir les RPS au quotidien</CardTitle>
        <CardDescription>Module bien‑être et santé au travail.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="bg-black/5 rounded-md overflow-hidden">
          <video src={VIDEO_URL} controls className="embed-frame" />
        </div>
        <div className="mt-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="transcript">
              <AccordionTrigger>Transcription</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p><strong>Sophie:</strong> Salut Alex ! Tout va bien ? Tu sembles un peu fatigué aujourd'hui.</p>
                  <p><strong>Alex:</strong> Oui, un peu... L'équipe est sous pression ces temps-ci. Beaucoup de projets, et j'ai l'impression que la tension monte.</p>
                  <p><strong>Sophie:</strong> Tu fais bien d'en parler. C'est justement ce qu'on essaie d'encourager avec la prévention des RPS : détecter les signes avant que ça déborde.</p>
                  <p><strong>Alex:</strong> C'est vrai que j'ai remarqué des petits signes : Camille parle moins que d'habitude, et Thomas reste tard le soir.</p>
                  <p><strong>Sophie:</strong> Ce sont souvent les premiers signaux : isolement, fatigue, irritabilité. Le plus important, c'est d'en parler calmement, sans jugement.</p>
                  <p><strong>Sophie:</strong> Tu peux commencer par un entretien bienveillant : "J'ai remarqué que tu semblais fatigué ces derniers temps, est-ce que tout va bien ?" Une simple question peut faire toute la différence.</p>
                  <p><strong>Alex:</strong> Oui, tu as raison. Parfois, on n'ose pas aborder le sujet par peur d'être intrusif.</p>
                  <p><strong>Sophie:</strong> Et pourtant, c'est un vrai acte de management. Montrer qu'on se soucie des personnes, c'est déjà prévenir les RPS.</p>
                  <p><strong>Alex:</strong> On pourrait instaurer un petit point hebdo "ressenti" à la fin de nos réunions ? Juste 5 minutes pour que chacun partage comment il se sent.</p>
                  <p><strong>Sophie:</strong> Excellente idée ! Ça développe la confiance et ça désamorce les tensions. Et tu peux aussi rappeler les ressources internes : RH, médecin du travail, numéro d'écoute...</p>
                  <p><strong>Sophie:</strong> Prévenir les risques psychosociaux, c'est avant tout une culture collective. Observer, écouter, agir - trois réflexes simples pour un environnement plus sain.</p>
                  <p><strong>Alex:</strong> Merci Sophie. Finalement, parler du bien-être, c'est aussi parler de performance.</p>
                  <p><strong>Sophie:</strong> Exactement ! Et FPSG est là pour accompagner chaque entreprise vers cette culture du bien-être durable.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">Extrait de démonstration – FPSG Digital Learning.</span>
      </CardFooter>
    </Card>
  );
}
