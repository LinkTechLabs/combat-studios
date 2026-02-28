"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, Snowflake } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" />
        {/* TODO: Replace with real Combat Studios hero photo — place in /public/hero.jpg */}
        <div
            className="w-full h-full bg-cover bg-center bg-no-repeat grayscale"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop')" }}
        />
      </div>

      <div className="container relative z-20 px-4 text-center flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white/90 mb-4"
        >
          <Snowflake className="w-4 h-4 text-[#4a7c3e]" />
          <span>Premium air-conditioned training facility</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase text-white max-w-4xl"
        >
          Premier MMA & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b1a1a] to-[#4a7c3e]">Fight Studio</span> in Bangkok
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-300 max-w-2xl font-light"
        >
          Train, Film, and Level Up in comfort. Join the community where champions are made and content is created.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <a href="#schedule">
            <Button size="lg" className="bg-gradient-to-r from-[#8b1a1a] to-[#4a7c3e] hover:from-[#6e1414] hover:to-[#3a6230] text-white border-0 text-lg h-12 px-8">
              View Schedule
            </Button>
          </a>
          <a href="https://members.combat-studios.com/register/">
            <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 text-lg h-12 px-8 group">
              Book Free Trial <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
