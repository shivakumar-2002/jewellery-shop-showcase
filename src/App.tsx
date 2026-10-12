/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { PhotoLightbox } from './components/PhotoLightbox';
import { Home } from './pages/Home';
import { Collections } from './pages/Collections';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { AdminGalleryManager } from './pages/AdminGalleryManager';
import { NotFound } from './pages/NotFound';
import { LOCAL_PLACEHOLDER_PHOTOS } from './config/business';
import { GalleryItem, PageRoute } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  // Load photos from local storage if updated, or fall back to verified 100% gold list
  const [photos, setPhotos] = useState<GalleryItem[]>(() => {
    try {
      const saved = localStorage.getItem('hh_gold_gallery_photos_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
    return LOCAL_PLACEHOLDER_PHOTOS;
  });

  // Persist photos on change
  useEffect(() => {
    try {
      localStorage.setItem('hh_gold_gallery_photos_v2', JSON.stringify(photos));
    } catch {
      // Ignore quota errors if huge images
    }
  }, [photos]);

  // Sync hash with current page if user uses URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      if (['home', 'collections', 'about', 'contact', 'privacy', 'admin'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddPhoto = (newPhoto: GalleryItem) => {
    setPhotos((prev) => [newPhoto, ...prev]);
  };

  const handleDeletePhoto = (photoId: string) => {
    setPhotos((prev) => prev.filter((p) => p.id !== photoId));
  };

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-stone-900 flex flex-col font-sans selection:bg-amber-300 selection:text-stone-950">
      {/* Navigation Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <Home
            onNavigate={handleNavigate}
            onSelectPhoto={setActivePhoto}
            photos={photos}
          />
        )}
        {currentPage === 'collections' && (
          <Collections
            onSelectPhoto={setActivePhoto}
            photos={photos}
          />
        )}
        {currentPage === 'about' && (
          <About onNavigate={handleNavigate} />
        )}
        {currentPage === 'contact' && (
          <Contact />
        )}
        {currentPage === 'privacy' && (
          <Privacy />
        )}
        {currentPage === 'admin' && (
          <AdminGalleryManager
            onNavigate={handleNavigate}
            photos={photos}
            onAddPhoto={handleAddPhoto}
            onDeletePhoto={handleDeletePhoto}
          />
        )}
        {!['home', 'collections', 'about', 'contact', 'privacy', 'admin'].includes(currentPage) && (
          <NotFound onNavigate={handleNavigate} />
        )}
      </main>

      {/* Persistent WhatsApp Quick Floating Action */}
      <WhatsAppButton />

      {/* Full-screen Photo Lightbox Modal */}
      <PhotoLightbox
        photo={activePhoto}
        photos={photos}
        onClose={() => setActivePhoto(null)}
        onNavigate={(nextPhoto) => setActivePhoto(nextPhoto)}
      />

      {/* Showroom Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
