'use client';

import Image from 'next/image';

const artists = [
  {
    name: 'Luke Blackwood',
    title: 'Classical Pianist',
    image: '/generated/artist-portrait-1.png',
  },
  {
    name: 'Chloe Davis',
    title: 'Jazz Vocalist',
    image: '/generated/artist-portrait-2.png',
  },
  {
    name: 'Olivia Davis',
    title: 'Music Conductor',
    image: '/generated/artist-portrait-3.png',
  },
];

export function ArtistProfiles() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <p className="section-label mb-2">Featured Artists</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {artists.map((artist, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-smooth cursor-pointer group"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={artist.image}
                alt={artist.name}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {artist.name}
              </h3>
              <p className="text-sm text-muted-foreground">{artist.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
