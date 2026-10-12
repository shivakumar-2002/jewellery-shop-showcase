import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface ContactActionsProps {
  className?: string;
  variant?: 'compact' | 'full' | 'hero';
  showDirections?: boolean;
}

export const ContactActions: React.FC<ContactActionsProps> = ({
  className = '',
  variant = 'hero',
  showDirections = true,
}) => {
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsAppNumber}?text=${encodeURIComponent(
    BUSINESS_CONFIG.whatsAppGreeting
  )}`;

  if (variant === 'hero') {
    return (
      <div className={`flex flex-wrap items-center gap-3 sm:gap-4 ${className}`}>
        {/* Primary Call: 9848543615 */}
        <a
          href={`tel:${BUSINESS_CONFIG.phonePrimaryTel}`}
          className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-sm bg-red-700 hover:bg-red-800 text-white transition-all shadow-md font-bold tracking-wide text-sm sm:text-base border border-red-900 group"
          aria-label={`Call HARI HARA Jewellery Works at ${BUSINESS_CONFIG.phonePrimaryDisplay}`}
        >
          <Phone className="w-4 h-4 text-amber-200 group-hover:scale-110 transition-transform" />
          <span>Call: {BUSINESS_CONFIG.phonePrimaryDisplay}</span>
        </a>

        {/* WhatsApp Chat */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-sm bg-[#128C7E] hover:bg-[#075E54] text-white transition-all shadow-md font-bold tracking-wide text-sm sm:text-base group"
          aria-label="Direct WhatsApp chat with shop owner"
        >
          <MessageCircle className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
          <span>WhatsApp Chat</span>
        </a>

        {/* Get Directions (Styled with Card's Cyan Accent) */}
        {showDirections && (
          <a
            href={BUSINESS_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-sm bg-sky-50 hover:bg-sky-100 text-sky-950 transition-all shadow-sm font-bold tracking-wide text-sm sm:text-base border-2 border-sky-400 group"
            aria-label="Get Google Maps directions to Uppuguda shop"
          >
            <MapPin className="w-4 h-4 text-sky-700 group-hover:scale-110 transition-transform" />
            <span>Map Directions (Uppuguda)</span>
          </a>
        )}
      </div>
    );
  }

  // Full / standard grid
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 ${className}`}>
      <a
        href={`tel:${BUSINESS_CONFIG.phonePrimaryTel}`}
        className="flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-red-700 hover:bg-red-800 text-white font-bold transition-colors text-sm border border-red-900 text-center shadow-xs"
      >
        <Phone className="w-4 h-4 text-amber-300 shrink-0" />
        <span>Call: {BUSINESS_CONFIG.phonePrimaryDisplay}</span>
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-[#25D366] hover:bg-[#1ebe5b] text-stone-950 font-bold transition-colors text-sm text-center shadow-xs"
      >
        <MessageCircle className="w-4 h-4 shrink-0 fill-stone-950" />
        <span>Chat on WhatsApp</span>
      </a>

      {showDirections && (
        <a
          href={BUSINESS_CONFIG.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-sky-100 hover:bg-sky-200 text-sky-950 font-bold transition-colors text-sm border border-sky-300 text-center shadow-xs"
        >
          <MapPin className="w-4 h-4 text-sky-800 shrink-0" />
          <span>Google Maps Directions</span>
        </a>
      )}
    </div>
  );
};
