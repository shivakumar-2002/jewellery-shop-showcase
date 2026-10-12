import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { GalleryItem } from '../types';
import { BUSINESS_CONFIG } from '../config/business';

interface PhotoLightboxProps {
  photo: GalleryItem | null;
  photos: GalleryItem[];
  onClose: () => void;
  onNavigate: (photo: GalleryItem) => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  photo,
  photos,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (!photo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [photo, photos]);

  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);
  const totalCount = photos.length;

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + totalCount) % totalCount;
    onNavigate(photos[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % totalCount;
    onNavigate(photos[nextIndex]);
  };

  const whatsappInquiryUrl = `https://wa.me/${BUSINESS_CONFIG.whatsAppNumber}?text=${encodeURIComponent(
    `Hello ${BUSINESS_CONFIG.shopName}, I am inquiring about the "${photo.title}" (${photo.category}) featured on your website gallery.`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing ${photo.title}`}
      className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Top Bar with counter & close button */}
      <div
        className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-xs uppercase tracking-widest text-amber-300 font-medium bg-stone-900/80 px-3 py-1 rounded-sm border border-amber-500/20">
          Photo {currentIndex + 1} of {totalCount}
        </span>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
          aria-label="Close photo preview (Escape key)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev Navigation Button */}
      {totalCount > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-200 hover:text-white transition-colors z-10 border border-stone-700/50"
          aria-label="Previous photo (Left arrow key)"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Main Image Container & Details Card */}
      <div
        className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-sm bg-stone-900 shadow-2xl border border-stone-800 max-h-[70vh] flex items-center justify-center">
          <img
            src={photo.imageUrl}
            alt={photo.altText || photo.title}
            className="max-h-[70vh] w-auto object-contain select-none"
            loading="eager"
          />
        </div>

        {/* Caption & WhatsApp Action Bar */}
        <div className="w-full mt-3 bg-stone-900/90 rounded-sm border border-stone-800 px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-stone-200">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                {photo.category}
              </span>
              <span className="text-stone-400">•</span>
              <h3 className="font-serif text-base sm:text-lg font-medium text-stone-100">
                {photo.title}
              </h3>
            </div>
            {photo.description && (
              <p className="text-xs text-stone-400 mt-0.5 line-clamp-1">{photo.description}</p>
            )}
          </div>

          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#25D366] hover:bg-[#1ebd59] text-stone-950 font-semibold text-xs tracking-wide shrink-0 transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4 fill-stone-950" />
            <span>Inquire in Showroom</span>
          </a>
        </div>
      </div>

      {/* Next Navigation Button */}
      {totalCount > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-200 hover:text-white transition-colors z-10 border border-stone-700/50"
          aria-label="Next photo (Right arrow key)"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};
