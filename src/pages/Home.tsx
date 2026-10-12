import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Clock, ShieldCheck, Sparkles, Phone, Award, Upload } from 'lucide-react';
import { BUSINESS_CONFIG, LOCAL_PLACEHOLDER_PHOTOS } from '../config/business';
import { ContactActions } from '../components/ContactActions';
import { GalleryGrid } from '../components/GalleryGrid';
import { DesignUploadModal } from '../components/DesignUploadModal';
import { WorkshopServicesCard } from '../components/WorkshopServicesCard';
import { WhyVisitUsSection } from '../components/WhyVisitUsSection';
import { GalleryItem, PageRoute } from '../types';

interface HomeProps {
  onNavigate: (page: PageRoute) => void;
  onSelectPhoto: (photo: GalleryItem) => void;
  photos?: GalleryItem[];
}

export const Home: React.FC<HomeProps> = ({
  onNavigate,
  onSelectPhoto,
  photos = LOCAL_PLACEHOLDER_PHOTOS,
}) => {
  const [isDesignModalOpen, setIsDesignModalOpen] = useState(false);
  const featuredPhotos = photos.filter((p) => p.isFeatured).slice(0, 6);
  const homeDisplayPhotos = featuredPhotos.length >= 3 ? featuredPhotos : photos.slice(0, 6);

  const [heroPhoto, setHeroPhoto] = useState<string>(() => {
    try {
      return (
        localStorage.getItem('hh_hero_custom_photo') ||
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85'
      );
    } catch {
      return 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85';
    }
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem('hh_hero_custom_photo');
      if (saved) setHeroPhoto(saved);
    } catch {
      // Ignore
    }
  }, []);

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Section styled with visiting card colors: Bright Warm Gold, Auspicious Crimson Red, Cyan accent */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFBEB] via-[#FFFDF5] to-[#FAF8F5] border-b-2 border-amber-400/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-5 pb-10 sm:pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Auspicious Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xs bg-amber-100 border border-amber-300 text-red-900 text-xs font-bold tracking-wider uppercase shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Established in {BUSINESS_CONFIG.establishedYear} • Over {BUSINESS_CONFIG.experienceYears} Years of Trust</span>
              </div>

              {/* Shop Title with Card's Typography Style */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-red-700 tracking-tight uppercase drop-shadow-xs">
                    HARI HARA
                  </h1>
                  <span className="font-serif italic font-bold text-2xl sm:text-3xl lg:text-4xl text-fuchsia-800">
                    Jewellery Works
                  </span>
                </div>
                <p className="text-sm sm:text-base font-bold text-amber-900 uppercase tracking-wide pt-1">
                  Prop. {BUSINESS_CONFIG.proprietorName} • Custom Gold & Silver Ornaments
                </p>
              </div>

              {/* Exact Tagline Banner from Visiting Card */}
              <div className="p-4 rounded-sm bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 border-2 border-amber-500 shadow-sm text-stone-950">
                <p className="font-serif font-bold text-base sm:text-lg leading-snug text-red-950">
                  "{BUSINESS_CONFIG.tagline}"
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-stone-900 mt-2">
                  <span className="bg-red-700 text-white px-2 py-0.5 rounded-xs">100% Guarantee</span>
                  <span>Pure Silver Articles • Handcrafted Traditional & Modern Designs</span>
                </div>
              </div>

              {/* Card's Exact Address Banner: ONLY S.No. 18-7-466/2/B/42 */}
              <div className="p-3.5 rounded-sm bg-sky-50 border-2 border-sky-400 text-sky-950 flex items-start gap-3 shadow-xs">
                <MapPin className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm font-medium leading-relaxed">
                  <p className="font-bold text-sky-900">
                    {BUSINESS_CONFIG.fullAddress.doorNo}, {BUSINESS_CONFIG.fullAddress.landmark}
                  </p>
                  <p className="text-stone-700 mt-0.5">
                    {BUSINESS_CONFIG.fullAddress.colony}, {BUSINESS_CONFIG.fullAddress.area}, {BUSINESS_CONFIG.fullAddress.city} – {BUSINESS_CONFIG.fullAddress.pincode}
                  </p>
                </div>
              </div>

              {/* Key Contact Triggers: Call, WhatsApp, Directions */}
              <div className="pt-2">
                <ContactActions variant="hero" showDirections={true} />
              </div>

              {/* Upload Your Design Quick Trigger Button */}
              <div className="pt-1">
                <button
                  onClick={() => setIsDesignModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-amber-100 hover:bg-amber-200 text-amber-950 font-bold text-xs sm:text-sm border-2 border-amber-400 shadow-xs transition-colors"
                >
                  <Upload className="w-4 h-4 text-red-700" />
                  <span>Upload Your Own Jewellery Design (Get Custom Quote)</span>
                </button>
              </div>

            </div>

            {/* Right Hero Visual: Rich Burgundy & Gold Jewellery Card matching bottom of visiting card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-2 rounded-sm bg-gradient-to-r from-amber-400 to-red-600 opacity-30 blur-xs"></div>

                <div className="relative rounded-sm overflow-hidden shadow-2xl border-2 border-amber-500 bg-[#3B0711]">
                  <div className="aspect-4/5 overflow-hidden">
                    <img
                      src={heroPhoto}
                      alt="Traditional 91.6 gold bridal jewellery ornaments made at Hari Hara Jewellery Works"
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                    />
                  </div>

                  <div className="p-4 bg-gradient-to-t from-[#220308] to-[#3B0711] border-t-2 border-amber-500 text-white space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-wider font-bold text-amber-300">
                        HARI HARA Workshop Special
                      </span>
                      <span className="text-[10px] bg-red-700 px-2 py-0.5 rounded-xs font-bold text-white">
                        91.6 KDM
                      </span>
                    </div>
                    <p className="font-serif text-base font-bold text-amber-100">
                      Handcrafted Bridal Ornaments & Kasu Haram
                    </p>
                    <p className="text-[11px] text-amber-200/90 leading-tight">
                      We make to order according to your exact gold weight, design, and budget.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Jewellery Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b-2 border-amber-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-red-800">
              91.6 Gold Ornaments Showcase
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
              Total Gold Ornaments &amp; Jewellery Collections
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              Pure 22K 91.6 KDM hallmarked gold jewellery pieces made to order. Tap any piece to enlarge or message on WhatsApp.
            </p>
          </div>

          <button
            onClick={() => {
              onNavigate('collections');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm font-bold text-red-800 hover:text-red-950 tracking-wide transition-colors group shrink-0"
          >
            <span>View All Ornaments</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Gallery Grid preview */}
        <GalleryGrid
          photos={homeDisplayPhotos}
          onSelectPhoto={onSelectPhoto}
          showCategoryFilters={false}
        />
      </section>

      {/* Why Visit Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WhyVisitUsSection />
      </section>

      {/* Workshop Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WorkshopServicesCard />
      </section>

      {/* 3. Shop Visit Card (Uppuguda Location, Near Uppuguda Railway Station) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-sm border-2 border-amber-300 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-red-800">
                Direct Craftsman Consultation Since 2001
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Visit HARI HARA Jewellery Works in Uppuguda
              </h2>
              <p className="text-stone-700 text-sm leading-relaxed">
                Meet <strong className="text-stone-900">Prop. L. Srinivasa Chary</strong> directly at our shop. 
                Whether you want to order a complete wedding bridal set, make custom traditional gold bangles, 
                order silver puja thali articles, or remodel family heirloom gold with 91.6 KDM guarantee, 
                we provide authentic craftsmanship with personal care.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Address Card styled in card's Cyan theme: ONLY S.No. 18-7-466/2/B/42 */}
                <div className="p-4 rounded-sm bg-sky-50/80 border-2 border-sky-300">
                  <div className="flex items-center gap-2 text-sky-950 font-bold text-sm mb-1">
                    <MapPin className="w-4 h-4 text-sky-700" />
                    <span>Shop Address (Near Railway Station)</span>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    <strong className="text-sky-950">{BUSINESS_CONFIG.fullAddress.doorNo}</strong>
                    <br />
                    <span className="text-red-800 font-bold">{BUSINESS_CONFIG.fullAddress.landmark}</span>
                    <br />
                    {BUSINESS_CONFIG.fullAddress.colony}, {BUSINESS_CONFIG.fullAddress.area}
                    <br />
                    {BUSINESS_CONFIG.fullAddress.city} – {BUSINESS_CONFIG.fullAddress.pincode}
                  </p>
                </div>

                {/* Hours & Contact Card */}
                <div className="p-4 rounded-sm bg-amber-50/80 border-2 border-amber-300">
                  <div className="flex items-center gap-2 text-amber-950 font-bold text-sm mb-1">
                    <Clock className="w-4 h-4 text-amber-800" />
                    <span>Timings & Direct Cell</span>
                  </div>
                  <p className="text-xs text-stone-800">
                    <strong>Monday – Saturday:</strong> 10:00 AM – 09:00 PM
                  </p>
                  <p className="text-xs text-stone-800">
                    <strong>Sunday:</strong> 10:30 AM – 03:00 PM
                  </p>
                  <div className="mt-2 pt-2 border-t border-amber-300 text-xs font-bold text-red-900">
                    Cell: {BUSINESS_CONFIG.phonePrimaryDisplay} / {BUSINESS_CONFIG.phoneSecondaryDisplay}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-sm bg-sky-100 hover:bg-sky-200 text-sky-950 font-bold text-sm transition-colors border-2 border-sky-400 shadow-sm"
              >
                <MapPin className="w-4 h-4 text-sky-700" />
                <span>Open Google Maps Directions (Uppuguda)</span>
              </a>

              <a
                href={`tel:${BUSINESS_CONFIG.phonePrimaryTel}`}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-sm bg-red-700 hover:bg-red-800 text-white font-bold text-sm transition-colors shadow-sm border border-red-900"
              >
                <Phone className="w-4 h-4 text-amber-200" />
                <span>Call L. Srinivasa Chary: {BUSINESS_CONFIG.phonePrimaryDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Design Upload Modal */}
      <DesignUploadModal
        isOpen={isDesignModalOpen}
        onClose={() => setIsDesignModalOpen(false)}
      />
    </div>
  );
};
