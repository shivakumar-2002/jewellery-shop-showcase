import React, { useState } from 'react';
import { Phone, Menu, X, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { HariHaraLogo } from './HariHaraLogo';
import { PageRoute } from '../types';

interface HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'Ornaments & Gallery', route: 'collections' },
    { label: 'About Workshop', route: 'about' },
    { label: 'Shop Address & Map', route: 'contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-30 bg-[#FFFDF7]/95 backdrop-blur-md border-b-2 border-amber-500/30 shadow-xs">
      {/* Top Banner inspired by card's bright yellow & red theme */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-stone-950 text-xs py-1.5 px-4 font-medium border-b border-amber-600/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span className="font-bold text-red-900 bg-amber-200/90 px-2 py-0.5 rounded-xs border border-amber-400">
              Prop. {BUSINESS_CONFIG.proprietorName}
            </span>
            <span className="text-stone-900">
              • Uppuguda, Hyderabad • <strong className="text-red-950 font-bold">{BUSINESS_CONFIG.purityGuarantee}</strong>
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-bold text-stone-950">
            <a
              href={`tel:${BUSINESS_CONFIG.phonePrimaryTel}`}
              className="hover:text-red-900 transition-colors flex items-center gap-1 bg-white/70 px-2 py-0.5 rounded-xs border border-amber-400"
            >
              <Phone className="w-3 h-3 text-red-700" />
              <span>Cell: {BUSINESS_CONFIG.phonePrimaryDisplay}</span>
            </a>
            <a
              href={`tel:${BUSINESS_CONFIG.phoneSecondaryTel}`}
              className="hover:text-red-900 transition-colors hidden md:flex items-center gap-1 bg-white/70 px-2 py-0.5 rounded-xs border border-amber-400"
            >
              <span>{BUSINESS_CONFIG.phoneSecondaryDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo with exact typography from card */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none focus:ring-2 focus:ring-amber-500 rounded p-1"
            aria-label={`${BUSINESS_CONFIG.shopName} - Home`}
          >
            <HariHaraLogo />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`text-sm tracking-wide transition-colors py-1.5 relative font-medium ${
                    isActive
                      ? 'text-red-800 font-bold'
                      : 'text-stone-800 hover:text-red-800'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-700 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Quick Call Button & Owner Portal Link */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_CONFIG.phonePrimaryTel}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-red-700 hover:bg-red-800 text-white transition-all text-xs font-bold tracking-wider uppercase shadow-xs border border-red-800"
            >
              <Phone className="w-3.5 h-3.5 text-amber-200" />
              <span>Call: {BUSINESS_CONFIG.phonePrimaryDisplay}</span>
            </a>

            <button
              onClick={() => handleNavClick('admin')}
              className="text-xs text-stone-500 hover:text-red-800 underline underline-offset-4"
              title="Shop Owner Portal"
            >
              Owner
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_CONFIG.phonePrimaryTel}`}
              className="p-2 rounded-sm bg-red-700 text-white hover:bg-red-800 shadow-xs"
              aria-label={`Call ${BUSINESS_CONFIG.phonePrimaryDisplay}`}
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm text-stone-800 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-amber-300 bg-[#FFFDF7] px-4 pt-3 pb-6 shadow-xl">
          <div className="mb-3 p-2 bg-amber-50 rounded border border-amber-200 text-xs text-stone-800">
            <p className="font-bold text-red-800">{BUSINESS_CONFIG.purityGuarantee}</p>
            <p className="text-[11px] text-stone-600 mt-0.5">
              Near Uppuguda Railway Station, Ambica Nagar, Uppuguda, Hyd-53
            </p>
          </div>

          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`text-left px-3 py-2.5 rounded text-sm font-medium ${
                  currentPage === item.route
                    ? 'bg-amber-100 text-red-900 font-bold'
                    : 'text-stone-800 hover:bg-stone-100'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-amber-200 mt-2 flex flex-col gap-2">
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-left px-3 py-2 rounded text-sm text-sky-900 font-medium hover:bg-sky-50 flex items-center justify-between"
              >
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-sky-700" />
                  <span>Directions to Uppuguda Shop</span>
                </span>
                <span className="text-xs text-sky-800">↗</span>
              </a>

              <div className="px-3 py-2 flex flex-col gap-1 text-xs">
                <span className="text-stone-500 font-medium">Contact Numbers:</span>
                <a href={`tel:${BUSINESS_CONFIG.phonePrimaryTel}`} className="font-bold text-red-800">
                  Cell 1: {BUSINESS_CONFIG.phonePrimaryDisplay}
                </a>
                <a href={`tel:${BUSINESS_CONFIG.phoneSecondaryTel}`} className="font-bold text-stone-800">
                  Cell 2: {BUSINESS_CONFIG.phoneSecondaryDisplay}
                </a>
              </div>

              <button
                onClick={() => handleNavClick('admin')}
                className="text-left px-3 py-2 text-xs text-stone-500 hover:text-stone-800"
              >
                Owner Login Portal
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
