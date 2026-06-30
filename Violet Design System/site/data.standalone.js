// Shared catalog data for the Violet reference-site pages (standalone, multi-page).
// Watch photography references the same Unsplash frames as the source prototypes.
window.VT_SITE = (function () {
  // Real watch photography. One fixed render size so every <img> dedupes to
  // 12 cached requests instead of dozens of distinct crops.
  const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=640&h=640&q=78`;
  const frames = [
    'photo-1547996160-81dfa63595aa', // bronze automatic on red
    'photo-1524592094714-0f0654e20314', // white dial leather
    'photo-1612817159949-195b6eb9e31a', // steel chrono
    'photo-1533139502658-0198f920d8e8', // brown-leather chrono
    'photo-1611591437281-460bfbe1220a', // dark diver bezel
    'photo-1542496658-e33a6d0d50f6', // Breitling blue/gold
    'photo-1523275335684-37898b6baf30', // minimalist leather
    'photo-1495704907664-81f74a7efd9b', // dark dial detail
    'photo-1526045431048-f857369baa09', // strap detail
    'photo-1434056886845-dac89ffe9b56', // dark minimalist
    'photo-1508057198894-247b23fe5ade', // smart/sport
    'photo-1548169874-53e85f753f1e', // lifestyle
  ];
  // STANDALONE: frames are inlined as blob URLs via ext-resource-dependency meta tags.
  const frame = (i) => (window.__resources && window.__resources['frame' + (i % frames.length)]) || img(frames[i % frames.length]);

  // facets: gender, strap, color, movement, water (ATM)
  const products = [
    { name: 'Chronograph Classic 42', sku: 'VLT-2601', line: 'Classic', isNew: true, gender: 'Men', strap: 'Leather', color: 'Midnight', movement: 'Quartz', water: 5, f: 0, f2: 1 },
    { name: 'Heritage Automatic 40', sku: 'VLT-2602', line: 'Classic', isNew: true, gender: 'Men', strap: 'Steel', color: 'Steel', movement: 'Automatic', water: 3, f: 2, f2: 3 },
    { name: 'Sport Diver 44', sku: 'VLT-2603', line: 'Sport', isNew: true, gender: 'Men', strap: 'Rubber', color: 'Plum', movement: 'Quartz', water: 20, f: 3, f2: 5 },
    { name: 'Lunar Moonphase 41', sku: 'VLT-2604', line: 'Classic', isNew: true, gender: 'Women', strap: 'Leather', color: 'Gold', movement: 'Automatic', water: 5, f: 6, f2: 4 },
    { name: 'Aurora Skeleton 42', sku: 'VLT-2605', line: 'Classic', isNew: true, gender: 'Men', strap: 'Steel', color: 'Steel', movement: 'Automatic', water: 5, f: 7, f2: 4 },
    { name: 'Solaria Rose 36', sku: 'VLT-2606', line: 'Classic', isNew: true, gender: 'Women', strap: 'Mesh', color: 'Gold', movement: 'Quartz', water: 3, f: 8, f2: 9 },
    { name: 'Meridian GMT 43', sku: 'VLT-2607', line: 'Sport', isNew: true, gender: 'Men', strap: 'Steel', color: 'Midnight', movement: 'Quartz', water: 10, f: 4, f2: 0 },
    { name: 'Pulse Smart 45', sku: 'VLT-2608', line: 'Smart', isNew: true, gender: 'Men', strap: 'Rubber', color: 'Midnight', movement: 'Smart', water: 5, f: 10, f2: 1 },

    { name: 'Eclipse Dress 38', sku: 'VLT-1182', line: 'Classic', isNew: false, gender: 'Women', strap: 'Leather', color: 'Plum', movement: 'Quartz', water: 3, f: 5, f2: 2 },
    { name: 'Tempo Quartz 36', sku: 'VLT-1183', line: 'Smart', isNew: false, gender: 'Women', strap: 'Mesh', color: 'Steel', movement: 'Quartz', water: 3, f: 1, f2: 6 },
    { name: 'Nocturne Automatic 40', sku: 'VLT-1184', line: 'Classic', isNew: false, gender: 'Men', strap: 'Leather', color: 'Midnight', movement: 'Automatic', water: 5, f: 2, f2: 7 },
    { name: 'Regatta Sport 42', sku: 'VLT-1186', line: 'Sport', isNew: false, gender: 'Men', strap: 'Rubber', color: 'Plum', movement: 'Quartz', water: 20, f: 11, f2: 3 },
  ];

  const lines = [
    { name: 'Classic', desc: 'Timeless dress watches', f: 2 },
    { name: 'Sport', desc: 'Built for motion & depth', f: 3 },
    { name: 'Smart', desc: 'Connected, quietly', f: 10 },
  ];

  // facet option lists for filters
  const facets = {
    Gender: ['Men', 'Women'],
    Strap: ['Leather', 'Steel', 'Mesh', 'Rubber'],
    Color: ['Midnight', 'Gold', 'Steel', 'Plum'],
    Movement: ['Quartz', 'Automatic', 'Smart'],
  };

  return { img, frame, frames, products, lines, facets };
})();
