"use client";

import { Video, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Users,
    title: "Community Driven",
    description: "Join a supportive community of fighters and fitness enthusiasts."
  },
  {
    icon: Video,
    title: "Content Friendly",
    description: "Perfect lighting and space designed for creators to film their progress."
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Ambassador Hotel, 3rd Floor — Sukhumvit Soi 11, Bangkok. Easy BTS access from Nana or Asok."
  }
];

export default function About() {
  return (
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-4">
            The Studio
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            More than just a gym. We are a content-forward fighting facility in the heart of Bangkok.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-full bg-zinc-800 text-primary">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
