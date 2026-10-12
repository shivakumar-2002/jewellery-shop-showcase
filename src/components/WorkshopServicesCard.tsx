import React, { useState } from 'react';
import { RefreshCw, Wrench, Sparkles, Gem, MessageCircle, Phone, Upload } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { DesignUploadModal } from './DesignUploadModal';

interface WorkshopServicesCardProps {
  className?: string;
}

export const WorkshopServicesCard: React.FC<WorkshopServicesCardProps> = ({ className = '' }) => {
  const [isDesignModalOpen, setIsDesignModalOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsAppNumber}?text=${encodeURIComponent(
    "Namaste L. Srinivasa Chary garu (HARI HARA Jewellery Works)! I am inquiring about Old Gold Exchange, Jewellery Repair & Custom Designs."
  )}`;

  return (
    <>
      <section
        className={`bg-[#0D0B0E] text-stone-100 rounded-lg border border-stone-800 p-6 sm:p-10 shadow-2xl space-y-8 ${className}`}
        aria-label="Direct Workshop Services"
      >
        {/* Top Header */}
        <div className="space-y-3">
          <span className="inline-block px-3 py-1 rounded-full bg-[#3D1D0E] text-amber-500 text-[11px] font-bold tracking-wider uppercase border border-amber-600/30">
            DIRECT WORKSHOP SERVICE
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Old Gold Exchange, Jewellery Repair & Custom Designs
          </h2>
          <p className="text-sm sm:text-base text-stone-300 max-w-3xl leading-relaxed">
            Bring your old gold jewellery, broken ornaments, sample photos or your own design ideas. 
            We help you repair, modify or transform your jewellery according to your requirements.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Service 1: Old Gold Exchange */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-amber-400">
              <RefreshCw className="w-5 h-5 text-amber-400 shrink-0" />
              <h3 className="font-bold text-base text-stone-100">
                Old Gold Exchange
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed pl-7">
              Exchange your old gold for another jewellery item or receive cash, subject to gold evaluation and the agreed terms.
            </p>
          </div>

          {/* Service 2: Jewellery Repair */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-amber-400">
              <Wrench className="w-5 h-5 text-amber-400 shrink-0" />
              <h3 className="font-bold text-base text-stone-100">
                Jewellery Repair
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed pl-7">
              Get your broken chains, rings, bangles and other ornaments repaired.
            </p>
          </div>

          {/* Service 3: Gold Remodelling */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-amber-400">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
              <h3 className="font-bold text-base text-stone-100">
                Gold Remodelling
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed pl-7">
              Modify your existing jewellery into a new design based on your preference.
            </p>
          </div>

          {/* Service 4: Custom Jewellery Making */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-amber-400">
              <Gem className="w-5 h-5 text-amber-400 shrink-0" />
              <h3 className="font-bold text-base text-stone-100">
                Custom Jewellery Making
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed pl-7">
              Bring your design photo or explain your idea. We will discuss the design, gold requirement and making charges with you.
            </p>
          </div>
        </div>

        {/* Your Gold, Your Choice Block */}
        <div className="pt-4 border-t border-stone-800 space-y-3">
          <h4 className="font-bold text-sm sm:text-base text-stone-100">
            Your Gold, Your Choice
          </h4>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            Choose what works best for you: exchange your old gold, receive cash based on the agreed valuation, repair your existing jewellery or customise a new design.
          </p>
          <p className="text-xs text-stone-400 leading-relaxed">
            Old gold value, any deductions, repair charges, gold balance and other applicable charges will be explained before proceeding.
          </p>
        </div>

        {/* Action Buttons matching screenshot exactly + Upload option */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-md bg-[#0F766E] hover:bg-[#115E59] text-white font-bold text-sm transition-colors shadow-md text-center"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp Us</span>
          </a>

          {/* Call Us Button */}
          <a
            href={`tel:${BUSINESS_CONFIG.phonePrimaryTel}`}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-md bg-[#B91C1C] hover:bg-[#991B1B] text-white font-bold text-sm transition-colors shadow-md text-center"
          >
            <Phone className="w-4 h-4" />
            <span>Call Us</span>
          </a>

          {/* Upload Design Reference Button */}
          <button
            type="button"
            onClick={() => setIsDesignModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-md bg-stone-900 hover:bg-stone-800 text-amber-300 border border-stone-700 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
          >
            <Upload className="w-4 h-4 text-amber-400" />
            <span>Upload Design Photo</span>
          </button>
        </div>
      </section>

      {/* Design Upload Modal */}
      <DesignUploadModal
        isOpen={isDesignModalOpen}
        onClose={() => setIsDesignModalOpen(false)}
      />
    </>
  );
};
