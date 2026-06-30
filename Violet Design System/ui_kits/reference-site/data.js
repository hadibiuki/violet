// Shared mock product data for the Violet reference-site UI kit.
// Watch photography references the same Unsplash frames used by the source prototypes.
window.VT_DATA = (function () {
  const img = (id, w = 600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

  const frames = [
    'photo-1523275335684-37898b6baf30',
    'photo-1547996160-81dfa63595aa',
    'photo-1524805444758-089113d48a6d',
    'photo-1533139502658-0198f920d8e8',
    'photo-1612817159949-195b6eb9e31a',
    'photo-1508685096489-7aacd43bd3b1',
    'photo-1434056886845-dac89ffe9b56',
    'photo-1495856458515-0637185db551',
  ];

  const products = [
    { name: 'Chronograph Classic 42', sku: 'VLT-2601', line: 'Classic', badge: 'new', price: '$1,250', f: 0, f2: 1, wr: '5 ATM', mvmt: 'Quartz Chronograph', mm: '42 mm' },
    { name: 'Heritage Automatic 40', sku: 'VLT-2602', line: 'Classic', badge: 'new', price: '$1,490', f: 2, f2: 3, wr: '3 ATM', mvmt: 'Automatic', mm: '40 mm' },
    { name: 'Sport Diver 44', sku: 'VLT-2603', line: 'Sport', badge: 'new', price: '$1,180', f: 3, f2: 5, wr: '20 ATM', mvmt: 'Quartz', mm: '44 mm' },
    { name: 'Lunar Moonphase 41', sku: 'VLT-2604', line: 'Classic', badge: 'new', price: '$1,620', f: 6, f2: 4, wr: '5 ATM', mvmt: 'Automatic', mm: '41 mm' },
    { name: 'Aurora Skeleton 42', sku: 'VLT-1180', line: 'Classic', badge: 'limited', price: '$2,250', f: 7, f2: 4, wr: '5 ATM', mvmt: 'Automatic Skeleton', mm: '42 mm' },
    { name: 'Meridian GMT 43', sku: 'VLT-1181', line: 'Sport', badge: null, price: '$1,490', f: 4, f2: 0, wr: '10 ATM', mvmt: 'Quartz GMT', mm: '43 mm' },
    { name: 'Eclipse Dress 38', sku: 'VLT-1182', line: 'Classic', badge: null, price: '$980', f: 5, f2: 2, wr: '3 ATM', mvmt: 'Quartz', mm: '38 mm' },
    { name: 'Tempo Quartz 36', sku: 'VLT-1183', line: 'Smart', badge: null, price: '$640', f: 1, f2: 6, wr: '3 ATM', mvmt: 'Quartz', mm: '36 mm' },
    { name: 'Nocturne Automatic 40', sku: 'VLT-1184', line: 'Classic', badge: null, price: '$1,720', f: 2, f2: 7, wr: '5 ATM', mvmt: 'Automatic', mm: '40 mm' },
    { name: 'Pulse Smart 45', sku: 'VLT-1185', line: 'Smart', badge: 'new', price: '$890', f: 3, f2: 1, wr: '5 ATM', mvmt: 'Hybrid Smart', mm: '45 mm' },
    { name: 'Regatta Sport 42', sku: 'VLT-1186', line: 'Sport', badge: null, price: '$1,340', f: 5, f2: 3, wr: '20 ATM', mvmt: 'Quartz Chronograph', mm: '42 mm' },
    { name: 'Solstice Dress 39', sku: 'VLT-1187', line: 'Classic', badge: null, price: '$1,050', f: 6, f2: 0, wr: '3 ATM', mvmt: 'Quartz', mm: '39 mm' },
  ];

  const lines = [
    { name: 'Classic', desc: 'Timeless dress watches', f: 2 },
    { name: 'Sport', desc: 'Built for motion & depth', f: 3 },
    { name: 'Smart', desc: 'Connected, quietly', f: 5 },
  ];

  return { img, frame: (i, w) => img(frames[i % frames.length], w), frames, products, lines };
})();
