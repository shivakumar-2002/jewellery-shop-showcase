import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsAppNumber}?text=${encodeURIComponent(
    BUSINESS_CONFIG.whatsAppGreeting
  )}`;

  return (
    <aside aria-label="Quick WhatsApp contact" className="fixed bottom-5 right-5 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp chat with shop showroom"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:bg-[#1ebe5b] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      >
        <MessageCircle className="w-5 h-5 fill-white shrink-0 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline font-medium text-sm text-stone-950 pr-1">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
};
