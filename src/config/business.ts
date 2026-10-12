import { BusinessContact, GalleryItem } from '../types';

/**
 * ============================================================================
 * OFFICIAL BUSINESS INFORMATION: HARI HARA JEWELLERY WORKS
 * Source: Official Visiting Card (Prop. L. Srinivasa Chary)
 * ============================================================================
 */

export const BUSINESS_CONFIG: BusinessContact = {
  // Official Shop Name
  shopName: "HARI HARA Jewellery Works",

  // Proprietor from visiting card
  proprietorName: "L. Srinivasa Chary",

  // Exact statement from visiting card
  tagline: "We Make All Types of Gold & Silver Ornaments in 91.6 KDM Hall Marke With Guarantee",

  // Short description
  shortDescription:
    "Master jewellery crafting and customized gold and silver ornament making in Uppuguda, Hyderabad since 2001. Over 25 years of trusted craftsmanship, specializing in 91.6 KDM hallmarked gold ornaments and pure silver articles with 100% purity guarantee.",

  // Guarantee line from card
  purityGuarantee: "91.6 KDM Hall Marke With 100% Purity Guarantee",

  // Complete address: Only S.No. 18-7-466/2/B/42
  fullAddress: {
    doorNo: "S.No. 18-7-466/2/B/42",
    landmark: "Near Uppuguda Railway Station",
    colony: "Ambica Nagar",
    area: "Uppuguda",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500053",
    country: "India",
  },

  // Primary Phone (from user prompt and card)
  phonePrimaryDisplay: "9848543615",
  phonePrimaryTel: "+919848543615",

  // Secondary Phone (from visiting card)
  phoneSecondaryDisplay: "9394647299",
  phoneSecondaryTel: "+919394647299",

  // WhatsApp number (Primary mobile: 9848543615)
  whatsAppNumber: "919848543615",
  whatsAppGreeting: "Namaste L. Srinivasa Chary garu! I saw HARI HARA Jewellery Works website and would like to inquire about gold / silver ornaments.",

  // Google Maps URL targeting exact shop location in Uppuguda, Hyderabad
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hari+Hara+Jewellery+Works+S.No.+18-7-466%2F2%2FB%2F42+Near+Uppuguda+Railway+Station+Ambica+Nagar+Uppuguda+Hyderabad+500053",

  // Opening Hours
  openingHours: [
    { days: "Monday – Saturday", hours: "10:00 AM – 09:00 PM", note: "Workshop & Orders Counter Open" },
    { days: "Sunday", hours: "10:30 AM – 03:00 PM", note: "Morning Half-Day Open" },
  ],

  weeklyClosingDay: "Open 7 Days (Sunday Half-Day)",

  // Established Year as requested: 2001 (Over 25 years of service)
  establishedYear: 2001,
  experienceYears: 25,

  certificationsNotice: "Established 2001 • 91.6 KDM Hall Marke With Guarantee",
};

/**
 * Curated 100% Pure Gold Ornaments & Gold Jewellery Catalog
 * (Bridal gold sets, temple kasu harams, gold kadas, jhumkas, mangalsutra, guttapusalu, rani haar, gold rings)
 */
export const LOCAL_PLACEHOLDER_PHOTOS: GalleryItem[] = [
  {
    id: "hh-01",
    title: "91.6 KDM Royal Bridal Gold Choker & Long Haar Set",
    category: "Bridal",
    imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85",
    altText: "Complete 22K 91.6 hallmarked gold bridal choker and long haar necklace ornament set with matching earrings",
    isFeatured: true,
    displayOrder: 1,
    description: "Traditional bridal masterpiece in 91.6 KDM hallmarked gold with intricate gold nakshi work and matching gold jhumkas.",
  },
  {
    id: "hh-02",
    title: "Traditional 91.6 Gold Temple Kasu Haram",
    category: "Temple",
    imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=85",
    altText: "Handcrafted 22K 91.6 gold temple kasu malai haram necklace with Goddess Lakshmi coins",
    isFeatured: true,
    displayOrder: 2,
    description: "Auspicious temple gold kasu malai and Lakshmi haram crafted with 91.6 KDM purity guarantee.",
  },
  {
    id: "hh-03",
    title: "Solid 91.6 Gold Kadas & Filigree Bangles",
    category: "Bangles",
    imageUrl: "https://images.unsplash.com/photo-1611591475806-95383501a357?auto=format&fit=crop&w=1200&q=85",
    altText: "Pair of 91.6 KDM hallmarked heavy solid gold kadas with floral filigree engravings",
    isFeatured: true,
    displayOrder: 3,
    description: "Heavy solid 91.6 hallmarked gold bangles and antique gold kadas made to custom wrist size.",
  },
  {
    id: "hh-04",
    title: "Royal Antique Gold Jhumkas with Pearl Drops",
    category: "Earrings",
    imageUrl: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=85",
    altText: "Traditional 22K 91.6 gold jhumka earrings with ruby stones and hanging pearl drops",
    isFeatured: true,
    displayOrder: 4,
    description: "Classic South Indian tiered bell gold jhumkis with delicate natural pearl cluster hangings.",
  },
  {
    id: "hh-05",
    title: "Traditional 91.6 Gold Mangalsutra (Nallapusalu) & Pustelu",
    category: "Necklaces",
    imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=85",
    altText: "Handcrafted Telugu 22K gold Nallapusalu chain with gold pustelu cups and pendant",
    isFeatured: false,
    displayOrder: 5,
    description: "Traditional auspicious gold Nallapusalu chain with Telugu Pustelu pendants, custom-crafted to weight.",
  },
  {
    id: "hh-06",
    title: "22K Gold Antique Guttapusalu Heritage Necklace",
    category: "Necklaces",
    imageUrl: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1200&q=85",
    altText: "Traditional Andhra Guttapusalu gold necklace fringed with bunches of pearls and rubies",
    isFeatured: true,
    displayOrder: 6,
    description: "Heritage Guttapusalu gold necklace made in 91.6 hallmarked gold with natural gemstone cluster fringe.",
  },
  {
    id: "hh-07",
    title: "Men's Heavy 91.6 Gold Rings & Solid Rope Chain",
    category: "Rings",
    imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=85",
    altText: "Men's solid 91.6 hallmarked gold signet ring and heavy handmade gold rope chain",
    isFeatured: false,
    displayOrder: 7,
    description: "Men's solid 91.6 gold signet rings, Navaratna rings, and handmade thick gold rope chains.",
  },
  {
    id: "hh-08",
    title: "Royal Indian 22K Gold Rani Haar Set",
    category: "Bridal",
    imageUrl: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1200&q=85",
    altText: "Magnificent 22K gold Rani Haar bridal necklace set with matching earrings",
    isFeatured: true,
    displayOrder: 8,
    description: "Grand wedding bridal Rani Haar with multi-layered gold chains and royal floral medallion pendant.",
  },
  {
    id: "hh-09",
    title: "Artisan 91.6 Gold Kasu Choker Necklace",
    category: "Gold",
    imageUrl: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1200&q=85",
    altText: "22K yellow gold choker necklace with floral filigree gold beads",
    isFeatured: false,
    displayOrder: 9,
    description: "Rich yellow gold choker ornament custom-crafted to measure with 91.6 KDM hallmarking guarantee.",
  },
  {
    id: "hh-10",
    title: "Traditional Gold Temple Nakshi Pendant & Chain",
    category: "Temple",
    imageUrl: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=1200&q=85",
    altText: "Intricate 91.6 gold temple deity pendant on solid handmade gold chain",
    isFeatured: false,
    displayOrder: 10,
    description: "Auspicious temple gold pendant embossed with divine iconography in pure 22K hallmarked gold.",
  },
];
