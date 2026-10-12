import React from 'react';
import { GalleryGrid } from '../components/GalleryGrid';
import { WorkshopServicesCard } from '../components/WorkshopServicesCard';
import { GalleryItem } from '../types';
import { BUSINESS_CONFIG, LOCAL_PLACEHOLDER_PHOTOS } from '../config/business';

interface CollectionsProps {
  onSelectPhoto: (photo: GalleryItem) => void;
  photos?: GalleryItem[];
}

export const Collections: React.FC<CollectionsProps> = ({
  onSelectPhoto,
  photos = LOCAL_PLACEHOLDER_PHOTOS,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-red-800 bg-amber-100 px-3 py-1 rounded-xs border border-amber-300">
          Established {BUSINESS_CONFIG.establishedYear} • 91.6 KDM Hallmark With Guarantee
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
          91.6 Gold Ornaments &amp; Jewellery Gallery
        </h1>
        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          Explore genuine 22K 91.6 hallmarked gold ornaments from <strong className="text-red-800">{BUSINESS_CONFIG.shopName}</strong> (Prop. {BUSINESS_CONFIG.proprietorName}). 
          Total gold jewellery including bridal sets, temple kasu harams, kadas, bangles, jhumkas, and mangalsutras made to order with 91.6 KDM guarantee.
        </p>
      </div>

      {/* Main Gallery Grid with Category Filters */}
      <GalleryGrid
        photos={photos}
        onSelectPhoto={onSelectPhoto}
        showCategoryFilters={true}
      />

      {/* Direct Workshop Service Card */}
      <WorkshopServicesCard className="mt-8" />
    </div>
  );
};
