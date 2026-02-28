"use client";

import Link from "next/link";
import { Instagram, Facebook, MapPin } from "lucide-react";

const navLinks = [
  { name: "Classes", href: "#classes" },
  { name: "Schedule", href: "#schedule" },
  { name: "Private Training", href: "#private-training" },
  { name: "Location", href: "#location" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Combat Studios"
                className="h-9 w-9 rounded-lg"
              />
              <span className="text-lg font-bold tracking-tighter uppercase italic text-white">Combat Studios</span>
            </Link>
            <p className="text-zinc-500 mt-4 text-sm">
              Premier MMA & Fight Studio in Bangkok. Train, Film, and Level Up in comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-zinc-500 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Visit Us</h4>
            <div className="flex items-start gap-2 text-zinc-500 text-sm mb-4">
              <MapPin className="w-4 h-4 mt-0.5 text-primary" />
              <span>
                Ambassador Hotel, 3rd Floor<br />
                171 Sukhumvit Soi 11<br />
                Bangkok, Thailand
              </span>
            </div>
            <div className="flex gap-3">
              <a 
                href="https://instagram.com/combatstudiostv" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-zinc-900 text-zinc-400 hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/combatstudiosbkk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-zinc-900 text-zinc-400 hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} Combat Studios. All rights reserved.
          </p>
          <p className="text-zinc-600 text-sm">
            Bangkok&apos;s premium air-conditioned fight studio.
          </p>
        </div>
      </div>
    </footer>
  );
}
