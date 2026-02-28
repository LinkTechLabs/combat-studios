"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Mail, Instagram, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-8 text-white">
              Get In Touch
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Ready to start your journey? Contact us for membership rates, private training availability, or just to say hello.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-white font-bold mb-1">Visit Us</h3>
                  <p className="text-zinc-400">
                    Ambassador Hotel, 3rd Floor<br />
                    171 Sukhumvit Soi 11<br />
                    Bangkok, Thailand
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-white font-bold mb-1">Email Us</h3>
                  <p className="text-zinc-400">info@combat-studios.com {/* TODO: Verify this is the correct contact email with CS */}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://instagram.com/combatstudiostv" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-900 text-white hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/combatstudiosbkk" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-900 text-white hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-900 p-6 md:p-8 rounded-2xl border border-zinc-800">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              // TODO: Wire to Formspree or Resend — add action="https://formspree.io/f/YOUR_FORM_ID" to form tag
              alert("Message sent! We'll be in touch soon.");
            }}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-zinc-400">Name</label>
                <Input id="name" placeholder="Your name" className="bg-zinc-950 border-zinc-800 text-white" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" className="bg-zinc-950 border-zinc-800 text-white" />
              </div>
              <div className="space-y-2">
                <label htmlFor="goal" className="text-sm font-medium text-zinc-400">Goal</label>
                <select className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="">Select your goal</option>
                  <option value="membership">Membership Inquiry</option>
                  <option value="private">Private Training</option>
                  <option value="dropin">Drop-in Class</option>
                  <option value="filming">Filming / Content Creation</option>
                </select>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-4">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Map Embed Placeholder */}
        {/* Ambassador Hotel Bangkok — 171 Sukhumvit Soi 11 */}
        <div className="mt-12 h-[400px] rounded-2xl overflow-hidden border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-500">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.7866419421384!2d100.5525273116543!3d13.746403986592136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ee3b731982f%3A0x6973903357134603!2sAmbassador%20Hotel%20Bangkok!5e0!3m2!1sen!2sth!4v1716821234567!5m2!1sen!2sth" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
