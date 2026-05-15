"use client";

import React, { useRef } from "react";
import { Avatar } from "@heroui/react";
import { LuQuote, LuArrowLeft, LuArrowRight, LuStar } from "react-icons/lu";

const Testimonial = () => {
  const scrollRef = useRef(null);

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Adventure Enthusiast",
      content:
        "Odyssey transformed my perspective on travel. The attention to detail and curated locations made my trip to the Amalfi Coast absolutely seamless.",
      image: "https://i.pravatar.cc/150?u=sarah",
      rating: 5,
    },
    {
      name: "Marcus Chen",
      role: "Digital Nomad",
      content:
        "The best travel platform I've used in years. The interface is clean, and the booking process is incredibly efficient. Highly recommended for travelers.",
      image: "https://i.pravatar.cc/150?u=marcus",
      rating: 5,
    },
    {
      name: "Elena Rodriguez",
      role: "Luxury Traveler",
      content:
        "Finding unique, high-end stays used to be a chore until I found Odyssey. Their staff picks are consistently world-class and breathtaking.",
      image: "https://i.pravatar.cc/150?u=elena",
      rating: 4,
    },
    {
      name: "David Park",
      role: "Cultural Explorer",
      content:
        "The deep integration of local insights sets Odyssey apart. I felt like a local in Kyoto thanks to their curated destination guides.",
      image: "https://i.pravatar.cc/150?u=david",
      rating: 5,
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-sky-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sky-900">
              <div className="h-1 w-12 bg-sky-900" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]">
                Testimonials
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 uppercase tracking-tighter leading-none">
              Voices of Our <br className="md:hidden" /> Explorers
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-400 hover:bg-sky-900 hover:text-white transition-all duration-200 active:scale-95 shadow-sm"
            >
              <LuArrowLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-400 hover:bg-sky-900 hover:text-white transition-all duration-200 active:scale-95 shadow-sm"
            >
              <LuArrowRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="grid grid-flow-col auto-cols-[100%] md:auto-cols-[calc(50%-16px)] lg:auto-cols-[calc(33.333%-22px)] gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t, index) => (
            <div key={index} className="snap-center h-full">
              <div className="group relative bg-white p-10 rounded-2xl border border-sky-100 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-900/10 hover:scale-[1.02] h-full flex flex-col justify-between">
                <div className="absolute top-8 right-10 text-sky-50 group-hover:text-sky-100 transition-colors duration-300 pointer-events-none">
                  <LuQuote size={40} />
                </div>

                <div className="relative z-10 space-y-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <LuStar
                        key={i}
                        size={16}
                        className={
                          i < t.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-sky-100"
                        }
                      />
                    ))}
                  </div>

                  <p className="text-lg font-medium text-zinc-600 leading-relaxed pr-10">
                    "{t.content}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-sky-50 transition-colors group-hover:border-sky-100">
                    <Avatar className="w-11 h-11 border-2 border-white shadow-md ring-1 ring-sky-100 group-hover:ring-sky-900/30 transition-all object-cover rounded-xl">
                      <Avatar.Image alt={t.name} src={t.image} />
                      <Avatar.Fallback className="bg-sky-50 text-sky-900">
                        {t.name.charAt(0)}
                      </Avatar.Fallback>
                    </Avatar>

                    <div className="overflow-hidden">
                      <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-tight truncate">
                        {t.name}
                      </h4>

                      <p className="text-[10px] font-bold text-sky-600 uppercase tracking-widest truncate group-hover:text-sky-900 transition-colors">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
