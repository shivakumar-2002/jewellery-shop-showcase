import React, { useState, useRef } from 'react';
import { Upload, Plus, Trash2, ArrowLeft, Image as ImageIcon, Check, Sparkles, AlertCircle, Eye } from 'lucide-react';
import { GalleryItem, PageRoute } from '../types';
import { BUSINESS_CONFIG } from '../config/business';

interface AdminGalleryManagerProps {
  onNavigate: (page: PageRoute) => void;
  photos: GalleryItem[];
  onAddPhoto: (photo: GalleryItem) => void;
  onDeletePhoto: (photoId: string) => void;
}

export const AdminGalleryManager: React.FC<AdminGalleryManagerProps> = ({
  onNavigate,
  photos,
  onAddPhoto,
  onDeletePhoto,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<GalleryItem['category']>('Gold');
  const [description, setDescription] = useState('');
  const [altText, setAltText] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [displayOrder, setDisplayOrder] = useState<number>(photos.length + 1);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [photoToDelete, setPhotoToDelete] = useState<GalleryItem | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Custom Logo Upload State
  const [logoPreview, setLogoPreview] = useState<string | null>(() => {
    try {
      return localStorage.getItem('hh_custom_logo');
    } catch {
      return null;
    }
  });
  const logoInputRef = useRef<HTMLInputElement>(null);

  const handleLogoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please choose a valid image file (PNG, JPG, WEBP).');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setLogoPreview(result);
        try {
          localStorage.setItem('hh_custom_logo', result);
        } catch {}
        setSuccessMessage('Logo picture successfully updated! It is now active across your entire website.');
        setTimeout(() => window.location.reload(), 1500);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetLogo = () => {
    try {
      localStorage.removeItem('hh_custom_logo');
    } catch {}
    setLogoPreview(null);
    setSuccessMessage('Logo reset to default divine Shiva-Parvati depiction.');
    setTimeout(() => window.location.reload(), 1500);
  };

  // About Page Showcase Photo State
  const [aboutPhotoPreview, setAboutPhotoPreview] = useState<string | null>(() => {
    try {
      return localStorage.getItem('hh_about_custom_photo');
    } catch {
      return null;
    }
  });
  const aboutPhotoInputRef = useRef<HTMLInputElement>(null);

  const handleAboutPhotoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please choose a valid image file (PNG, JPG, WEBP).');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setAboutPhotoPreview(result);
        try {
          localStorage.setItem('hh_about_custom_photo', result);
        } catch {}
        setSuccessMessage('About workshop showcase photo successfully updated!');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetAboutPhoto = () => {
    try {
      localStorage.removeItem('hh_about_custom_photo');
    } catch {}
    setAboutPhotoPreview(null);
    setSuccessMessage('About workshop photo reset to default 91.6 Temple Gold Haram set.');
  };

  // Home Hero Featured Photo State
  const [heroPhotoPreview, setHeroPhotoPreview] = useState<string | null>(() => {
    try {
      return localStorage.getItem('hh_hero_custom_photo');
    } catch {
      return null;
    }
  });
  const heroPhotoInputRef = useRef<HTMLInputElement>(null);

  const handleHeroPhotoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please choose a valid image file (PNG, JPG, WEBP).');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setHeroPhotoPreview(result);
        try {
          localStorage.setItem('hh_hero_custom_photo', result);
        } catch {}
        setSuccessMessage('Home hero featured jewellery photo successfully updated!');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetHeroPhoto = () => {
    try {
      localStorage.removeItem('hh_hero_custom_photo');
    } catch {}
    setHeroPhotoPreview(null);
    setSuccessMessage('Home hero photo reset to default 91.6 Bridal Gold set.');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please choose a valid photo file (JPEG, PNG, WEBP).');
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        alert('File size exceeds 10MB. Please choose an image under 10MB.');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
        if (!title) {
          setTitle(file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imagePreview) {
      alert('Please select or upload a jewellery photo.');
      return;
    }
    if (!title.trim()) {
      alert('Please enter a title for the ornament.');
      return;
    }

    const newPhoto: GalleryItem = {
      id: `custom-${Date.now()}`,
      title: title.trim(),
      category,
      imageUrl: imagePreview,
      altText: altText.trim() || `${title.trim()} handcrafted at Hari Hara Jewellery Works`,
      isFeatured,
      displayOrder: Number(displayOrder) || photos.length + 1,
      description: description.trim() || `Handcrafted ${category} ornament made with 91.6 KDM hallmarking guarantee.`,
    };

    onAddPhoto(newPhoto);
    setSuccessMessage(`"${newPhoto.title}" has been successfully added to your live jewellery gallery!`);

    // Reset Form
    setTitle('');
    setDescription('');
    setAltText('');
    setImagePreview(null);
    setIsFeatured(false);
    setDisplayOrder(photos.length + 2);
    if (fileInputRef.current) fileInputRef.current.value = '';

    setTimeout(() => setSuccessMessage(null), 5000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-300 pb-6">
        <div>
          <button
            onClick={() => onNavigate('collections')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 hover:text-red-700 transition-colors uppercase tracking-wider mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Public Gallery</span>
          </button>
          <h1 className="font-serif text-2xl sm:text-3xl font-black text-stone-900">
            Owner Photo Studio & Design Uploads
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            {BUSINESS_CONFIG.shopName} • Prop. {BUSINESS_CONFIG.proprietorName} (Est. {BUSINESS_CONFIG.establishedYear})
          </p>
        </div>

        <button
          onClick={() => onNavigate('collections')}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-stone-900 text-stone-100 hover:bg-stone-800 text-xs font-bold tracking-wider uppercase transition-colors shrink-0"
        >
          <Eye className="w-4 h-4 text-amber-300" />
          <span>View Live Website</span>
        </button>
      </div>

      {successMessage && (
        <div className="p-4 rounded-sm bg-emerald-50 border-2 border-emerald-400 text-emerald-900 flex items-center gap-3">
          <Check className="w-5 h-5 text-emerald-700 shrink-0" />
          <span className="text-xs sm:text-sm font-bold">{successMessage}</span>
        </div>
      )}

      {/* Shop Brand Logo Management Card */}
      <div className="bg-amber-50/70 border-2 border-amber-400 rounded-sm p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="flex items-center gap-4 text-left">
          <div className="w-16 h-16 rounded-full border-2 border-amber-500 overflow-hidden bg-stone-900 shrink-0 shadow-md flex items-center justify-center">
            {logoPreview ? (
              <img src={logoPreview} alt="Current Shop Logo" className="w-full h-full object-cover" />
            ) : (
              <span className="text-[10px] text-amber-200 font-bold text-center px-1">Divine Logo</span>
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-bold text-red-800">
                Official Shop Logo
              </span>
              <span className="text-[10px] bg-amber-200 text-stone-900 px-2 py-0.5 rounded-xs font-semibold">
                Lord Shiva & Parvati Picture
              </span>
            </div>
            <h3 className="font-serif font-bold text-base text-stone-900 mt-0.5">
              Brand Logo Picture
            </h3>
            <p className="text-xs text-stone-600 mt-0.5">
              Upload your photo of Lord Shiva & Parvati to be displayed in your shop's header and branding.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => logoInputRef.current?.click()}
            className="px-4 py-2.5 rounded-sm bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
          >
            Upload Logo Picture
          </button>
          {logoPreview && (
            <button
              type="button"
              onClick={handleResetLogo}
              className="px-3 py-2 rounded-sm bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-semibold transition-colors"
            >
              Reset Default
            </button>
          )}
          <input
            ref={logoInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleLogoFileChange}
          />
        </div>
      </div>

      {/* About Workshop Showcase Photo Card */}
      <div className="bg-amber-50/70 border-2 border-amber-400 rounded-sm p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="flex items-center gap-4 text-left">
          <div className="w-16 h-16 rounded border-2 border-amber-500 overflow-hidden bg-stone-900 shrink-0 shadow-md flex items-center justify-center">
            {aboutPhotoPreview ? (
              <img src={aboutPhotoPreview} alt="About Workshop Showcase" className="w-full h-full object-cover" />
            ) : (
              <img
                src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=400&q=80"
                alt="Temple Gold Haram"
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-bold text-red-800">
                About Workshop Showcase Photo
              </span>
              <span className="text-[10px] bg-amber-200 text-stone-900 px-2 py-0.5 rounded-xs font-semibold">
                Temple Gold Haram & Choker
              </span>
            </div>
            <h3 className="font-serif font-bold text-base text-stone-900 mt-0.5">
              About Page Featured Gold Jewellery
            </h3>
            <p className="text-xs text-stone-600 mt-0.5">
              Change the featured gold temple jewellery photo displayed on your "About Workshop" story page.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => aboutPhotoInputRef.current?.click()}
            className="px-4 py-2.5 rounded-sm bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
          >
            Upload Photo
          </button>
          {aboutPhotoPreview && (
            <button
              type="button"
              onClick={handleResetAboutPhoto}
              className="px-3 py-2 rounded-sm bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-semibold transition-colors"
            >
              Reset Default
            </button>
          )}
          <input
            ref={aboutPhotoInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleAboutPhotoFileChange}
          />
        </div>
      </div>

      {/* Home Hero Featured Jewellery Photo Card */}
      <div className="bg-amber-50/70 border-2 border-amber-400 rounded-sm p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="flex items-center gap-4 text-left">
          <div className="w-16 h-20 rounded border-2 border-amber-500 overflow-hidden bg-stone-900 shrink-0 shadow-md flex items-center justify-center">
            {heroPhotoPreview ? (
              <img src={heroPhotoPreview} alt="Hero Showcase" className="w-full h-full object-cover" />
            ) : (
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80"
                alt="Bridal Gold Jewellery"
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-bold text-red-800">
                Home Hero Featured Photo
              </span>
              <span className="text-[10px] bg-amber-200 text-stone-900 px-2 py-0.5 rounded-xs font-semibold">
                Main Banner Jewellery Card
              </span>
            </div>
            <h3 className="font-serif font-bold text-base text-stone-900 mt-0.5">
              Hero Top Banner Jewellery Photo
            </h3>
            <p className="text-xs text-stone-600 mt-0.5">
              Change the featured jewellery ornament photo shown in the golden framed card on the Home page top banner.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => heroPhotoInputRef.current?.click()}
            className="px-4 py-2.5 rounded-sm bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
          >
            Upload Hero Photo
          </button>
          {heroPhotoPreview && (
            <button
              type="button"
              onClick={handleResetHeroPhoto}
              className="px-3 py-2 rounded-sm bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-semibold transition-colors"
            >
              Reset Default
            </button>
          )}
          <input
            ref={heroPhotoInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleHeroPhotoFileChange}
          />
        </div>
      </div>

      {/* Main Grid: Upload Form on Left, Current Photos on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Upload Form (5 cols on lg) */}
        <div className="lg:col-span-5 bg-white p-6 rounded-sm border-2 border-amber-400 shadow-md space-y-5">
          <div className="flex items-center gap-2 border-b border-amber-200 pb-3">
            <Upload className="w-5 h-5 text-red-700" />
            <h2 className="font-serif text-lg font-bold text-stone-900">
              Upload New Jewellery Picture
            </h2>
          </div>

          <form onSubmit={handleUploadSubmit} className="space-y-4 text-xs">
            {/* File Selector */}
            <div>
              <label className="block font-bold text-stone-800 mb-1">
                Select Photo From Device: *
              </label>
              {!imagePreview ? (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-amber-300 hover:border-red-600 bg-amber-50/60 rounded p-5 text-center cursor-pointer transition-colors space-y-1"
                >
                  <ImageIcon className="w-8 h-8 text-amber-700 mx-auto" />
                  <p className="font-bold text-stone-900 text-xs">Tap to choose photo</p>
                  <p className="text-[10px] text-stone-500">JPG, PNG, WEBP (Max 10MB)</p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
              ) : (
                <div className="relative border border-amber-300 rounded p-2 bg-stone-50 space-y-2">
                  <div className="aspect-4/3 max-h-48 overflow-hidden rounded bg-stone-900 flex items-center justify-center">
                    <img
                      src={imagePreview}
                      alt="Upload preview"
                      className="max-h-48 w-auto object-contain"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setImagePreview(null);
                      if (fileInputRef.current) fileInputRef.current.value = '';
                    }}
                    className="text-red-700 hover:underline font-bold text-[11px] block text-center"
                  >
                    Change / Remove Photo
                  </button>
                </div>
              )}
            </div>

            {/* Title */}
            <div>
              <label className="block font-bold text-stone-800 mb-1">
                Ornament Title / Caption: *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 91.6 KDM Traditional Kasu Haar"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded p-2.5 focus:border-red-600 focus:outline-none"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block font-bold text-stone-800 mb-1">
                Jewellery Category: *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as GalleryItem['category'])}
                className="w-full bg-stone-50 border border-stone-300 rounded p-2.5 font-bold focus:border-red-600 focus:outline-none"
              >
                <option value="Gold">Gold Ornaments</option>
                <option value="Bridal">Bridal Sets & Chokers</option>
                <option value="Necklaces">Necklaces & Mangalsutra</option>
                <option value="Bangles">Bangles & Kadas</option>
                <option value="Earrings">Jhumkas & Earrings</option>
                <option value="Temple">Temple Nakshi & Vaddanam</option>
                <option value="Rings">Gold Rings & Chains</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block font-bold text-stone-800 mb-1">
                Description / Gram Weight details:
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Handcrafted in 91.6 KDM hallmarked gold with natural rubies and pearls."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded p-2 focus:border-red-600 focus:outline-none"
              />
            </div>

            {/* Alt text for Google Search */}
            <div>
              <label className="block font-bold text-stone-800 mb-1">
                Photo Alt Text (For Google Search & SEO):
              </label>
              <input
                type="text"
                placeholder="e.g. Handcrafted gold bridal choker necklace in Uppuguda Hyderabad"
                value={altText}
                onChange={(e) => setAltText(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded p-2 focus:border-red-600 focus:outline-none"
              />
            </div>

            {/* Featured toggle & display order */}
            <div className="grid grid-cols-2 gap-3 items-center pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isFeatured}
                  onChange={(e) => setIsFeatured(e.target.checked)}
                  className="rounded text-red-700 w-4 h-4"
                />
                <span className="font-bold text-stone-900">Show on Home Page</span>
              </label>

              <div>
                <label className="block text-[11px] text-stone-600">Display Order:</label>
                <input
                  type="number"
                  min="1"
                  value={displayOrder}
                  onChange={(e) => setDisplayOrder(Number(e.target.value))}
                  className="w-full bg-stone-50 border border-stone-300 rounded p-1.5 focus:outline-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-sm bg-red-700 hover:bg-red-800 text-white font-bold text-sm tracking-wider uppercase transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4 text-amber-200" />
              <span>Add to Live Gallery</span>
            </button>
          </form>
        </div>

        {/* Existing Photos List (7 cols on lg) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <h2 className="font-serif text-lg font-bold text-stone-900">
              Current Gallery Items ({photos.length})
            </h2>
            <span className="text-xs text-stone-500">
              Changes reflect instantly on your live website
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[750px] overflow-y-auto pr-1">
            {photos.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded border border-stone-200 hover:border-amber-400 p-3 shadow-xs space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-4/3 overflow-hidden rounded bg-stone-100 relative mb-2">
                    <img
                      src={item.imageUrl}
                      alt={item.altText}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-1.5 left-1.5 bg-stone-900/80 text-amber-300 text-[10px] uppercase font-bold px-2 py-0.5 rounded-xs">
                      {item.category}
                    </span>
                    {item.isFeatured && (
                      <span className="absolute top-1.5 right-1.5 bg-red-700 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-xs">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif font-bold text-sm text-stone-900 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-stone-500 line-clamp-2 mt-0.5">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-stone-400 text-[10px]">Order: #{item.displayOrder}</span>
                  <button
                    onClick={() => setPhotoToDelete(item)}
                    className="text-red-700 hover:text-red-900 p-1 rounded hover:bg-red-50 transition-colors flex items-center gap-1 font-bold text-[11px]"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Confirmation Modal for Deletion */}
      {photoToDelete && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/80 flex items-center justify-center p-4"
          onClick={() => setPhotoToDelete(null)}
        >
          <div
            className="bg-white rounded-sm border-2 border-red-600 p-6 max-w-md w-full space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 text-red-700">
              <AlertCircle className="w-6 h-6 shrink-0" />
              <h3 className="font-serif font-bold text-lg text-stone-900">
                Confirm Photo Deletion
              </h3>
            </div>
            <p className="text-xs text-stone-700 leading-relaxed">
              Are you sure you want to remove <strong>"{photoToDelete.title}"</strong> from your live website gallery?
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setPhotoToDelete(null)}
                className="px-4 py-2 rounded text-xs font-semibold text-stone-700 hover:bg-stone-100"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onDeletePhoto(photoToDelete.id);
                  setPhotoToDelete(null);
                }}
                className="px-4 py-2 rounded bg-red-700 hover:bg-red-800 text-white text-xs font-bold transition-colors shadow-xs"
              >
                Yes, Delete Photo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
