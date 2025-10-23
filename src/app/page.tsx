export const dynamic = 'force-dynamic'

import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { FeaturedMusic } from '@/components/featured-music';
import { ArtistProfiles } from '@/components/artist-profiles';
import { ContentHub } from '@/components/content-hub';
import { Footer } from '@/components/footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedMusic />
        <ArtistProfiles />
        <ContentHub />
      </main>
      <Footer />
    </div>
  );
}