'use client';

import { Upload, Settings, BarChart3, Users } from 'lucide-react';

const tools = [
  {
    icon: Upload,
    title: 'Upload Music',
    description: 'Share your tracks with the world',
  },
  {
    icon: Settings,
    title: 'Artist Tools',
    description: 'Manage your creative content',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description: 'Track your performance',
  },
  {
    icon: Users,
    title: 'Connect',
    description: 'Build your fanbase',
  },
];

export function ContentHub() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <p className="section-label mb-2">Manage Your Creative Hub</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-smooth cursor-pointer hover-lift group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground mb-1">
                    {tool.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {tool.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
