export interface BusinessContact {
  shopName: string;
  proprietorName: string;
  tagline: string;
  shortDescription: string;
  purityGuarantee: string;
  fullAddress: {
    doorNo: string;
    landmark: string;
    colony: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  phonePrimaryDisplay: string;    // "9848543615"
  phonePrimaryTel: string;        // "+919848543615"
  phoneSecondaryDisplay: string;  // "9394647299"
  phoneSecondaryTel: string;      // "+919394647299"
  whatsAppNumber: string;        // "919848543615"
  whatsAppGreeting: string;
  email?: string;
  googleMapsUrl: string;
  openingHours: {
    days: string;
    hours: string;
    note?: string;
  }[];
  weeklyClosingDay: string;
  establishedYear: number;
  experienceYears: number;
  certificationsNotice: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Gold' | 'Bridal' | 'Necklaces' | 'Bangles' | 'Earrings' | 'Temple' | 'Rings';
  imageUrl: string;
  altText: string;
  isFeatured?: boolean;
  displayOrder: number;
  description?: string;
}

export type PageRoute = 'home' | 'collections' | 'about' | 'contact' | 'privacy' | 'admin';
