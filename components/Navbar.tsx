"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Classes", href: "#classes" },
  { name: "Coaches", href: "#coaches" },
  { name: "Schedule", href: "#schedule" },
  { name: "Private Training", href: "#private-training" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Combat Studios"
            className="h-10 w-10 rounded-lg"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://members.combat-studios.com/login/"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Member Login
          </a>
          <a href="https://members.combat-studios.com/register/">
            <Button className="bg-gradient-to-r from-[#8b1a1a] to-[#4a7c3e] hover:from-[#6e1414] hover:to-[#3a6230] text-white border-0">
              Book Free Trial
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-border/40 bg-background"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="https://members.combat-studios.com/login/"
                className="text-base font-medium text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Member Login
              </Link>
              <a href="https://members.combat-studios.com/register/" className="w-full">
                <Button className="bg-gradient-to-r from-[#8b1a1a] to-[#4a7c3e] hover:from-[#6e1414] hover:to-[#3a6230] text-white border-0 w-full">
                  Book Free Trial
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
