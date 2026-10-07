/*
  Stock photography served from Unsplash's CDN (Unsplash License: free for
  commercial use, no attribution required). To self-host later, download the
  photo and swap the URL for a /public/images path.
*/

export type Photo = {
  id: string;
  alt: string;
  position?: string;
  /** "contain": show the whole photo (no cropping) over a blurred copy of itself — for portrait photos in wide frames */
  fit?: "cover" | "contain";
};

export const PHOTOS = {
  // Creative formats
  ugcCreator: { id: "1665327465092-a5a05e70bd20", alt: "Creator filming a video on her phone with a ring light at home", position: "50% 40%" },
  avatarPresenter: { id: "1655199153917-b38b9af8618a", alt: "Presenter in a suit speaking to a studio camera", position: "50% 30%" },
  perfumeCinematic: { id: "1615160460366-2c9a41771b51", alt: "Glass perfume bottle reflected on a glossy teal surface", position: "50% 55%" },
  cartoonCharacter: { id: "1740252117070-7aa2955b25f8", alt: "Playful 3D toy character on a pink background", position: "50% 35%" },
  digitalTwin: { id: "1677442135730-64f105e0ea05", alt: "A face looking at its digital wireframe twin" }, // landscape, fits the card

  // Industries
  beauty: { id: "1631730486572-226d1f595b68", alt: "Rose-gold skincare and makeup products on a pink background" },
  wellness: { id: "1664956618021-73c47736845e", alt: "Supplement capsules spilling from a bottle beside greenery" },
  fashion: { id: "1490481651871-ab68de25d43d", alt: "Neutral-toned clothes on wooden hangers" },
  jewelry: { id: "1605100804763-247f67b3557e", alt: "Diamond ring on a dark background" },
  food: { id: "1461023058943-07fcbe16d735", alt: "Iced latte on a café table" }, // landscape, fits the card
  pet: { id: "1715409555194-8c1e57d0b264", alt: "Brown dog resting on a rug at home", position: "50% 40%" },
  ecommerce: { id: "1449247666642-264389f5f5b1", alt: "Person packing an online order into a cardboard box" },
} satisfies Record<string, Photo>;

/** Unsplash CDN URL at a given width (auto WebP/AVIF, cropped to fill) */
export const unsplash = (id: string, w: number, q = 70) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

/** srcSet for responsive widths */
export const unsplashSet = (id: string, widths = [320, 480, 640, 960, 1280]) =>
  widths.map((w) => `${unsplash(id, w)} ${w}w`).join(", ");

/* Section background photos (AI studio / video production) — shown semi-transparent behind content */
export const SECTION_BG = {
  hero: { id: "1612544409025-e1f6a56c1152", alt: "", position: "50% 40%" }, // lit production soundstage
  problem: { id: "1681137063068-081072cf04b4", alt: "" }, // crew around a camera
  solution: { id: "1641077819732-a6437ac43707", alt: "", position: "50% 30%" }, // presenter in front of a studio camera
  showcase: { id: "1745848413060-0827ec268cda", alt: "" }, // camera filming a scene
  formats: { id: "1641077818627-e6cf60970f3a", alt: "" }, // crew with cameras on tripods
  process: { id: "1574717024653-61fd2cf4d44d", alt: "" }, // video editing timeline
  industries: { id: "1587050007609-d9686b217bd6", alt: "" }, // videographer at a camera rig
  why: { id: "1603201667230-bd139210db18", alt: "", position: "50% 35%" }, // creative team at work
  comparison: { id: "1781127445209-f02336fa36a0", alt: "" }, // studio cameras and crew
  finalCta: { id: "1727451139462-cd34008cd50b", alt: "" }, // dark studio with a spotlight
  contact: { id: "1553028826-1e7ae9200212", alt: "" }, // green-screen shoot
} satisfies Record<string, Photo>;
