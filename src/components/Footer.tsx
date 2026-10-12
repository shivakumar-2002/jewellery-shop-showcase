import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsAppNumber}?text=${encodeURIComponent(
    BUSINESS_CONFIG.whatsAppGreeting
  )}`;

  return (
    <footer className="bg-[#1C0508] text-stone-200 pt-16 pb-12 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-red-950/60">
          {/* Col 1: Brand & Visiting Card Information */}
          <div className="space-y-4">
            <div>
              <h2 className="font-serif font-black text-2xl sm:text-3xl text-amber-400 uppercase tracking-wide leading-tight">
                <span className="whitespace-nowrap inline-block mr-2">HARI HARA</span>
                <span className="font-serif italic font-bold text-lg sm:text-xl text-fuchsia-300 normal-case whitespace-nowrap inline-block">
                  Jewellery Works
                </span>
              </h2>
              <p className="text-xs font-bold text-amber-200 mt-1.5">
                Prop. {BUSINESS_CONFIG.proprietorName}
              </p>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed">
              {BUSINESS_CONFIG.tagline}
            </p>

            <div className="p-2.5 rounded bg-red-950/60 border border-amber-600/40 text-xs text-amber-300 font-semibold space-y-1">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>91.6 KDM Hallmark Guarantee</span>
              </div>
              <p className="text-[11px] text-stone-300 font-normal">
                Gold & Silver Ornaments Made to Custom Order
              </p>
            </div>
          </div>

          {/* Col 2: Showroom Address matching Card's Blue Accent */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-sky-400 font-bold flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>Shop Address (Uppuguda)</span>
            </h3>

            <address className="not-italic text-xs leading-relaxed space-y-1.5 text-stone-300">
              <div className="p-2 rounded bg-sky-950/50 border border-sky-600/30 text-sky-200 font-medium">
                <p>{BUSINESS_CONFIG.fullAddress.doorNo}</p>
                <p className="text-amber-300 font-bold mt-0.5">
                  {BUSINESS_CONFIG.fullAddress.landmark}
                </p>
              </div>
              <p className="text-stone-200 font-medium">
                {BUSINESS_CONFIG.fullAddress.colony}, {BUSINESS_CONFIG.fullAddress.area}
              </p>
              <p className="text-amber-200 font-bold">
                {BUSINESS_CONFIG.fullAddress.city} – {BUSINESS_CONFIG.fullAddress.pincode}
              </p>
            </address>

            <a
              href={BUSINESS_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-sky-300 hover:text-sky-200 underline underline-offset-4 pt-1 font-bold"
            >
              <span>View Location on Google Maps ↗</span>
            </a>
          </div>

          {/* Col 3: Direct Phone Numbers from Card */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-amber-400 font-bold">
              Contact Numbers
            </h3>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-red-950/40 rounded border border-red-900/50 space-y-2">
                <span className="text-stone-400 block font-medium">Proprietor Cell:</span>
                <a
                  href={`tel:${BUSINESS_CONFIG.phonePrimaryTel}`}
                  className="flex items-center gap-2 text-white hover:text-amber-300 text-sm font-bold tracking-wide transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Cell 1: {BUSINESS_CONFIG.phonePrimaryDisplay}</span>
                </a>
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneSecondaryTel}`}
                  className="flex items-center gap-2 text-stone-200 hover:text-amber-300 text-sm font-bold tracking-wide transition-colors"
                >
                  <Phone className="w-4 h-4 text-stone-400" />
                  <span>Cell 2: {BUSINESS_CONFIG.phoneSecondaryDisplay}</span>
                </a>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded bg-[#25D366] hover:bg-[#1ebe59] text-stone-950 font-bold text-xs transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-stone-950" />
                <span>WhatsApp: {BUSINESS_CONFIG.phonePrimaryDisplay}</span>
              </a>

              <div className="flex items-center gap-2 text-stone-400 text-[11px] pt-1">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Mon–Sat 10:00 AM – 9:00 PM (Sunday Half-Day)</span>
              </div>
            </div>
          </div>

          {/* Col 4: Quick Navigation & Legal */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-amber-400 font-bold">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('collections');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition-colors"
                >
                  Gold & Silver Ornaments
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition-colors"
                >
                  About Prop. L. Srinivasa Chary
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition-colors"
                >
                  Shop Location & Directions
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('privacy');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition-colors"
                >
                  Privacy Notice
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            © {currentYear} {BUSINESS_CONFIG.shopName}. Prop. {BUSINESS_CONFIG.proprietorName}. Uppuguda, Hyderabad.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-amber-400 font-medium">Direct In-Shop Crafting & Sales • No Online Cart</span>
            <button
              onClick={() => {
                onNavigate('admin');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-stone-400 hover:text-stone-300 underline"
            >
              Owner Portal
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
