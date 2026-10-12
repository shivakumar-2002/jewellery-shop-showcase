import React from 'react';
import { ShieldCheck, Lock, EyeOff, MessageSquare } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
      {/* Header */}
      <div className="text-center space-y-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-amber-800">
          Transparency & Legal
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
          Privacy Notice
        </h1>
        <p className="text-sm text-stone-600">
          Last updated: October 2026 • Official website policy for {BUSINESS_CONFIG.shopName}
        </p>
      </div>

      {/* Main Content */}
      <div className="bg-white p-8 sm:p-10 rounded-sm border border-stone-200 shadow-xs space-y-8 text-stone-700 text-sm leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-stone-900 font-semibold text-base font-serif">
            <EyeOff className="w-5 h-5 text-amber-700" />
            <h2>1. Informational Website Only — No Customer Data Collection</h2>
          </div>
          <p>
            This website serves solely as an online showroom profile for{' '}
            <strong>{BUSINESS_CONFIG.shopName}</strong>. We do not require visitors to create
            accounts, log in, or submit personal financial information.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-stone-600">
            <li>We do not have a shopping cart or online payment gateway.</li>
            <li>We never ask for credit card numbers, debit card details, or banking passwords online.</li>
            <li>We do not maintain customer login profiles on this public website.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-stone-900 font-semibold text-base font-serif">
            <MessageSquare className="w-5 h-5 text-amber-700" />
            <h2>2. Direct Phone and WhatsApp Communication</h2>
          </div>
          <p>
            When you click the "Call Now" or "WhatsApp Chat" buttons on our website:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-stone-600">
            <li>
              You are redirected to your device's native telephone dialer or the official WhatsApp application.
            </li>
            <li>
              No automated tracking or message recording is performed by this website. Any messages or calls you initiate are handled directly between you and our showroom staff according to WhatsApp and telecommunications standards.
            </li>
            <li>
              We respect your privacy and never sell or share your phone numbers with third-party telemarketers.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-stone-900 font-semibold text-base font-serif">
            <Lock className="w-5 h-5 text-amber-700" />
            <h2>3. Owner Photo Administration Security</h2>
          </div>
          <p>
            The administrative management section of this website is restricted exclusively to authorized
            showroom staff and the business owner. Administrative access is protected via secure cloud authentication
            with strict Row Level Security (RLS) policies.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-stone-900 font-semibold text-base font-serif">
            <ShieldCheck className="w-5 h-5 text-amber-700" />
            <h2>4. Questions Regarding This Policy</h2>
          </div>
          <p>
            If you have questions about this privacy statement, you can visit our physical showroom or contact us directly:
          </p>
          <div className="p-4 bg-stone-50 rounded-xs border border-stone-200 text-xs text-stone-700 space-y-1">
            <p className="font-semibold text-stone-900">{BUSINESS_CONFIG.shopName} (Prop. {BUSINESS_CONFIG.proprietorName})</p>
            <p>{BUSINESS_CONFIG.fullAddress.doorNo}, {BUSINESS_CONFIG.fullAddress.landmark}, {BUSINESS_CONFIG.fullAddress.area}, {BUSINESS_CONFIG.fullAddress.city}</p>
            <p>Cell: {BUSINESS_CONFIG.phonePrimaryDisplay} / {BUSINESS_CONFIG.phoneSecondaryDisplay}</p>
          </div>
        </section>
      </div>
    </div>
  );
};
