'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="relative w-full h-[400px] bg-accent rounded-2xl overflow-hidden shadow-card">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/generated/hero-violin-artist.png"
            alt="Elegant violinist performing"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/70 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col justify-center px-8 md:px-12 lg:px-16 max-w-2xl">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            WHERE SOUND
            <br />
            MEETS SOUL
          </h1>
          <p className="text-white/90 text-base md:text-lg mb-6 max-w-md">
            Experience the best contemporary music for your journey
          </p>
          <button className="inline-flex items-center space-x-2 bg-white text-accent px-6 py-3 rounded-full font-medium hover:bg-white/95 transition-smooth hover-lift shadow-button w-fit">
            <span>Explore Music</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
