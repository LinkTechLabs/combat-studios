"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Snowflake, Clock, Target, Users } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Personalized Training",
    description: "Custom programs tailored to your goals, skill level, and schedule."
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Morning and afternoon slots available. Train when it works for you."
  },
  {
    icon: Users,
    title: "1-on-1 Attention",
    description: "Undivided focus from experienced coaches to accelerate your progress."
  },
  {
    icon: Snowflake,
    title: "Climate Controlled",
    description: "Train in premium air conditioning. No excuses, just results."
  }
];

export default function PrivateTraining() {
  return (
    <section id="private-training" className="py-20 bg-zinc-950 relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#8b1a1a]/20 to-[#4a7c3e]/20 rounded-full blur-3xl opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4"
            >
              Accelerate Your Progress
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-6 text-white"
            >
              Private Training
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 text-lg mb-8"
            >
              Whether you&apos;re preparing for competition, learning the basics, or filming content for your audience, our private sessions give you the focused attention you need to reach your goals faster.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <a href="https://members.combat-studios.com/register/">
                <Button size="lg" className="bg-gradient-to-r from-[#8b1a1a] to-[#4a7c3e] hover:from-[#6e1414] hover:to-[#3a6230] text-white border-0">
                  Book Private Session
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-primary/30 transition-colors"
              >
                <benefit.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-zinc-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
