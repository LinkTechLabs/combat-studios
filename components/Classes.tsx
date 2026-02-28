"use client";

import { Swords, Dumbbell, Flame, UserPlus, Trophy, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const classes = [
  {
    title: "MMA",
    icon: Swords,
    description: "Mix it all together. Striking, grappling, and cage control."
  },
  {
    title: "Jiu Jitsu",
    icon: UserPlus,
    description: "The gentle art. Ground fighting, submissions, and positional control."
  },
  {
    title: "Kickboxing",
    icon: Flame,
    description: "High energy striking. Punches, kicks, knees, and elbows."
  },
  {
    title: "Wrestling",
    icon: Trophy,
    description: "Takedowns and control. The foundation of MMA dominance."
  },
  {
    title: "Open Mat",
    icon: Dumbbell,
    description: "Free time to drill, spar, or work on your conditioning."
  }
];

export default function Classes() {
  return (
    <section id="classes" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-4 text-white">
            Our Classes
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            World-class instruction in all major combat sports disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((item, index) => (
            <Card key={index} className="group relative overflow-hidden bg-zinc-900 border-zinc-800 hover:border-primary/50 transition-colors">
              <CardHeader>
                <item.icon className="w-10 h-10 text-primary mb-2" />
                <CardTitle className="text-2xl font-bold text-white">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400 mb-6">{item.description}</p>
                <Button variant="link" className="p-0 h-auto text-primary group-hover:text-white transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
