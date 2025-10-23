'use client';

import Link from 'next/link';
import { Search, Music2 } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Music2 className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold tracking-tight text-foreground">
              ECHO MUSIC
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/artists"
              className="text-sm font-medium uppercase tracking-wide text-foreground hover:text-primary transition-colors"
            >
              Artists
            </Link>
            <Link
              href="/music"
              className="text-sm font-medium uppercase tracking-wide text-foreground hover:text-primary transition-colors"
            >
              Music
            </Link>
            <Link
              href="/news"
              className="text-sm font-medium uppercase tracking-wide text-foreground hover:text-primary transition-colors"
            >
              News
            </Link>
            <Link
              href="/events"
              className="text-sm font-medium uppercase tracking-wide text-foreground hover:text-primary transition-colors"
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium uppercase tracking-wide text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Search Icon */}
          <button
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Search"
          >
            <Search className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </nav>
  );
}
