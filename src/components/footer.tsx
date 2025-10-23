'use client';

import Link from 'next/link';
import { Music2, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Join Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            JOIN THE ECHO MUSIC FAMILY
          </h3>
          <p className="text-muted-foreground mb-6">
            Connect with artists and discover amazing music
          </p>
          <div className="flex items-center justify-center space-x-4">
            <a
              href="#"
              className="p-2 hover:bg-secondary rounded-full transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="#"
              className="p-2 hover:bg-secondary rounded-full transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="#"
              className="p-2 hover:bg-secondary rounded-full transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="#"
              className="p-2 hover:bg-secondary rounded-full transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
              Mobile
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/ios"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  iOS App
                </Link>
              </li>
              <li>
                <Link
                  href="/android"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Android App
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
              Discover
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/artists"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Artists
                </Link>
              </li>
              <li>
                <Link
                  href="/playlists"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Playlists
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Music2 className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">
                ECHO MUSIC
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Echo Music. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
