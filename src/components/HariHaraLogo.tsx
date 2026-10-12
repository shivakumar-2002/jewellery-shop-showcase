import React, { useState, useEffect } from 'react';

interface HariHaraLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const HariHaraLogo: React.FC<HariHaraLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(null);

  useEffect(() => {
    try {
      const savedLogo = localStorage.getItem('hh_custom_logo');
      if (savedLogo) {
        setCustomLogoUrl(savedLogo);
      }
    } catch {
      // Ignore
    }
  }, []);

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* Divine Lord Shiva Picture Medallion matching lord shiva.jpg */}
      <div className="relative shrink-0">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-600 p-0.5 shadow-md flex items-center justify-center">
          <div className="w-full h-full bg-[#0F223D] rounded-full flex flex-col items-center justify-center relative overflow-hidden border-2 border-amber-300">
            {customLogoUrl ? (
              <img
                src={customLogoUrl}
                alt="Lord Shiva - Hari Hara Jewellery Works"
                className="w-full h-full object-cover object-center"
              />
            ) : (
              /* Divine Portrait of Lord Shiva on Mount Kailash from lord shiva.jpg */
              <svg
                viewBox="0 0 120 120"
                className="w-full h-full object-cover"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Mount Kailash Sky Gradient */}
                  <linearGradient id="kailashSky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38BDF8" />
                    <stop offset="60%" stopColor="#0284C7" />
                    <stop offset="100%" stopColor="#1E3A8A" />
                  </linearGradient>
                  {/* Golden Trishul Gradient */}
                  <linearGradient id="goldenTrident" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FEF08A" />
                    <stop offset="40%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#B45309" />
                  </linearGradient>
                  {/* Damru Skin Gradient */}
                  <radialGradient id="damruSkin" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FEF08A" />
                    <stop offset="100%" stopColor="#CA8A04" />
                  </radialGradient>
                </defs>

                {/* Sky Background */}
                <circle cx="60" cy="60" r="58" fill="url(#kailashSky)" />

                {/* Snow-Covered Mount Kailash Ridges in Background */}
                <polygon points="0,95 24,65 52,95" fill="#E0F2FE" />
                <polygon points="20,95 38,55 70,95" fill="#BAE6FD" opacity="0.9" />
                <polygon points="65,95 88,58 120,95" fill="#E0F2FE" />
                {/* Blue lake / mountain shading */}
                <path d="M0,85 Q60,95 120,85 L120,120 L0,120 Z" fill="#1E40AF" opacity="0.6" />

                {/* --- GOLDEN TRISHUL & DAMRU (ON RIGHT SIDE) --- */}
                <line x1="88" y1="12" x2="84" y2="108" stroke="url(#goldenTrident)" strokeWidth="3" strokeLinecap="round" />
                {/* Center Trident Blade with Diamond Inset */}
                <path d="M88,12 L84,30 H92 Z" fill="#FDE047" stroke="#92400E" strokeWidth="0.8" />
                <polygon points="88,18 86,22 88,26 90,22" fill="#DC2626" />
                {/* Left & Right Curved Prongs */}
                <path d="M88,28 C80,24 74,18 78,10 C80,20 86,28 88,30" fill="url(#goldenTrident)" stroke="#92400E" strokeWidth="0.8" />
                <path d="M88,28 C96,24 102,18 98,10 C96,20 90,28 88,30" fill="url(#goldenTrident)" stroke="#92400E" strokeWidth="0.8" />
                {/* Damru Drum with Om Symbol */}
                <polygon points="76,46 96,40 96,56 76,50" fill="url(#damruSkin)" stroke="#78350F" strokeWidth="1" />
                <circle cx="86" cy="48" r="4.5" fill="#CA8A04" />
                {/* Om symbol hint */}
                <text x="86" y="50" fontSize="5" fontWeight="bold" fill="#78350F" textAnchor="middle">ॐ</text>

                {/* --- LORD SHIVA DEVOTIONAL FIGURE --- */}
                {/* Matted Hair (Jata) */}
                <ellipse cx="52" cy="24" rx="17" ry="14" fill="#3E2723" />
                <circle cx="52" cy="14" r="8" fill="#4E342E" />

                {/* Holy River Ganga Water Fountain emerging from hair */}
                <path d="M52,10 C46,6 36,12 30,22 C34,22 42,16 52,14" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" opacity="0.95" />
                <circle cx="52" cy="9" r="3.5" fill="#FCD34D" stroke="#B45309" strokeWidth="0.6" />

                {/* Golden Crescent Moon (Chandra) on Left of Hair */}
                <path d="M38,20 C39,26 44,28 47,26 C44,30 36,30 34,24 C34,21 36,20 38,20 Z" fill="#FDE047" stroke="#B45309" strokeWidth="0.8" />

                {/* Lord Shiva Face (Serene Blue Complexion with Gentle Smile) */}
                <path d="M38,34 C38,28 66,28 66,34 C66,54 60,60 52,62 C44,60 38,54 38,34 Z" fill="#BAE6FD" stroke="#0284C7" strokeWidth="0.6" />

                {/* Golden Kundala Earrings on both ears */}
                <circle cx="37" cy="48" r="3.5" fill="none" stroke="url(#goldenTrident)" strokeWidth="1.8" />
                <circle cx="67" cy="48" r="3.5" fill="none" stroke="url(#goldenTrident)" strokeWidth="1.8" />

                {/* Sacred Tripundra on Forehead (Three White Lines) */}
                <line x1="44" y1="31" x2="60" y2="31" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="43" y1="33" x2="61" y2="33" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="44" y1="35" x2="60" y2="35" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
                {/* Red Kumkum Tilak & Third Eye */}
                <circle cx="52" cy="33" r="1.5" fill="#DC2626" />
                <ellipse cx="52" cy="33" rx="0.6" ry="2.2" fill="#FBBF24" />

                {/* Serene Smiling Eyes & Eyebrows */}
                <path d="M42,39 C44,41 47,41 49,39" stroke="#0F172A" strokeWidth="1.3" fill="none" strokeLinecap="round" />
                <path d="M55,39 C57,41 60,41 62,39" stroke="#0F172A" strokeWidth="1.3" fill="none" strokeLinecap="round" />
                {/* Nose */}
                <path d="M52,38 L51,46 L54,46" stroke="#0284C7" strokeWidth="0.9" fill="none" strokeLinecap="round" />
                {/* Gentle Loving Smile with Red Lips */}
                <path d="M47,52 C50,55 54,55 57,52" stroke="#DC2626" strokeWidth="1.4" fill="none" strokeLinecap="round" />

                {/* Blue Throat (Neelakantha) & Rudraksha Malas */}
                <path d="M44,60 C44,72 60,72 60,60" fill="#7DD3FC" />
                {/* Rudraksha beads around neck */}
                {[44, 48, 52, 56, 60].map((rx) => (
                  <circle key={rx} cx={rx} cy={66} r="2" fill="#78350F" stroke="#B45309" strokeWidth="0.5" />
                ))}

                {/* Holy Cobra Snake (Vasuki) with Raised Hood over Shoulder */}
                <path d="M40,64 C35,66 32,74 36,86 C40,94 56,92 58,82 C59,76 56,70 52,68" stroke="#D97706" strokeWidth="4" fill="none" strokeLinecap="round" />
                {/* Snake Hood & Mark */}
                <ellipse cx="36" cy="68" rx="6" ry="8" fill="#FEF08A" stroke="#78350F" strokeWidth="1" />
                <path d="M34,68 C36,66 38,66 38,70" stroke="#78350F" strokeWidth="1" fill="none" />

                {/* Tiger Skin (Vyaghrambar) draped over chest */}
                <path d="M46,72 L76,104 L52,108 L34,80 Z" fill="#F59E0B" />
                <circle cx="56" cy="85" r="1.5" fill="#451A03" />
                <circle cx="64" cy="92" r="1.5" fill="#451A03" />
                <circle cx="48" cy="90" r="1.5" fill="#451A03" />

                {/* --- RIGHT HAND RAISED IN ABHAYA MUDRA (BLESSING) WITH SHIVA LINGAM --- */}
                <g transform="translate(18, 72)">
                  {/* Palm & Fingers */}
                  <path d="M8,12 C8,2 18,2 18,12 V28 H8 Z" fill="#BAE6FD" stroke="#0284C7" strokeWidth="0.8" />
                  {/* Four fingers contour */}
                  <line x1="11" y1="2" x2="11" y2="12" stroke="#0284C7" strokeWidth="0.6" />
                  <line x1="14" y1="2" x2="14" y2="12" stroke="#0284C7" strokeWidth="0.6" />
                  {/* Sacred Red Bindi / Lotus on Palm */}
                  <circle cx="13" cy="18" r="3.5" fill="#DC2626" opacity="0.3" />
                  {/* Small Sacred Shiva Lingam in the Palm! */}
                  <ellipse cx="13" cy="22" rx="4.5" ry="2" fill="#FEF08A" stroke="#78350F" strokeWidth="0.5" />
                  <path d="M11,22 V17 C11,15 15,15 15,17 V22 Z" fill="#1E293B" />
                  <circle cx="13" cy="15" r="1" fill="#FFFFFF" />
                </g>

                {/* Outer Circular Royal Gold Frame */}
                <circle cx="60" cy="60" r="58" stroke="#F59E0B" strokeWidth="3.5" fill="none" />
              </svg>
            )}

          </div>
        </div>
      </div>

      {/* Brand Typography matching the card */}
      <div className="leading-tight">
        <div className="flex items-baseline gap-1.5 flex-wrap">
          <span className="font-serif font-black tracking-tight text-xl sm:text-2xl text-red-700 drop-shadow-xs uppercase">
            HARI HARA
          </span>
          <span className="font-serif italic font-bold text-base sm:text-lg text-fuchsia-800 tracking-normal">
            Jewellery Works
          </span>
        </div>
        {showSubtitle && (
          <div className="flex items-center gap-1.5 text-[11px] text-amber-900 font-semibold tracking-wide flex-wrap">
            <span className="bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded-xs border border-amber-300">
              Prop. L. Srinivasa Chary
            </span>
            <span className="text-stone-400">•</span>
            <span className="text-red-800 font-bold">Est. 2001 (25+ Yrs)</span>
          </div>
        )}
      </div>
    </div>
  );
};
