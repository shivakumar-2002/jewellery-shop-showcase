import React, { useState, useEffect } from 'react';
import { ShieldCheck, Gem, Sparkles, MapPin, Phone, Award } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { PageRoute } from '../types';

interface AboutProps {
  onNavigate: (page: PageRoute) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const [aboutPhoto, setAboutPhoto] = useState<string>(() => {
    try {
      return (
        localStorage.getItem('hh_about_custom_photo') ||
        'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1200&q=85'
      );
    } catch {
      return 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1200&q=85';
    }
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem('hh_about_custom_photo');
      if (saved) setAboutPhoto(saved);
    } catch {
      // Ignore
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-14">
      {/* Intro Header */}
      <div className="text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-red-800 bg-amber-100 px-3 py-1 rounded-xs border border-amber-300">
          Established in 2001 • Over 25 Years of Trusted Craftsmanship
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
          About <span className="text-red-700">HARI HARA</span> Jewellery Works
        </h1>
        <p className="text-base text-amber-900 font-bold max-w-2xl mx-auto">
          Proprietor: {BUSINESS_CONFIG.proprietorName} • Started in 2001 • Ambica Nagar, Uppuguda, Hyderabad
        </p>
      </div>

      {/* Main Narrative */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-10 rounded-sm border-2 border-amber-300 shadow-sm">
        <div className="md:col-span-7 space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <div className="p-3 bg-amber-50 rounded-xs border border-amber-300">
            <p className="font-serif font-bold text-red-950 text-base">
              "{BUSINESS_CONFIG.tagline}"
            </p>
          </div>
          <p>
            Started in <strong>2001</strong> by <strong className="text-stone-900">Prop. L. Srinivasa Chary</strong>,{' '}
            <strong className="text-stone-900">{BUSINESS_CONFIG.shopName}</strong> has completed over{' '}
            <strong className="text-red-800">25 continuous years</strong> of dedicated handmade jewellery crafting 
            for families across Uppuguda and Old City, Hyderabad.
          </p>
          <p>
            Located conveniently nearby the landmark <strong>Uppuguda Railway Station in Ambica Nagar, Uppuguda</strong>, 
            our workshop and showroom caters to families seeking honest purity, bespoke jewellery crafting, 
            and transparent transactions without inflated retail markups.
          </p>
          <p>
            Every single gold ornament we make comes with genuine <strong>91.6 KDM Hallmarking</strong> and our 
            firm quality guarantee. From heavy bridal choker necklaces and Telugu traditional Nallapusalu/Pustelu, 
            to intricate filigree bangles and auspicious pure silver puja articles, every piece is made to your exact 
            measurements and weight requirements.
          </p>
        </div>

        {/* Traditional Temple Gold Jewellery Showcase replacing pearl box */}
        <div className="md:col-span-5">
          <div className="rounded-sm overflow-hidden shadow-lg border-2 border-amber-500 bg-[#3B0711]">
            <img
              src={aboutPhoto}
              alt="Traditional 91.6 KDM Temple Gold Lakshmi Haram, Choker & Jhumkas Set by Hari Hara Jewellery Works"
              className="w-full aspect-4/3 object-cover object-center"
            />
            <div className="p-3 bg-[#240409] text-amber-200 text-xs text-center border-t border-amber-600/50 font-bold">
              Traditional 91.6 KDM Temple Gold Nakshi Haram &amp; Choker Set
            </div>
          </div>
        </div>
      </div>

      {/* Workshop Principles */}
      <div className="space-y-6">
        <h2 className="font-serif text-2xl font-bold text-stone-900 text-center">
          Why Families Trust Hari Hara Jewellery Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-sm border-2 border-amber-200 space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xs bg-red-100 border border-red-300 flex items-center justify-center text-red-800">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base">
              91.6 KDM Hallmarking
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We stand 100% behind the purity of our precious metal. Certified 91.6 KDM hallmarked ornaments ensure long-term value and trust.
            </p>
          </div>

          <div className="bg-white p-6 rounded-sm border-2 border-amber-200 space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xs bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base">
              Custom Ornaments Making
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Bring any sample photo, design catalogue, or traditional family pattern. We make custom ornaments to your required gram weight and budget.
            </p>
          </div>

          <div className="bg-white p-6 rounded-sm border-2 border-amber-200 space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xs bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-800">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base">
              Pure Silver Articles
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We create pure silver puja thalis, kamakshi deepams, silver glasses, anklets (pattilu), and kalyana gift articles made to authentic purity.
            </p>
          </div>
        </div>
      </div>

      {/* Address & Direct Call */}
      <div className="bg-sky-50 border-2 border-sky-300 p-6 sm:p-8 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-serif text-lg font-bold text-sky-950">
            Meet Prop. L. Srinivasa Chary at the Workshop
          </h3>
          <p className="text-xs text-stone-700">
            {BUSINESS_CONFIG.fullAddress.doorNo}, {BUSINESS_CONFIG.fullAddress.landmark}, Ambica Nagar, Uppuguda, Hyd-53
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${BUSINESS_CONFIG.phonePrimaryTel}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-red-700 hover:bg-red-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
          >
            <Phone className="w-3.5 h-3.5 text-amber-200" />
            <span>Call: {BUSINESS_CONFIG.phonePrimaryDisplay}</span>
          </a>

          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-stone-900 hover:bg-stone-800 text-stone-100 text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-300" />
            <span>Map</span>
          </button>
        </div>
      </div>
    </div>
  );
};
