'use client';

import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { useState } from 'react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-smooth w-full">
      {/* Album/Track Info */}
      <div className="text-center mb-4">
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
          Now Playing
        </p>
        <h4 className="text-base font-semibold text-foreground">Ocean Breeze</h4>
        <p className="text-sm text-muted-foreground">Aurora Sounds</p>
      </div>

      {/* Waveform Visualization Placeholder */}
      <div className="h-16 bg-secondary/50 rounded-lg mb-4 flex items-center justify-center">
        <div className="flex items-end space-x-1 h-full py-2">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-primary/40 rounded-full transition-all"
              style={{
                height: `${Math.random() * 80 + 20}%`,
                opacity: isPlaying ? 0.8 : 0.3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="h-1 bg-secondary rounded-full overflow-hidden">
          <div className="h-full bg-primary w-1/3 transition-all" />
        </div>
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>1:24</span>
          <span>3:45</span>
        </div>
      </div>

      {/* Player Controls */}
      <div className="flex items-center justify-center space-x-4">
        <button
          className="p-2 hover:bg-secondary rounded-full transition-colors"
          aria-label="Previous track"
        >
          <SkipBack className="w-5 h-5 text-foreground" />
        </button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-3 bg-primary hover:bg-primary/90 rounded-full transition-smooth shadow-button hover-lift"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white fill-white" />
          ) : (
            <Play className="w-6 h-6 text-white fill-white" />
          )}
        </button>
        <button
          className="p-2 hover:bg-secondary rounded-full transition-colors"
          aria-label="Next track"
        >
          <SkipForward className="w-5 h-5 text-foreground" />
        </button>
      </div>
    </div>
  );
}
