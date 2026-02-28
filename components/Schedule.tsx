"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const schedule = [
  {
    day: "Monday",
    slots: [
      { time: "17:00 – 18:00", title: "Kickboxing (Sparring)", type: "group" },
      { time: "18:00 – 19:00", title: "Wrestling", type: "group" },
      { time: "19:00 – 20:00", title: "MMA", type: "group" },
    ]
  },
  {
    day: "Tuesday",
    slots: [
      { time: "17:00 – 18:00", title: "Kickboxing", type: "group" },
      { time: "18:00 – 19:00", title: "Brazilian Jiu-Jitsu", type: "group" },
      { time: "19:00 – 20:00", title: "MMA", type: "group" },
    ]
  },
  {
    day: "Wednesday",
    slots: [
      { time: "17:00 – 18:00", title: "Kickboxing", type: "group" },
      { time: "18:00 – 19:00", title: "Wrestling", type: "group" },
      { time: "19:00 – 20:00", title: "Team Run", type: "group" },
    ]
  },
  {
    day: "Thursday",
    slots: [
      { time: "17:00 – 18:00", title: "Kickboxing", type: "group" },
      { time: "18:00 – 19:00", title: "Brazilian Jiu-Jitsu", type: "group" },
      { time: "19:00 – 20:00", title: "MMA", type: "group" },
    ]
  },
  {
    day: "Friday",
    slots: [
      { time: "17:00 – 18:00", title: "MMA Striking", type: "group" },
      { time: "18:00 – 19:00", title: "Wrestling", type: "group" },
      { time: "19:00 – 20:00", title: "MMA Grappling", type: "group" },
    ]
  },
];

export default function Schedule() {
  const [activeDay, setActiveDay] = useState("Monday");

  return (
    <section id="schedule" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-4 text-white">
            Weekly Schedule
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Group classes run Monday – Friday, 5PM – 8PM. Private training available by appointment.
          </p>
        </div>

        {/* Day Selection */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {schedule.map((day) => (
            <Button
              key={day.day}
              variant={activeDay === day.day ? "default" : "outline"}
              onClick={() => setActiveDay(day.day)}
              className={cn(
                "min-w-[100px]",
                activeDay === day.day 
                  ? "bg-primary hover:bg-primary/90 text-white border-0" 
                  : "bg-transparent text-zinc-400 border-zinc-800 hover:text-white hover:bg-zinc-900"
              )}
            >
              {day.day}
            </Button>
          ))}
        </div>

        {/* Schedule Content */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <div className="space-y-4">
                {schedule
                  .find((d) => d.day === activeDay)
                  ?.slots.map((slot, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-zinc-950/50 border border-zinc-800/50 hover:border-primary/30 transition-colors"
                    >
                      <div className="mb-2 sm:mb-0">
                        <span className="text-lg font-bold text-white block">{slot.time}</span>
                        <span className="text-sm text-zinc-500 uppercase tracking-wider">Group Class</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-lg font-medium text-primary">
                          {slot.title}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
