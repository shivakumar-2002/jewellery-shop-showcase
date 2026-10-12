import React from 'react';
import { Lock, Shield, Database, Sparkles, ArrowLeft } from 'lucide-react';
import { PageRoute } from '../types';
import { BUSINESS_CONFIG } from '../config/business';

interface AdminPreviewProps {
  onNavigate: (page: PageRoute) => void;
}

export const AdminPreview: React.FC<AdminPreviewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 sm:py-24 space-y-8">
      <div className="bg-white p-8 sm:p-10 rounded-sm border border-stone-200 shadow-md space-y-6 text-center">
        <div className="w-14 h-14 mx-auto rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800">
          <Lock className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
            Owner Management
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            Showroom Owner Portal
          </h1>
          <p className="text-sm text-stone-600 max-w-md mx-auto">
            This private administration area is where the owner of {BUSINESS_CONFIG.shopName} can 
            upload, caption, reorder, and remove showroom collection photos.
          </p>
        </div>

        {/* Phase Roadmap Note */}
        <div className="bg-stone-50 border border-stone-200 rounded-sm p-4 text-left space-y-3">
          <div className="flex items-center gap-2 text-stone-900 font-medium text-xs">
            <Database className="w-4 h-4 text-amber-700" />
            <span>Phased Implementation Status:</span>
          </div>
          <ul className="text-xs text-stone-600 space-y-2 pl-2">
            <li className="flex items-start gap-2">
              <span className="text-emerald-700 font-bold">✓</span>
              <span><strong>Phase 2 (Current):</strong> Public responsive pages, contact links, and local photo showcase are live.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-700 font-bold">→</span>
              <span><strong>Phase 3 (Next):</strong> Connect Supabase, create <code>gallery_photos</code> table and cloud storage bucket.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-stone-400 font-bold">•</span>
              <span><strong>Phase 4:</strong> Activate owner email/password login, photo uploader, and deletion confirmation.</span>
            </li>
          </ul>
        </div>

        <div className="pt-2">
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-stone-900 hover:bg-stone-800 text-stone-100 font-medium text-xs uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>Back to Public Website</span>
          </button>
        </div>
      </div>
    </div>
  );
};
