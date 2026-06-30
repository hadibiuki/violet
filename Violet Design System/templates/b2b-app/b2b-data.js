// Shared data + helpers for the Violet B2B wholesale app (Persian / RTL).
// Loaded in <helmet> of B2BApp.dc.html and B2BAdmin.dc.html → window.VTB
window.VTB = (function () {
  const img = (id, w = 600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
  const frames = [
    'photo-1523275335684-37898b6baf30', 'photo-1547996160-81dfa63595aa', 'photo-1524805444758-089113d48a6d',
    'photo-1533139502658-0198f920d8e8', 'photo-1612817159949-195b6eb9e31a', 'photo-1508685096489-7aacd43bd3b1',
    'photo-1434056886845-dac89ffe9b56', 'photo-1495856458515-0637185db551', 'photo-1539874754764-5a96559165b0',
    'photo-1620625515032-6ed0c1790c75',
  ];
  const fa = (s) => String(s).replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]);
  const toman = (n) => fa(Number(n).toLocaleString('en-US')) + ' تومان';
  const frame = (i, w) => img(frames[((i % frames.length) + frames.length) % frames.length], w);

  // ---- Products (wholesale) ----
  const products = [
    { id: 'p1', name: 'Chronograph Classic 42', sku: 'VLT-2601', price: 18500000, moq: 10, stock: 240, f: 0,
      cat: 'classic', gender: 'men', strap: 'steel', movement: 'quartz', wr: 50, new: true,
      desc: 'کرنوگراف کلاسیک با قاب ۴۲ میلی‌متری استیل و صفحهٔ گیوشه.' },
    { id: 'p2', name: 'Heritage Automatic 40', sku: 'VLT-2602', price: 22400000, moq: 10, stock: 120, f: 2,
      cat: 'classic', gender: 'men', strap: 'leather', movement: 'automatic', wr: 50, new: true,
      desc: 'ساعت اتوماتیک هریتیج با بند چرم طبیعی و موتور درون‌سازمانی.' },
    { id: 'p3', name: 'Sport Diver 44', sku: 'VLT-2603', price: 17800000, moq: 20, stock: 0, f: 3,
      cat: 'sport', gender: 'men', strap: 'rubber', movement: 'quartz', wr: 200, new: false,
      desc: 'غواصی اسپرت با مقاومت ۲۰۰ متر و بازل چرخان یک‌طرفه.' },
    { id: 'p4', name: 'Lunar Moonphase 41', sku: 'VLT-2604', price: 24300000, moq: 10, stock: 64, f: 6,
      cat: 'classic', gender: 'unisex', strap: 'leather', movement: 'automatic', wr: 30, new: true,
      desc: 'نمایش فاز ماه با صفحهٔ سرمه‌ای و عقربه‌های طلایی.' },
    { id: 'p5', name: 'Aurora Skeleton 42', sku: 'VLT-1180', price: 33800000, moq: 5, stock: 18, f: 7,
      cat: 'classic', gender: 'men', strap: 'leather', movement: 'automatic', wr: 30, new: false,
      desc: 'اسکلتون اتوماتیک با نمای باز موتور و پل‌های تزئین‌شده.' },
    { id: 'p6', name: 'Meridian GMT 43', sku: 'VLT-1181', price: 22300000, moq: 10, stock: 96, f: 4,
      cat: 'sport', gender: 'men', strap: 'steel', movement: 'quartz', wr: 100, new: false,
      desc: 'GMT با عقربهٔ زمان دوم و بازل ۲۴ ساعته دو رنگ.' },
    { id: 'p7', name: 'Eclipse Dress 38', sku: 'VLT-1182', price: 14700000, moq: 15, stock: 310, f: 5,
      cat: 'dress', gender: 'women', strap: 'steel', movement: 'quartz', wr: 30, new: false,
      desc: 'ساعت مجلسی نازک ۳۸ میلی‌متری با صفحهٔ صدفی.' },
    { id: 'p8', name: 'Tempo Quartz 36', sku: 'VLT-1183', price: 9600000, moq: 20, stock: 420, f: 1,
      cat: 'dress', gender: 'unisex', strap: 'leather', movement: 'quartz', wr: 30, new: false,
      desc: 'کوارتز پایه و مقرون‌به‌صرفه، انتخابی محبوب برای عمده.' },
    { id: 'p9', name: 'Nebula Chrono 44', sku: 'VLT-1190', price: 28900000, moq: 10, stock: 52, f: 8,
      cat: 'sport', gender: 'men', strap: 'steel', movement: 'quartz', wr: 100, new: true,
      desc: 'کرنوگراف اسپرت با صفحهٔ کهکشانی و تاکی‌متر.' },
    { id: 'p10', name: 'Solstice Dual 40', sku: 'VLT-1191', price: 19900000, moq: 10, stock: 8, f: 9,
      cat: 'classic', gender: 'unisex', strap: 'rubber', movement: 'quartz', wr: 50, new: false,
      desc: 'صفحهٔ دوگانه با نمایش روز/شب و طراحی مینیمال.' },
    { id: 'p11', name: 'Vanguard Field 41', sku: 'VLT-1192', price: 16200000, moq: 15, stock: 180, f: 2,
      cat: 'sport', gender: 'men', strap: 'leather', movement: 'automatic', wr: 100, new: false,
      desc: 'ساعت فیلد نظامی با خوانایی بالا و بند چرم روغنی.' },
    { id: 'p12', name: 'Celeste Petite 34', sku: 'VLT-1193', price: 12800000, moq: 20, stock: 240, f: 5,
      cat: 'dress', gender: 'women', strap: 'steel', movement: 'quartz', wr: 30, new: true,
      desc: 'مدل ظریف زنانه ۳۴ میلی‌متری با نگین‌های ایندکس.' },
  ];

  const specRows = (p) => ([
    ['کد مدل', p.sku],
    ['قطر قاب', fa(p.name.match(/\d+/) ? p.name.match(/\d+/)[0] : 42) + ' میلی‌متر'],
    ['جنس بدنه', 'استیل ضدزنگ ۳۱۶L'],
    ['مکانیزم', { quartz: 'کوارتز', automatic: 'اتوماتیک' }[p.movement]],
    ['بند', { steel: 'فولادی', leather: 'چرم طبیعی', rubber: 'لاستیکی' }[p.strap]],
    ['مقاومت آب', fa(p.wr) + ' متر (' + fa(Math.round(p.wr / 10)) + ' ATM)'],
    ['گارانتی', '۲۴ ماه بین‌المللی'],
  ]);

  const statusFa = { submitted: 'ثبت‌شده', reviewing: 'در حال بررسی', approved: 'تأیید شد',
    shipped: 'ارسال شد', completed: 'تکمیل شد', rejected: 'رد شد' };
  const stageOrder = ['submitted', 'reviewing', 'approved', 'shipped', 'completed'];

  // ---- Orders (with line items + timeline timestamps) ----
  const orders = [
    { id: 'ORD-4821', date: '۱۴۰۵/۰۳/۲۱', status: 'shipped', lines: [
        { id: 'p1', qty: 20 }, { id: 'p6', qty: 20 }, { id: 'p11', qty: 20 } ],
      times: { submitted: '۲۱ خرداد ۰۹:۱۲', reviewing: '۲۱ خرداد ۱۱:۴۰', approved: '۲۲ خرداد ۱۰:۰۵', shipped: '۲۳ خرداد ۱۶:۳۰' },
      ship: 'باربری پیشتاز · تهران', track: 'TRK-558120' },
    { id: 'ORD-4815', date: '۱۴۰۵/۰۳/۱۸', status: 'approved', lines: [
        { id: 'p4', qty: 10 }, { id: 'p2', qty: 20 } ],
      times: { submitted: '۱۸ خرداد ۱۴:۰۲', reviewing: '۱۸ خرداد ۱۵:۲۰', approved: '۱۹ خرداد ۰۹:۴۵' },
      ship: 'پست پیشتاز', track: '—' },
    { id: 'ORD-4806', date: '۱۴۰۵/۰۳/۱۲', status: 'completed', lines: [
        { id: 'p7', qty: 30 }, { id: 'p8', qty: 40 }, { id: 'p12', qty: 20 }, { id: 'p1', qty: 10 }, { id: 'p6', qty: 10 } ],
      times: { submitted: '۱۲ خرداد ۱۰:۰۰', reviewing: '۱۲ خرداد ۱۲:۱۵', approved: '۱۳ خرداد ۰۸:۳۰', shipped: '۱۴ خرداد ۱۷:۰۰', completed: '۱۷ خرداد ۱۱:۲۰' },
      ship: 'باربری پیشتاز · اصفهان', track: 'TRK-551044' },
    { id: 'ORD-4799', date: '۱۴۰۵/۰۳/۰۹', status: 'reviewing', lines: [ { id: 'p9', qty: 20 } ],
      times: { submitted: '۰۹ خرداد ۱۳:۴۰', reviewing: '۰۹ خرداد ۱۶:۱۰' }, ship: 'پست پیشتاز', track: '—' },
    { id: 'ORD-4790', date: '۱۴۰۵/۰۳/۰۴', status: 'rejected', lines: [ { id: 'p5', qty: 5 }, { id: 'p3', qty: 20 } ],
      times: { submitted: '۰۴ خرداد ۰۹:۳۰', reviewing: '۰۴ خرداد ۱۰:۱۵' }, rejectReason: 'موجودی مدل Sport Diver 44 ناکافی بود. لطفاً اقلام را اصلاح و دوباره ثبت کنید.', ship: '—', track: '—' },
  ];

  // ---- Invoices / documents ----
  const invoices = [
    { id: 'INV-2041', order: 'ORD-4806', date: '۱۴۰۵/۰۳/۱۷', amount: 2040000000, paid: true, type: 'فاکتور رسمی' },
    { id: 'INV-2035', order: 'ORD-4815', date: '۱۴۰۵/۰۳/۱۹', amount: 672000000, paid: false, type: 'پیش‌فاکتور' },
    { id: 'INV-2028', order: 'ORD-4821', date: '۱۴۰۵/۰۳/۲۲', amount: 1110000000, paid: false, type: 'پیش‌فاکتور' },
    { id: 'INV-2012', order: 'ORD-4780', date: '۱۴۰۵/۰۲/۲۸', amount: 384000000, paid: true, type: 'فاکتور رسمی' },
  ];

  // ---- Support thread ----
  const messages = [
    { from: 'them', name: 'تیم فروش ویولت', time: '۲۰ خرداد ۱۰:۱۲', text: 'سلام جناب کریمی، سفارش ORD-4815 شما تأیید شد و در حال آماده‌سازی است.' },
    { from: 'me', time: '۲۰ خرداد ۱۰:۳۰', text: 'ممنون. امکان ارسال تا پایان هفته هست؟' },
    { from: 'them', name: 'تیم فروش ویولت', time: '۲۰ خرداد ۱۱:۰۵', text: 'بله، ارسال پنجشنبه انجام می‌شود. کد رهگیری پس از تحویل به باربری برایتان ثبت می‌شود.' },
  ];

  const dealer = { name: 'رضا کریمی', role: 'مدیر خرید', company: 'نمایندگی ساعت پارس', code: 'DLR-0192',
    phone: '۰۹۱۲۳۴۵۶۷۸۹', email: 'r.karimi@saatpars.ir', city: 'تهران', address: 'تهران، خیابان ولیعصر، پلاک ۱۲۰۴', tier: 'همکار طلایی' };

  const byId = (id) => products.find((p) => p.id === id);
  const orderTotal = (o) => o.lines.reduce((s, l) => s + byId(l.id).price * l.qty, 0);
  const orderUnits = (o) => o.lines.reduce((s, l) => s + l.qty, 0);

  return { img, frame, fa, toman, products, specRows, statusFa, stageOrder,
    orders, invoices, messages, dealer, byId, orderTotal, orderUnits };
})();
