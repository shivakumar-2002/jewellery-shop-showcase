import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, CheckCircle2, ShieldCheck, Upload } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { ContactActions } from '../components/ContactActions';
import { DesignUploadModal } from '../components/DesignUploadModal';
import { WhyVisitUsSection } from '../components/WhyVisitUsSection';

export const Contact: React.FC = () => {
  const [isDesignModalOpen, setIsDesignModalOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsAppNumber}?text=${encodeURIComponent(
    BUSINESS_CONFIG.whatsAppGreeting
  )}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-14">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-red-800 bg-amber-100 px-3 py-1 rounded-xs border border-amber-300">
          Uppuguda, Hyderabad • Shop Location & Cell Numbers
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
          Visit <span className="text-red-700">HARI HARA</span> Jewellery Works
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          Contact <strong>Prop. L. Srinivasa Chary</strong> directly by cell phone, WhatsApp, or visit our shop in Ambica Nagar, Uppuguda.
        </p>
      </div>

      {/* Main Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Address Card & Direct Cell Cards (7 cols on lg) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Card 1: Official Card Address in Signature Sky Blue Theme */}
          <div className="bg-sky-50/90 p-6 sm:p-8 rounded-sm border-2 border-sky-400 shadow-sm space-y-5">
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-xs bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h2 className="font-serif text-xl font-bold text-sky-950">
                    Official Shop Address
                  </h2>
                  <span className="text-[11px] font-bold bg-amber-200 text-stone-900 px-2 py-0.5 rounded-xs border border-amber-300">
                    Near Uppuguda Railway Station
                  </span>
                </div>

                <address className="not-italic text-sm text-stone-800 leading-relaxed space-y-1">
                  <p className="font-bold text-base text-stone-950">
                    {BUSINESS_CONFIG.fullAddress.doorNo}
                  </p>
                  <p className="text-red-800 font-bold bg-amber-100/80 px-2 py-1 rounded-xs border border-amber-300 inline-block text-xs sm:text-sm">
                    Landmark: {BUSINESS_CONFIG.fullAddress.landmark}
                  </p>
                  <p className="text-stone-800 pt-0.5">
                    {BUSINESS_CONFIG.fullAddress.colony}, {BUSINESS_CONFIG.fullAddress.area}
                  </p>
                  <p className="font-bold text-sky-950">
                    {BUSINESS_CONFIG.fullAddress.city} – {BUSINESS_CONFIG.fullAddress.pincode} ({BUSINESS_CONFIG.fullAddress.state})
                  </p>
                </address>
              </div>
            </div>

            <div className="pt-2 border-t border-sky-200 flex flex-wrap gap-3">
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-stone-900 hover:bg-stone-800 text-stone-100 text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors shadow-xs"
              >
                <Navigation className="w-4 h-4 text-amber-300" />
                <span>Open Google Maps Directions (Uppuguda)</span>
              </a>
            </div>
          </div>

          {/* Card 2: Cell Phone Numbers from Card */}
          <div className="bg-white p-6 sm:p-8 rounded-sm border-2 border-amber-300 shadow-sm space-y-5">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="font-serif text-xl font-bold text-stone-900">
                Direct Contact Numbers
              </h2>
              <span className="text-xs font-bold text-red-800 bg-red-50 px-2 py-0.5 rounded-xs border border-red-200">
                Prop. {BUSINESS_CONFIG.proprietorName}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Primary Cell: 9848543615 */}
              <a
                href={`tel:${BUSINESS_CONFIG.phonePrimaryTel}`}
                className="p-4 rounded-sm border-2 border-red-600 bg-red-50/60 hover:bg-red-100/60 transition-all flex items-start gap-3 group"
              >
                <Phone className="w-5 h-5 text-red-700 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-red-900 block font-bold">
                    Primary Cell (Direct Call)
                  </span>
                  <span className="text-lg font-black text-red-800 block mt-0.5 tracking-wide">
                    {BUSINESS_CONFIG.phonePrimaryDisplay}
                  </span>
                  <span className="text-xs text-stone-600 underline mt-1 block">Tap to call now</span>
                </div>
              </a>

              {/* Secondary Cell: 9394647299 */}
              <a
                href={`tel:${BUSINESS_CONFIG.phoneSecondaryTel}`}
                className="p-4 rounded-sm border-2 border-stone-300 hover:border-amber-400 hover:bg-stone-50 transition-all flex items-start gap-3 group"
              >
                <Phone className="w-5 h-5 text-stone-700 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-stone-500 block font-bold">
                    Secondary Cell
                  </span>
                  <span className="text-lg font-bold text-stone-900 block mt-0.5 tracking-wide">
                    {BUSINESS_CONFIG.phoneSecondaryDisplay}
                  </span>
                  <span className="text-xs text-stone-600 underline mt-1 block">Tap to call</span>
                </div>
              </a>
            </div>

            {/* WhatsApp Direct Chat Banner */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-sm border-2 border-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-all flex items-center justify-between gap-3 group"
            >
              <div className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-[#128C7E] shrink-0 fill-[#128C7E]" />
                <div>
                  <span className="text-sm font-bold text-stone-900 block">
                    Chat on WhatsApp: {BUSINESS_CONFIG.phonePrimaryDisplay}
                  </span>
                  <span className="text-xs text-stone-600">
                    Send ornament sample pictures or inquire about gold rates and making charges.
                  </span>
                </div>
              </div>
              <span className="px-3 py-1.5 rounded-sm bg-[#128C7E] text-white text-xs font-bold shrink-0">
                Open Chat ↗
              </span>
            </a>
          </div>

          {/* Quick Contact Bar & Upload Trigger */}
          <div className="space-y-3">
            <ContactActions variant="compact" />

            <button
              type="button"
              onClick={() => setIsDesignModalOpen(true)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-amber-100 hover:bg-amber-200 text-stone-950 font-bold text-xs uppercase tracking-wider border-2 border-amber-400 transition-colors shadow-xs"
            >
              <Upload className="w-4 h-4 text-red-700" />
              <span>Upload Your Design Photo (Get Custom Quote)</span>
            </button>
          </div>
        </div>

        {/* Right Column: Timings, Purity Guarantee & Guidelines (5 cols on lg) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Card 3: Opening Hours Schedule */}
          <div className="bg-[#FFFDF7] p-6 sm:p-8 rounded-sm border-2 border-amber-300 shadow-sm space-y-5">
            <div className="flex items-center gap-2.5">
              <Clock className="w-5 h-5 text-amber-800" />
              <h2 className="font-serif text-lg font-bold text-stone-900">
                Workshop & Shop Timings
              </h2>
            </div>

            <div className="divide-y divide-amber-200 text-sm">
              {BUSINESS_CONFIG.openingHours.map((slot, i) => (
                <div key={i} className="py-3 flex items-start justify-between gap-4">
                  <div>
                    <span className="font-bold text-stone-900 block">{slot.days}</span>
                    {slot.note && <span className="text-xs text-stone-600">{slot.note}</span>}
                  </div>
                  <span className="font-bold text-red-900 text-right shrink-0">
                    {slot.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-3 bg-amber-100 rounded-xs border border-amber-300 text-xs text-stone-900">
              <span className="font-bold text-red-900">Schedule:</span> Open all 7 days (Sunday half-day until 3:00 PM).
            </div>
          </div>

          {/* Card 4: Hallmark & Purity Assurance */}
          <div className="bg-white p-6 sm:p-8 rounded-sm border-2 border-amber-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-stone-900 font-bold text-base font-serif">
              <ShieldCheck className="w-5 h-5 text-red-700" />
              <h3>Purity & Order Assurance</h3>
            </div>
            <ul className="space-y-3 text-xs text-stone-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Hallmarked Jewellery with Hallmark Card:</strong> Eligible hallmarked gold jewellery is provided with applicable hallmark identification and documentation at delivery.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Delivery Time Discussed in Advance:</strong> For custom making and repairs, expected completion time is discussed before confirming the work.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Old Gold Exchange Made Clear:</strong> Clear valuation, applicable deductions, and cash settlement options explained upfront.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Near Uppuguda Railway Station:</strong> Convenient and easy-to-reach landmark in Ambica Nagar, Uppuguda.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Visit Us */}
      <WhyVisitUsSection />

      {/* Design Upload Modal */}
      <DesignUploadModal
        isOpen={isDesignModalOpen}
        onClose={() => setIsDesignModalOpen(false)}
      />
    </div>
  );
};
