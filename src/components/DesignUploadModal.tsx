import React, { useState, useRef } from 'react';
import { Upload, X, MessageCircle, Phone, CheckCircle, Image as ImageIcon, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface DesignUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DesignUploadModal: React.FC<DesignUploadModalProps> = ({ isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [ornamentType, setOrnamentType] = useState<string>('Gold Necklace / Choker');
  const [approxGrams, setApproxGrams] = useState<string>('');
  const [customerNotes, setCustomerNotes] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please upload a valid image file (JPEG, PNG, WEBP).');
        return;
      }
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClearImage = () => {
    setSelectedImage(null);
    setFileName('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const whatsappMessage = `Namaste L. Srinivasa Chary garu (HARI HARA Jewellery Works)! 
I have a custom jewellery design I would like to get made in 91.6 KDM hallmarked gold / silver.
Ornament: ${ornamentType}
Approx. Weight: ${approxGrams ? `${approxGrams} grams` : 'As recommended'}
Notes: ${customerNotes || 'Attached photo design inquiry'}.
Please let me know the making details.`;

  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsAppNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-sm border-2 border-amber-400 shadow-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 border-b border-amber-200 pb-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-xs bg-amber-100 text-red-900 text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-amber-700" />
              <span>Workshop Custom Making</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-black text-stone-900">
              Upload Your Jewellery Design
            </h2>
            <p className="text-xs text-stone-600">
              Have a photo of a gold or silver ornament from your phone, wedding reference, or family heirloom? Upload it here to discuss with <strong>Prop. L. Srinivasa Chary</strong>.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-900 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Upload Zone */}
        <div className="space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-800">
            Design Picture:
          </label>

          {!selectedImage ? (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-amber-400 bg-amber-50/50 hover:bg-amber-100/50 rounded-sm p-6 text-center cursor-pointer transition-colors space-y-2 group"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-100 text-amber-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Upload className="w-6 h-6 text-red-700" />
              </div>
              <div>
                <p className="text-sm font-bold text-stone-900">
                  Tap to Select or Take Photo of Design
                </p>
                <p className="text-xs text-stone-500 mt-0.5">
                  Supports JPG, PNG, WEBP (From camera or photo gallery)
                </p>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          ) : (
            <div className="relative border-2 border-amber-400 rounded-sm bg-stone-50 p-3 space-y-2">
              <div className="relative aspect-16/9 sm:aspect-21/9 max-h-48 overflow-hidden rounded-xs bg-stone-900 flex items-center justify-center">
                <img
                  src={selectedImage}
                  alt="Uploaded jewellery design preview"
                  className="max-h-48 w-auto object-contain"
                />
                <button
                  onClick={handleClearImage}
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-red-600 text-white hover:bg-red-700 shadow-md transition-colors"
                  title="Remove image"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center justify-between text-xs text-stone-600 px-1">
                <span className="truncate max-w-xs font-medium">✓ {fileName}</span>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="text-amber-800 hover:text-red-700 underline font-semibold"
                >
                  Change Photo
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          )}
        </div>

        {/* Ornament Specifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-stone-800 mb-1">
              Type of Ornament:
            </label>
            <select
              value={ornamentType}
              onChange={(e) => setOrnamentType(e.target.value)}
              className="w-full text-xs font-medium bg-stone-50 border border-stone-300 rounded p-2.5 focus:border-red-600 focus:outline-none"
            >
              <option value="Gold Necklace / Choker">Gold Necklace / Choker</option>
              <option value="Bridal Haar / Kasu Haram">Bridal Haar / Kasu Haram</option>
              <option value="Gold Bangles / Kadas">Gold Bangles / Kadas</option>
              <option value="Gold Jhumkas / Earrings">Gold Jhumkas / Earrings</option>
              <option value="Telugu Mangalsutra / Pustelu">Telugu Mangalsutra / Pustelu</option>
              <option value="Temple Vaddanam (Waist Belt)">Temple Vaddanam (Waist Belt)</option>
              <option value="Gents Ring / Gold Chain">Gents Ring / Gold Chain</option>
              <option value="Pure Silver Thali / Articles">Pure Silver Thali / Articles</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-800 mb-1">
              Expected Gold/Silver Weight (Grams):
            </label>
            <input
              type="text"
              placeholder="e.g. 20g, 40g, or As per design"
              value={approxGrams}
              onChange={(e) => setApproxGrams(e.target.value)}
              className="w-full text-xs bg-stone-50 border border-stone-300 rounded p-2.5 focus:border-red-600 focus:outline-none"
            />
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-xs font-bold text-stone-800 mb-1">
            Special Instructions / Preferred Delivery Date:
          </label>
          <textarea
            rows={2}
            placeholder="e.g. For upcoming family wedding, need 91.6 KDM hallmarking with matching jhumkas"
            value={customerNotes}
            onChange={(e) => setCustomerNotes(e.target.value)}
            className="w-full text-xs bg-stone-50 border border-stone-300 rounded p-2.5 focus:border-red-600 focus:outline-none"
          />
        </div>

        {/* Action Triggers */}
        <div className="pt-2 border-t border-amber-200 flex flex-col sm:flex-row gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-[#128C7E] hover:bg-[#075E54] text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Send Details on WhatsApp (9848543615)</span>
          </a>

          <a
            href={`tel:${BUSINESS_CONFIG.phonePrimaryTel}`}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-red-700 hover:bg-red-800 text-white font-bold text-xs transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4 text-amber-200" />
            <span>Call Workshop Directly</span>
          </a>
        </div>
      </div>
    </div>
  );
};
