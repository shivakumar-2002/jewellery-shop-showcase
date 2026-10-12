import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface WhyVisitUsSectionProps {
  className?: string;
}

export const WhyVisitUsSection: React.FC<WhyVisitUsSectionProps> = ({ className = '' }) => {
  const whyVisitPoints = [
    "Personal assistance with jewellery designs.",
    "Clear discussion of gold valuation and applicable charges.",
    "Repair, modification and custom design enquiries.",
    "Hallmark details and relevant documentation for eligible items.",
    "Delivery time discussed before confirming the work.",
    "Direct communication with our shop through phone or WhatsApp.",
  ];

  return (
    <section
      className={`bg-gradient-to-br from-amber-50 via-white to-amber-50/50 rounded-lg border-2 border-amber-300 p-6 sm:p-10 shadow-sm space-y-6 ${className}`}
      aria-label="Why Visit Our Showroom"
    >
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="inline-block px-3 py-1 rounded-xs bg-red-100 text-red-900 text-xs font-bold uppercase tracking-wider border border-red-200">
          Showroom & Workshop Experience
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-900">
          Why Visit Us?
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          We welcome you to meet <strong>Prop. L. Srinivasa Chary</strong> directly at our shop in Ambica Nagar, Uppuguda. Here is what you can expect during your visit:
        </p>
      </div>

      {/* 6 Key Points Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
        {whyVisitPoints.map((point, index) => (
          <div
            key={index}
            className="bg-white/95 rounded border border-amber-200 hover:border-amber-400 p-4 shadow-2xs flex items-start gap-3 transition-colors"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            </div>
            <p className="text-xs sm:text-sm font-medium text-stone-800 leading-snug">
              {point}
            </p>
          </div>
        ))}
      </div>

      {/* Location note */}
      <div className="pt-2 text-center text-xs text-stone-600">
        <p>
          📍 Conveniently located near <strong>Uppuguda Railway Station</strong>, Ambica Nagar, Uppuguda, Hyderabad – 500053.
        </p>
      </div>
    </section>
  );
};
