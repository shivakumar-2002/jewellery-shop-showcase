import React from 'react';
import { Gem, Home } from 'lucide-react';
import { PageRoute } from '../types';

interface NotFoundProps {
  onNavigate: (page: PageRoute) => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 sm:py-32 text-center space-y-6">
      <div className="w-16 h-16 mx-auto rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800">
        <Gem className="w-8 h-8" />
      </div>
      <div className="space-y-2">
        <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
          Error 404
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
          Page Not Found
        </h1>
        <p className="text-sm text-stone-600">
          The jewellery showroom page you are looking for does not exist or may have moved.
        </p>
      </div>

      <div className="pt-4">
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-stone-900 hover:bg-stone-800 text-stone-100 font-semibold text-sm transition-colors shadow-xs"
        >
          <Home className="w-4 h-4 text-amber-400" />
          <span>Return to Homepage</span>
        </button>
      </div>
    </div>
  );
};
