// Shared data for the Violet B2B wholesale app (Persian / RTL).
window.VT_B2B = (function () {
  const img = (id, w = 400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
  const frames = [
    'photo-1523275335684-37898b6baf30', 'photo-1547996160-81dfa63595aa', 'photo-1524805444758-089113d48a6d',
    'photo-1533139502658-0198f920d8e8', 'photo-1612817159949-195b6eb9e31a', 'photo-1508685096489-7aacd43bd3b1',
    'photo-1434056886845-dac89ffe9b56', 'photo-1495856458515-0637185db551',
  ];
  // Persian digits + thousands separators
  const faDigits = (s) => String(s).replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]);
  const toman = (n) => faDigits(n.toLocaleString('en-US')) + ' تومان';

  const products = [
    { name: 'Chronograph Classic 42', sku: 'VLT-2601', price: 18500000, moq: 10, stock: 240, f: 0 },
    { name: 'Heritage Automatic 40', sku: 'VLT-2602', price: 22400000, moq: 10, stock: 120, f: 2 },
    { name: 'Sport Diver 44', sku: 'VLT-2603', price: 17800000, moq: 20, stock: 0, f: 3 },
    { name: 'Lunar Moonphase 41', sku: 'VLT-2604', price: 24300000, moq: 10, stock: 64, f: 6 },
    { name: 'Aurora Skeleton 42', sku: 'VLT-1180', price: 33800000, moq: 5, stock: 18, f: 7 },
    { name: 'Meridian GMT 43', sku: 'VLT-1181', price: 22300000, moq: 10, stock: 96, f: 4 },
    { name: 'Eclipse Dress 38', sku: 'VLT-1182', price: 14700000, moq: 15, stock: 310, f: 5 },
    { name: 'Tempo Quartz 36', sku: 'VLT-1183', price: 9600000, moq: 20, stock: 420, f: 1 },
  ];

  const orders = [
    { id: 'ORD-4821', date: '۱۴۰۵/۰۳/۲۱', items: 3, qty: 60, total: 1110000000, status: 'shipped' },
    { id: 'ORD-4815', date: '۱۴۰۵/۰۳/۱۸', items: 2, qty: 30, total: 672000000, status: 'approved' },
    { id: 'ORD-4806', date: '۱۴۰۵/۰۳/۱۲', items: 5, qty: 110, total: 2040000000, status: 'completed' },
    { id: 'ORD-4799', date: '۱۴۰۵/۰۳/۰۹', items: 1, qty: 20, total: 192000000, status: 'reviewing' },
    { id: 'ORD-4790', date: '۱۴۰۵/۰۳/۰۴', items: 2, qty: 25, total: 487500000, status: 'rejected' },
  ];

  const statusFa = {
    submitted: 'ثبت‌شده', reviewing: 'در حال بررسی', approved: 'تأیید شد',
    shipped: 'ارسال شد', completed: 'تکمیل شد', rejected: 'رد شد',
  };

  return { img, frame: (i, w) => img(frames[i % frames.length], w), faDigits, toman, products, orders, statusFa };
})();
