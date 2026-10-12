import React, { useState } from 'react';
import { Maximize2, Sparkles } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryGridProps {
  photos: GalleryItem[];
  onSelectPhoto: (photo: GalleryItem) => void;
  initialCategory?: string;
  limit?: number;
  showCategoryFilters?: boolean;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  photos,
  onSelectPhoto,
  initialCategory = 'All',
  limit,
  showCategoryFilters = true,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);

  // Extract unique categories present in the photo list
  const availableCategories = ['All', ...Array.from(new Set(photos.map((p) => p.category)))];

  const filteredPhotos = photos
    .filter((photo) => selectedCategory === 'All' || photo.category === selectedCategory)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  const displayedPhotos = limit ? filteredPhotos.slice(0, limit) : filteredPhotos;

  return (
    <div className="space-y-8">
      {/* Category Filter Pills */}
      {showCategoryFilters && availableCategories.length > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pb-2">
          {availableCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-sm text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 border ${
                  isActive
                    ? 'bg-stone-900 text-stone-100 border-stone-900 font-semibold shadow-xs'
                    : 'bg-white text-stone-700 hover:text-stone-950 border-stone-200 hover:border-amber-300'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      )}

      {/* Photo Grid */}
      {displayedPhotos.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-sm border border-stone-200 p-8">
          <p className="text-stone-500 text-sm">
            No jewellery photos found in this category yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedPhotos.map((photo) => (
            <article
              key={photo.id}
              onClick={() => onSelectPhoto(photo)}
              className="group cursor-pointer bg-white rounded-sm border border-stone-200 hover:border-amber-400/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image Box */}
              <div className="relative aspect-4/3 w-full bg-stone-100 overflow-hidden">
                <img
                  src={photo.imageUrl}
                  alt={photo.altText}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xs bg-stone-900/85 backdrop-blur-xs text-amber-300 text-[10px] uppercase font-semibold tracking-wider">
                    {photo.category}
                  </span>
                </div>

                {/* Featured Badge if set */}
                {photo.isFeatured && (
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-xs bg-amber-500/90 text-stone-950 text-[10px] font-bold tracking-wider">
                      <Sparkles className="w-3 h-3" />
                      <span>Signature</span>
                    </span>
                  </div>
                )}

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-stone-900/90 text-stone-100 text-xs font-medium backdrop-blur-xs">
                    <Maximize2 className="w-3.5 h-3.5 text-amber-300" />
                    <span>View Detail</span>
                  </span>
                </div>
              </div>

              {/* Photo Caption / Details */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-medium text-stone-900 group-hover:text-amber-800 transition-colors line-clamp-1">
                    {photo.title}
                  </h3>
                  {photo.description && (
                    <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
                      {photo.description}
                    </p>
                  )}
                </div>

                <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                  <span className="text-amber-900 font-bold">91.6 Gold Ornament</span>
                  <span className="group-hover:underline">Click to expand</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};
