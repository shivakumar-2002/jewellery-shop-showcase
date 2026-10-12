import React from 'react';

interface TempleGoldNecklaceProps {
  className?: string;
  customImageUrl?: string | null;
}

export const TempleGoldNecklace: React.FC<TempleGoldNecklaceProps> = ({
  className = '',
  customImageUrl,
}) => {
  return (
    <div className={`relative rounded-sm overflow-hidden border-2 border-amber-400 shadow-xl bg-[#F7F3EA] ${className}`}>
      {customImageUrl ? (
        <img
          src={customImageUrl}
          alt="Handcrafted 91.6 KDM Temple Gold Haram & Lakshmi Jhumkas Set"
          className="w-full aspect-4/5 object-cover object-center"
        />
      ) : (
        /* High-Definition Traditional South Indian Temple Gold Haram & Choker Set on Champagne Silk */
        <div className="relative aspect-4/5 w-full overflow-hidden bg-gradient-to-br from-[#FDFBF7] via-[#F5EFE0] to-[#E8DCB8] flex items-center justify-center p-2">
          {/* Silk Cloth Folds & Texture */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#C5A869_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

          <svg
            viewBox="0 0 400 500"
            className="w-full h-full object-contain filter drop-shadow-md select-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Antique 22K/91.6 Gold Gradient */}
              <linearGradient id="antiqueGold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFF2A3" />
                <stop offset="35%" stopColor="#E5B232" />
                <stop offset="70%" stopColor="#B37C12" />
                <stop offset="100%" stopColor="#805005" />
              </linearGradient>
              {/* Ruby Red Stones */}
              <radialGradient id="rubyGlow" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#FB7185" />
                <stop offset="40%" stopColor="#E11D48" />
                <stop offset="100%" stopColor="#881337" />
              </radialGradient>
              {/* Gold Beads Gradient */}
              <radialGradient id="goldBead" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#FEF08A" />
                <stop offset="50%" stopColor="#EAB308" />
                <stop offset="100%" stopColor="#A16207" />
              </radialGradient>
            </defs>

            {/* --- TOP RIGHT: MATCHING TEMPLE LAKSHMI JHUMKA EARRINGS --- */}
            {/* Earring 1 */}
            <g transform="translate(260, 20)">
              {/* Stud / Top Lakshmi Figurine */}
              <ellipse cx="20" cy="18" rx="14" ry="16" fill="url(#antiqueGold)" stroke="#6B4003" strokeWidth="1" />
              <circle cx="20" cy="18" r="6" fill="#A16207" opacity="0.6" />
              <circle cx="20" cy="18" r="3" fill="url(#rubyGlow)" />
              {/* Connector Link */}
              <rect x="18" y="34" width="4" height="6" fill="url(#antiqueGold)" />
              {/* Middle Floral Bracket */}
              <path d="M6 40C12 44 28 44 34 40C32 46 8 46 6 40Z" fill="url(#antiqueGold)" />
              {/* Lower Bell Jhumka */}
              <path d="M8 50C8 70 32 70 32 50Z" fill="url(#antiqueGold)" stroke="#6B4003" strokeWidth="1" />
              {/* Jhumka Hangings */}
              <circle cx="12" cy="74" r="2.5" fill="url(#goldBead)" />
              <circle cx="20" cy="76" r="3" fill="url(#goldBead)" />
              <circle cx="28" cy="74" r="2.5" fill="url(#goldBead)" />
            </g>

            {/* Earring 2 */}
            <g transform="translate(325, 35)">
              <ellipse cx="20" cy="18" rx="14" ry="16" fill="url(#antiqueGold)" stroke="#6B4003" strokeWidth="1" />
              <circle cx="20" cy="18" r="6" fill="#A16207" opacity="0.6" />
              <circle cx="20" cy="18" r="3" fill="url(#rubyGlow)" />
              <rect x="18" y="34" width="4" height="6" fill="url(#antiqueGold)" />
              <path d="M6 40C12 44 28 44 34 40C32 46 8 46 6 40Z" fill="url(#antiqueGold)" />
              <path d="M8 50C8 70 32 70 32 50Z" fill="url(#antiqueGold)" stroke="#6B4003" strokeWidth="1" />
              <circle cx="12" cy="74" r="2.5" fill="url(#goldBead)" />
              <circle cx="20" cy="76" r="3" fill="url(#goldBead)" />
              <circle cx="28" cy="74" r="2.5" fill="url(#goldBead)" />
            </g>

            {/* --- NECKLACE 1: UPPER TEMPLE CHOKER BAND --- */}
            <path
              d="M110,60 C70,120 70,190 170,225 C270,190 270,120 230,60"
              fill="none"
              stroke="url(#antiqueGold)"
              strokeWidth="18"
              strokeLinecap="round"
            />
            {/* Choker Inner Filigree Lace */}
            <path
              d="M115,65 C80,120 80,185 170,215 C260,185 260,120 225,65"
              fill="none"
              stroke="#6B4003"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />

            {/* Choker Centerpiece Lakshmi Pendant */}
            <g transform="translate(170, 215)">
              <ellipse cx="0" cy="15" rx="35" ry="25" fill="url(#antiqueGold)" stroke="#6B4003" strokeWidth="1.5" />
              {/* Deity Silhouette */}
              <ellipse cx="0" cy="13" rx="14" ry="16" fill="#78350F" opacity="0.7" />
              <circle cx="0" cy="7" r="5" fill="#FEF08A" />
              {/* Ruby Stones Outline */}
              <circle cx="-25" cy="15" r="3" fill="url(#rubyGlow)" />
              <circle cx="-15" cy="28" r="3" fill="url(#rubyGlow)" />
              <circle cx="0" cy="32" r="3.5" fill="url(#rubyGlow)" />
              <circle cx="15" cy="28" r="3" fill="url(#rubyGlow)" />
              <circle cx="25" cy="15" r="3" fill="url(#rubyGlow)" />
              {/* Hanging Gold Pearls */}
              <circle cx="-18" cy="40" r="3" fill="url(#goldBead)" />
              <circle cx="0" cy="44" r="4" fill="url(#goldBead)" />
              <circle cx="18" cy="40" r="3" fill="url(#goldBead)" />
            </g>

            {/* --- NECKLACE 2: LONGER TEMPLE HARAM (ROYAL HARAM CHAIN) --- */}
            {/* Outer Kasu & Ball Chain Strands */}
            <path
              d="M100,50 C40,140 40,240 180,300 C320,240 320,140 250,50"
              fill="none"
              stroke="url(#antiqueGold)"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <path
              d="M95,50 C30,140 30,250 180,312 C330,250 330,140 255,50"
              fill="none"
              stroke="url(#antiqueGold)"
              strokeWidth="5"
              strokeDasharray="4 2"
            />

            {/* Distinct Nakshi Motifs along the Haram Chain */}
            {[-60, -30, 30, 60].map((angle, idx) => (
              <g key={idx} transform={`translate(${180 + angle * 1.5}, ${260 - Math.abs(angle)})`}>
                <ellipse cx="0" cy="0" rx="8" ry="10" fill="url(#antiqueGold)" stroke="#6B4003" strokeWidth="0.8" />
                <circle cx="0" cy="0" r="2.5" fill="url(#rubyGlow)" />
              </g>
            ))}

            {/* --- GRAND CENTRAL TEMPLE NAKSHI LAKSHMI MEDALLION (MAIN PENDANT) --- */}
            <g transform="translate(180, 350)">
              {/* Shadow Base */}
              <circle cx="0" cy="0" r="64" fill="#000000" opacity="0.15" />

              {/* Outer Carved Sunburst / Filigree Ring */}
              <circle cx="0" cy="0" r="62" fill="url(#antiqueGold)" stroke="#5B3302" strokeWidth="2" />
              <circle cx="0" cy="0" r="56" fill="#9A6208" stroke="#FDE68A" strokeWidth="1" strokeDasharray="3 2" />

              {/* Peacocks / Hamsa Bracket Flanking Top */}
              <path d="M-45,-35 C-25,-55 -10,-45 0,-40 C10,-45 25,-55 45,-35" fill="url(#antiqueGold)" stroke="#6B4003" strokeWidth="1.5" />

              {/* Inner Sanctum Oval for Goddess Lakshmi */}
              <ellipse cx="0" cy="2" rx="42" ry="46" fill="#FBF3D5" stroke="#78350F" strokeWidth="1.5" />
              <ellipse cx="0" cy="2" rx="36" ry="40" fill="url(#antiqueGold)" />

              {/* Goddess Lakshmi Sacred Figurine Silhouette */}
              {/* Lotus Throne */}
              <path d="M-22,25 C-10,32 10,32 22,25 C14,35 -14,35 -22,25Z" fill="#E11D48" stroke="#FEF08A" strokeWidth="1" />
              {/* Goddess Body & Crown */}
              <ellipse cx="0" cy="5" rx="15" ry="18" fill="#854D0E" />
              <circle cx="0" cy="-12" r="8" fill="#FEF08A" />
              {/* Four Hands with Lotuses */}
              <circle cx="-16" cy="-2" r="4" fill="#E11D48" />
              <circle cx="16" cy="-2" r="4" fill="#E11D48" />
              <circle cx="0" cy="-5" r="2.5" fill="url(#rubyGlow)" />

              {/* Bottom Ruby Gemstone Halo Ring */}
              {[-50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50].map((deg) => {
                const rad = ((deg + 90) * Math.PI) / 180;
                const x = Math.cos(rad) * 62;
                const y = Math.sin(rad) * 62;
                return (
                  <circle key={deg} cx={x} cy={y} r="3" fill="url(#rubyGlow)" stroke="#FEF08A" strokeWidth="0.5" />
                );
              })}

              {/* Bottom Hanging Gold Bells & Pearls */}
              {[-45, -30, -15, 0, 15, 30, 45].map((xOffset) => (
                <g key={xOffset} transform={`translate(${xOffset}, 72)`}>
                  <line x1="0" y1="-8" x2="0" y2="4" stroke="#854D0E" strokeWidth="1.5" />
                  <circle cx="0" cy="6" r="3.5" fill="url(#goldBead)" stroke="#6B4003" strokeWidth="0.5" />
                </g>
              ))}
              {/* Center Grand Hanging Jhumki Ball */}
              <circle cx="0" cy="85" r="6" fill="url(#goldBead)" stroke="#5B3302" strokeWidth="1" />
            </g>
          </svg>
        </div>
      )}

      {/* Maroon Banner matching the card */}
      <div className="p-3.5 bg-gradient-to-t from-[#200307] to-[#3B0711] text-amber-200 text-center border-t-2 border-amber-500 space-y-0.5">
        <p className="font-serif text-sm font-bold text-amber-100">
          Handcrafted 91.6 KDM Temple Lakshmi Haram & Jhumkas Set
        </p>
        <p className="text-[11px] text-amber-300/80">
          Double-layer Nakshi haram with Goddess Lakshmi medallion & matching antique earrings
        </p>
      </div>
    </div>
  );
};
