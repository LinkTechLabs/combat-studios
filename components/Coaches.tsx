"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const coaches = [
  {
    name: "Dante Brown",
    title: "Head Coach",
    disciplines: ["MMA", "Muay Thai", "BJJ"],
    bio: "Professional MMA fighter with 11 pro fights. Former WXC Lightweight Champion and current EFC MMA Champion. UFC Fight Pass competitor and BJJ Brown Belt trained under James Grey, Brian Fornasiero, and Danny Berry — with over 10 years of competition experience.",
    credentials: ["EFC MMA Champion", "UFC Fight Pass Competitor", "BJJ Brown Belt"],
    rate: "1,800 THB / hour",
    image: "/coaches/dante.png",
  },
  {
    name: "Tommy Hayden",
    title: "UFC Veteran & Wrestling Coach",
    disciplines: ["Wrestling", "MMA"],
    bio: "UFC veteran and American State Wrestling champion. Tommy brings elite-level grappling and cage experience to every session — whether you're training for competition or learning from the ground up.",
    credentials: ["UFC Veteran", "American State Wrestling Champion"],
    rate: "3,000 THB / hour",
    image: "/coaches/tommy.png",
  },
];

export default function Coaches() {
  return (
    <section id="coaches" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-4 text-white"
          >
            Our Coaches
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 max-w-2xl mx-auto text-lg"
          >
            Learn from champions. Every session, every round — coached by professionals who've competed at the highest levels.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {coaches.map((coach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="bg-zinc-900 border-zinc-800 overflow-hidden h-full group">
                {/* Coach Photo */}
                <div className="relative h-72 bg-zinc-800 overflow-hidden">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {/* Disciplines overlay */}
                  <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                    {coach.disciplines.map((d) => (
                      <span
                        key={d}
                        className="px-2 py-0.5 rounded-full bg-gradient-to-r from-[#8b1a1a] to-[#4a7c3e] text-white text-xs font-bold uppercase tracking-wide"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{coach.name}</h3>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b1a1a] to-[#4a7c3e] font-semibold text-sm mb-4 uppercase tracking-wide">
                    {coach.title}
                  </p>
                  <p className="text-zinc-400 text-sm mb-5 leading-relaxed">{coach.bio}</p>

                  {/* Credentials */}
                  <div className="space-y-2 mb-5">
                    {coach.credentials.map((cred) => (
                      <div key={cred} className="flex items-center gap-2 text-sm text-zinc-300">
                        <Award className="w-4 h-4 text-[#4a7c3e] flex-shrink-0" />
                        <span>{cred}</span>
                      </div>
                    ))}
                  </div>

                  {/* Rate */}
                  <div className="pt-4 border-t border-zinc-800">
                    <span className="text-zinc-500 text-xs uppercase tracking-wider">Private Training</span>
                    <p className="text-white font-bold mt-1">{coach.rate}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
