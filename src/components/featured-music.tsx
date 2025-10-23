'use client';

import Image from 'next/image';
import { MusicPlayer } from './music-player';

export function FeaturedMusic() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <p className="section-label mb-2">Featured Music</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Artist Portrait 1 */}
        <div className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-smooth hover-scale cursor-pointer group">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/generated/artist-portrait-1.png"
              alt="Luke Blackwood"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>

        {/* Artist Portrait 2 */}
        <div className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-smooth hover-scale cursor-pointer group">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/generated/artist-portrait-2.png"
              alt="Chloe Davis"
              fill
              className="object-cover group-hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>

        {/* Album Cover */}
        <div className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-smooth hover-scale cursor-pointer">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/generated/album-cover-1.png"
              alt="Midnight Echoes Album"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Music Visualizer */}
        <div className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-smooth hover-scale cursor-pointer">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/generated/music-visual-1.png"
              alt="Sound Waves"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Music Player Section */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <MusicPlayer />
        </div>
        <div className="bg-white rounded-xl p-6 shadow-card">
          <h4 className="text-sm font-semibold text-foreground mb-4">Up Next</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 cursor-pointer hover:bg-secondary/50 p-2 rounded-lg transition-colors">
              <div className="w-12 h-12 bg-secondary rounded-lg flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">Midnight Dreams</p>
                <p className="text-xs text-muted-foreground truncate">Luna Echo</p>
              </div>
              <span className="text-xs text-muted-foreground">3:21</span>
            </div>
            <div className="flex items-center space-x-3 cursor-pointer hover:bg-secondary/50 p-2 rounded-lg transition-colors">
              <div className="w-12 h-12 bg-secondary rounded-lg flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">Stellar Winds</p>
                <p className="text-xs text-muted-foreground truncate">Nova Symphony</p>
              </div>
              <span className="text-xs text-muted-foreground">4:05</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
