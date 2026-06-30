/* @ds-bundle: {"format":3,"namespace":"VioletDesignSystem_7273c4","components":[{"name":"BrandMark","sourcePath":"components/brand/BrandMark.jsx"},{"name":"CartLineItem","sourcePath":"components/commerce/CartLineItem.jsx"},{"name":"InvoiceRow","sourcePath":"components/commerce/InvoiceRow.jsx"},{"name":"OrderTimeline","sourcePath":"components/commerce/OrderTimeline.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Chip","sourcePath":"components/display/Chip.jsx"},{"name":"Divider","sourcePath":"components/display/Divider.jsx"},{"name":"ProductCard","sourcePath":"components/display/ProductCard.jsx"},{"name":"SpecTable","sourcePath":"components/display/SpecTable.jsx"},{"name":"StatTile","sourcePath":"components/display/StatTile.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"OrderStatusPill","sourcePath":"components/feedback/OrderStatusPill.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastViewport","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"ImageUploader","sourcePath":"components/forms/ImageUploader.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/QuantityStepper.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Hero","sourcePath":"components/marketing/Hero.jsx"},{"name":"Marquee","sourcePath":"components/marketing/Marquee.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"SortDropdown","sourcePath":"components/navigation/SortDropdown.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"chrome.jsx":"e99e53cbe4e7","components/brand/BrandMark.jsx":"aecf72fd06ac","components/commerce/CartLineItem.jsx":"70cbe6ce2784","components/commerce/InvoiceRow.jsx":"bac5f9a666f9","components/commerce/OrderTimeline.jsx":"e6f2804d424f","components/display/Avatar.jsx":"77931887030d","components/display/Badge.jsx":"ef56f72e9446","components/display/Chip.jsx":"d48f38b08fe0","components/display/Divider.jsx":"6c9e02d675f4","components/display/ProductCard.jsx":"89b85757aab8","components/display/SpecTable.jsx":"ded26e752d82","components/display/StatTile.jsx":"9dcab755696e","components/feedback/Modal.jsx":"0cff9dc150e7","components/feedback/OrderStatusPill.jsx":"7bd32847d162","components/feedback/Skeleton.jsx":"42847726d156","components/feedback/Spinner.jsx":"d784893c0c54","components/feedback/Toast.jsx":"6e5f7ce67e00","components/feedback/Tooltip.jsx":"ef5308654d43","components/forms/Button.jsx":"5f71f0bffa9d","components/forms/Checkbox.jsx":"5d53b2054fb8","components/forms/IconButton.jsx":"648ac96ae244","components/forms/ImageUploader.jsx":"a8b375de0fc4","components/forms/Input.jsx":"8309651ddbc7","components/forms/QuantityStepper.jsx":"2d497b5875fd","components/forms/Radio.jsx":"a22f34fe1927","components/forms/Select.jsx":"98954b5d0ff4","components/forms/Switch.jsx":"028e91fbae3c","components/marketing/Hero.jsx":"3cf12a683378","components/marketing/Marquee.jsx":"340ad8493fcb","components/navigation/Breadcrumb.jsx":"40b7411d972d","components/navigation/Pagination.jsx":"48b0bf10f64e","components/navigation/SortDropdown.jsx":"488d646575c2","components/navigation/Tabs.jsx":"97d15130b451","presentation/deck-stage.js":"2c50f71f5203","site/chrome-i18n.jsx":"d5457ff7a1cd","site/chrome.jsx":"058f6dc9193f","site/data.js":"746bd471f54c","site/data.standalone.js":"3dcf40db7623","site/error-shell.jsx":"453e4ed3869d","site/home-i18n.jsx":"9010d4085ea1","site/i18n.js":"50ffbef8c40e","ui_kits/b2b-app/AppShell.jsx":"58a4e754644c","ui_kits/b2b-app/DashboardScreen.jsx":"dd8a419c1d03","ui_kits/b2b-app/LoginScreen.jsx":"6c68388419b5","ui_kits/b2b-app/OrdersScreen.jsx":"00464292668b","ui_kits/b2b-app/data.js":"fd6ec55c7d74","ui_kits/reference-site/CatalogScreen.jsx":"1501a00653ca","ui_kits/reference-site/HomeScreen.jsx":"6067c4da1dc4","ui_kits/reference-site/ProductScreen.jsx":"af39db8929eb","ui_kits/reference-site/SiteChrome.jsx":"ba2e4a0dbcc2","ui_kits/reference-site/data.js":"93eb4dee8cc4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VioletDesignSystem_7273c4 = window.VioletDesignSystem_7273c4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// chrome.jsx
try { (() => {
// Shared site chrome for the standalone multi-page reference site (EN / LTR).
// Real <a href> navigation between pages. Pass `active` = page key.
const {
  BrandMark
} = window.VioletDesignSystem_7273c4;
const VT_NAV = [['Home', 'index.html', 'home'], ['New Models', 'new-models.html', 'new'], ['Products', 'products.html', 'products'], ['Brand', 'brand.html', 'brand'], ['About', 'about.html', 'about'], ['Technologies', 'technologies.html', 'tech'], ['Contact', 'contact.html', 'contact']];
function SiteHeader({
  active,
  variant = 'light'
}) {
  // variant: 'light' (solid) or 'overlay' (transparent over a dark hero, frosts on scroll)
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener('scroll', on, {
      passive: true
    });
    return () => window.removeEventListener('scroll', on);
  }, []);
  const onHero = variant === 'overlay' && !scrolled;
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: scrolled ? '12px 40px' : '18px 40px',
      background: onHero ? 'transparent' : 'rgba(248,247,255,.78)',
      backdropFilter: onHero ? 'none' : 'blur(18px) saturate(1.4)',
      borderBottom: `1px solid ${onHero ? 'transparent' : 'var(--vt-color-divider)'}`,
      transition: 'all var(--vt-duration-slow) var(--vt-ease-standard)',
      height: "122px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(BrandMark, {
    tone: onHero ? 'onDark' : 'light'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 30,
      alignItems: 'center'
    }
  }, VT_NAV.map(([label, href, key]) => /*#__PURE__*/React.createElement("a", {
    key: key,
    href: href,
    className: "vt-navlink",
    style: {
      textDecoration: 'none',
      fontSize: 14,
      fontWeight: 500,
      whiteSpace: 'nowrap',
      color: onHero ? 'rgba(255,255,255,.82)' : active === key ? 'var(--vt-color-primary)' : 'var(--vt-color-text)'
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      fontSize: 12.5
    }
  }, ['EN', 'RU', 'AR'].map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      padding: '5px 9px',
      borderRadius: 6,
      cursor: 'pointer',
      userSelect: 'none',
      color: i === 0 ? onHero ? '#fff' : 'var(--vt-color-primary)' : onHero ? 'rgba(255,255,255,.6)' : 'var(--vt-color-text-muted)',
      background: i === 0 ? onHero ? 'rgba(255,255,255,.16)' : 'var(--vt-color-primary-subtle)' : 'transparent'
    }
  }, l))));
}
function SiteFooter() {
  const col = (h, items) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: 'var(--vt-gold-300)',
      fontSize: 12,
      letterSpacing: '.12em',
      marginBottom: 16,
      fontWeight: 600
    }
  }, h), items.map(([label, href]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: href,
    style: {
      display: 'block',
      color: 'rgba(255,255,255,.66)',
      fontSize: 14,
      marginBottom: 10,
      textDecoration: 'none'
    }
  }, label)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--vt-ink-950)',
      color: '#fff',
      padding: '64px 40px 30px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      gap: 40,
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BrandMark, {
    tone: "onDark",
    size: "lg"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.6)',
      fontSize: 13,
      lineHeight: 1.7,
      marginTop: 14,
      maxWidth: 280
    }
  }, "Brand \xB7 Watches \u2014 an international reference for timeless design, crafted for those who value time.")), col('EXPLORE', [['New Models', 'new-models.html'], ['Products', 'products.html'], ['Technologies', 'technologies.html']]), col('BRAND', [['About Violet', 'about.html'], ['History', 'about.html'], ['Quality', 'about.html']]), col('SUPPORT', [['Contact', 'contact.html'], ['Find a dealer', 'contact.html'], ['FAQ', 'contact.html']])), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(230,180,83,.2)',
      paddingTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
      color: 'rgba(255,255,255,.5)',
      fontSize: 13,
      flexWrap: 'wrap',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Violet Watches. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "English \xB7 \u0420\u0443\u0441\u0441\u043A\u0438\u0439 \xB7 \u0627\u0644\u0639\u0631\u0628\u064A\u0629"))));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  VT_NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "chrome.jsx", error: String((e && e.message) || e) }); }

// components/brand/BrandMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VIOLET_MONOGRAM = "<path class=\"a\" d=\"m41.1 3.1q1.6 0.8 2.4 2.5c2.3 2.8 2.6 5.1 3.9 8.1 1.5 1.9 4.1 4.6 5.8 1.3 1.6-2 3-4.3 4.8-6.2 0.3-0.9 1.3-1.5 2.2-2 3-2.8 7.5-6.1 12.1-5.1 2 0.5 3.1 1.7 3.7 3.5 0 0.2 0 0.2-0.2 0.2q-0.1 0.2-0.2 0l-0.5-0.3c-0.3-1.1-1.2-1.8-2.3-2.2-7.5-2.9-16.7 9.1-19.9 14.3-1.5 1.4-4.9-0.8-5.9-2.1-0.4-0.6-1.1-2-0.7-2.6q-0.9 0-0.4-1-0.5-0.1-0.8-0.7c-7.8-20.3-34.4-3-41.8 8.7 0.1 0.6-0.6 2.2-1.3 2.2q-0.4 0.3-0.3-0.4c2.4-6 7.3-10.4 12.8-14.1 1.6-1.7 3.9-2.9 6.1-3.7 6.1-2.9 14.7-4.8 20.5-0.4z\"></path><path class=\"a\" d=\"m25.2 5.2q0.3-0.2 0.5 0c-3.9 1.6-7.7 3-11.2 5.4-6.4 4.4-14.8 14.2-10.6 22q0.6 0.5 0.9 1.2c2.7 2.8 8.9 3 12.5 1.9 5.7-1.6 10.6-8.7 12.6-13.6 0.9-2.2 0.4-1.7-0.1-3.7-0.4-1.8-0.7-4.2 1.5-5.3 2.1-1 3-0.6 4.9 0.2 0.7 0.3 1.7 1.3 1.6 1.9 0 0.2 0 0.3-0.2 0.2q-0.1 0.2-0.3 0l-0.4-0.1c-1-2.2-5.1-2.5-6.1-0.2l-0.5 0.1q0 2.4 1 4.6c0 0.4-0.1 0.8-0.3 1.1q0.2 0.1 0 0.2c0.1 0.1 0.2 0.2 0.2 0.3-0.1 0.8-2.1 4.2-2.6 5.1-4.4 7-9.6 11.8-18.9 10.4-3.9-0.5-7.7-3-7.3-7-0.6-0.1-0.6-0.5 0-0.6-0.3-3.8 1-8.6 3.5-11.6q0.2-0.3 0.7-0.3l-0.1-0.6c4.7-5.3 11-10.1 18.2-12z\"></path><path class=\"a\" d=\"m37.8 18.7c-2.2 3.3-2.9 5.2-4.6 8.7-4.3 9-11.8 15.4-23.2 12.9-8.3-1.9-10.2-6.6-9.6-14.1q0.2-1.1 0.5-2.2c0.2-1.3 0.4-1.6 0.8-2.7l0.3 0.4c0.5 0.5-0.2 2.4-0.9 2.7 0.1 0.4 0.2 0.9 0 1.2-0.5 4.2 0.3 9.7 4.6 12.1l0.2 0.6c6.3 2.4 13.2 2.8 18.9-1.2l0.1-0.6c3.4-2.5 5.8-6.1 7.6-9.7l0.4-0.2c-0.4-0.2 0.1-1.2 0.5-1.4q1.1-3.9 3.7-7.4c0.4-0.9 0.4-1.6 0.5-2.4l0.2-0.2c1 0.8 0.6 2.4 0 3.5z\"></path><path class=\"a\" d=\"m45.5 32.1c0.5 0.3 0.3 1.4-0.3 1.5 0.1 0.3 0.1 0.7 0 1-4.4 13.1-11.4 26.5-18.4 38.1q0.1 0.1 0 0.3l0.3-0.3c1.7 0.6 2.4 0.3 3.5-0.8l0.6 0.1q0.2-0.3 0.5-0.5c2.2-1.7 4.6-3.4 6.9-5 0.2-0.1 0.4-0.2 0.7-0.2 0.3-0.3 0.4-0.2 0.2 0.2-1.3 1-2.5 2.1-3.8 3-1.3 1-4.8 3.7-6 4.1-1.2 0.5-2.9 0-4-0.5 3.3-5.2 6.1-10.8 9-16.2q0.4-1 0.9-1.9c3.6-6.3 7.2-16.1 9.6-23.1q0.3-0.3 0.3 0.2z\"></path><path class=\"a\" d=\"m107.6 5.2c0.1 0.2 0.5 0.8 0.5 0.9 0.6 4.3-4 7.8-8.2 5.2-0.6-0.4-1.1-1.3-1.8-1.2-0.7 0.1-5.7 4.1-6.6 4.9-7.3 6.2-13.5 14.1-19.9 21-0.1 0.5-0.5 0.8-0.9 1.1-0.8 0.9-1.8 1.7-2.6 2.6-0.6 0.2-0.5 0-0.2-0.4q0.1-0.3 0.2-0.7 0.1-0.3 0.3-0.5c1.4-1.7 2.8-3.3 4.3-4.9 0.2-0.3 0.7-0.6 1.1-0.6q0.4-0.4 0.4-1c0.7-0.9 5.1-5.8 5.7-6q0.2-0.1 0.5-0.2l0.2-0.9c4.4-4.7 9.2-9.5 14.3-13.5 0.9-0.7 3.1-2.4 4.3-1.7 3 3.8 7.1 2 8.2-2.1-0.7-0.4-0.5-1.5-0.2-2 0-0.5 0.2-0.4 0.4 0z\"></path><path class=\"a\" d=\"m97.1 6.4c1.5-1.1 1-0.8 2.1-2 2.5-3 6.8-2.9 8.4 0.8h-0.4q-0.2 0.1-0.2-0.2-1-0.6-1.9-1.6c-3.1-0.7-4.7 0.2-5.9 2.7-2.4 1.5-4.7 3.1-6.7 5.1-6.2 6-12.3 12.2-18.3 18.4q-3.6 3.8-7.6 7.2c-0.6 0.3-0.5 0.1-0.3-0.4 3-3 5.8-6.2 8.8-9.2 0.2-0.6 0.7-1.1 1.3-1.2 3.3-3.2 6.4-6.6 9.7-9.8q0.7-1.3 2.2-2c1.6-1.6 3.2-3.3 4.8-4.8 1.1-1.2 2.4-2.4 4-3z\"></path><path class=\"a\" d=\"m57.3 21.1q0.7 0.4-0.2 1.3-0.7 2.7-1.8 5.2c-4.3 11.3-9.4 22.1-15.6 32.6-0.3 0.9-0.7 2.1-1.7 2.6q0.1 0.6-0.2 1c0.3 0.3 0.2 0.4-0.2 0.2q-1.6 0.4-0.2-2 3.7-6.1 7.2-12.5l0.6-0.6 0.2-0.9c2.4-5.3 4.9-10.6 7.3-15.7q-0.3-0.1-0.2-0.3c1.8-3.5 3-7.3 4.2-11.1-0.1-0.4 0.1-0.5 0.4-0.2 0.6-0.2 0.7 0 0.2 0.4z\"></path><path class=\"a\" d=\"m36 7.2c0.5 0.1 1 0.5 1.4 0.9l4.9 6.1c1.8 2.3 4 3.9 6.8 5 0.7 0.3 0.8 0.7 0.3 1.3l0.2 0.5q-2 5.5-3.8 11l-0.3 0.1-0.3-0.2c1-2.7 2.7-7.2 3.1-10q1-1.5-0.2-2c-6.9-3-8.8-10.2-14.3-13.9-2.4-1.6-4.3-1.5-7-0.8-0.4 0-0.8-0.1-1.1 0-0.2 0-0.3-0.1-0.5 0-0.1-0.2-0.1-0.5 0-0.6 2.3-0.8 5.3-1.4 7.6-0.4 1.1 0.5 3.1 1.8 3.2 3z\"></path><path class=\"a\" d=\"m66.6 36.8c0 0.5-0.7 1.1-1.1 1.3-3.8 4.3-8 8.4-12.2 12.5-0.9 0.9-14.1 13.4-15.2 13.4q-0.2-0.1-0.3-0.2c-0.2-0.4 0.1-0.7 0.2-1q0.7-0.4 1.3-1.3l0.4 0.1c9.5-7.8 18-16.5 26.6-25.2z\"></path><path class=\"a\" d=\"m68.1 39.7c-9.1 9.8-17.8 18.5-28.6 26.8l-0.2-0.2c0.9-1.3 2.5-2.5 4-3.3q5.9-5.7 12.3-11c0.5-0.8 1.1-1.6 1.8-2.4q4-4.2 8.1-8.4c0.7-0.7 1.6-1.3 2.4-1.9z\"></path><path class=\"a\" d=\"m76 5.2c0.9 2.8 0.3 4.9-1.8 7.1-0.2 0.5-0.7 1-1.3 1.2-1.3 1.2-2.2 1.7-3.7 2.5q-0.7 0.2-0.4-0.2l0.1-0.6c4.1-2.1 7.2-5.3 6.9-9.8z\"></path><path class=\"a\" d=\"m68.8 15.8l0.4 0.2c-3.4 1.9-7.5 3-10.6 4.7q-0.7 0.4-1.3 0.4l-0.2-0.4 0.2-0.4q5.2-2.3 10.5-4.5z\"></path><path class=\"a\" d=\"m0.4 26.2c0.1-0.7-0.1-1.6 0.5-2.2-0.2 0.7-0.1 1.6-0.5 2.2z\"></path><path class=\"a\" d=\"m45.9 11.5c0.2 1.5-0.9 0.5-1.5-0.3-0.2 1-0.8 1.6-1.8 0.9q-1.3 0.2-2.4-1.2c-1.2-0.5-2.4-2.1-2.6-3.3-1-0.6-1.8-1.2-2.6-2-2.2-2.1-4.8-2.3-7.8-1.6-8.2 1.9-15.4 6.5-20.6 12.7l-0.9 0.3c-0.3 0.5-1.7 2.6-2.1 2.6-0.1 0.1-0.2 0-0.3-0.1 0-0.7 0.5-1.2 0.9-1.8 6-9.2 27.3-23.4 37.8-13.1 2.2 2.3 2.8 4.2 3.9 6.9z\"></path><path class=\"a\" d=\"m63.5 7.4l0.1 0.4c-1.2 1.4-5.6 7.3-4.9 9.1q0.2 0.2 0.4 0.3c0.1-0.6 0.7-0.5 0.9 0l-0.1 0.4q1.5-0.8 2.5-0.2c0.5 0.9-2.3 1.8-2.9 1.3-1.5 0-2.4 0.5-3.7 1.1q-2.3-0.3-4.5 0.4c-0.9 0-1.2-0.1-1.2-0.9q-0.3 0-0.2-0.2c-0.9-0.9-2-1.3-3.1-1.7h-0.8c-2.2-1.5-4.2-3.7-5.8-5.8v-0.7c0.6 0 0.7 0.7 1 0.8 0.4 0.2 1 0 1.5 0 0.4 0.1 0.7 0.7 1.1 0 0.3-0.5 0.1-1.5 1-0.7 0.2 0.1 1.1 1.6 1.1 0.5 0.1 0.3 0.3 0.6 0.4 1-0.9 2.5 4.7 6.7 6.8 4.5l2-3.1c0.8-1.3 1.8-2 3.3-2.4 0.3-0.8 1.1-2.3 1.7-3 0.5-0.6 2.7-1.9 3.4-1.1z\"></path><path class=\"a\" d=\"m75.6 5.4c1 6.6-6.9 10.6-12.7 12.3l-0.5-0.3c-0.5 0.1-1.1 0.2-1.6 0.3-0.7 0.1-1.7 1.1-2.2-0.3 0.6 0.2 1-0.1 1.4-0.2l0.2-0.5c4.4-1.5 9.9-3.4 12.7-7.1q0.4-1 1.1-1.4c2.1-5.6-5.3-5.7-8.3-2.4q-1 1.2-2.2 1.6c-1.1 0-3.3 1.2-3.6 2.1-0.4 1.3-0.2 0.5-0.8 1.3-0.3 0.3-0.2 0.7-0.3 0.9-0.2 0.2-1.4 0.5-1.8 0.8-2.1 1.2-2.8 4.9-4.5 5.4-1.4 0.4-4-1-5.1-1.8-0.8-0.7-1.4-2-1.6-3-0.2-0.5 0.1-0.5 0.5-0.6 0.4 1 0.6 1.9 1.4 2.8 0.8 1 3.6 3 4.9 1.7 3.1-5.1 10.1-14 16.8-14.9 2.4-0.3 5.8 0.6 6.2 3.3z\"></path><path class=\"a\" d=\"m75.8 5.4c0 1.1 0 2.3-0.3 3.5 0 0.1-0.3 1-0.4 1.2-1 2.5-4 4.4-6.3 5.7-3.6 2-8 3-11.7 4.9q-0.2 0.1-0.4 0.2-0.2 0.5-0.5 0.2-0.2-0.1 0-0.4c-1-1.4 2.2-2.1 3.3-2 0.9-0.4 2.2-0.5 2.9-1.3 5.4-1.3 14.1-5.9 13.2-12z\"></path><path class=\"a\" d=\"m5.7 17.4c0.1 0.7-0.9 2.2-1.5 2.3-0.6 0.9-1 1.8-1.4 2.8 0.5 0 0.5 0.3 0 0.4q-0.6 1.6-0.8 3.2-0.3 0.2-0.7 0.1l-0.2-1.8c0.1-0.7 0.6-2 0.9-2.7 0.1-0.4 1-2.1 1.3-2.2 0.6-0.2 1.7-1.7 2.4-2.5 0.6 0.1 0.5 0.2 0 0.4z\"></path><path class=\"a\" d=\"m30.5 16q0-0.2 0-0.3c0.2-1 2.3 0.2 2.8 0.6q1.3-0.1 2.2 0.4c0-1 1.5-1.4 1.8-0.5 0.4 0.7-0.3 2.7-1.3 2.7q-1.9 2.3-2.9 5.3-1.3 0.2-2.5 0.4l-0.9 1.8c-0.2 0.3-0.5 0.2-0.7 0l-0.2-0.2q1.4-2.5 2.2-4.7v-0.4c0-0.1-0.1-0.1 0-0.2l0.3-1.1q-0.9-2-0.8-3.8z\"></path><path class=\"a\" d=\"m37.6 7.6q-0.2 0.7-1.1-0.2l-0.5-0.2c-3.1-3.1-4.9-3.7-9.4-2.6-0.5 0.2-1 0.3-1.4 0.6-5.9 0.6-15.2 7.7-18.6 12.2-0.4 0.4-0.6 0.4-0.9 0v-0.4c1.9-2.1 4-4.4 6.4-6.2 4.4-3.3 10.6-6.5 16.2-7.4 4.5-0.8 6.6 1.2 9.3 4.2z\"></path><path class=\"a\" d=\"m31 21.1c0.9-0.1 0.2 1.5 0 1.8-1.2 1.3-1.2 1.9-2 3.5l0.1 0.8c-0.9 1.7-2.2 3-3.6 4.3 0.2 0.9-1.2 1.8-2 2.2l-4 2.5q-0.1 0.2-0.2 0.4-0.2 0.2-0.4 0.3c-1.9 0.6-3.5 0.7-5.5 0.7q-3.7 0.8-6.6-1c-0.4 0.4-0.5 0.4-0.4-0.2-2-0.7-3.7-2.5-4.4-4.4-0.2-0.7-0.7-2.4 0.4-2.1 0.6 4.9 4.9 6.8 9.8 7 7 0.2 11.8-3.9 15.2-9.1 0.9-1.4 3.2-5.3 3.6-6.7z\"></path><path class=\"a\" d=\"m37.3 15.4c0.3 0.1 0.3 0.7 0 0.8-1.9-0.2-1 0.3-1.5 1.1-0.4 0.6-0.5-0.4-0.8-0.5-0.5-0.1-1.2 0.1-1.8-0.1-0.9-0.3-1.5-1.4-2.7-0.7-0.4 0-0.3-0.5-0.2-0.8 1-3.2 6.5-2.4 7 0.2z\"></path><path class=\"a\" d=\"m2.4 29.3c0 0.2 0 0.4 0 0.6 0 0.1-0.3 0.3-0.4 0.7-0.1 2.3 2.4 4.8 4.4 5.8-0.1 0.6-0.6 0.4-1 0.2-4.3-1.8-4.7-7.2-4.3-11 0-0.4-0.1-0.8 0-1.2 0.4-0.1 0 2 0.6 1.4 0.2-0.2 0.3-2.6 1.1-2.9l0.3 0.3c-0.6 2-0.9 4-0.7 6.1z\"></path><path class=\"a\" d=\"m6.6 17.4c-2.6 3.5-4.5 7.6-4.2 11.9-0.3-3.2 0-3.3 0.4-6.4 0.1-0.1 0-0.2 0-0.4 0.4-1 0.8-1.9 1.4-2.8 0.2-0.6 1-2 1.5-2.3 0.3-0.2 0.6-0.1 0.9 0z\"></path><path class=\"a\" d=\"m33.4 25.2q-0.4 0.3-0.2-0.4-0.5-0.5 0.2-1.2c0.6-1.8 1.3-3.3 2.6-4.7 0.6-0.8 1.2-1.7 1.3-2.7 0.1-0.2 0.1-0.6 0-0.8h0.3c0.6 2.8-1.2 4-2.5 6-0.7 1.1-1.2 2.7-1.7 3.8z\"></path><path class=\"a\" d=\"m30.5 16c0.2 0.7 0.3 1.5 0.5 2.3 0.3 0.9 1.3 1.6 0 2.6 0.3-2-1.5-3.3-0.7-5.7-0.2 0.3 0.2 0.6 0.2 0.8z\"></path><path class=\"a\" d=\"m32.9 26.6c-0.8 1.9-1.8 3.4-2.9 4.9-1.2 1.8-3.1 4.5-5.2 5.6-0.7 0.4-1.4 0.8-2.2 1.2-1.5 0.7-3.6 1.7-5.3 1.4-0.3-0.3-0.2-0.4 0.1-0.7-1.4-0.9-2.5-1.1-4.3-0.9-1.2 0.1-2.3 0.3-3 1.2-0.9 0.2-2.5-0.4-3.1-1q0-0.8-0.2-1.7c4.3 1.3 8.5 1.1 12.7-0.4l4.9-3.1h0.6c1.7 1.1 3-0.5 3.9-1.7l3.4-4.6q-0.3-0.1 0-0.2 0.5-0.7 0.6 0z\"></path><path class=\"a\" d=\"m1.1 25.6c-0.2 3.9 0.4 8.6 4.4 10.7 0.3 0.1 0.7 0.1 0.9 0.1 0.1 0.1 0.2 0.1 0.4 0.2 0.9 0.6 0.7 0.9 0.2 1.7q-0.4 0.1-1.1 0c-4.8-2.3-5.1-7-5-11.6 0-0.3-0.2-0.9 0.2-1.1z\"></path><path class=\"a\" d=\"m24.8 37.1c-5 4.3-13.1 4-18.9 1.2 0.2-0.4 0.8-0.1 1.1 0 1.1 0.3 2 0.8 3.1 1l0.7-0.3c1.9 0.5 3.9 0.6 5.8 0.4l0.7 0.3c2.7-0.4 5.1-1.5 7.5-2.6z\"></path><path class=\"a\" d=\"m33.4 25.2c-0.2 0.3-0.2 0.9-0.5 1.4h-0.6c-0.3-0.8 0-1.4 0.9-1.8z\"></path><path class=\"a\" d=\"m40.8 46.3l0.5 0.1c0.3 1.9 1 3.2 3.1 2 0.5-0.1 0.9-0.1 0.8 0.5-1.2 2.4-2.3 4.7-3.6 6.9-1.1 2.1-3.4 5.3-4.4 7.6-0.1 0.4-0.3 0.7 0.4 0.6q-0.1 0.2 0 0.3c0.1 0.5 6.5-5.2 7.1-5.7q2.8-2.5 5.4-5l0.9-0.4q0.5 0.1 0.2 1l1.4-0.9 0.6 0.1c-0.1 0.3-0.2 0.5-0.4 0.7-3 3.1-6.5 6.2-10 8.7l-0.6 0.8q-5.5 4.4-11 8.4c-0.6 0.4-1.5 1.3-2.2 1.4-0.3 0.1-2-0.2-2.2-0.4l-0.1-0.2c4.8-7.9 9.7-16.8 13.4-25.6z\"></path><path class=\"a\" d=\"m59.5 18.7c-0.6 0.2-2.3 0.7-2.7 1-0.6 0.4-0.4 0.7-0.6 1l-1 3.5q-0.6 2.7-2.8 1.6c-3.5-0.2-4 1.3-5 4.1l-0.8 1.4c0.3 0.9 0 2.2-0.9 2.7-0.4 0.8-0.7 0.3-0.5-0.4 0.2-0.4 0.1-1.1 0.3-1.5 1.1-3.1 2.5-8.8 3.9-11.6 0.1-0.5 0.2-0.9 0.7-1.2 1.2 1.2 1.8 0 3.4 0 0.7 0 1.2 0.3 2.1 0.1 0.9-0.1 1.6-0.8 2.3-0.9 0.5-0.1 1.1 0.3 1.6 0.2z\"></path><path class=\"a\" d=\"m45.2 33.6c0 0.4 0 0.4 0.5 0.4q0.1 0.3-0.2 0.6 0 1.4-1.1 2.9c-0.4 3-1.7 6.2-3.6 8.8-3.3 7.9-7.3 15.5-11.6 23.2l-2.4 3.5c-0.4-0.2-0.2-0.3-0.1-0.6 0.6-1.8 2.9-4.7 3.9-6.5 5.6-10.2 10.8-21.5 14.6-32.3z\"></path><path class=\"a\" d=\"m43.3 63c-1.4 1.1-2.6 2.3-4 3.3-2.6 2-5.4 3.9-8.1 5.7-0.5-0.1 0.2-0.5 0.3-0.6 3.8-2.8 7.6-5.6 11.3-8.6 0.4-0.2 0.6-0.2 0.5 0.2z\"></path><path class=\"a\" d=\"m73.4 31.7c1.1-0.7 1.1 0 0.4 0.9-0.3 0.8-0.6 0.5-0.8 0.8-1.6 2.1-3.4 4-5.1 5.9q-6 6.5-12.3 12.7-1.1 0.6-2.2 1.6l-0.2-0.2c-0.8 0.7-1.6 1.3-2.7 1.4l0.5-1.6c0.1-0.4 0.3-0.7 0.6-1 4.1-4.3 8.6-8.6 12.9-12.9q0.4-0.3 1-0.6 3.9-3.4 7.5-7z\"></path><path class=\"a\" d=\"m94.5 10.7c-0.2-1.1 1.2-2.2 2.1-2.9q2.8-1.2 3.8-3.7c0.6-0.8 3.6-1.2 4.5-0.8 0.4 0.1 1.9 1.7 2 1.9 0 0.1-0.5 0 0.1-0.2 0 0 0.2 0.1 0.2 0.2 0.3 0.6 0.2 1.3 0.2 2-0.9 4-5.3 5.4-8.3 2l-0.6-0.2q-1.9 0.7-3.6 2z\"></path><path class=\"a\" d=\"m107.4 7.2c0 3.1-3.1 5.6-6.4 4.2-0.7-0.3-2.1-1.9-2.3-1.9-0.5-0.2-1.4 0.4-1.8 0.7-5.7 3.6-12 10.3-16.5 15.2l-0.4-0.1c-0.3 0.5-1 1-1.4 0.3 0.1-0.4 0.3-0.9 0.6-1.2 4.5-4.5 9.3-8.8 14-13.1 0.4-0.3 0.8-0.5 1.3-0.6 1.3-0.3 2.6-2.1 4-2.1 1.5 0 1.8 2 4 2.1 3.1 0.2 3.4-1.6 4.9-3.5z\"></path><path class=\"a\" d=\"m78.6 25.6c0.2-0.1 0.5 0 0.8-0.2 0.3-0.2 0.4-1 1-0.8v0.8c-2.2 2.4-4.2 5-6.6 7.2 0.3-0.7 0.5-1-0.4-0.9v-0.4q2.6-2.9 5.2-5.7z\"></path><path class=\"a\" d=\"m107 5c-0.1 0.3 0.2 0.7-0.4 0.4-0.5-0.3-1.3-2-1.7-2-1 0.2-3.3 0.1-4.1 0.6-0.2 0.2-0.3 1.2-0.7 1.8-1 1.2-2.1 1.3-3.2 2.1-1 0.7-1.6 1.9-2.4 2.8-5.1 5.2-11 9.5-15.9 14.9l-1.1 1.1c-3.4 4.1-7.4 8.2-11.8 11.6-0.3 0.2-0.4 0.1-0.2-0.2 0.3-0.4 0.7-0.9 1.1-1.3 6.6-6.7 13.1-13.7 19.9-20.3 2.5-2.4 5.4-5.4 8-7.6 1.1-0.9 3.5-2.1 4.4-3 0.5-0.6 0.6-1.3 1.4-2 2.1-1.8 5.3-1.3 6.7 1.1z\"></path><path class=\"a\" d=\"m52.7 32.3c-0.3 1.7-1.1 3.3-1.8 4.8-1.7 3.9-3.6 7.9-5.7 11.8-0.6-0.5-1.3 0.4-1.8 0.4-0.2 0-1.7-0.3-1.8-0.4-0.1 0-0.7-2.3-0.8-2.6 1.3-2.9 2.4-5.9 3.6-8.8q0.7-2.2 2.2-2.1c3.2 0.9 3.9 0.3 5.1-2.6q0.5-0.7 1-0.5z\"></path><path class=\"a\" d=\"m56.7 20.9c-0.4 1.7-0.9 3.5-1.4 5.1-0.4 1.1-2.1 6-2.6 6.3-0.8 0.7-0.9 1.5-1.5 2.4-0.4 0.7-1 1.5-1.9 1.5-0.7 0-2.8-0.5-3.5-0.3-0.8 0.2-0.8 1.1-1.4 1.6q0.5-1.5 1.1-2.9 1.1-2 4-2.2 2.8 0.2 3.4-3l0.9-1.1-0.3-0.5q1.6-3.3 2.7-6.7 0.2-0.1 0.5-0.2z\"></path><path class=\"a\" d=\"m65.7 38.3q0.1 0.1-0.2 0.4c-4.8 4.8-9.6 9.8-14.5 14.5-2.4 2.3-4.9 4.6-7.4 6.8-0.8 0.6-6 5.2-6.6 5.1-0.9-1-0.1-0.7 0.6-1.1 0 0 0.1-0.1 0.2-0.2 1.6-0.9 3.6-2.7 5-4 7.8-6.7 15.4-14.4 22.7-21.7z\"></path><path class=\"a\" d=\"m37.6 7.6c0.9 1.1 1.7 2.2 2.6 3.3 2.2 2.6 3.5 4.6 6.6 6.5 1.1 0.4 2.2 0.8 3.1 1.7q0.1 0.1 0.2 0.2c0.3 0.7-0.6 1-0.7 1.2 0.1-0.4 0-0.7-0.4-0.9-0.8-0.5-2.1-0.8-3-1.4-3.9-2.5-6.7-7.7-10-11 0.8-0.4 0.9 0.3 1.6 0.4z\"></path><path class=\"a\" d=\"m55.6 52c-4 3.8-8 7.5-12.3 11l-0.5-0.2c3.7-3 7-6.2 10.4-9.4 0 0 0.8-0.5 1.2-0.8 0.1-0.2 1-1.1 1.2-0.6z\"></path><path class=\"a\" d=\"m74 8.2c0.8-3-1.1-4.5-4.2-4-4.6 0.5-9.6 8.2-10.8 12-0.1 0.4-0.2 0.7 0.1 1-1.1-0.2-0.6-2-0.3-2.8 0.6-1.5 3.5-5.7 4.7-7 1-1.1 1.8-1.7 3-2.6 0.5-0.4 0.8-0.8 1.5-1 0.7-0.3 2.4-0.7 3-0.7 3 0.1 4.8 2.8 3 5.1z\"></path><path class=\"a\" d=\"m49.9 19.1c-1.2-0.4-2.1-1.1-3.1-1.7 1.2 0.2 1.8 0.2 2.7 1.1 0.2 0.1 0.2 0.4 0.4 0.6z\"></path><path class=\"a\" d=\"m56.2 21.1c-0.1 2-1.6 5.2-2.4 7.2-1 2.3-3.6 2.4-5.9 2.1q-0.7 1.3-1.3 0.9c0.2-0.6 0.3-1.4 0.6-2.2 0.2-0.4 1.2-2.6 1.5-2.9 0.5-0.5 2.5-0.8 3.3-0.8 1.7-0.1 1.9 1.5 2.8-1.2 0.6-1.4 0.5-2.1 1.4-3.5q0 0.2 0 0.4z\"></path><path class=\"a\" d=\"m2.8 22.5c0.1-0.9 0.2-1.1 0.7-2.1 0.2-0.3 0.2-0.6 0.7-0.7-0.1 0.1-0.1 0.6-0.3 0.9-0.2 0.7-0.8 1.3-1.1 1.9z\"></path><path class=\"a\" d=\"m36 18.9c-0.3 0.8-1 1.5-1.5 2.4-0.5 1-0.8 2.4-1.3 3.5q-0.5 0.9-0.9 1.8c0 0.1 0 0.2 0 0.2l-2.1 2.8c-1.7 0.4-2.9 0.8-4.2 2.1l-0.5-0.2c1.2-1.7 2.5-3.2 3.5-5.1 0.6-0.3 0.9-1.9 1.3-2.1 0.6-0.5 2.3-0.1 2.8-0.5 0.3-0.3 1.1-2.9 1.6-3.7 0.3-0.4 1-0.8 1.3-1.2z\"></path><path class=\"a\" d=\"m19.5 36.2c1.3-1.1 2.9-2 4.3-3 0.5-0.4 1.1-1.2 1.7-1.7 0.4-0.3 1-0.7 1.6-1.2 1.2-1 2.1-0.5 2.9-1 0.6-0.4 1.5-2.1 2.3-2.5-0.8 1.7-2.9 5.2-4.3 6.3-0.3 0.3-1.3 0.8-1.6 0.8-1.1 0.1-1.2-1-2.9 0-1.3 0.8-2.4 1.8-4 2.3z\"></path><path class=\"a\" d=\"m10.1 39.3l-0.1-0.8c1.8-0.8 3.2-1 5.3-0.8 1.5 0.1 1.6 1.1 2.9 1l-0.9 1c-2.5 0.4-4.7 0.2-7.2-0.4z\"></path><path class=\"a\" d=\"m45.5 34.6q0.1-0.3 0.2-0.6c0.3-0.8 0.5-1.7 0.9-2.7 0.5-0.2 0.6-1.1 1.1-1.3 0.4-0.1 1.6 0.1 2.3 0.1 1.6-0.1 2.8-0.7 3.8-1.8-0.5 1.2-1.1 4-2.8 4.4-0.5 0.1-1 0-1.4 0.1-1.6 0.4-3 0.6-4.1 1.8z\"></path><path class=\"a\" d=\"m78.6 25.6c-1.8 2-3.2 4.2-5.2 6.1-0.3 0.3-0.6 0.9-1.1 1.3-2 1.5-3.5 3.3-5.4 4.9-0.2 0.1-1.1 0.6-1.4 0.8 0-0.1 0.1-0.3 0.2-0.4 2.9-2.9 6-5.7 8.9-8.6 1.3-1.3 2.4-3.2 4-4.1z\"></path>";
const VIOLET_WORDMARK = "<path class=\"a\" d=\"m34.6 0.8v1.1q-1 0.2-2.1 1.2-1.2 1-2.1 3.4l-12.5 32.3q-0.1 0-0.2 0-0.2 0-0.3 0-0.1 0-0.2 0-0.1 0-0.2 0l-13-33.5q-0.8-2-1.8-2.7-1-0.7-1.9-0.7v-1.1q1.1 0.1 2.7 0.1 1.5 0.1 3 0.1 2.1 0 3.9-0.1 1.8 0 3-0.1v1.1q-1.9 0-2.8 0.4-0.9 0.4-1 1.3-0.1 0.9 0.6 2.8l9.9 26.2-0.8 1 9.3-24.2q1.1-2.8 1-4.5 0-1.6-1.2-2.3-1.2-0.7-3.4-0.7v-1.1q1.5 0.1 3.1 0.1 1.6 0.1 3 0.1 1.4 0 2.3-0.1 0.9 0 1.7-0.1z\"></path><path class=\"a\" d=\"m50.1 0.8v1.1q-1.8 0-2.8 0.4-0.9 0.3-1.2 1.3-0.3 0.9-0.3 2.9v26.4q0 1.9 0.3 2.9 0.3 1 1.2 1.3 1 0.3 2.8 0.4v1.1q-1.2-0.1-3.1-0.2-1.8 0-3.7 0-2.1 0-3.9 0-1.8 0.1-2.9 0.2v-1.1q1.8-0.1 2.7-0.4 1-0.3 1.3-1.3 0.3-1 0.3-2.9v-26.4q0-2-0.3-2.9-0.3-1-1.3-1.3-0.9-0.4-2.7-0.4v-1.1q1.1 0.1 2.9 0.1 1.8 0.1 3.9 0.1 1.9 0 3.7-0.1 1.9 0 3.1-0.1z\"></path><path fill-rule=\"evenodd\" class=\"a\" d=\"m71.7 0.1q5 0 8.9 2.3 3.8 2.2 5.9 6.5 2.1 4.3 2.1 10.5 0 5.9-2.2 10.4-2.1 4.5-6 7-3.8 2.5-8.8 2.5-5 0-8.9-2.3-3.8-2.3-5.9-6.6-2.1-4.3-2.1-10.4 0-6 2.2-10.4 2.2-4.5 6-7 3.8-2.5 8.8-2.5zm-0.2 0.9q-3.5 0-6.1 2.4-2.5 2.4-3.9 6.6-1.4 4.2-1.4 9.8 0 5.6 1.5 9.8 1.6 4.2 4.3 6.5 2.7 2.3 5.9 2.3 3.5 0 6.1-2.4 2.5-2.4 3.9-6.7 1.5-4.2 1.5-9.7 0-5.7-1.6-9.9-1.6-4.1-4.3-6.4-2.6-2.3-5.9-2.3z\"></path><path class=\"a\" d=\"m106.8 0.8v1.1q-1.8 0-2.7 0.4-1 0.3-1.3 1.3-0.3 0.9-0.3 2.9v26.4q0 1.9 0.3 2.9 0.3 1 1.3 1.2 0.9 0.3 2.7 0.3h3.9q2.5 0 4.1-0.5 1.6-0.5 2.5-1.7 0.9-1.1 1.4-3 0.5-2 0.8-4.7h1.2q-0.2 1.6-0.2 4.3 0 1.1 0.1 2.9 0.1 1.9 0.3 4-2.7-0.1-6.1-0.2-3.4 0-6.1 0-1.2 0-3 0-1.9 0-4 0-2.1 0.1-4.3 0.1-2.2 0-4.2 0.1v-1.1q1.8-0.1 2.8-0.4 0.9-0.3 1.2-1.3 0.3-1 0.3-2.9v-26.4q0-2-0.3-2.9-0.3-1-1.2-1.3-1-0.4-2.8-0.4v-1.1q1.1 0.1 3 0.1 1.8 0.1 3.9 0.1 1.8 0 3.7-0.1 1.8 0 3-0.1z\"></path><path fill-rule=\"evenodd\" class=\"a\" d=\"m151.2 0.8q-0.2 1.9-0.3 3.6-0.1 1.8-0.1 2.7 0 1 0.1 1.8 0 0.9 0.1 1.5h-1.2q-0.4-3.1-0.9-5-0.6-1.8-2-2.6-1.5-0.8-4.3-0.8h-4.4q-1.8 0-2.8 0.3-0.9 0.3-1.2 1.3-0.3 0.9-0.3 2.9v12.5h-1.6v1.1h1.6v12.8q0 1.9 0.3 2.9 0.3 1 1.2 1.2 1 0.3 2.8 0.3h3.9q3.3 0 5.1-0.9 1.7-0.9 2.5-2.9 0.8-2.1 1.1-5.6h1.3q-0.2 1.4-0.2 3.8 0 1.1 0.1 2.9 0.1 1.9 0.3 4-2.8-0.1-6.2-0.2-3.4 0-6 0-1.2 0-3.1 0-1.8 0-3.9 0-2.2 0.1-4.4 0.1-2.1 0-4.1 0.1v-1.1q1.8-0.1 2.7-0.4 1-0.3 1.3-1.3 0.3-1 0.3-2.9v-26.4q0-2-0.3-2.9-0.3-1-1.3-1.3-0.9-0.4-2.7-0.4v-1.1q2 0.1 4.1 0.1 2.2 0 4.4 0 2.1 0.1 3.9 0.1 1.9 0 3.1 0 2.4 0 5.5-0.1 3.2 0 5.6-0.1zm-17.3 19.3v-1.1h3.5v1.1zm8.2-1.1v1.1h-4.7q2.4 0 3.3 1.1 1 1 1.3 2.6 0.3 1.6 0.5 3.4h1.3q-0.3-3.1-0.3-4.7-0.1-1.6-0.1-2.9 0-1.4 0-3 0-1.6 0.2-4.6h-1.2q-0.2 1-0.3 2.2-0.2 1.2-0.6 2.3-0.5 1.1-1.4 1.8-0.9 0.7-2.7 0.7z\"></path><path class=\"a\" d=\"m186.4 0.8q-0.2 2-0.3 3.9-0.1 1.9-0.1 2.9 0 1.3 0.1 2.4 0 1.2 0.1 2h-1.2q-0.4-3.7-1-5.9-0.7-2.1-2.3-3.1-1.6-1-5-1h-2.8v30.4q0 2.1 0.4 3.2 0.4 1 1.5 1.4 1.2 0.4 3.5 0.5v1.1q-1.4-0.1-3.6-0.2-2.1 0-4.3 0-2.4 0-4.5 0-2.1 0.1-3.4 0.2v-1.1q2.3-0.1 3.4-0.5 1.2-0.4 1.6-1.4 0.4-1.1 0.4-3.2v-30.4h-2.9q-3.3 0-4.9 1-1.6 1-2.3 3.1-0.6 2.2-1 5.9h-1.2q0.1-0.8 0.1-2 0-1.1 0-2.4 0-1 0-2.9-0.1-1.9-0.3-3.9 2.2 0.1 4.9 0.1 2.6 0.1 5.3 0.1 2.6 0 4.8 0 2.2 0 4.8 0 2.7 0 5.4-0.1 2.6 0 4.8-0.1z\"></path>";

/**
 * BrandMark — the Violet identity lockup, reconstructed from the brand card:
 * a calligraphic "V" monogram (Pinyon Script) over / beside the engraved
 * "VIOLET" Roman wordmark (Cinzel). Fully scalable (text in brand fonts) and
 * recolorable via the brand tokens — no raster.
 */
function BrandMark({
  variant = 'lockup',
  // 'lockup' | 'horizontal' | 'monogram' | 'wordmark'
  tone = 'light',
  // 'light' (on light) | 'ink' (gold on aubergine) | 'onDark'
  size = 'md',
  // 'sm' | 'md' | 'lg' | 'xl'
  framed = false,
  // hairline gold ring around the monogram (medallion)
  tagline = false,
  // show "COLLECTION 2026" kicker under the wordmark
  style,
  ...rest
}) {
  const unit = {
    sm: 0.74,
    md: 1,
    lg: 1.5,
    xl: 2.3
  }[size] || 1;
  const gold = 'var(--vt-color-brand-gold)';
  const ink = 'var(--vt-color-brand-ink)';
  const monoColor = tone === 'light' ? ink : gold;
  const wordColor = tone === 'light' ? ink : tone === 'ink' ? gold : '#FFFFFF';
  const ruleColor = tone === 'light' ? 'var(--vt-color-border-strong)' : 'rgba(230,180,83,.5)';
  const kickerColor = tone === 'light' ? 'var(--vt-color-accent-strong)' : gold;
  const monoSize = 64 * unit;
  const wordSize = 22 * unit;
  const wordTrack = `${0.34 * unit}em`;
  const Monogram = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 109 74",
    role: "img",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      height: monoSize * 0.95,
      width: 'auto',
      display: 'inline-block',
      fill: monoColor
    },
    dangerouslySetInnerHTML: {
      __html: VIOLET_MONOGRAM
    }
  });

  // The Violet mark has no ring — the calligraphic V stands on its own.
  // `framed` is kept for API compatibility but no longer draws a circle.
  const FramedMonogram = Monogram;
  const Wordmark = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 187 40",
    role: "img",
    "aria-label": "VIOLET",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      height: wordSize * 1.18,
      width: 'auto',
      display: 'inline-block',
      fill: wordColor
    },
    dangerouslySetInnerHTML: {
      __html: VIOLET_WORDMARK
    }
  });
  const Kicker = tagline ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--vt-font-sans)',
      fontWeight: 500,
      fontSize: 9.5 * unit,
      letterSpacing: `${0.42 * unit}em`,
      paddingInlineStart: `${0.42 * unit}em`,
      color: kickerColor,
      textTransform: 'uppercase',
      lineHeight: 1
    }
  }, "Collection 2026") : null;
  if (variant === 'monogram') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        ...style
      }
    }, rest), FramedMonogram);
  }
  if (variant === 'wordmark') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6 * unit,
        ...style
      }
    }, rest), Wordmark, Kicker);
  }
  if (variant === 'horizontal') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 14 * unit,
        ...style
      }
    }, rest), FramedMonogram, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        flexDirection: 'column',
        gap: 4 * unit
      }
    }, Wordmark, Kicker));
  }

  // default: 'lockup' — stacked medallion, like the card
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8 * unit,
      ...style
    }
  }, rest), FramedMonogram, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10 * unit
    },
    "aria-hidden": false
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22 * unit,
      height: 1,
      background: ruleColor
    }
  }), Wordmark, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22 * unit,
      height: 1,
      background: ruleColor
    }
  })), Kicker);
}
Object.assign(__ds_scope, { BrandMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/BrandMark.jsx", error: String((e && e.message) || e) }); }

// components/commerce/InvoiceRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * InvoiceRow — one line in a proforma / invoice table: description, qty, unit
 * price and amount. Use several inside a table-like container; `header` renders
 * the column titles, `total` renders a bold summary row.
 */
function InvoiceRow({
  description,
  sku,
  qty,
  unitPrice,
  amount,
  currency = n => `$${n.toLocaleString()}`,
  header = false,
  total = false,
  style,
  ...rest
}) {
  const cellBase = {
    padding: 'var(--vt-space-3) var(--vt-space-4)',
    fontFamily: 'var(--vt-font-sans)',
    fontSize: 'var(--vt-text-sm)'
  };
  if (header) {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 70px 130px 130px',
        alignItems: 'center',
        borderBottom: '1px solid var(--vt-color-border)',
        color: 'var(--vt-color-text-muted)',
        fontWeight: 'var(--vt-weight-medium)',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: cellBase
    }, "Description"), /*#__PURE__*/React.createElement("span", {
      style: {
        ...cellBase,
        textAlign: 'center'
      }
    }, "Qty"), /*#__PURE__*/React.createElement("span", {
      style: {
        ...cellBase,
        textAlign: 'end'
      }
    }, "Unit price"), /*#__PURE__*/React.createElement("span", {
      style: {
        ...cellBase,
        textAlign: 'end'
      }
    }, "Amount"));
  }
  if (total) {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 130px',
        alignItems: 'center',
        borderTop: '1.5px solid var(--vt-color-border-strong)',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        ...cellBase,
        textAlign: 'end',
        fontWeight: 'var(--vt-weight-semibold)',
        color: 'var(--vt-color-text-strong)'
      }
    }, description || 'Total'), /*#__PURE__*/React.createElement("span", {
      style: {
        ...cellBase,
        textAlign: 'end',
        fontWeight: 'var(--vt-weight-semibold)',
        fontSize: 'var(--vt-text-lg)',
        color: 'var(--vt-color-primary)'
      }
    }, currency(amount)));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 70px 130px 130px',
      alignItems: 'center',
      borderBottom: '1px solid var(--vt-color-divider)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      ...cellBase,
      color: 'var(--vt-color-text-strong)'
    }
  }, /*#__PURE__*/React.createElement("bdi", null, description), sku && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--vt-font-mono)',
      fontSize: 'var(--vt-text-xs)',
      color: 'var(--vt-color-text-muted)',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("bdi", null, sku))), /*#__PURE__*/React.createElement("span", {
    style: {
      ...cellBase,
      textAlign: 'center',
      fontFamily: 'var(--vt-font-mono)',
      color: 'var(--vt-color-text)'
    }
  }, qty), /*#__PURE__*/React.createElement("span", {
    style: {
      ...cellBase,
      textAlign: 'end',
      color: 'var(--vt-color-text-muted)'
    }
  }, currency(unitPrice)), /*#__PURE__*/React.createElement("span", {
    style: {
      ...cellBase,
      textAlign: 'end',
      fontWeight: 'var(--vt-weight-medium)',
      color: 'var(--vt-color-text-strong)'
    }
  }, currency(amount)));
}
Object.assign(__ds_scope, { InvoiceRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/InvoiceRow.jsx", error: String((e && e.message) || e) }); }

// components/commerce/OrderTimeline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PIPELINE = [['submitted', 'Submitted'], ['reviewing', 'Reviewing'], ['approved', 'Approved'], ['shipped', 'Shipped'], ['completed', 'Completed']];

/**
 * OrderTimeline — the B2B order pipeline as a vertical (or horizontal) stepper.
 * `current` is the active stage key; earlier steps render done, later ones pending.
 * Rejected short-circuits the trail. `times` maps stage→timestamp string.
 * `labels` overrides stage labels (e.g. localized Persian).
 */
function OrderTimeline({
  current = 'submitted',
  rejected = false,
  times = {},
  labels = {},
  orientation = 'vertical',
  style,
  ...rest
}) {
  const steps = rejected ? [...PIPELINE.slice(0, PIPELINE.findIndex(s => s[0] === current) + 1 || 1), ['rejected', 'Rejected']] : PIPELINE;
  const curIdx = rejected ? steps.length - 1 : steps.findIndex(s => s[0] === current);
  const vertical = orientation === 'vertical';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: vertical ? 'column' : 'row',
      alignItems: vertical ? 'stretch' : 'flex-start',
      fontFamily: 'var(--vt-font-sans)',
      ...style
    }
  }, rest), steps.map(([key, fallback], i) => {
    const done = i < curIdx;
    const cur = i === curIdx;
    const isReject = key === 'rejected';
    const dotColor = isReject ? 'var(--vt-color-danger)' : done || cur ? 'var(--vt-color-primary)' : 'var(--vt-color-border-strong)';
    const lineDone = i < curIdx;
    const last = i === steps.length - 1;
    const label = labels[key] || fallback;
    if (vertical) {
      return /*#__PURE__*/React.createElement("div", {
        key: key,
        style: {
          display: 'flex',
          gap: 'var(--vt-space-3)',
          paddingBottom: last ? 0 : 'var(--vt-space-6)',
          position: 'relative'
        }
      }, !last && /*#__PURE__*/React.createElement("span", {
        style: {
          position: 'absolute',
          insetInlineStart: 8,
          top: 18,
          bottom: 4,
          width: 2,
          background: lineDone ? 'var(--vt-color-primary)' : 'var(--vt-color-divider)'
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          position: 'relative',
          zIndex: 1,
          width: 18,
          height: 18,
          flex: 'none',
          marginTop: 1,
          borderRadius: '50%',
          border: `2px solid ${dotColor}`,
          background: done || cur && !isReject ? dotColor : 'var(--vt-color-surface)',
          display: 'grid',
          placeItems: 'center',
          boxShadow: cur ? `0 0 0 4px var(--vt-color-primary-subtle)` : 'none'
        }
      }, done && /*#__PURE__*/React.createElement("span", {
        style: {
          color: '#fff',
          fontSize: 10,
          lineHeight: 1
        }
      }, "\u2713"), isReject && cur && /*#__PURE__*/React.createElement("span", {
        style: {
          color: '#fff',
          fontSize: 10,
          lineHeight: 1
        }
      }, "\xD7"), cur && !isReject && /*#__PURE__*/React.createElement("span", {
        style: {
          width: 7,
          height: 7,
          borderRadius: '50%',
          background: '#fff'
        }
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 'var(--vt-text-sm)',
          fontWeight: done || cur ? 'var(--vt-weight-semibold)' : 'var(--vt-weight-regular)',
          color: done || cur ? isReject ? 'var(--vt-color-danger)' : 'var(--vt-color-text-strong)' : 'var(--vt-color-text-muted)'
        }
      }, label), times[key] && /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 'var(--vt-text-xs)',
          color: 'var(--vt-color-text-subtle)',
          marginTop: 2,
          fontFamily: 'var(--vt-font-mono)'
        }
      }, times[key])));
    }
    // horizontal
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      style: {
        display: 'flex',
        alignItems: 'center',
        flex: last ? '0 0 auto' : 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        borderRadius: '50%',
        border: `2px solid ${dotColor}`,
        background: done || cur && !isReject ? dotColor : 'var(--vt-color-surface)',
        display: 'grid',
        placeItems: 'center'
      }
    }, done && /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#fff',
        fontSize: 10
      }
    }, "\u2713"), cur && !isReject && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: '#fff'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--vt-text-xs)',
        fontWeight: done || cur ? 'var(--vt-weight-semibold)' : 'var(--vt-weight-regular)',
        color: done || cur ? 'var(--vt-color-text)' : 'var(--vt-color-text-muted)',
        whiteSpace: 'nowrap'
      }
    }, label)), !last && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 2,
        marginInline: 8,
        marginBottom: 18,
        background: lineDone ? 'var(--vt-color-primary)' : 'var(--vt-color-divider)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { OrderTimeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/OrderTimeline.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — user/dealer initials or image, in a circle. Falls back to initials
 * on a violet gradient when no `src`. Sizes sm/md/lg.
 */
function Avatar({
  name = '',
  src,
  size = 'md',
  style,
  ...rest
}) {
  const dims = {
    sm: 28,
    md: 36,
    lg: 48
  };
  const d = dims[size] || dims.md;
  const initials = name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": name || 'avatar',
    style: {
      display: 'inline-grid',
      placeItems: 'center',
      width: d,
      height: d,
      flex: 'none',
      borderRadius: '50%',
      overflow: 'hidden',
      fontFamily: 'var(--vt-font-sans)',
      fontWeight: 'var(--vt-weight-semibold)',
      fontSize: d * 0.4,
      color: '#fff',
      userSelect: 'none',
      background: src ? 'var(--vt-color-surface-sunken)' : 'linear-gradient(135deg, var(--vt-violet-400), var(--vt-violet-600))',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '·');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — pill label for product status. NEW = violet, LIMITED = gold.
 * Semantics always carry text, never color alone.
 */
function Badge({
  variant = 'new',
  children,
  style,
  ...rest
}) {
  const variants = {
    new: {
      background: 'var(--vt-color-badge-new)',
      color: '#fff'
    },
    limited: {
      background: 'var(--vt-color-badge-limited)',
      color: 'var(--vt-ink-950)'
    },
    neutral: {
      background: 'var(--vt-color-surface-sunken)',
      color: 'var(--vt-color-text-muted)'
    },
    soldout: {
      background: 'var(--vt-ink-700)',
      color: '#fff'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--vt-font-sans)',
      fontSize: 'var(--vt-text-2xs)',
      fontWeight: 'var(--vt-weight-semibold)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      padding: '5px 10px',
      borderRadius: 'var(--vt-radius-pill)',
      lineHeight: 1,
      ...variants[variant],
      ...style
    }
  }, rest), children || (variant === 'new' ? 'New' : variant === 'limited' ? 'Limited' : ''));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chip — compact selectable/removable token. Used for active filters, tags,
 * quick-pick facets. `selected` fills violet; `onRemove` adds an × button.
 */
function Chip({
  children,
  selected = false,
  onRemove,
  onClick,
  leadingIcon,
  disabled = false,
  style,
  ...rest
}) {
  const interactive = Boolean(onClick) && !onRemove;
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: !disabled ? onClick : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--vt-space-1)',
      paddingInline: 'var(--vt-space-3)',
      paddingBlock: 6,
      fontFamily: 'var(--vt-font-sans)',
      fontSize: 'var(--vt-text-xs)',
      fontWeight: 'var(--vt-weight-medium)',
      borderRadius: 'var(--vt-radius-pill)',
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
      cursor: disabled ? 'not-allowed' : interactive ? 'pointer' : 'default',
      opacity: disabled ? 0.5 : 1,
      border: `1.5px solid ${selected ? 'var(--vt-color-primary)' : 'var(--vt-color-border-strong)'}`,
      background: selected ? 'var(--vt-color-primary)' : 'var(--vt-color-surface)',
      color: selected ? '#fff' : 'var(--vt-color-text)',
      transition: 'all var(--vt-duration-fast)',
      ...style
    }
  }, rest), leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, leadingIcon), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    "aria-label": "Remove",
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 16,
      height: 16,
      marginInlineStart: 2,
      border: 'none',
      borderRadius: '50%',
      cursor: 'pointer',
      fontSize: 12,
      lineHeight: 1,
      background: selected ? 'rgba(255,255,255,.25)' : 'var(--vt-color-surface-sunken)',
      color: 'inherit'
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Chip.jsx", error: String((e && e.message) || e) }); }

// components/display/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Divider — hairline rule. Horizontal by default; `vertical` for inline use;
 * optional centered `label` (e.g. "or").
 */
function Divider({
  vertical = false,
  label,
  style,
  ...rest
}) {
  if (vertical) {
    return /*#__PURE__*/React.createElement("span", _extends({
      role: "separator",
      "aria-orientation": "vertical",
      style: {
        display: 'inline-block',
        width: 1,
        alignSelf: 'stretch',
        minHeight: '1em',
        background: 'var(--vt-color-divider)',
        ...style
      }
    }, rest));
  }
  if (label) {
    return /*#__PURE__*/React.createElement("div", _extends({
      role: "separator",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--vt-space-3)',
        color: 'var(--vt-color-text-muted)',
        fontFamily: 'var(--vt-font-sans)',
        fontSize: 'var(--vt-text-xs)',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: 'var(--vt-color-divider)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        textTransform: 'uppercase',
        letterSpacing: '.08em'
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: 'var(--vt-color-divider)'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", _extends({
    role: "separator",
    style: {
      border: 'none',
      height: 1,
      background: 'var(--vt-color-divider)',
      margin: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Divider.jsx", error: String((e && e.message) || e) }); }

// components/display/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProductCard — the catalog workhorse. Square reserved image, badge overlay,
 * model name + mono SKU, optional B2B price/MOQ. Whole card is a link; hover lifts.
 */
function ProductCard({
  name,
  sku,
  image,
  hoverImage,
  badge,
  // 'new' | 'limited' | null
  price,
  // string e.g. "$1,250" — B2B/featured
  priceUnit = '/ unit',
  moq,
  // number — B2B
  unavailable = false,
  href = '#',
  action,
  // optional node (e.g. B2B "Add" button)
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: "vt-pcard",
    style: {
      display: 'block',
      background: 'var(--vt-color-surface)',
      border: '1px solid var(--vt-color-border)',
      borderRadius: 'var(--vt-radius-lg)',
      overflow: 'hidden',
      textDecoration: 'none',
      color: 'inherit',
      boxShadow: 'var(--vt-shadow-md)',
      transition: 'transform var(--vt-duration-slow) var(--vt-ease-standard), box-shadow var(--vt-duration-slow), border-color var(--vt-duration-slow)',
      opacity: unavailable ? 0.7 : 1,
      textAlign: 'start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: 'var(--vt-aspect-product)',
      overflow: 'hidden',
      background: 'linear-gradient(160deg, var(--vt-ink-100), var(--vt-violet-50))'
    }
  }, badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      insetInlineStart: 12,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: badge
  })), unavailable && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      insetInlineEnd: 12,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "soldout"
  }, "Out of stock")), image && /*#__PURE__*/React.createElement("img", {
    className: "vt-pcard__img vt-pcard__img--base",
    src: image,
    alt: name,
    loading: "lazy",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform var(--vt-duration-slower) var(--vt-ease-standard), opacity var(--vt-duration-base)'
    }
  }), hoverImage && /*#__PURE__*/React.createElement("img", {
    className: "vt-pcard__img vt-pcard__img--hover",
    src: hoverImage,
    alt: "",
    "aria-hidden": "true",
    loading: "lazy",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0,
      transition: 'opacity var(--vt-duration-slow)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--vt-space-4)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--vt-font-sans)',
      fontSize: 'var(--vt-text-base)',
      fontWeight: 'var(--vt-weight-medium)',
      color: 'var(--vt-color-text-strong)'
    }
  }, name), sku && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontFamily: 'var(--vt-font-mono)',
      fontSize: 'var(--vt-text-xs)',
      color: 'var(--vt-color-text-muted)'
    }
  }, sku), (price || action) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--vt-space-3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--vt-space-2)'
    }
  }, price && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--vt-text-base)',
      fontWeight: 'var(--vt-weight-semibold)',
      color: 'var(--vt-color-primary)'
    }
  }, price, ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--vt-color-text-muted)',
      fontWeight: 'var(--vt-weight-regular)',
      fontSize: 'var(--vt-text-xs)'
    }
  }, priceUnit)), action), moq != null && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 'var(--vt-text-xs)',
      color: 'var(--vt-color-text-muted)'
    }
  }, "MOQ ", moq, " units")), /*#__PURE__*/React.createElement("style", null, `
        .vt-pcard:hover{ transform: translateY(-8px); box-shadow: var(--vt-shadow-xl); border-color: var(--vt-violet-200); }
        .vt-pcard:hover .vt-pcard__img--base{ transform: scale(1.08); }
        .vt-pcard:hover .vt-pcard__img--hover{ opacity: 1; }
        .vt-pcard:focus-visible{ outline:none; box-shadow: var(--vt-shadow-focus); }
      `));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/display/SpecTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SpecTable — zebra-striped label/value table for PDP specs and dashboards.
 * Label column muted, value column strong; fully translatable, right-aligns in RTL.
 */
function SpecTable({
  rows = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("table", _extends({
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--vt-font-sans)',
      fontSize: 'var(--vt-text-sm)',
      textAlign: 'start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("tbody", null, rows.map(([label, value], i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      background: i % 2 ? 'var(--vt-color-surface-sunken)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '13px var(--vt-space-4)',
      color: 'var(--vt-color-text-muted)',
      width: '42%',
      textAlign: 'start'
    }
  }, label), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '13px var(--vt-space-4)',
      color: 'var(--vt-color-text-strong)',
      fontWeight: 'var(--vt-weight-medium)',
      textAlign: 'start'
    }
  }, value)))));
}
Object.assign(__ds_scope, { SpecTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/SpecTable.jsx", error: String((e && e.message) || e) }); }

// components/display/StatTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatTile — a single dashboard / marketing metric: big value, label, optional
 * icon and delta. Used in the B2B dashboard and the site stats band.
 */
function StatTile({
  value,
  label,
  icon,
  delta,
  deltaDir = 'up',
  display = false,
  style,
  ...rest
}) {
  const deltaColor = deltaDir === 'down' ? 'var(--vt-color-danger)' : 'var(--vt-color-success)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--vt-color-surface)',
      border: '1px solid var(--vt-color-border)',
      borderRadius: 'var(--vt-radius-lg)',
      padding: 'var(--vt-space-5)',
      boxShadow: 'var(--vt-shadow-xs)',
      fontFamily: 'var(--vt-font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 'var(--vt-space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--vt-text-sm)',
      color: 'var(--vt-color-text-muted)'
    }
  }, label), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      flex: 'none',
      borderRadius: 'var(--vt-radius-md)',
      background: 'var(--vt-color-primary-subtle)',
      color: 'var(--vt-color-primary)',
      display: 'grid',
      placeItems: 'center'
    }
  }, icon)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      lineHeight: 1,
      fontFamily: display ? 'var(--vt-font-display)' : 'var(--vt-font-sans)',
      fontWeight: display ? 300 : 'var(--vt-weight-semibold)',
      fontSize: display ? 'var(--vt-text-4xl)' : 'var(--vt-text-3xl)',
      color: 'var(--vt-color-text-strong)'
    }
  }, value), delta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 'var(--vt-text-xs)',
      color: deltaColor
    }
  }, deltaDir === 'down' ? '▼' : '▲', " ", delta));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Modal — centered dialog over a scrim. Controlled via `open`/`onClose`.
 * Closes on Esc and backdrop click; locks body scroll while open.
 */
function Modal({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = 'md',
  style,
  ...rest
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => e.key === 'Escape' && onClose && onClose();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);
  if (!open) return null;
  const maxW = {
    sm: 400,
    md: 520,
    lg: 720
  }[size] || 520;
  return /*#__PURE__*/React.createElement("div", {
    className: "vt-modal__scrim",
    onMouseDown: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 400,
      background: 'var(--vt-scrim)',
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--vt-space-6)',
      animation: 'vt-fade var(--vt-duration-base) ease'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    className: "vt-modal__panel",
    style: {
      width: '100%',
      maxWidth: maxW,
      maxHeight: '90vh',
      overflowY: 'auto',
      background: 'var(--vt-color-surface)',
      borderRadius: 'var(--vt-radius-xl)',
      boxShadow: 'var(--vt-shadow-2xl)',
      fontFamily: 'var(--vt-font-sans)',
      animation: 'vt-pop var(--vt-duration-slow) var(--vt-ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--vt-space-4)',
      padding: 'var(--vt-space-6) var(--vt-space-6) 0'
    }
  }, /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--vt-font-display)',
      fontWeight: 400,
      fontSize: 'var(--vt-text-2xl)',
      color: 'var(--vt-color-text-strong)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 'var(--vt-text-sm)',
      color: 'var(--vt-color-text-muted)',
      lineHeight: 1.6
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      flex: 'none',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--vt-color-text-muted)',
      display: 'inline-flex',
      padding: 4,
      borderRadius: 'var(--vt-radius-sm)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x",
    style: {
      width: 20,
      height: 20
    }
  }))), children && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--vt-space-4) var(--vt-space-6)',
      fontSize: 'var(--vt-text-base)',
      color: 'var(--vt-color-text)',
      lineHeight: 1.6
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--vt-space-3)',
      padding: '0 var(--vt-space-6) var(--vt-space-6)'
    }
  }, footer)), /*#__PURE__*/React.createElement("style", null, `@keyframes vt-fade{from{opacity:0}to{opacity:1}}@keyframes vt-pop{from{opacity:0;transform:translateY(12px) scale(.98)}to{opacity:1;transform:none}}`));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/OrderStatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STATUS = {
  submitted: {
    label: 'Submitted',
    fg: 'var(--vt-color-status-submitted)',
    bg: 'var(--vt-color-status-submitted-bg)',
    icon: 'inbox'
  },
  reviewing: {
    label: 'Reviewing',
    fg: 'var(--vt-color-status-reviewing)',
    bg: 'var(--vt-color-status-reviewing-bg)',
    icon: 'search'
  },
  approved: {
    label: 'Approved',
    fg: 'var(--vt-color-status-approved)',
    bg: 'var(--vt-color-status-approved-bg)',
    icon: 'check'
  },
  shipped: {
    label: 'Shipped',
    fg: 'var(--vt-color-status-shipped)',
    bg: 'var(--vt-color-status-shipped-bg)',
    icon: 'truck'
  },
  completed: {
    label: 'Completed',
    fg: 'var(--vt-color-status-completed)',
    bg: 'var(--vt-color-status-completed-bg)',
    icon: 'check-check'
  },
  rejected: {
    label: 'Rejected',
    fg: 'var(--vt-color-status-rejected)',
    bg: 'var(--vt-color-status-rejected-bg)',
    icon: 'x'
  }
};

/**
 * OrderStatusPill — the B2B order pipeline status as a colored pill with a dot
 * (or Lucide icon) and a text label. Status never communicates by color alone.
 */
function OrderStatusPill({
  status = 'submitted',
  label,
  withIcon = false,
  style,
  ...rest
}) {
  const s = STATUS[status] || STATUS.submitted;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--vt-space-2)',
      padding: '6px 12px',
      borderRadius: 'var(--vt-radius-pill)',
      background: s.bg,
      color: s.fg,
      fontFamily: 'var(--vt-font-sans)',
      fontSize: 'var(--vt-text-xs)',
      fontWeight: 'var(--vt-weight-semibold)',
      lineHeight: 1,
      ...style
    }
  }, rest), withIcon ? /*#__PURE__*/React.createElement("i", {
    "data-lucide": s.icon,
    style: {
      width: 14,
      height: 14
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), label || s.label);
}
Object.assign(__ds_scope, { OrderStatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/OrderStatusPill.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Skeleton — shimmering placeholder that holds layout while content loads.
 * The brand prefers skeletons over spinners for content. `variant` picks a shape.
 */
function Skeleton({
  variant = 'line',
  width,
  height,
  lines = 3,
  style,
  ...rest
}) {
  const base = {
    background: 'linear-gradient(90deg, var(--vt-ink-100) 25%, var(--vt-ink-150) 37%, var(--vt-ink-100) 63%)',
    backgroundSize: '400% 100%',
    animation: 'vt-shimmer 1.4s ease infinite'
  };
  const css = /*#__PURE__*/React.createElement("style", null, `@keyframes vt-shimmer{0%{background-position:100% 0}100%{background-position:-100% 0}}`);
  if (variant === 'card') {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        ...style
      }
    }, rest), css, /*#__PURE__*/React.createElement("div", {
      style: {
        ...base,
        aspectRatio: 'var(--vt-aspect-product)',
        borderRadius: 'var(--vt-radius-lg)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...base,
        height: 14,
        borderRadius: 6,
        marginTop: 14,
        width: '80%'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...base,
        height: 12,
        borderRadius: 6,
        marginTop: 8,
        width: '45%'
      }
    }));
  }
  if (variant === 'circle') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        ...base,
        display: 'inline-block',
        width: width || 40,
        height: height || width || 40,
        borderRadius: '50%',
        ...style
      }
    }, rest), css);
  }
  if (variant === 'text') {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        ...style
      }
    }, rest), css, Array.from({
      length: lines
    }).map((_, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        ...base,
        height: 12,
        borderRadius: 6,
        width: i === lines - 1 ? '60%' : '100%'
      }
    })));
  }
  // line / block
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      display: 'block',
      width: width || '100%',
      height: height || 16,
      borderRadius: 'var(--vt-radius-sm)',
      ...style
    }
  }, rest), css);
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Spinner — indeterminate loading ring in `currentColor`. Inherits text color;
 * set `color` on a parent or pass `style={{color}}`.
 */
function Spinner({
  size = 20,
  thickness = 2,
  label = 'Loading',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "status",
    "aria-label": label,
    style: {
      display: 'inline-flex',
      color: 'var(--vt-color-primary)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'block',
      border: `${thickness}px solid currentColor`,
      borderTopColor: 'transparent',
      opacity: 0.9,
      animation: 'vt-spin 0.7s linear infinite'
    }
  }), /*#__PURE__*/React.createElement("style", null, `@keyframes vt-spin{to{transform:rotate(360deg)}}`));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  success: {
    icon: 'check-circle',
    color: 'var(--vt-color-success)'
  },
  error: {
    icon: 'alert-circle',
    color: 'var(--vt-color-danger)'
  },
  warning: {
    icon: 'alert-triangle',
    color: 'var(--vt-color-warning)'
  },
  info: {
    icon: 'info',
    color: 'var(--vt-color-info)'
  }
};

/**
 * Toast — transient confirmation/notice. Render one inside <ToastViewport>.
 * A left accent bar carries the tone colour; status is never colour-only (icon + text).
 */
function Toast({
  tone = 'success',
  title,
  description,
  onClose,
  icon,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      gap: 'var(--vt-space-3)',
      alignItems: 'flex-start',
      width: 340,
      maxWidth: '90vw',
      padding: 'var(--vt-space-4)',
      background: 'var(--vt-color-surface)',
      borderRadius: 'var(--vt-radius-md)',
      boxShadow: 'var(--vt-shadow-xl)',
      borderInlineStart: `3px solid ${t.color}`,
      fontFamily: 'var(--vt-font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.color,
      display: 'inline-flex',
      flex: 'none',
      marginTop: 1
    }
  }, icon || /*#__PURE__*/React.createElement("i", {
    "data-lucide": t.icon,
    style: {
      width: 20,
      height: 20
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--vt-text-sm)',
      fontWeight: 'var(--vt-weight-semibold)',
      color: 'var(--vt-color-text-strong)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--vt-text-sm)',
      color: 'var(--vt-color-text-muted)',
      marginTop: 2,
      lineHeight: 1.5
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      flex: 'none',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--vt-color-text-subtle)',
      display: 'inline-flex',
      padding: 2
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x",
    style: {
      width: 16,
      height: 16
    }
  })));
}

/** Fixed stack for toasts — place once near the root. */
function ToastViewport({
  position = 'bottom-end',
  children,
  style,
  ...rest
}) {
  const [v, h] = position.split('-');
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'fixed',
      zIndex: 500,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--vt-space-2)',
      [v === 'top' ? 'top' : 'bottom']: 'var(--vt-space-6)',
      [h === 'start' ? 'insetInlineStart' : h === 'center' ? 'insetInlineStart' : 'insetInlineEnd']: h === 'center' ? '50%' : 'var(--vt-space-6)',
      transform: h === 'center' ? 'translateX(-50%)' : 'none',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Toast, ToastViewport });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tooltip — hover/focus label on a single child. CSS-driven (no portal); the
 * trigger is wrapped in an inline-flex span. `side` positions the bubble.
 */
function Tooltip({
  label,
  side = 'top',
  children,
  style,
  ...rest
}) {
  const pos = {
    top: {
      bottom: '100%',
      insetInlineStart: '50%',
      transform: 'translateX(-50%) translateY(-8px)'
    },
    bottom: {
      top: '100%',
      insetInlineStart: '50%',
      transform: 'translateX(-50%) translateY(8px)'
    },
    left: {
      insetInlineEnd: '100%',
      top: '50%',
      transform: 'translateY(-50%) translateX(-8px)'
    },
    right: {
      insetInlineStart: '100%',
      top: '50%',
      transform: 'translateY(-50%) translateX(8px)'
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "vt-tip",
    tabIndex: 0,
    style: {
      position: 'relative',
      display: 'inline-flex',
      outline: 'none',
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    className: "vt-tip__bubble",
    style: {
      position: 'absolute',
      zIndex: 600,
      ...pos,
      pointerEvents: 'none',
      background: 'var(--vt-ink-900)',
      color: '#fff',
      fontFamily: 'var(--vt-font-sans)',
      fontSize: 'var(--vt-text-xs)',
      fontWeight: 'var(--vt-weight-medium)',
      padding: '6px 10px',
      borderRadius: 'var(--vt-radius-sm)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--vt-shadow-lg)',
      opacity: 0,
      transition: 'opacity var(--vt-duration-fast)'
    }
  }, label), /*#__PURE__*/React.createElement("style", null, `.vt-tip:hover .vt-tip__bubble,.vt-tip:focus-visible .vt-tip__bubble{opacity:1}`));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary action control. Token-driven, RTL-safe, with the
 * brand's signature trailing-arrow slide on hover.
 */
function Button({
  variant = 'primary',
  size = 'md',
  leadingIcon,
  trailingIcon,
  loading = false,
  disabled = false,
  type = 'button',
  children,
  style,
  ...rest
}) {
  const heights = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const padX = {
    sm: 'var(--vt-space-3)',
    md: 'var(--vt-space-4)',
    lg: 'var(--vt-space-6)'
  };
  const fontSize = size === 'lg' ? 'var(--vt-text-base)' : 'var(--vt-text-sm)';
  const variants = {
    primary: {
      background: 'var(--vt-color-primary)',
      color: 'var(--vt-color-on-primary)',
      border: '1.5px solid transparent',
      boxShadow: 'var(--vt-shadow-md)'
    },
    secondary: {
      background: 'var(--vt-color-surface)',
      color: 'var(--vt-color-text)',
      border: '1.5px solid var(--vt-color-border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--vt-color-text)',
      border: '1.5px solid transparent'
    },
    accent: {
      background: 'linear-gradient(135deg, var(--vt-gold-300), var(--vt-gold-400))',
      color: 'var(--vt-color-on-accent)',
      border: '1.5px solid transparent',
      boxShadow: '0 8px 24px rgba(201,168,106,.30)'
    },
    danger: {
      background: 'var(--vt-color-danger)',
      color: '#fff',
      border: '1.5px solid transparent'
    },
    success: {
      background: 'var(--vt-color-success)',
      color: '#fff',
      border: '1.5px solid transparent'
    },
    'danger-outline': {
      background: 'transparent',
      color: 'var(--vt-color-danger)',
      border: '1.5px solid var(--vt-color-danger)'
    }
  };
  const isDisabled = disabled || loading;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: isDisabled,
    className: `vt-btn vt-btn--${variant}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--vt-space-2)',
      height: heights[size] || heights.md,
      paddingInline: padX[size] || padX.md,
      fontFamily: 'var(--vt-font-sans)',
      fontWeight: 'var(--vt-weight-medium)',
      fontSize,
      lineHeight: 1,
      borderRadius: 'var(--vt-radius-md)',
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      opacity: isDisabled ? 0.5 : 1,
      transition: 'transform var(--vt-duration-base) var(--vt-ease-standard), box-shadow var(--vt-duration-base), background var(--vt-duration-base)',
      whiteSpace: 'nowrap',
      ...variants[variant],
      ...style
    }
  }, rest), loading ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      animation: 'vt-spin 0.7s linear infinite',
      opacity: 0.9
    }
  }) : leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, leadingIcon), children && /*#__PURE__*/React.createElement("span", null, children), trailingIcon && /*#__PURE__*/React.createElement("span", {
    className: "vt-btn__arr",
    style: {
      display: 'inline-flex',
      transition: 'transform var(--vt-duration-base)'
    }
  }, trailingIcon), /*#__PURE__*/React.createElement("style", null, `
        @keyframes vt-spin { to { transform: rotate(360deg); } }
        .vt-btn:hover:not(:disabled) { transform: translateY(-1px); }
        .vt-btn--primary:hover:not(:disabled) { background: var(--vt-color-primary-hover); }
        .vt-btn--secondary:hover:not(:disabled) { background: var(--vt-color-surface-sunken); }
        .vt-btn--ghost:hover:not(:disabled) { background: var(--vt-color-primary-subtle); }
        .vt-btn--accent:hover:not(:disabled) { box-shadow: 0 12px 32px rgba(201,168,106,.45); }
        .vt-btn--success:hover:not(:disabled) { filter: brightness(1.06); }
        .vt-btn--danger-outline:hover:not(:disabled) { background: var(--vt-color-danger-bg); }
        .vt-btn:active:not(:disabled) { transform: translateY(0); }
        .vt-btn:focus-visible { outline: none; box-shadow: var(--vt-shadow-focus); }
        .vt-btn:hover:not(:disabled) .vt-btn__arr { transform: translateX(4px); }
      `));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox — labelled, token-driven. Controlled via `checked`/`onChange`.
 * Supports `indeterminate` (e.g. "select all" partial state).
 */
function Checkbox({
  label,
  checked = false,
  indeterminate = false,
  disabled = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const reactId = React.useId();
  const inputId = id || reactId;
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--vt-space-2)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--vt-font-sans)',
      fontSize: 'var(--vt-text-sm)',
      color: 'var(--vt-color-text)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 18,
      height: 18,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    id: inputId,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked, e),
    style: {
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "vt-cbx",
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 18,
      height: 18,
      borderRadius: 'var(--vt-radius-sm)',
      border: `1.5px solid ${on ? 'var(--vt-color-primary)' : 'var(--vt-color-border-strong)'}`,
      background: on ? 'var(--vt-color-primary)' : 'var(--vt-color-surface)',
      color: '#fff',
      transition: 'all var(--vt-duration-fast)'
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 2,
      background: '#fff',
      borderRadius: 1
    }
  }) : checked ? /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2l2.3 2.3 4.7-5",
    stroke: "#fff",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })) : null)), label && /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("style", null, `.vt-cbx:focus-within,input:focus-visible + .vt-cbx{ box-shadow: var(--vt-shadow-focus); }`));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — square, icon-only control. `aria-label` is required.
 * Ghost by default; matches Button states.
 */
function IconButton({
  icon,
  size = 'md',
  variant = 'ghost',
  disabled = false,
  style,
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const d = dims[size] || dims.md;
  const variants = {
    ghost: {
      background: 'transparent',
      color: 'var(--vt-color-text)',
      border: '1.5px solid transparent'
    },
    secondary: {
      background: 'var(--vt-color-surface)',
      color: 'var(--vt-color-text)',
      border: '1.5px solid var(--vt-color-border-strong)'
    },
    primary: {
      background: 'var(--vt-color-primary)',
      color: 'var(--vt-color-on-primary)',
      border: '1.5px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    className: `vt-iconbtn vt-iconbtn--${variant}`,
    style: {
      display: 'inline-grid',
      placeItems: 'center',
      width: d,
      height: d,
      borderRadius: 'var(--vt-radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--vt-duration-base), transform var(--vt-duration-base)',
      ...variants[variant],
      ...style
    }
  }, rest), icon, /*#__PURE__*/React.createElement("style", null, `
        .vt-iconbtn--ghost:hover:not(:disabled){ background: var(--vt-color-primary-subtle); }
        .vt-iconbtn--secondary:hover:not(:disabled){ background: var(--vt-color-surface-sunken); }
        .vt-iconbtn--primary:hover:not(:disabled){ background: var(--vt-color-primary-hover); }
        .vt-iconbtn:focus-visible{ outline:none; box-shadow: var(--vt-shadow-focus); }
      `));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/ImageUploader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ImageUploader — click-or-drag image field with thumbnail previews.
 * Controlled via `value` (array of {id, url, name?}) / `onChange`. Reads the
 * selected files to data URLs internally, enforces `max`, and supports single
 * or multiple selection. Matches Input/Select (label above, hint below, RTL-safe).
 */
function ImageUploader({
  label,
  hint,
  value = [],
  onChange,
  multiple = true,
  max = 8,
  accept = 'image/*',
  thumbSize = 74,
  addLabel = 'Add',
  id,
  style,
  ...rest
}) {
  const reactId = React.useId();
  const inputId = id || reactId;
  const [drag, setDrag] = React.useState(false);
  const atMax = value.length >= max;
  const readFiles = fileList => {
    const files = Array.from(fileList || []);
    if (!files.length || !onChange) return;
    const room = multiple ? Math.max(0, max - value.length) : 1;
    const slice = files.slice(0, room);
    if (!slice.length) return;
    let pending = slice.length;
    const added = [];
    slice.forEach(file => {
      const reader = new FileReader();
      reader.onload = ev => {
        added.push({
          id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
          url: ev.target.result,
          name: file.name
        });
        if (--pending === 0) onChange(multiple ? [...value, ...added] : added);
      };
      reader.readAsDataURL(file);
    });
  };
  const remove = rid => onChange && onChange(value.filter(x => x.id !== rid));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--vt-space-2)',
      fontFamily: 'var(--vt-font-sans)',
      textAlign: 'start',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 'var(--vt-text-sm)',
      fontWeight: 'var(--vt-weight-medium)',
      color: 'var(--vt-color-text)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--vt-space-3)'
    }
  }, value.map(img => /*#__PURE__*/React.createElement("div", {
    key: img.id,
    style: {
      position: 'relative',
      width: thumbSize,
      height: thumbSize,
      flex: 'none',
      borderRadius: 'var(--vt-radius-sm)',
      overflow: 'hidden',
      border: '1px solid var(--vt-color-border)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img.url,
    alt: img.name || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => remove(img.id),
    "aria-label": "Remove image",
    style: {
      position: 'absolute',
      top: 3,
      insetInlineEnd: 3,
      width: 20,
      height: 20,
      border: 'none',
      borderRadius: '50%',
      background: 'rgba(13,10,30,.62)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer',
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x",
    style: {
      width: 12,
      height: 12
    }
  })))), !atMax && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    onDragOver: e => {
      e.preventDefault();
      setDrag(true);
    },
    onDragLeave: () => setDrag(false),
    onDrop: e => {
      e.preventDefault();
      setDrag(false);
      readFiles(e.dataTransfer.files);
    },
    style: {
      width: thumbSize,
      height: thumbSize,
      flex: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      cursor: 'pointer',
      color: drag ? 'var(--vt-color-primary)' : 'var(--vt-color-text-muted)',
      border: `1.5px dashed ${drag ? 'var(--vt-color-primary)' : 'var(--vt-color-border-strong)'}`,
      borderRadius: 'var(--vt-radius-sm)',
      background: drag ? 'var(--vt-color-primary-subtle)' : 'transparent',
      transition: 'border-color var(--vt-duration-base), background var(--vt-duration-base), color var(--vt-duration-base)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "image-plus",
    style: {
      width: 19,
      height: 19
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--vt-text-xs)'
    }
  }, addLabel)), /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: "file",
    accept: accept,
    multiple: multiple,
    onChange: e => {
      readFiles(e.target.files);
      e.target.value = '';
    },
    style: {
      display: 'none'
    }
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--vt-text-xs)',
      color: 'var(--vt-color-text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { ImageUploader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ImageUploader.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input / TextField — persistent label above, optional leading affix, hint/error.
 * Label is never a placeholder. RTL: text-align follows start.
 */
function Input({
  label,
  hint,
  error,
  leadingAffix,
  icon,
  size = 'md',
  id,
  style,
  ...rest
}) {
  const reactId = React.useId();
  const inputId = id || reactId;
  const height = size === 'lg' ? 48 : 40;
  const invalid = Boolean(error);
  const iconRef = React.useRef(null);
  React.useEffect(() => {
    if (icon && iconRef.current && window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons({
        nameAttr: 'data-lucide',
        icons: window.lucide.icons,
        attrs: {}
      });
    }
  }, [icon]);
  const affix = leadingAffix || (icon ? React.createElement('i', {
    ref: iconRef,
    'data-lucide': icon,
    style: {
      width: 17,
      height: 17
    }
  }) : null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--vt-space-2)',
      fontFamily: 'var(--vt-font-sans)',
      textAlign: 'start'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 'var(--vt-text-sm)',
      fontWeight: 'var(--vt-weight-medium)',
      color: 'var(--vt-color-text)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "vt-field",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--vt-space-2)',
      height,
      paddingInline: 'var(--vt-space-4)',
      background: 'var(--vt-color-surface)',
      border: `1.5px solid ${invalid ? 'var(--vt-color-danger)' : 'var(--vt-color-border-strong)'}`,
      borderRadius: 'var(--vt-radius-sm)',
      transition: 'border-color var(--vt-duration-base), box-shadow var(--vt-duration-base)'
    }
  }, affix && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--vt-color-text-muted)'
    }
  }, affix), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    "aria-invalid": invalid || undefined,
    "aria-describedby": error ? `${inputId}-err` : hint ? `${inputId}-hint` : undefined,
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'inherit',
      fontSize: 'var(--vt-text-sm)',
      color: 'var(--vt-color-text-strong)',
      textAlign: 'start',
      ...style
    }
  }, rest))), error ? /*#__PURE__*/React.createElement("span", {
    id: `${inputId}-err`,
    style: {
      fontSize: 'var(--vt-text-xs)',
      color: 'var(--vt-color-danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    id: `${inputId}-hint`,
    style: {
      fontSize: 'var(--vt-text-xs)',
      color: 'var(--vt-color-text-muted)'
    }
  }, hint) : null, /*#__PURE__*/React.createElement("style", null, `.vt-field:focus-within{ border-color: var(--vt-color-primary); box-shadow: var(--vt-shadow-focus); }`));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityStepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * QuantityStepper — [−] [value] [+] used on the B2B PDP and cart. Enforces MOQ:
 * the value clamps at min (MOQ) and max; below-MOQ is impossible so submit stays valid.
 */
function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 9999,
  step = 1,
  moq,
  style,
  ...rest
}) {
  const lo = moq ?? min;
  const clamp = n => Math.max(lo, Math.min(max, n));
  const set = n => onChange && onChange(clamp(n));
  const btn = {
    width: 36,
    height: 36,
    display: 'grid',
    placeItems: 'center',
    border: 'none',
    background: 'transparent',
    color: 'var(--vt-color-text)',
    cursor: 'pointer',
    fontSize: 18,
    fontFamily: 'var(--vt-font-sans)',
    transition: 'background var(--vt-duration-fast)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 4,
      fontFamily: 'var(--vt-font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "vt-stepper",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      border: '1.5px solid var(--vt-color-border-strong)',
      borderRadius: 'var(--vt-radius-sm)',
      overflow: 'hidden',
      width: 'max-content'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Decrease quantity",
    className: "vt-step",
    disabled: value <= lo,
    style: {
      ...btn,
      opacity: value <= lo ? 0.4 : 1
    },
    onClick: () => set(value - step)
  }, "\u2212"), /*#__PURE__*/React.createElement("input", {
    "aria-label": "Quantity",
    inputMode: "numeric",
    value: value,
    onChange: e => set(parseInt(e.target.value.replace(/\D/g, ''), 10) || lo),
    style: {
      width: 52,
      height: 36,
      border: 'none',
      borderInline: '1.5px solid var(--vt-color-border)',
      textAlign: 'center',
      font: '500 14px var(--vt-font-mono)',
      color: 'var(--vt-color-text-strong)',
      outline: 'none',
      background: 'var(--vt-color-surface)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Increase quantity",
    className: "vt-step",
    disabled: value >= max,
    style: {
      ...btn,
      opacity: value >= max ? 0.4 : 1
    },
    onClick: () => set(value + step)
  }, "+")), moq != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--vt-text-xs)',
      color: value < moq ? 'var(--vt-color-danger)' : 'var(--vt-color-text-muted)'
    }
  }, "Minimum ", moq, " units"), /*#__PURE__*/React.createElement("style", null, `.vt-step:hover:not(:disabled){ background: var(--vt-color-primary-subtle); } .vt-step:focus-visible{ outline:none; box-shadow: var(--vt-shadow-focus); }`));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/commerce/CartLineItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CartLineItem — a row in the B2B cart / request list: thumbnail, name + SKU,
 * quantity stepper (MOQ-aware), line total, and a remove action.
 * `editable` shows the stepper; otherwise quantity is read-only (order summaries).
 */
function CartLineItem({
  name,
  sku,
  image,
  price,
  qty,
  moq,
  currency = n => `$${n.toLocaleString()}`,
  editable = true,
  onQty,
  onRemove,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 'var(--vt-space-4)',
      alignItems: 'center',
      padding: 'var(--vt-space-4) 0',
      fontFamily: 'var(--vt-font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      flex: 'none',
      borderRadius: 'var(--vt-radius-md)',
      overflow: 'hidden',
      background: 'var(--vt-color-surface-sunken)'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--vt-text-sm)',
      fontWeight: 'var(--vt-weight-medium)',
      color: 'var(--vt-color-text-strong)'
    }
  }, /*#__PURE__*/React.createElement("bdi", null, name)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--vt-font-mono)',
      fontSize: 'var(--vt-text-xs)',
      color: 'var(--vt-color-text-muted)',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("bdi", null, sku)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--vt-text-xs)',
      color: 'var(--vt-color-text-muted)',
      marginTop: 4
    }
  }, currency(price), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .7
    }
  }, "/ unit"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 'var(--vt-space-2)'
    }
  }, editable ? /*#__PURE__*/React.createElement(__ds_scope.QuantityStepper, {
    value: qty,
    moq: moq,
    onChange: onQty
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--vt-font-mono)',
      fontSize: 'var(--vt-text-sm)',
      color: 'var(--vt-color-text)'
    }
  }, "\xD7 ", qty), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--vt-text-base)',
      fontWeight: 'var(--vt-weight-semibold)',
      color: 'var(--vt-color-text-strong)'
    }
  }, currency(price * qty))), onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove item",
    style: {
      flex: 'none',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--vt-color-text-subtle)',
      display: 'inline-flex',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "trash-2",
    style: {
      width: 16,
      height: 16
    }
  })));
}
Object.assign(__ds_scope, { CartLineItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/CartLineItem.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Radio — single labelled radio. Group several with the same `name`.
 * Controlled via `checked`/`onChange`.
 */
function Radio({
  label,
  name,
  value,
  checked = false,
  disabled = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const reactId = React.useId();
  const inputId = id || reactId;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--vt-space-2)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--vt-font-sans)',
      fontSize: 'var(--vt-text-sm)',
      color: 'var(--vt-color-text)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 18,
      height: 18,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(value, e),
    style: {
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 18,
      height: 18,
      borderRadius: '50%',
      border: `1.5px solid ${checked ? 'var(--vt-color-primary)' : 'var(--vt-color-border-strong)'}`,
      background: 'var(--vt-color-surface)',
      transition: 'all var(--vt-duration-fast)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--vt-color-primary)'
    }
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — labelled native dropdown styled to match Input (label/hint/error,
 * focus ring, chevron). Native for accessibility + mobile; RTL-safe.
 */
function Select({
  label,
  hint,
  error,
  options = [],
  placeholder,
  value,
  onChange,
  size = 'md',
  id,
  style,
  children,
  ...rest
}) {
  const reactId = React.useId();
  const selId = id || reactId;
  const height = size === 'lg' ? 48 : 40;
  const invalid = Boolean(error);
  const isPlaceholder = placeholder && (value === '' || value == null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--vt-space-2)',
      fontFamily: 'var(--vt-font-sans)',
      textAlign: 'start'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontSize: 'var(--vt-text-sm)',
      fontWeight: 'var(--vt-weight-medium)',
      color: 'var(--vt-color-text)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "vt-selwrap",
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    value: value,
    onChange: e => onChange && onChange(e.target.value, e),
    "aria-invalid": invalid || undefined,
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height,
      paddingInline: 'var(--vt-space-4)',
      paddingInlineEnd: 36,
      background: 'var(--vt-color-surface)',
      border: `1.5px solid ${invalid ? 'var(--vt-color-danger)' : 'var(--vt-color-border-strong)'}`,
      borderRadius: 'var(--vt-radius-sm)',
      font: 'inherit',
      fontSize: 'var(--vt-text-sm)',
      color: isPlaceholder ? 'var(--vt-color-text-subtle)' : 'var(--vt-color-text-strong)',
      outline: 'none',
      cursor: 'pointer',
      textAlign: 'start',
      transition: 'border-color var(--vt-duration-base), box-shadow var(--vt-duration-base)',
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  }), children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      insetInlineEnd: 12,
      pointerEvents: 'none',
      color: 'var(--vt-color-text-muted)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.5 5l3.5 3.5L10.5 5",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--vt-text-xs)',
      color: 'var(--vt-color-danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--vt-text-xs)',
      color: 'var(--vt-color-text-muted)'
    }
  }, hint) : null, /*#__PURE__*/React.createElement("style", null, `.vt-selwrap:focus-within select{ border-color: var(--vt-color-primary); box-shadow: var(--vt-shadow-focus); }`));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Switch — on/off toggle. Controlled via `checked`/`onChange`. Use for binary
 * settings (e.g. "Notify me on restock"); for filters prefer Checkbox.
 */
function Switch({
  label,
  checked = false,
  disabled = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const reactId = React.useId();
  const inputId = id || reactId;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--vt-space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--vt-font-sans)',
      fontSize: 'var(--vt-text-sm)',
      color: 'var(--vt-color-text)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 40,
      height: 24,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked, e),
    style: {
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "vt-switch",
    style: {
      display: 'block',
      width: 40,
      height: 24,
      borderRadius: 'var(--vt-radius-pill)',
      background: checked ? 'var(--vt-color-primary)' : 'var(--vt-color-border-strong)',
      transition: 'background var(--vt-duration-base)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      insetInlineStart: checked ? 19 : 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--vt-shadow-sm)',
      transition: 'inset-inline-start var(--vt-duration-base) var(--vt-ease-standard)'
    }
  }))), label && /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("style", null, `input:focus-visible + .vt-switch{ box-shadow: var(--vt-shadow-focus); }`));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Hero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hero — the celestial brand banner: deep ink-950 gradient, drifting aurora,
 * eyebrow + display title + lead + actions. `align` left or center.
 * Decorative-only; pass real heading text via `title`.
 */
function Hero({
  eyebrow,
  title,
  lead,
  actions,
  align = 'left',
  minHeight = 520,
  children,
  style,
  ...rest
}) {
  const center = align === 'center';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      minHeight,
      display: 'flex',
      alignItems: 'center',
      background: 'radial-gradient(1100px 640px at 72% 26%,#3B0764 0%,transparent 60%),linear-gradient(160deg,#0D0A1E,#18122B 55%,#1c0f3a)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "vt-hero__aurora",
    style: {
      position: 'absolute',
      inset: '-15%',
      pointerEvents: 'none',
      background: 'radial-gradient(560px 380px at 18% 28%,rgba(168,85,247,.24),transparent 60%),radial-gradient(460px 460px at 84% 70%,rgba(124,58,237,.20),transparent 60%),radial-gradient(360px 360px at 60% 16%,rgba(201,168,106,.12),transparent 60%)',
      filter: 'blur(10px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 1280,
      width: '100%',
      margin: '0 auto',
      padding: '64px 40px',
      textAlign: center ? 'center' : 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: center ? 760 : 560,
      marginInline: center ? 'auto' : 0
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: '.26em',
      textTransform: 'uppercase',
      color: 'var(--vt-gold-300)',
      fontWeight: 500
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--vt-font-display)',
      fontWeight: 300,
      letterSpacing: '-.02em',
      fontSize: 'clamp(48px,6vw,84px)',
      lineHeight: 1.02,
      color: '#fff',
      margin: '16px 0 18px'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.7,
      color: '#C4B5FD',
      margin: center ? '0 auto' : 0,
      maxWidth: 540
    }
  }, lead), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 32,
      justifyContent: center ? 'center' : 'flex-start',
      flexWrap: 'wrap'
    }
  }, actions), children)), /*#__PURE__*/React.createElement("style", null, `
        .vt-hero__aurora{animation:vt-hero-aurora 18s ease-in-out infinite alternate}
        @keyframes vt-hero-aurora{0%{transform:translate3d(0,0,0) scale(1)}100%{transform:translate3d(-30px,20px,0) scale(1.06)}}
        @media(prefers-reduced-motion:reduce){.vt-hero__aurora{animation:none}}
      `));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Marquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Marquee — horizontally scrolling row of words/nodes, each separated by the
 * gold ✦ sparkle. Loops seamlessly; pauses on hover; halts under reduced-motion.
 */
function Marquee({
  items = [],
  speed = 28,
  separator = '✦',
  style,
  ...rest
}) {
  const run = [...items, ...items]; // duplicate for seamless loop
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      overflow: 'hidden',
      borderBlock: '1px solid var(--vt-color-divider)',
      background: 'var(--vt-color-surface)',
      padding: '18px 0',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "vt-marquee",
    style: {
      display: 'flex',
      gap: 60,
      whiteSpace: 'nowrap',
      width: 'max-content'
    }
  }, run.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 60,
      fontFamily: 'var(--vt-font-display)',
      fontSize: 26,
      color: 'var(--vt-color-text-subtle)'
    }
  }, it, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--vt-color-accent)',
      fontSize: 14
    }
  }, separator)))), /*#__PURE__*/React.createElement("style", null, `
        .vt-marquee{animation:vt-marquee ${speed}s linear infinite}
        .vt-marquee:hover{animation-play-state:paused}
        @keyframes vt-marquee{to{transform:translateX(-50%)}}
        @media(prefers-reduced-motion:reduce){.vt-marquee{animation:none}}
      `));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Breadcrumb — trail of links ending in the current page. Separator mirrors in RTL.
 * `items`: [{label, href}] — the last item renders as current (no link).
 */
function Breadcrumb({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    style: {
      fontFamily: 'var(--vt-font-sans)',
      fontSize: 'var(--vt-text-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("ol", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--vt-space-2)',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      flexWrap: 'wrap'
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--vt-space-2)'
      }
    }, last || !it.href ? /*#__PURE__*/React.createElement("span", {
      "aria-current": last ? 'page' : undefined,
      style: {
        color: last ? 'var(--vt-color-text)' : 'var(--vt-color-text-muted)',
        fontWeight: last ? 'var(--vt-weight-medium)' : 400
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href,
      style: {
        color: 'var(--vt-color-text-muted)',
        textDecoration: 'none'
      }
    }, it.label), !last && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        color: 'var(--vt-color-text-subtle)'
      }
    }, "\u203A"));
  })));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pagination — page navigation with prev/next and truncated page numbers.
 * Controlled via `page`/`onChange`. Arrows mirror in RTL.
 */
function Pagination({
  page = 1,
  pageCount = 1,
  onChange,
  siblings = 1,
  style,
  ...rest
}) {
  if (pageCount <= 1) return null;
  const go = p => p >= 1 && p <= pageCount && p !== page && onChange && onChange(p);

  // build page list with ellipses
  const pages = [];
  const add = p => pages.push(p);
  const lo = Math.max(2, page - siblings);
  const hi = Math.min(pageCount - 1, page + siblings);
  add(1);
  if (lo > 2) add('…');
  for (let p = lo; p <= hi; p++) add(p);
  if (hi < pageCount - 1) add('…');
  if (pageCount > 1) add(pageCount);
  const cell = active => ({
    minWidth: 36,
    height: 36,
    paddingInline: 8,
    display: 'grid',
    placeItems: 'center',
    borderRadius: 'var(--vt-radius-sm)',
    fontFamily: 'var(--vt-font-sans)',
    fontSize: 'var(--vt-text-sm)',
    fontWeight: active ? 'var(--vt-weight-semibold)' : 'var(--vt-weight-medium)',
    cursor: 'pointer',
    border: `1.5px solid ${active ? 'var(--vt-color-primary)' : 'var(--vt-color-border-strong)'}`,
    background: active ? 'var(--vt-color-primary)' : 'var(--vt-color-surface)',
    color: active ? '#fff' : 'var(--vt-color-text)'
  });
  const arrow = disabled => ({
    ...cell(false),
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1
  });
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Pagination",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--vt-space-2)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Previous page",
    disabled: page <= 1,
    onClick: () => go(page - 1),
    style: arrow(page <= 1)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      transform: 'scaleX(1)'
    }
  }, "\u2039")), pages.map((p, i) => p === '…' ? /*#__PURE__*/React.createElement("span", {
    key: `e${i}`,
    style: {
      minWidth: 24,
      textAlign: 'center',
      color: 'var(--vt-color-text-subtle)'
    }
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: p,
    "aria-current": p === page ? 'page' : undefined,
    onClick: () => go(p),
    style: cell(p === page)
  }, p)), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Next page",
    disabled: page >= pageCount,
    onClick: () => go(page + 1),
    style: arrow(page >= pageCount)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block'
    }
  }, "\u203A")));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SortDropdown.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SortDropdown — a labelled "Sort" Select preset for catalog views.
 * Thin wrapper over Select with the brand's default Newest / A–Z options.
 */
function SortDropdown({
  value,
  onChange,
  options,
  style,
  ...rest
}) {
  const opts = options || [{
    value: 'newest',
    label: 'Newest'
  }, {
    value: 'az',
    label: 'A–Z'
  }];
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--vt-space-2)',
      fontFamily: 'var(--vt-font-sans)',
      fontSize: 'var(--vt-text-sm)',
      color: 'var(--vt-color-text-muted)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, "Sort"), /*#__PURE__*/React.createElement(__ds_scope.Select, {
    value: value,
    onChange: onChange,
    options: opts,
    style: {
      height: 36
    }
  }));
}
Object.assign(__ds_scope, { SortDropdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SortDropdown.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tabs — underline tab bar. Controlled via `value`/`onChange`. The active
 * indicator animates; arrow keys move focus. Used for New Models / catalog views
 * and B2B sub-sections.
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  style,
  ...rest
}) {
  const refs = React.useRef([]);
  const onKey = (e, i) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const dir = e.key === 'ArrowRight' ? 1 : -1;
    const n = (i + dir + tabs.length) % tabs.length;
    const t = tabs[n];
    onChange && onChange(typeof t === 'string' ? t : t.value);
    refs.current[n] && refs.current[n].focus();
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--vt-space-6)',
      borderBottom: '1px solid var(--vt-color-divider)',
      ...style
    }
  }, rest), tabs.map((t, i) => {
    const tab = typeof t === 'string' ? {
      value: t,
      label: t
    } : t;
    const active = tab.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.value,
      ref: el => refs.current[i] = el,
      role: "tab",
      "aria-selected": active,
      tabIndex: active ? 0 : -1,
      onClick: () => onChange && onChange(tab.value),
      onKeyDown: e => onKey(e, i),
      style: {
        position: 'relative',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        padding: '0 0 12px',
        fontFamily: 'var(--vt-font-sans)',
        fontSize: 'var(--vt-text-sm)',
        fontWeight: active ? 'var(--vt-weight-semibold)' : 'var(--vt-weight-medium)',
        color: active ? 'var(--vt-color-primary)' : 'var(--vt-color-text-muted)',
        transition: 'color var(--vt-duration-base)'
      }
    }, tab.label, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        insetInline: 0,
        bottom: -1,
        height: 2,
        borderRadius: 2,
        background: 'var(--vt-color-primary)',
        transformOrigin: 'center',
        transform: active ? 'scaleX(1)' : 'scaleX(0)',
        transition: 'transform var(--vt-duration-base) var(--vt-ease-standard)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// presentation/deck-stage.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* ═══ THIS PROJECT USES DESIGN COMPONENTS (.dc.html) ═══
 * Reference this stage from your <x-dc> template as an import — NEVER as a
 * raw <deck-stage> tag plus a <script src> (that hides the whole deck until
 * the stream finishes):
 *
 *   <x-import component-from-global-scope="deck-stage" from="./deck-stage.js"
 *             width="1920" height="1080" hint-size="100%,100%">
 *     <section data-label="Title" style="...">…</section>
 *     <section data-label="Agenda" style="...">…</section>
 *   </x-import>
 *
 * Slides are inline-styled <section> siblings; do not add a stylesheet or a
 * deck-stage:not(:defined) rule. The plain-HTML "Usage" block in the comment
 * below does NOT apply to .dc.html templates.
 */
/* BEGIN USAGE */
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→, PgUp/PgDn, Space, Home/End, number keys.
 *      On touch devices, tapping the left/right half of the stage goes
 *      prev/next — taps on links, buttons and other interactive slide
 *      content are left alone.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on idle.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *  (g) thumbnail rail — resizable left-hand column of per-slide thumbnails
 *      (static clones). Click to navigate; ↑/↓ with a thumbnail focused to
 *      step between slides; drag to reorder; right-click for
 *      Skip / Move up / Move down / Duplicate / Delete (Delete opens a
 *      Cancel/Delete confirm dialog). Drag the rail's right edge to resize;
 *      width persists to
 *      localStorage. Skipped slides carry `data-deck-skip`, are dimmed in
 *      the rail, omitted from prev/next navigation, and hidden at print.
 *      The rail is suppressed in presenting mode, in the host's Preview
 *      mode (ViewerMode='none'), on `noscale`, on narrow viewports
 *      (≤640px), and via the `no-rail` attribute. Rail mutations dispatch
 *      a `dc-op` CustomEvent on the element (see docs/dc-ops.md) and do
 *      NOT touch the DOM: the host applies the op and re-renders;
 *      structural rail input is locked until the host posts
 *      {__dc_op_ack: true, applied}.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <style>deck-stage:not(:defined){visibility:hidden}</style>
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *   <script src="deck-stage.js"></script>
 *
 * The :not(:defined) rule prevents a flash of the first slide at its
 * authored styles before this script runs and attaches the shadow root.
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 *
 * Speaker notes stay in sync because the component posts {slideIndexChanged: N}
 * to the parent — just include the #speaker-notes script tag if asked for notes.
 *
 * Authoring guidance:
 *   - Write slide bodies as static HTML inside <deck-stage>, with sizing via
 *     CSS custom properties in a <style> block rather than JS constants.
 *     Static slide markup is what lets the user click a heading in edit mode
 *     and retype it directly; a slide rendered through <script type="text/babel">,
 *     React, or a loop over a JS array has to round-trip every tweak through a
 *     chat message instead. Reach for script-generated slides only when the
 *     content genuinely needs interactive behaviour static HTML can't express.
 *   - Do NOT set position/inset/width/height on the slide <section> elements —
 *     the component absolutely positions every slotted child for you.
 *   - Entrance animations: make the visible end-state the base style and
 *     animate *from* hidden, so print and reduced-motion show content.
 *     Gate the animation on [data-deck-active] and the motion query, e.g.
 *     `@media (prefers-reduced-motion:no-preference){ [data-deck-active] .x{animation:fade-in .5s both} }`.
 *     Avoid infinite decorative loops on slide content.
 */
/* END USAGE */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const FINE_POINTER_MQ = matchMedia('(hover: hover) and (pointer: fine)');
  const NARROW_MQ = matchMedia('(max-width: 640px)');
  // Slide-authored controls that should keep a tap instead of it navigating.
  const INTERACTIVE_SEL = 'a[href], button, input, select, textarea, summary, label, video[controls], audio[controls], [role="button"], [onclick], [tabindex]:not([tabindex^="-"]), [contenteditable]:not([contenteditable="false" i])';
  const pad2 = n => String(n).padStart(2, '0');

  // Label precedence: data-label → data-screen-label (number stripped) → first heading → "Slide".
  const getSlideLabel = el => {
    const explicit = el.getAttribute('data-label');
    if (explicit) return explicit;
    const existing = el.getAttribute('data-screen-label');
    if (existing) return existing.replace(/^\s*\d+\s*/, '').trim() || existing;
    const h = el.querySelector('h1, h2, h3, [data-title]');
    const t = h && (h.textContent || '').trim().slice(0, 40);
    if (t) return t;
    return 'Slide';
  };
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
      -webkit-tap-highlight-color: transparent;
    }
    /* connectedCallback holds this until document.fonts.ready (capped 2s) so
     * the first visible paint has the deck's real typography + final rail
     * layout. opacity (not visibility) so the active slide can't un-hide
     * itself via the ::slotted([data-deck-active]) visibility:visible rule.
     * Only the stage/rail hide — the black :host background stays, so the
     * iframe doesn't flash the page's default white. */
    :host([data-fonts-pending]) .stage,
    :host([data-fonts-pending]) .rail { opacity: 0; pointer-events: none; }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Thumbnail rail ──────────────────────────────────────────────────
       Fixed column on the left; each thumbnail is a static deep-clone of
       the light-DOM slide scaled into a 16:9 (or design-aspect) frame. The
       stage re-fits around it (see _fit); hidden during present / noscale
       / print so capture geometry and fullscreen output are unchanged. */
    .rail {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: var(--deck-rail-w, 188px);
      background: #141414;
      border-right: 1px solid rgba(255,255,255,0.08);
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 2147482500;
      scrollbar-width: thin;
      scrollbar-color: rgba(255,255,255,0.18) transparent;
    }
    .rail::-webkit-scrollbar { width: 8px; }
    .rail::-webkit-scrollbar-track { background: transparent; margin: 2px; }
    .rail::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.18);
      border-radius: 4px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    .rail::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.28);
      border: 2px solid transparent;
      background-clip: content-box;
    }
    :host([no-rail]) .rail,
    :host([noscale]) .rail { display: none; }
    .rail[data-presenting] { display: none; }
    @media (max-width: 640px) {
      .rail, .rail-resize { display: none; }
    }
    /* User-driven show/hide (the TweaksPanel toggle) slides instead of
       popping. Transitions are gated on :host([data-rail-anim]) — set only
       for the 200ms around the toggle — so window-resize and rail-width
       drag (which also call _fit) don't lag behind the cursor. */
    .rail[data-user-hidden] { transform: translateX(-100%); }
    :host([data-rail-anim]) .rail { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .stage { transition: left 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .canvas { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    /* transition shorthand replaces rather than merges — repeat the base
       .overlay opacity/transform/filter transitions so visibility changes
       during the 200ms toggle window still fade instead of popping. */
    :host([data-rail-anim]) .overlay {
      transition: margin-left 200ms cubic-bezier(.3,.7,.4,1),
                  opacity 260ms ease,
                  transform 260ms cubic-bezier(.2,.8,.2,1),
                  filter 260ms ease;
    }

    .thumb {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    .thumb .num {
      width: 16px;
      flex-shrink: 0;
      font-size: 11px;
      font-weight: 500;
      text-align: right;
      color: rgba(255,255,255,0.55);
      padding-top: 2px;
      font-variant-numeric: tabular-nums;
    }
    .thumb .frame {
      position: relative;
      flex: 1;
      min-width: 0;
      aspect-ratio: var(--deck-aspect);
      background: #fff;
      border-radius: 4px;
      outline: 2px solid transparent;
      outline-offset: 0;
      overflow: hidden;
      transition: outline-color 120ms ease;
    }
    .thumb:hover .frame { outline-color: rgba(255,255,255,0.25); }
    .thumb { outline: none; }
    .thumb:focus-visible .frame { outline-color: rgba(255,255,255,0.5); }
    .thumb[data-current] .num { color: #fff; }
    .thumb[data-current] .frame { outline-color: #D97757; }
    .thumb[data-dragging] { opacity: 0.35; }
    .thumb::before {
      content: '';
      position: absolute;
      left: 24px;
      right: 0;
      height: 3px;
      border-radius: 2px;
      background: #D97757;
      opacity: 0;
      pointer-events: none;
    }
    .thumb[data-drop="before"]::before { top: -8px; opacity: 1; }
    .thumb[data-drop="after"]::before { bottom: -8px; opacity: 1; }
    .thumb[data-skip] .frame { opacity: 0.35; }
    .thumb[data-skip] .frame::after {
      content: 'Skipped';
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.45);
      color: #fff;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.04em;
    }

    .ctxmenu {
      position: fixed;
      min-width: 150px;
      padding: 4px;
      background: #242424;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 7px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.45);
      z-index: 2147483100;
      display: none;
      font-size: 12px;
    }
    .ctxmenu[data-open] { display: block; }
    .ctxmenu button {
      display: block;
      width: 100%;
      appearance: none;
      border: 0;
      background: transparent;
      color: #e8e8e8;
      font: inherit;
      text-align: left;
      padding: 6px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    .ctxmenu button:hover:not(:disabled) { background: rgba(255,255,255,0.08); }
    .ctxmenu button:disabled { opacity: 0.35; cursor: default; }
    .ctxmenu hr {
      border: 0;
      border-top: 1px solid rgba(255,255,255,0.1);
      margin: 4px 2px;
    }

    .rail-resize {
      position: fixed;
      left: calc(var(--deck-rail-w, 188px) - 3px);
      top: 0;
      bottom: 0;
      width: 6px;
      cursor: col-resize;
      z-index: 2147482600;
      touch-action: none;
    }
    .rail-resize:hover,
    .rail-resize[data-dragging] { background: rgba(255,255,255,0.12); }
    :host([no-rail]) .rail-resize,
    :host([noscale]) .rail-resize,
    .rail[data-presenting] + .rail-resize,
    .rail[data-user-hidden] + .rail-resize { display: none; }

    /* Delete-confirm popup — matches the SPA's ConfirmDialog layout
       (title + message body, depressed footer with Cancel / Delete). */
    .confirm-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      z-index: 2147483200;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .confirm-backdrop[data-open] { display: flex; }
    .confirm {
      width: 320px;
      max-width: calc(100vw - 32px);
      background: #2a2a2a;
      color: #e8e8e8;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.5);
      overflow: hidden;
      font-family: inherit;
      animation: deck-confirm-in 0.18s ease;
    }
    @keyframes deck-confirm-in {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    .confirm .body { padding: 20px 20px 16px; }
    .confirm .title { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
    .confirm .msg { font-size: 13px; line-height: 1.5; color: rgba(255,255,255,0.65); }
    .confirm .footer {
      padding: 14px 20px;
      background: #1f1f1f;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .confirm button {
      appearance: none;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
    }
    .confirm .cancel {
      background: transparent;
      border: 0;
      color: rgba(255,255,255,0.8);
    }
    .confirm .cancel:hover { background: rgba(255,255,255,0.08); }
    .confirm .danger {
      background: #c96442;
      border: 1px solid rgba(0,0,0,0.15);
      color: #fff;
      box-shadow: 0 1px 3px rgba(166,50,68,0.3), 0 2px 6px rgba(166,50,68,0.18);
    }
    .confirm .danger:hover { background: #b5563a; }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that connectedCallback injects
       into <head> (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      /* :last-child alone isn't enough once data-deck-skip hides the
         trailing slide(s) — the last *visible* slide still carries
         break-after:page and prints a blank sheet. _markLastVisible()
         maintains data-deck-last-visible on the last non-skipped slide. */
      ::slotted(*:last-child),
      ::slotted([data-deck-last-visible]) {
        break-after: auto;
        page-break-after: auto;
      }
      ::slotted([data-deck-skip]) { display: none !important; }
      .overlay, .rail, .rail-resize, .ctxmenu, .confirm-backdrop { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale', 'no-rail'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._menuIndex = -1;
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTap = this._onTap.bind(this);
      this._onMessage = this._onMessage.bind(this);
      // Capture-phase close so a click anywhere dismisses the menu, but
      // ignore clicks that land inside the menu itself — otherwise the
      // capture handler runs before the menu's own (bubble) handler and
      // clears _menuIndex out from under it.
      this._onDocClick = e => {
        if (this._menu && e.composedPath && e.composedPath().includes(this._menu)) return;
        this._closeMenu();
      };
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      // Presenter-view popup loads deckUrl?_snthumb=...#N for its prev/cur/
      // next thumbnails — the rail has no business rendering inside those
      // (wrong scale, and it offsets the stage so the thumb shows a gutter).
      if (/[?&]_snthumb=/.test(location.search)) this.setAttribute('no-rail', '');
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      window.addEventListener('message', this._onMessage);
      window.addEventListener('click', this._onDocClick, true);
      this.addEventListener('click', this._onTap);
      // Print lays every slide out as its own page, so [data-deck-active]-
      // gated entrance styles need the attribute on every slide (not just
      // the current one) or their content prints at the hidden base style.
      // The transient freeze style lands BEFORE the attributes so any
      // attribute-keyed transition fires at 0s (changing transition-
      // duration after a transition has started doesn't affect it).
      this._onBeforePrint = () => {
        if (this._freezeStyle) this._freezeStyle.remove();
        this._freezeStyle = document.createElement('style');
        this._freezeStyle.textContent = '*,*::before,*::after{transition-duration:0s !important}';
        document.head.appendChild(this._freezeStyle);
        this._slides.forEach(s => s.setAttribute('data-deck-active', ''));
      };
      this._onAfterPrint = () => {
        this._applyIndex({
          showOverlay: false,
          broadcast: false
        });
        if (this._freezeStyle) {
          this._freezeStyle.remove();
          this._freezeStyle = null;
        }
      };
      window.addEventListener('beforeprint', this._onBeforePrint);
      window.addEventListener('afterprint', this._onAfterPrint);
      // Initial collection + layout happens via slotchange, which fires on mount.
      this._enableRail();
      // Hold the stage hidden until webfonts are ready so the first visible
      // paint has the deck's real typography — the :not(:defined) guard in
      // the page HTML only covers custom-element upgrade, not font load.
      // Capped so a 404'd font URL can't blank the deck indefinitely.
      this.setAttribute('data-fonts-pending', '');
      const reveal = () => this.removeAttribute('data-fonts-pending');
      // rAF first: fonts.ready is a pre-resolved promise until layout has
      // resolved the slotted text's font-family and pushed a FontFace into
      // 'loading'. Reading it here in connectedCallback (parse-time) would
      // settle the race in a microtask before any font fetch starts.
      requestAnimationFrame(() => {
        Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise(r => setTimeout(r, 2000))]).then(reveal, reveal);
      });
    }
    _enableRail() {
      // Idempotent — older host builds still post __omelette_rail_enabled.
      // no-rail guard keeps the observers/stylesheet walk off the cheap path
      // for presenter-popup thumbnail iframes (up to 9 per view).
      if (this._railEnabled || this.hasAttribute('no-rail')) return;
      this._railEnabled = true;
      // Per-viewer preference — restored alongside rail width. Default on;
      // only a stored '0' (from the TweaksPanel toggle) hides it.
      this._railVisible = true;
      try {
        if (localStorage.getItem('deck-stage.railVisible') === '0') this._railVisible = false;
      } catch (e) {}
      // Live thumbnail updates: watch the light-DOM slides for content
      // edits and re-clone just the affected thumb(s), debounced. Ignore
      // the data-deck-* / data-screen-label / data-om-validate attributes
      // this component itself writes so nav doesn't trigger spurious
      // refreshes — except data-deck-skip, which now arrives from the host
      // re-render and is what updates the rail badge, print bookkeeping,
      // and deckSkipped re-broadcast.
      const OWN_ATTRS = /^data-(deck-(?!skip$)|screen-label$|om-validate$)/;
      this._liveDirty = new Set();
      this._liveObserver = new MutationObserver(records => {
        for (const r of records) {
          if (r.type === 'attributes' && OWN_ATTRS.test(r.attributeName || '')) continue;
          let n = r.target;
          while (n && n.parentElement !== this) n = n.parentElement;
          // Skip/unskip is handled below without re-cloning (the badge sits
          // on the thumb wrapper, not the clone) — don't mark the slide
          // dirty for an attr change whose only visible effect is the badge.
          if (n && this._slideSet && this._slideSet.has(n) && !(r.type === 'attributes' && r.attributeName === 'data-deck-skip')) {
            this._liveDirty.add(n);
          }
          // Host-driven skip toggle: sync the rail badge + print + presenter
          // skipped-list the way _toggleSkip used to do locally.
          if (r.type === 'attributes' && r.attributeName === 'data-deck-skip' && n && this._slideSet && this._slideSet.has(n)) {
            const i = this._slides.indexOf(n);
            if (this._thumbs && this._thumbs[i]) {
              if (n.hasAttribute('data-deck-skip')) this._thumbs[i].thumb.setAttribute('data-skip', '');else this._thumbs[i].thumb.removeAttribute('data-skip');
            }
            this._markLastVisible();
            try {
              window.postMessage({
                slideIndexChanged: this._index,
                deckTotal: this._slides.length,
                deckSkipped: this._skippedIndices()
              }, '*');
            } catch (e) {}
          }
        }
        if (this._liveDirty.size && !this._liveTimer) {
          this._liveTimer = setTimeout(() => {
            this._liveTimer = null;
            this._liveDirty.forEach(s => this._refreshThumb(s));
            this._liveDirty.clear();
          }, 200);
        }
      });
      this._liveObserver.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      // Lazy thumbnail materialization — clone the slide only when its
      // frame scrolls into (or near) the rail viewport. rootMargin gives
      // ~4 thumbs of pre-load so fast scrolling doesn't flash blanks.
      this._railObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting && e.target.__deckThumb) {
            this._materialize(e.target.__deckThumb);
          }
        });
      }, {
        root: this._rail,
        rootMargin: '400px 0px'
      });
      // Tweaks typically change CSS vars / attrs OUTSIDE <deck-stage>
      // (on <html>, <body>, a wrapper div, or a <style> tag), which
      // _liveObserver can't see. Re-snapshot author CSS (constructable
      // sheet is shared by reference, so one replaceSync updates every
      // thumb shadow root) and re-sync each thumb host's attrs + custom
      // properties. In-slide DOM mutations are _liveObserver's job.
      // Debounced so slider drags don't thrash.
      this._onTweakChange = () => {
        clearTimeout(this._tweakTimer);
        this._tweakTimer = setTimeout(() => {
          this._snapshotAuthorCss();
          // One getComputedStyle for the whole batch — each
          // getPropertyValue read below reuses the same computed style
          // as long as nothing invalidates layout between thumbs.
          const cs = getComputedStyle(this);
          (this._thumbs || []).forEach(t => {
            if (t.host) this._syncThumbHostAttrs(t.host, cs);
          });
        }, 120);
      };
      window.addEventListener('tweakchange', this._onTweakChange);
      this._snapshotAuthorCss();
      // Build the rail now that it's enabled — slotchange already fired,
      // so _renderRail's early-return skipped the initial build.
      this._syncRailHidden();
      this._renderRail();
      this._fit();
    }

    /** Snapshot document stylesheets into a constructable sheet that each
     *  thumbnail's nested shadow root adopts — so author CSS styles the
     *  cloned slide content without touching this component's chrome.
     *  Cross-origin sheets throw on .cssRules — skip them. Re-callable:
     *  the existing constructable sheet is reused via replaceSync so every
     *  already-adopted shadow root picks up the fresh CSS without re-adopt. */
    _snapshotAuthorCss() {
      // :root in an adopted sheet inside a shadow root matches nothing
      // (only the document root qualifies), so author rules like
      // `:root[data-voice="modern"] .serif` never reach the clones.
      // Rewrite :root → :host and mirror <html>'s data-*/class/lang onto
      // each thumb host (see _syncThumbHostAttrs) so the same selectors
      // match inside the thumbnail's shadow tree.
      const authorCss = Array.from(document.styleSheets).map(sh => {
        try {
          return Array.from(sh.cssRules).map(r => r.cssText).join('\n');
        } catch (e) {
          return '';
        }
      }).join('\n')
      // The shadow host is featureless outside the functional :host(...)
      // form, so any compound on :root — [attr], .class, #id, :pseudo —
      // must become :host(<compound>) not :host<compound>. Same for the
      // html type selector (Tailwind class-strategy dark mode emits
      // html.dark; Pico uses html[data-theme]), which has nothing to
      // match inside the thumb's shadow tree.
      .replace(/:root((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)/g, ':host($1)').replace(/:root\b/g, ':host').replace(/(^|[\s,>~+(}])html((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)(?![-\w])/g, '$1:host($2)').replace(/(^|[\s,>~+(}])html(?![-\w])/g, '$1:host');
      // Every custom property the author references. _syncThumbHostAttrs
      // mirrors each one's *computed* value at <deck-stage> onto the
      // thumb host so the live value wins over the :host default above
      // regardless of which ancestor the tweak wrote to (<html>, <body>,
      // a wrapper div, or the deck-stage element itself all inherit
      // down to getComputedStyle(this)).
      this._authorVars = new Set(authorCss.match(/--[\w-]+/g) || []);
      try {
        if (!this._adoptedSheet) this._adoptedSheet = new CSSStyleSheet();
        this._adoptedSheet.replaceSync(authorCss);
      } catch (e) {
        this._adoptedSheet = null;
        this._authorCss = authorCss;
      }
    }
    _syncThumbHostAttrs(host, cs) {
      const de = document.documentElement;
      // setAttribute overwrites but can't delete — an attr removed from
      // <html> (toggleAttribute off, classList emptied) would linger on
      // the host and :host([data-*]) / :host(.foo) rules would keep
      // matching. Remove stale mirrored attrs first; iterate backward
      // because removeAttribute mutates the live NamedNodeMap.
      for (let i = host.attributes.length - 1; i >= 0; i--) {
        const n = host.attributes[i].name;
        if ((n.startsWith('data-') || n === 'class' || n === 'lang') && !de.hasAttribute(n)) {
          host.removeAttribute(n);
        }
      }
      for (const a of de.attributes) {
        if (a.name.startsWith('data-') || a.name === 'class' || a.name === 'lang') {
          host.setAttribute(a.name, a.value);
        }
      }
      // The :root→:host rewrite in _snapshotAuthorCss pins each custom
      // property to its stylesheet default on the thumb host, shadowing
      // the live value that would otherwise inherit. Tweaks can write the
      // live value on any ancestor — <html>, <body>, a wrapper div, the
      // deck-stage element — so read it as the *computed* value at
      // <deck-stage> (which sees the whole inheritance chain) rather than
      // trying to guess which element the author wrote to. Inline on the
      // host beats the :host{} rule. remove-stale covers vars dropped
      // from the stylesheet between snapshots.
      const vars = this._authorVars || new Set();
      for (let i = host.style.length - 1; i >= 0; i--) {
        const p = host.style[i];
        if (p.startsWith('--') && !vars.has(p)) host.style.removeProperty(p);
      }
      const live = cs || getComputedStyle(this);
      vars.forEach(p => {
        const v = live.getPropertyValue(p);
        if (v) host.style.setProperty(p, v.trim());else host.style.removeProperty(p);
      });
    }
    disconnectedCallback() {
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      window.removeEventListener('message', this._onMessage);
      window.removeEventListener('click', this._onDocClick, true);
      window.removeEventListener('beforeprint', this._onBeforePrint);
      window.removeEventListener('afterprint', this._onAfterPrint);
      if (this._freezeStyle) {
        this._freezeStyle.remove();
        this._freezeStyle = null;
      }
      this.removeEventListener('click', this._onTap);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
      if (this._liveTimer) clearTimeout(this._liveTimer);
      if (this._tweakTimer) clearTimeout(this._tweakTimer);
      if (this._railAnimTimer) clearTimeout(this._railAnimTimer);
      if (this._scaleRaf) cancelAnimationFrame(this._scaleRaf);
      if (this._liveObserver) this._liveObserver.disconnect();
      if (this._railObserver) this._railObserver.disconnect();
      if (this._onTweakChange) window.removeEventListener('tweakchange', this._onTweakChange);
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        if (this._rail) {
          this._rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
        }
        this._fit();
        this._scaleThumbs();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-omelette-chrome', '');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._advance(-1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._advance(1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));

      // Thumbnail rail + context menu. Thumbnails are populated in
      // _renderRail() after _collectSlides().
      const rail = document.createElement('div');
      rail.className = 'rail export-hidden';
      rail.setAttribute('data-omelette-chrome', '');
      // Edit mode hooks wheel to pan the canvas; this opts the rail's own
      // scrollview out so thumbnails stay scrollable while editing.
      rail.setAttribute('data-dc-wheel-passthru', '');
      rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
      // Edge auto-scroll while dragging a thumb near the rail's top/bottom
      // so off-screen drop targets are reachable. Native dragover fires
      // continuously while the pointer is stationary, so a per-event nudge
      // (ramped by edge proximity) is enough — no rAF loop needed.
      rail.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        const r = rail.getBoundingClientRect();
        const EDGE = 40;
        const dt = e.clientY - r.top;
        const db = r.bottom - e.clientY;
        if (dt < EDGE) rail.scrollTop -= Math.ceil((EDGE - dt) / 3);else if (db < EDGE) rail.scrollTop += Math.ceil((EDGE - db) / 3);
      });
      const menu = document.createElement('div');
      menu.className = 'ctxmenu export-hidden';
      menu.setAttribute('data-omelette-chrome', '');
      menu.innerHTML = `
        <button type="button" data-act="skip">Skip slide</button>
        <button type="button" data-act="up">Move up</button>
        <button type="button" data-act="down">Move down</button>
        <button type="button" data-act="duplicate">Duplicate slide</button>
        <hr>
        <button type="button" data-act="delete">Delete slide</button>
      `;
      menu.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        const i = this._menuIndex;
        this._closeMenu();
        if (act === 'skip') this._toggleSkip(i);else if (act === 'up') this._moveSlide(i, i - 1);else if (act === 'down') this._moveSlide(i, i + 1);else if (act === 'duplicate') this._duplicateSlide(i);else if (act === 'delete') this._openConfirm(i);
      });
      menu.addEventListener('contextmenu', e => e.preventDefault());

      // Rail resize handle — drag to set --deck-rail-w, persisted to
      // localStorage so the width survives reloads.
      const resize = document.createElement('div');
      resize.className = 'rail-resize export-hidden';
      resize.setAttribute('data-omelette-chrome', '');
      resize.addEventListener('pointerdown', e => {
        e.preventDefault();
        resize.setPointerCapture(e.pointerId);
        resize.setAttribute('data-dragging', '');
        const move = ev => this._setRailWidth(ev.clientX);
        const up = () => {
          resize.removeEventListener('pointermove', move);
          resize.removeEventListener('pointerup', up);
          resize.removeEventListener('pointercancel', up);
          resize.removeAttribute('data-dragging');
          try {
            localStorage.setItem('deck-stage.railWidth', String(this._railPx));
          } catch (err) {}
        };
        resize.addEventListener('pointermove', move);
        resize.addEventListener('pointerup', up);
        resize.addEventListener('pointercancel', up);
      });

      // Delete-confirm dialog — mirrors the SPA's ConfirmDialog layout.
      const confirm = document.createElement('div');
      confirm.className = 'confirm-backdrop export-hidden';
      confirm.setAttribute('data-omelette-chrome', '');
      confirm.innerHTML = `
        <div class="confirm" role="dialog" aria-modal="true">
          <div class="body">
            <div class="title">Delete slide?</div>
            <div class="msg">This slide will be removed from the deck.</div>
          </div>
          <div class="footer">
            <button type="button" class="cancel">Cancel</button>
            <button type="button" class="danger">Delete</button>
          </div>
        </div>
      `;
      confirm.addEventListener('click', e => {
        if (e.target === confirm) this._closeConfirm();
      });
      confirm.querySelector('.cancel').addEventListener('click', () => this._closeConfirm());
      confirm.querySelector('.danger').addEventListener('click', () => {
        const i = this._confirmIndex;
        this._closeConfirm();
        this._deleteSlide(i);
      });
      this._root.append(style, rail, resize, stage, overlay, menu, confirm);
      this._canvas = canvas;
      this._stage = stage;
      this._slot = slot;
      this._overlay = overlay;
      this._rail = rail;
      this._resize = resize;
      this._menu = menu;
      this._confirm = confirm;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');

      // Restore persisted rail width.
      let rw = 188;
      try {
        const s = localStorage.getItem('deck-stage.railWidth');
        if (s) rw = parseInt(s, 10) || rw;
      } catch (err) {}
      this._setRailWidth(rw);
      this._syncRailHidden();
    }
    _setRailWidth(px) {
      const w = Math.max(120, Math.min(360, Math.round(px)));
      this._railPx = w;
      this.style.setProperty('--deck-rail-w', w + 'px');
      this._fit();
      // _scaleThumbs forces a sync layout (frame.offsetWidth) then writes
      // N transforms. During a resize drag this runs per-pointermove;
      // coalesce to one per frame.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. Inject/update a single <head> style tag so the print
     *  sheet matches the design size and Save-as-PDF yields one slide per
     *  page with no margins. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
        document.head.appendChild(tag);
      }
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } ' +
      // Jump authored animations/transitions to their end state so print
      // never captures mid-entrance — pairs with the beforeprint handler
      // in connectedCallback that sets data-deck-active on every slide.
      '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }
    _onSlotChange() {
      // Self-mutate path already reconciled synchronously and emitted
      // slidechange; skip the async slotchange it caused.
      if (this._squelchSlotChange) {
        this._squelchSlotChange = false;
        return;
      }
      // Primary lock-clear is the host's __deck_rail_ack; this clears on a
      // dropped ack so the rail can't stay dead.
      this._railLock = false;
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slideSet = new Set(this._slides);
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        slide.setAttribute('data-screen-label', `${pad2(n)} ${getSlideLabel(slide)}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._totalEl) this._totalEl.textContent = String(this._slides.length || 1);
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
      this._markLastVisible();
      this._renderRail();
    }

    /** Tag the last non-skipped slide so print CSS can drop its
     *  break-after (see the @media print comment above — :last-child
     *  alone matches a hidden skipped slide). */
    _markLastVisible() {
      let last = null;
      this._slides.forEach(s => {
        s.removeAttribute('data-deck-last-visible');
        if (!s.hasAttribute('data-deck-skip')) last = s;
      });
      if (last) last.setAttribute('data-deck-last-visible', '');
    }
    _loadNotes() {
      // Per-slide data-speaker-notes is authoritative when present (attrs
      // travel with the element on reorder/dup/delete); a slide without
      // the attr falls through to the legacy #speaker-notes JSON array
      // PER SLIDE so a single attr on a JSON-authored deck doesn't blank
      // the rest.
      const tag = document.getElementById('speaker-notes');
      let json = null;
      if (tag) try {
        const p = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(p)) json = p;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
      }
      this._notes = this._slides.map((s, i) => {
        const a = s.getAttribute('data-speaker-notes');
        return a !== null ? a : json && typeof json[i] === 'string' ? json[i] : '';
      });
    }
    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try {
        history.replaceState(null, '', '#' + (curr + 1));
      } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      if (this._countEl) this._countEl.textContent = String(curr + 1);
      // Follow-scroll on every navigation (init deep-link, keyboard, click,
      // tap, external goTo) — the only time we *don't* want the rail to
      // track current is after a rail-internal mutation, where _renderRail
      // has already restored the user's scroll position and yanking back to
      // current would undo it.
      this._syncRail(reason !== 'mutation');
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr,
            deckTotal: this._slides.length,
            deckSkipped: this._skippedIndices()
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay() {
      // Host posts __omelette_presenting while in fullscreen/tab presentation
      // mode — suppress the nav footer entirely (both hover and slide-change
      // flash) so the audience sees clean slides.
      if (!this._overlay || this._presenting) return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _railWidth() {
      // State-based, no offsetWidth: the first _fit() can run before the
      // rail has had layout on some load paths, and a 0 there paints the
      // slide full-width for one frame before the post-slotchange _fit()
      // corrects it.
      if (!this._railEnabled || !this._railVisible || this.hasAttribute('no-rail') || this.hasAttribute('noscale') || this._presenting || this._previewMode || NARROW_MQ.matches) return 0;
      return this._railPx || 0;
    }
    _fit() {
      if (!this._canvas) return;
      const stage = this._canvas.parentElement;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        if (stage) stage.style.left = '0';
        if (this._overlay) this._overlay.style.marginLeft = '0';
        return;
      }
      const rw = this._railWidth();
      if (stage) stage.style.left = rw + 'px';
      // Overlay is centred on the viewport via left:50% + translate(-50%);
      // marginLeft shifts the centre by rw/2 so it lands in the middle of
      // the [rw, innerWidth] stage region.
      if (this._overlay) this._overlay.style.marginLeft = rw / 2 + 'px';
      const vw = window.innerWidth - rw;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
      // Crossing the narrow-viewport breakpoint reveals the rail — rerun the
      // thumbnail scale the same way _setRailWidth does.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle.
      this._flashOverlay();
    }
    _onMessage(e) {
      const d = e.data;
      if (d && typeof d.__omelette_presenting === 'boolean') {
        this._presenting = d.__omelette_presenting;
        if (this._presenting && this._overlay) {
          this._overlay.removeAttribute('data-visible');
          if (this._hideTimer) clearTimeout(this._hideTimer);
        }
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host's Preview segment (ViewerMode='none'): the rail's drag-reorder /
      // right-click skip-delete affordances are editing chrome, so hide it
      // while the user is just looking at the deck. Same hard-hide path as
      // presenting; independent of the user's _railVisible preference so
      // returning to Edit restores whatever they had.
      if (d && typeof d.__omelette_preview_mode === 'boolean') {
        if (d.__omelette_preview_mode === this._previewMode) return;
        this._previewMode = d.__omelette_preview_mode;
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host has processed a dc-op; rail input is safe again. Not tied to
      // slotchange — setAttr and refusal don't fire one. On refusal,
      // revert the optimistic _index/hash adjustment so the next nav
      // starts from what's actually on screen.
      if (d && d.__dc_op_ack) {
        this._railLock = false;
        if (d.applied === false && this._indexBeforeEmit != null) {
          this._index = this._indexBeforeEmit;
          try {
            history.replaceState(null, '', '#' + (this._index + 1));
          } catch (e) {}
        }
        this._indexBeforeEmit = null;
      }
      // Per-viewer show/hide, driven by the TweaksPanel's auto-injected
      // "Thumbnail rail" toggle (or any author script). Independent of
      // whether the Tweaks panel itself is open — closing the panel
      // doesn't change rail visibility. Persists alongside rail width.
      if (d && d.type === '__deck_rail_visible' && typeof d.on === 'boolean') {
        if (d.on === this._railVisible) return;
        this._railVisible = d.on;
        try {
          localStorage.setItem('deck-stage.railVisible', d.on ? '1' : '0');
        } catch (e) {}
        // Arm the transition, commit it, then flip state — otherwise the
        // browser coalesces both writes and nothing animates on show.
        this.setAttribute('data-rail-anim', '');
        void (this._rail && this._rail.offsetHeight);
        this._syncRailHidden();
        this._fit();
        this._scaleThumbs();
        clearTimeout(this._railAnimTimer);
        this._railAnimTimer = setTimeout(() => this.removeAttribute('data-rail-anim'), 220);
      }
      if (d && d.type === '__omelette_rail_enabled') this._enableRail();
    }
    _syncRailHidden() {
      if (!this._rail) return;
      // data-presenting is the hard hide (display:none) for flag-off,
      // presentation mode, and the host's Preview segment — instant, no
      // transition. data-user-hidden is the soft hide (translateX(-100%))
      // for the viewer's rail toggle, so show/hide slides under
      // :host([data-rail-anim]).
      const hard = !this._railEnabled || this._presenting || this._previewMode;
      if (hard) this._rail.setAttribute('data-presenting', '');else this._rail.removeAttribute('data-presenting');
      if (!this._railVisible) this._rail.setAttribute('data-user-hidden', '');else this._rail.removeAttribute('data-user-hidden');
      // translateX hide leaves thumbs (tabIndex=0) in the tab order —
      // inert keeps them unfocusable while the rail is off-screen.
      this._rail.inert = hard || !this._railVisible;
    }
    _onTap(e) {
      // Touch-only — keyboard + the overlay toolbar cover nav on desktop.
      if (FINE_POINTER_MQ.matches) return;
      // Only taps that land on the stage (slide content or letterbox); the
      // overlay / rail / menus are siblings with their own click handlers.
      const path = e.composedPath();
      if (!this._stage || !path.includes(this._stage)) return;
      // Let interactive slide content keep the tap. composedPath (not
      // e.target.closest) so we see through open shadow roots — a <button>
      // inside a slide-authored custom element retargets e.target to the
      // host but still appears in the composed path.
      if (e.defaultPrevented) return;
      for (const n of path) {
        if (n === this._stage) break;
        if (n.matches && n.matches(INTERACTIVE_SEL)) return;
      }
      e.preventDefault();
      const rw = this._railWidth();
      const mid = rw + (window.innerWidth - rw) / 2;
      this._advance(e.clientX < mid ? -1 : 1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing.
      const t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      // Confirm dialog swallows nav keys while open; Escape cancels. Enter
      // is left to the focused button's native activation so Tab→Cancel
      // →Enter activates Cancel, not the window-level confirm path.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        if (e.key === 'Escape') {
          this._closeConfirm();
          e.preventDefault();
        }
        return;
      }
      if (e.key === 'Escape' && this._menu && this._menu.hasAttribute('data-open')) {
        this._closeMenu();
        e.preventDefault();
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._advance(-1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    /** Step forward/back skipping any slide marked data-deck-skip. Falls
     *  back to _go's clamp-at-ends behaviour (flash overlay) when there's
     *  nothing further in that direction. */
    _advance(dir, reason) {
      if (!this._slides.length) return;
      let i = this._index + dir;
      while (i >= 0 && i < this._slides.length && this._slides[i].hasAttribute('data-deck-skip')) {
        i += dir;
      }
      if (i < 0 || i >= this._slides.length) {
        this._flashOverlay();
        return;
      }
      this._go(i, reason);
    }

    // ── Thumbnail rail ────────────────────────────────────────────────────
    //
    // Thumbs are keyed by slide element and reused across _renderRail()
    // calls, so a reorder/delete is an O(changed) DOM shuffle instead of an
    // O(N) teardown-and-re-clone. Each thumb starts as a lightweight shell
    // (num + empty frame); the clone is materialized lazily by an
    // IntersectionObserver when the frame scrolls into (or near) view, so
    // only visible-ish slides pay the clone + image-decode cost.

    _renderRail() {
      if (!this._rail || !this._railEnabled) {
        this._thumbs = [];
        return;
      }
      // FLIP: record each *materialized* thumb's top before the reconcile.
      // Off-screen (non-materialized) thumbs don't need the animation and
      // skipping their getBoundingClientRect saves a forced layout per
      // off-screen thumb on large decks.
      const prevTops = new Map();
      (this._thumbs || []).forEach(({
        thumb,
        slide,
        host
      }) => {
        if (host) prevTops.set(slide, thumb.getBoundingClientRect().top);
      });
      const st = this._rail.scrollTop;

      // Reconcile: reuse thumbs that already exist for a slide, create
      // shells for new slides, drop thumbs for removed slides.
      const bySlide = new Map();
      (this._thumbs || []).forEach(t => bySlide.set(t.slide, t));
      const next = [];
      this._slides.forEach(slide => {
        let t = bySlide.get(slide);
        if (t) bySlide.delete(slide);else t = this._makeThumb(slide);
        next.push(t);
      });
      // Orphans — slides removed since last render.
      bySlide.forEach(t => {
        if (this._railObserver) this._railObserver.unobserve(t.frame);
        t.thumb.remove();
      });
      // Put thumbs into document order to match _slides. insertBefore on
      // an already-correctly-placed node is a no-op, so this is cheap
      // when nothing moved.
      next.forEach((t, i) => {
        const want = t.thumb;
        const at = this._rail.children[i];
        if (at !== want) this._rail.insertBefore(want, at || null);
        t.i = i;
        t.num.textContent = String(i + 1);
        if (t.slide.hasAttribute('data-deck-skip')) t.thumb.setAttribute('data-skip', '');else t.thumb.removeAttribute('data-skip');
      });
      this._thumbs = next;
      this._rail.scrollTop = st;
      if (prevTops.size) {
        const moved = [];
        this._thumbs.forEach(({
          thumb,
          slide
        }) => {
          const old = prevTops.get(slide);
          if (old == null) return;
          const dy = old - thumb.getBoundingClientRect().top;
          if (Math.abs(dy) < 1) return;
          thumb.style.transition = 'none';
          thumb.style.transform = `translateY(${dy}px)`;
          moved.push(thumb);
        });
        if (moved.length) {
          // Commit the inverted positions before flipping the transition
          // on — otherwise the browser coalesces both style writes and
          // nothing animates.
          void this._rail.offsetHeight;
          moved.forEach(t => {
            t.style.transition = 'transform 180ms cubic-bezier(.2,.7,.3,1)';
            t.style.transform = '';
          });
          setTimeout(() => moved.forEach(t => {
            t.style.transition = '';
          }), 220);
        }
      }
      requestAnimationFrame(() => this._scaleThumbs());
      this._syncRail(false);
    }

    /** Create a lightweight thumb shell for one slide. The clone is
     *  materialized later by the IntersectionObserver. Event handlers
     *  look up the thumb's *current* index (via _thumbs.indexOf) so the
     *  same element can be reused across reorders. */
    _makeThumb(slide) {
      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      thumb.tabIndex = 0;
      const num = document.createElement('div');
      num.className = 'num';
      const frame = document.createElement('div');
      frame.className = 'frame';
      thumb.append(num, frame);
      const entry = {
        thumb,
        num,
        frame,
        slide,
        clone: null,
        host: null,
        i: -1
      };
      // entry.i is refreshed on every _renderRail reconcile pass, so
      // handlers read the thumb's current position without an O(N) scan.
      const idx = () => entry.i;
      thumb.addEventListener('click', () => this._go(idx(), 'click'));
      // ↑/↓ step through the rail when a thumb has focus. _go clamps at the
      // ends and _applyIndex→_syncRail scrolls the new current thumb into
      // view; we move focus to it (preventScroll — _syncRail already
      // scrolled) so a held key walks the whole list. stopPropagation keeps
      // this out of the window-level _onKey nav handler.
      thumb.addEventListener('keydown', e => {
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        e.stopPropagation();
        this._go(idx() + (e.key === 'ArrowDown' ? 1 : -1), 'keyboard');
        const cur = this._thumbs && this._thumbs[this._index];
        if (cur) cur.thumb.focus({
          preventScroll: true
        });
      });
      thumb.addEventListener('contextmenu', e => {
        e.preventDefault();
        this._openMenu(idx(), e.clientX, e.clientY);
      });
      thumb.draggable = true;
      thumb.addEventListener('dragstart', e => {
        this._dragFrom = idx();
        thumb.setAttribute('data-dragging', '');
        e.dataTransfer.effectAllowed = 'move';
        try {
          e.dataTransfer.setData('text/plain', String(this._dragFrom));
        } catch (err) {}
      });
      thumb.addEventListener('dragend', () => {
        thumb.removeAttribute('data-dragging');
        this._clearDrop();
        this._dragFrom = null;
      });
      thumb.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const r = thumb.getBoundingClientRect();
        this._setDrop(idx(), e.clientY < r.top + r.height / 2 ? 'before' : 'after');
      });
      thumb.addEventListener('drop', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        const i = idx();
        const r = thumb.getBoundingClientRect();
        let to = e.clientY >= r.top + r.height / 2 ? i + 1 : i;
        if (this._dragFrom < to) to--;
        const from = this._dragFrom;
        this._clearDrop();
        this._dragFrom = null;
        if (to !== from) this._moveSlide(from, to);
      });
      if (this._railObserver) this._railObserver.observe(frame);
      frame.__deckThumb = entry;
      return entry;
    }

    /** Lazily build the clone for a thumb that has scrolled into view. */
    _materialize(entry) {
      if (entry.host) return;
      const dw = this.designWidth,
        dh = this.designHeight;
      let clone = entry.slide.cloneNode(true);
      clone.removeAttribute('id');
      clone.removeAttribute('data-deck-active');
      clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      // Neuter heavy media; replace <video> with its poster so the box
      // keeps a visual. <iframe>/<audio> become empty placeholders.
      clone.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      clone.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      // Images: defer decode and let the browser pick the smallest
      // srcset candidate for the ~140px thumb. Same-URL clones reuse the
      // slide's decoded bitmap (URL-keyed cache), so the remaining cost
      // is paint/composite — lazy+async keeps that off the main thread.
      clone.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Custom elements inside the slide would have their
      // connectedCallback fire when the clone is appended. Replace them
      // with inert boxes so a component-heavy deck doesn't run N copies
      // of each component's mount logic in the rail. Children are
      // preserved so layout-wrapper elements (<my-column><h2>…</h2>)
      // still show their authored content; the querySelectorAll NodeList
      // is static, so nested custom elements in the moved subtree are
      // still visited on later iterations.
      const neuter = el => {
        const box = document.createElement('div');
        box.style.cssText = (el.getAttribute('style') || '') + ';background:rgba(0,0,0,0.06);border:1px dashed rgba(0,0,0,0.15);';
        box.className = el.className;
        // Preserve theming/i18n hooks so [data-*] / :lang() / [dir]
        // descendant selectors still match the neutered root.
        for (const a of el.attributes) {
          const n = a.name;
          if (n.startsWith('data-') || n.startsWith('aria-') || n === 'lang' || n === 'dir' || n === 'role' || n === 'title') {
            box.setAttribute(n, a.value);
          }
        }
        while (el.firstChild) box.appendChild(el.firstChild);
        return box;
      };
      // querySelectorAll('*') returns descendants only — a custom-element
      // slide root (<my-slide>…</my-slide>) would slip through and upgrade
      // on append. Swap the root first.
      if (clone.tagName.includes('-')) clone = neuter(clone);
      clone.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(neuter(el));
      });
      clone.style.cssText += ';position:absolute;top:0;left:0;transform-origin:0 0;' + 'pointer-events:none;width:' + dw + 'px;height:' + dh + 'px;' + 'box-sizing:border-box;overflow:hidden;visibility:visible;opacity:1;';
      const host = document.createElement('div');
      host.style.cssText = 'position:absolute;inset:0;';
      this._syncThumbHostAttrs(host);
      const sr = host.attachShadow({
        mode: 'open'
      });
      if (this._adoptedSheet) sr.adoptedStyleSheets = [this._adoptedSheet];else {
        const st = document.createElement('style');
        st.textContent = this._authorCss || '';
        sr.appendChild(st);
      }
      sr.appendChild(clone);
      entry.frame.appendChild(host);
      entry.host = host;
      entry.clone = clone;
      if (this._thumbScale) clone.style.transform = 'scale(' + this._thumbScale + ')';
      // Once materialized the IO callback is a no-op early-return —
      // unobserve so scroll doesn't keep firing it.
      if (this._railObserver) this._railObserver.unobserve(entry.frame);
    }

    /** Re-clone a single thumb (live-update path). No-op if the thumb
     *  hasn't been materialized yet — it'll pick up current content when
     *  it scrolls into view. */
    _refreshThumb(slide) {
      const entry = (this._thumbs || []).find(t => t.slide === slide);
      if (!entry || !entry.host) return;
      entry.host.remove();
      entry.host = entry.clone = null;
      this._materialize(entry);
    }
    _scaleThumbs() {
      if (!this._thumbs || !this._thumbs.length) return;
      // Every frame is the same width; if it reads 0 the rail is
      // display:none (noscale / no-rail / presenting / print) — leave the
      // clones as-is and re-run when the rail is revealed.
      const fw = this._thumbs[0].frame.offsetWidth;
      if (!fw) return;
      this._thumbScale = fw / this.designWidth;
      this._thumbs.forEach(({
        clone
      }) => {
        if (clone) clone.style.transform = 'scale(' + this._thumbScale + ')';
      });
    }
    _setDrop(i, where) {
      // dragover fires at pointer-event rate; touch only the previous
      // and new target rather than sweeping all N thumbs.
      const t = this._thumbs && this._thumbs[i];
      if (this._dropOn && this._dropOn !== t) {
        this._dropOn.thumb.removeAttribute('data-drop');
      }
      if (t) t.thumb.setAttribute('data-drop', where);
      this._dropOn = t || null;
    }
    _clearDrop() {
      if (this._dropOn) this._dropOn.thumb.removeAttribute('data-drop');
      this._dropOn = null;
    }
    _syncRail(follow) {
      if (!this._thumbs) return;
      this._thumbs.forEach(({
        thumb
      }, i) => {
        if (i === this._index) {
          thumb.setAttribute('data-current', '');
          if (follow && typeof thumb.scrollIntoView === 'function') {
            thumb.scrollIntoView({
              block: 'nearest'
            });
          }
        } else {
          thumb.removeAttribute('data-current');
        }
      });
    }
    _openMenu(i, x, y) {
      if (!this._menu) return;
      this._menuIndex = i;
      const slide = this._slides[i];
      const skip = slide && slide.hasAttribute('data-deck-skip');
      this._menu.querySelector('[data-act="skip"]').textContent = skip ? 'Unskip slide' : 'Skip slide';
      this._menu.querySelector('[data-act="up"]').disabled = i <= 0;
      this._menu.querySelector('[data-act="down"]').disabled = i >= this._slides.length - 1;
      this._menu.querySelector('[data-act="delete"]').disabled = this._slides.length <= 1;
      // Place, then clamp to viewport after it's measurable.
      this._menu.style.left = x + 'px';
      this._menu.style.top = y + 'px';
      this._menu.setAttribute('data-open', '');
      const r = this._menu.getBoundingClientRect();
      const nx = Math.min(x, window.innerWidth - r.width - 4);
      const ny = Math.min(y, window.innerHeight - r.height - 4);
      this._menu.style.left = Math.max(4, nx) + 'px';
      this._menu.style.top = Math.max(4, ny) + 'px';
    }
    _closeMenu() {
      if (this._menu) this._menu.removeAttribute('data-open');
      this._menuIndex = -1;
    }
    _openConfirm(i) {
      if (!this._confirm) return;
      this._confirmIndex = i;
      this._confirm.querySelector('.title').textContent = 'Delete slide ' + (i + 1) + '?';
      this._confirm.setAttribute('data-open', '');
      const btn = this._confirm.querySelector('.danger');
      if (btn && btn.focus) btn.focus();
    }
    _closeConfirm() {
      if (this._confirm) this._confirm.removeAttribute('data-open');
      this._confirmIndex = -1;
    }

    /** Rail mutations. When a dc-runtime is present (`window.__dcUpdate`)
     *  the host owns the light DOM — handlers emit a dc-op only and the
     *  host applies it (to the editor's model or to the source file) and
     *  re-renders via dc-runtime; slotchange catches the rail up.
     *  Structural ops lock rail input until the host acks so a rapid second
     *  click can't address a stale index; setAttr/removeAttr respect the
     *  lock but don't set it (indices unchanged; the host serializes).
     *  `newIndex` is written to location.hash so slotchange's
     *  _restoreIndex lands on the right slide.
     *
     *  With NO dc-runtime (a raw .html deck), there's no re-render path,
     *  so handlers self-mutate locally for an instant update and emit
     *  `emitOnly: false`; the host persists to disk without
     *  re-rendering over the already-mutated DOM.
     *
     *  See docs/dc-ops.md for the contract. */
    _emitDcOp(op, slide, lock, newIndex) {
      // Slide index (template/script/style filtered — same as
      // _collectSlides). deck-stage is a filtered-index dc-op emitter;
      // the host resolves against findDeckStage().slideTids. Callers
      // already pass `to` as a slide index.
      op.at = this._slides.indexOf(slide);
      op.witness = {
        childCount: this._slides.length
      };
      // dc-runtime wraps an <x-import>-mounted component in a
      // <div class="sc-host-x" data-dc-tpl="N"> host — the stamp is on the
      // WRAPPER, not this element. closest() finds it (or this element's
      // own stamp when directly templated).
      const host = this.closest('[data-dc-tpl]');
      const tid = host && host.getAttribute('data-dc-tpl');
      op.mount = {
        tid: tid !== null ? parseInt(tid, 10) : null,
        tag: 'deck-stage'
      };
      op.emitOnly = !!window.__dcUpdate;
      if (op.emitOnly) {
        if (lock) this._railLock = true;
        if (newIndex != null && newIndex !== this._index) {
          this._indexBeforeEmit = this._index;
          this._index = newIndex;
          try {
            history.replaceState(null, '', '#' + (newIndex + 1));
          } catch (e) {}
        }
      }
      this.dispatchEvent(new CustomEvent('dc-op', {
        detail: op,
        bubbles: true,
        composed: true
      }));
      return op.emitOnly;
    }
    _deleteSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide || this._slides.length <= 1) return;
      const cur = this._index;
      const ni = i < cur || i === cur && i === this._slides.length - 1 ? cur - 1 : cur;
      if (this._emitDcOp({
        op: 'remove'
      }, slide, true, ni)) return;
      this._index = ni;
      this._squelchSlotChange = true;
      slide.remove();
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _duplicateSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      if (this._emitDcOp({
        op: 'duplicate'
      }, slide, true, i + 1)) return;
      const copy = slide.cloneNode(true);
      copy.removeAttribute('id');
      copy.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      this._index = i + 1;
      this._squelchSlotChange = true;
      this.insertBefore(copy, slide.nextSibling);
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _toggleSkip(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      const on = !slide.hasAttribute('data-deck-skip');
      if (this._emitDcOp(on ? {
        op: 'setAttr',
        attr: 'data-deck-skip',
        value: ''
      } : {
        op: 'removeAttr',
        attr: 'data-deck-skip'
      }, slide, false)) return;
      if (on) slide.setAttribute('data-deck-skip', '');else slide.removeAttribute('data-deck-skip');
    }
    _skippedIndices() {
      const out = [];
      for (let i = 0; i < this._slides.length; i++) {
        if (this._slides[i].hasAttribute('data-deck-skip')) out.push(i);
      }
      return out;
    }
    _moveSlide(i, j) {
      if (this._railLock || j < 0 || j >= this._slides.length || j === i) return;
      const cur = this._index;
      const ni = cur === i ? j : i < cur && j >= cur ? cur - 1 : i > cur && j <= cur ? cur + 1 : cur;
      const slide = this._slides[i];
      if (this._emitDcOp({
        op: 'move',
        to: j
      }, slide, true, ni)) return;
      const ref = j < i ? this._slides[j] : this._slides[j].nextSibling;
      this._index = ni;
      this._squelchSlotChange = true;
      this.insertBefore(slide, ref);
      this._collectSlides();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'mutation'
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._advance(1, 'api');
    }
    prev() {
      this._advance(-1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "presentation/deck-stage.js", error: String((e && e.message) || e) }); }

// site/chrome-i18n.jsx
try { (() => {
// Localized site chrome (header + footer) for the home page, EN/RU/AR.
// Reads strings from window.VT_I18N[lang]; wires the language switcher to anchors.
const {
  BrandMark: BrandMarkI18n
} = window.VioletDesignSystem_7273c4;
function SiteHeaderI18n({
  active,
  lang = 'en',
  variant = 'overlay'
}) {
  const T = window.VT_I18N[lang];
  const rtl = T.dir === 'rtl';
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener('scroll', on, {
      passive: true
    });
    return () => window.removeEventListener('scroll', on);
  }, []);
  const onHero = variant === 'overlay' && !scrolled;
  const langCode = lang.toUpperCase();
  const homeHref = window.VT_LANG_LINKS[langCode] || 'index.html';
  return /*#__PURE__*/React.createElement("nav", {
    dir: T.dir,
    style: {
      position: variant === 'overlay' ? scrolled ? 'fixed' : 'absolute' : 'sticky',
      top: 0,
      insetInline: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: scrolled ? '12px 40px' : '18px 40px',
      background: onHero ? 'transparent' : 'rgba(248,247,255,.78)',
      backdropFilter: onHero ? 'none' : 'blur(18px) saturate(1.4)',
      borderBottom: `1px solid ${onHero ? 'transparent' : 'var(--vt-color-divider)'}`,
      transition: 'all var(--vt-duration-slow) var(--vt-ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: homeHref,
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(BrandMarkI18n, {
    tone: onHero ? 'onDark' : 'light'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 30,
      alignItems: 'center'
    }
  }, T.nav.map(([label, href, key]) => {
    const isActive = active === key;
    const activeColor = onHero ? 'var(--vt-gold-300)' : 'var(--vt-color-accent-strong)';
    return /*#__PURE__*/React.createElement("a", {
      key: key,
      href: href,
      className: "vt-navlink",
      style: {
        position: 'relative',
        textDecoration: 'none',
        fontSize: 14,
        fontWeight: isActive ? 600 : 500,
        whiteSpace: 'nowrap',
        paddingBottom: 4,
        color: isActive ? activeColor : onHero ? 'rgba(255,255,255,.82)' : 'var(--vt-color-text)',
        transition: 'color var(--vt-duration-base) var(--vt-ease-standard)'
      }
    }, label, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        insetInline: 0,
        bottom: 0,
        height: 2,
        borderRadius: 2,
        background: activeColor,
        transform: `scaleX(${isActive ? 1 : 0})`,
        transformOrigin: rtl ? 'right' : 'left',
        transition: 'transform var(--vt-duration-base) var(--vt-ease-emphasized)'
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      fontSize: 12.5
    }
  }, ['EN', 'RU', 'AR'].map(l => {
    const isCur = l === langCode;
    return /*#__PURE__*/React.createElement("a", {
      key: l,
      href: window.VT_LANG_LINKS[l],
      style: {
        padding: '5px 9px',
        borderRadius: 6,
        cursor: 'pointer',
        userSelect: 'none',
        textDecoration: 'none',
        color: isCur ? onHero ? '#fff' : 'var(--vt-color-primary)' : onHero ? 'rgba(255,255,255,.6)' : 'var(--vt-color-text-muted)',
        background: isCur ? onHero ? 'rgba(255,255,255,.16)' : 'var(--vt-color-primary-subtle)' : 'transparent'
      }
    }, l);
  })));
}
function SiteFooterI18n({
  lang = 'en'
}) {
  const T = window.VT_I18N[lang];
  const col = ([h, items]) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: 'var(--vt-gold-300)',
      fontSize: 12,
      letterSpacing: '.12em',
      marginBottom: 16,
      fontWeight: 600
    }
  }, h), items.map(([label, href]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: href,
    style: {
      display: 'block',
      color: 'rgba(255,255,255,.66)',
      fontSize: 14,
      marginBottom: 10,
      textDecoration: 'none'
    }
  }, label)));
  return /*#__PURE__*/React.createElement("footer", {
    dir: T.dir,
    style: {
      background: 'var(--vt-ink-950)',
      color: '#fff',
      padding: '64px 40px 30px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      gap: 40,
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BrandMarkI18n, {
    tone: "onDark",
    size: "lg"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.6)',
      fontSize: 13,
      lineHeight: 1.7,
      marginTop: 14,
      maxWidth: 280
    }
  }, T.footer.tagline)), col(T.footer.explore), col(T.footer.brand), col(T.footer.support)), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(230,180,83,.2)',
      paddingTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
      color: 'rgba(255,255,255,.5)',
      fontSize: 13,
      flexWrap: 'wrap',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, T.footer.copy), /*#__PURE__*/React.createElement("span", null, T.footer.langs))));
}
Object.assign(window, {
  SiteHeaderI18n,
  SiteFooterI18n
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/chrome-i18n.jsx", error: String((e && e.message) || e) }); }

// site/chrome.jsx
try { (() => {
// Shared site chrome for the standalone multi-page reference site (EN / LTR).
// Real <a href> navigation between pages. Pass `active` = page key.
const {
  BrandMark
} = window.VioletDesignSystem_7273c4;
const VT_NAV = [['Home', 'index.html', 'home'], ['New Models', 'new-models.html', 'new'], ['Products', 'products.html', 'products'], ['Brand', 'brand.html', 'brand'], ['About', 'about.html', 'about'], ['Technologies', 'technologies.html', 'tech'], ['Contact', 'contact.html', 'contact']];
function SiteHeader({
  active,
  variant = 'light'
}) {
  // variant: 'light' (solid) or 'overlay' (transparent over a dark hero, frosts on scroll)
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener('scroll', on, {
      passive: true
    });
    return () => window.removeEventListener('scroll', on);
  }, []);
  const onHero = variant === 'overlay' && !scrolled;
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: variant === 'overlay' ? scrolled ? 'fixed' : 'absolute' : 'sticky',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: scrolled ? '12px 40px' : '18px 40px',
      background: onHero ? 'transparent' : 'rgba(248,247,255,.78)',
      backdropFilter: onHero ? 'none' : 'blur(18px) saturate(1.4)',
      borderBottom: `1px solid ${onHero ? 'transparent' : 'var(--vt-color-divider)'}`,
      transition: 'all var(--vt-duration-slow) var(--vt-ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(BrandMark, {
    tone: onHero ? 'onDark' : 'light'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 30,
      alignItems: 'center'
    }
  }, VT_NAV.map(([label, href, key]) => {
    const isActive = active === key;
    const activeColor = onHero ? 'var(--vt-gold-300)' : 'var(--vt-color-accent-strong)';
    return /*#__PURE__*/React.createElement("a", {
      key: key,
      href: href,
      className: "vt-navlink",
      style: {
        position: 'relative',
        textDecoration: 'none',
        fontSize: 14,
        fontWeight: isActive ? 600 : 500,
        whiteSpace: 'nowrap',
        paddingBottom: 4,
        color: isActive ? activeColor : onHero ? 'rgba(255,255,255,.82)' : 'var(--vt-color-text)',
        transition: 'color var(--vt-duration-base) var(--vt-ease-standard)'
      }
    }, label, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 2,
        borderRadius: 2,
        background: activeColor,
        transform: `scaleX(${isActive ? 1 : 0})`,
        transformOrigin: 'left',
        transition: 'transform var(--vt-duration-base) var(--vt-ease-emphasized)'
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      fontSize: 12.5
    }
  }, [['EN', 'index.html'], ['RU', 'index-ru.html'], ['AR', 'index-ar.html']].map(([l, href], i) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: href,
    style: {
      padding: '5px 9px',
      borderRadius: 6,
      cursor: 'pointer',
      userSelect: 'none',
      textDecoration: 'none',
      color: i === 0 ? onHero ? '#fff' : 'var(--vt-color-primary)' : onHero ? 'rgba(255,255,255,.6)' : 'var(--vt-color-text-muted)',
      background: i === 0 ? onHero ? 'rgba(255,255,255,.16)' : 'var(--vt-color-primary-subtle)' : 'transparent'
    }
  }, l))));
}
function SiteFooter() {
  const col = (h, items) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: 'var(--vt-gold-300)',
      fontSize: 12,
      letterSpacing: '.12em',
      marginBottom: 16,
      fontWeight: 600
    }
  }, h), items.map(([label, href]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: href,
    style: {
      display: 'block',
      color: 'rgba(255,255,255,.66)',
      fontSize: 14,
      marginBottom: 10,
      textDecoration: 'none'
    }
  }, label)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--vt-ink-950)',
      color: '#fff',
      padding: '64px 40px 30px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      gap: 40,
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BrandMark, {
    tone: "onDark",
    size: "lg"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.6)',
      fontSize: 13,
      lineHeight: 1.7,
      marginTop: 14,
      maxWidth: 280
    }
  }, "Brand \xB7 Watches \u2014 an international reference for timeless design, crafted for those who value time.")), col('EXPLORE', [['New Models', 'new-models.html'], ['Products', 'products.html'], ['Technologies', 'technologies.html']]), col('BRAND', [['About Violet', 'about.html'], ['History', 'about.html'], ['Quality', 'about.html']]), col('SUPPORT', [['Contact', 'contact.html'], ['Find a dealer', 'contact.html'], ['FAQ', 'faq.html']])), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(230,180,83,.2)',
      paddingTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
      color: 'rgba(255,255,255,.5)',
      fontSize: 13,
      flexWrap: 'wrap',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Violet Watches. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "English \xB7 \u0420\u0443\u0441\u0441\u043A\u0438\u0439 \xB7 \u0627\u0644\u0639\u0631\u0628\u064A\u0629"))));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  VT_NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/chrome.jsx", error: String((e && e.message) || e) }); }

// site/data.js
try { (() => {
// Shared catalog data for the Violet reference-site pages (standalone, multi-page).
// Watch photography references the same Unsplash frames as the source prototypes.
window.VT_SITE = function () {
  // Real watch photography. One fixed render size so every <img> dedupes to
  // 12 cached requests instead of dozens of distinct crops.
  const img = id => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=640&h=640&q=78`;
  const frames = ['photo-1547996160-81dfa63595aa',
  // bronze automatic on red
  'photo-1524592094714-0f0654e20314',
  // white dial leather
  'photo-1612817159949-195b6eb9e31a',
  // steel chrono
  'photo-1533139502658-0198f920d8e8',
  // brown-leather chrono
  'photo-1611591437281-460bfbe1220a',
  // dark diver bezel
  'photo-1542496658-e33a6d0d50f6',
  // Breitling blue/gold
  'photo-1523275335684-37898b6baf30',
  // minimalist leather
  'photo-1495704907664-81f74a7efd9b',
  // dark dial detail
  'photo-1526045431048-f857369baa09',
  // strap detail
  'photo-1434056886845-dac89ffe9b56',
  // dark minimalist
  'photo-1508057198894-247b23fe5ade',
  // smart/sport
  'photo-1548169874-53e85f753f1e' // lifestyle
  ];
  const frame = i => img(frames[i % frames.length]);

  // facets: gender, strap, color, movement, water (ATM)
  const products = [{
    name: 'Chronograph Classic 42',
    sku: 'VLT-2601',
    line: 'Classic',
    isNew: true,
    gender: 'Men',
    strap: 'Leather',
    color: 'Midnight',
    movement: 'Quartz',
    water: 5,
    f: 0,
    f2: 1
  }, {
    name: 'Heritage Automatic 40',
    sku: 'VLT-2602',
    line: 'Classic',
    isNew: true,
    gender: 'Men',
    strap: 'Steel',
    color: 'Steel',
    movement: 'Automatic',
    water: 3,
    f: 2,
    f2: 3
  }, {
    name: 'Sport Diver 44',
    sku: 'VLT-2603',
    line: 'Sport',
    isNew: true,
    gender: 'Men',
    strap: 'Rubber',
    color: 'Plum',
    movement: 'Quartz',
    water: 20,
    f: 3,
    f2: 5
  }, {
    name: 'Lunar Moonphase 41',
    sku: 'VLT-2604',
    line: 'Classic',
    isNew: true,
    gender: 'Women',
    strap: 'Leather',
    color: 'Gold',
    movement: 'Automatic',
    water: 5,
    f: 6,
    f2: 4
  }, {
    name: 'Aurora Skeleton 42',
    sku: 'VLT-2605',
    line: 'Classic',
    isNew: true,
    gender: 'Men',
    strap: 'Steel',
    color: 'Steel',
    movement: 'Automatic',
    water: 5,
    f: 7,
    f2: 4
  }, {
    name: 'Solaria Rose 36',
    sku: 'VLT-2606',
    line: 'Classic',
    isNew: true,
    gender: 'Women',
    strap: 'Mesh',
    color: 'Gold',
    movement: 'Quartz',
    water: 3,
    f: 8,
    f2: 9
  }, {
    name: 'Meridian GMT 43',
    sku: 'VLT-2607',
    line: 'Sport',
    isNew: true,
    gender: 'Men',
    strap: 'Steel',
    color: 'Midnight',
    movement: 'Quartz',
    water: 10,
    f: 4,
    f2: 0
  }, {
    name: 'Pulse Smart 45',
    sku: 'VLT-2608',
    line: 'Smart',
    isNew: true,
    gender: 'Men',
    strap: 'Rubber',
    color: 'Midnight',
    movement: 'Smart',
    water: 5,
    f: 10,
    f2: 1
  }, {
    name: 'Eclipse Dress 38',
    sku: 'VLT-1182',
    line: 'Classic',
    isNew: false,
    gender: 'Women',
    strap: 'Leather',
    color: 'Plum',
    movement: 'Quartz',
    water: 3,
    f: 5,
    f2: 2
  }, {
    name: 'Tempo Quartz 36',
    sku: 'VLT-1183',
    line: 'Smart',
    isNew: false,
    gender: 'Women',
    strap: 'Mesh',
    color: 'Steel',
    movement: 'Quartz',
    water: 3,
    f: 1,
    f2: 6
  }, {
    name: 'Nocturne Automatic 40',
    sku: 'VLT-1184',
    line: 'Classic',
    isNew: false,
    gender: 'Men',
    strap: 'Leather',
    color: 'Midnight',
    movement: 'Automatic',
    water: 5,
    f: 2,
    f2: 7
  }, {
    name: 'Regatta Sport 42',
    sku: 'VLT-1186',
    line: 'Sport',
    isNew: false,
    gender: 'Men',
    strap: 'Rubber',
    color: 'Plum',
    movement: 'Quartz',
    water: 20,
    f: 11,
    f2: 3
  }];
  const lines = [{
    name: 'Classic',
    desc: 'Timeless dress watches',
    f: 2
  }, {
    name: 'Sport',
    desc: 'Built for motion & depth',
    f: 3
  }, {
    name: 'Smart',
    desc: 'Connected, quietly',
    f: 10
  }];

  // facet option lists for filters
  const facets = {
    Gender: ['Men', 'Women'],
    Strap: ['Leather', 'Steel', 'Mesh', 'Rubber'],
    Color: ['Midnight', 'Gold', 'Steel', 'Plum'],
    Movement: ['Quartz', 'Automatic', 'Smart']
  };
  return {
    img,
    frame,
    frames,
    products,
    lines,
    facets
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/data.js", error: String((e && e.message) || e) }); }

// site/data.standalone.js
try { (() => {
// Shared catalog data for the Violet reference-site pages (standalone, multi-page).
// Watch photography references the same Unsplash frames as the source prototypes.
window.VT_SITE = function () {
  // Real watch photography. One fixed render size so every <img> dedupes to
  // 12 cached requests instead of dozens of distinct crops.
  const img = id => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=640&h=640&q=78`;
  const frames = ['photo-1547996160-81dfa63595aa',
  // bronze automatic on red
  'photo-1524592094714-0f0654e20314',
  // white dial leather
  'photo-1612817159949-195b6eb9e31a',
  // steel chrono
  'photo-1533139502658-0198f920d8e8',
  // brown-leather chrono
  'photo-1611591437281-460bfbe1220a',
  // dark diver bezel
  'photo-1542496658-e33a6d0d50f6',
  // Breitling blue/gold
  'photo-1523275335684-37898b6baf30',
  // minimalist leather
  'photo-1495704907664-81f74a7efd9b',
  // dark dial detail
  'photo-1526045431048-f857369baa09',
  // strap detail
  'photo-1434056886845-dac89ffe9b56',
  // dark minimalist
  'photo-1508057198894-247b23fe5ade',
  // smart/sport
  'photo-1548169874-53e85f753f1e' // lifestyle
  ];
  // STANDALONE: frames are inlined as blob URLs via ext-resource-dependency meta tags.
  const frame = i => window.__resources && window.__resources['frame' + i % frames.length] || img(frames[i % frames.length]);

  // facets: gender, strap, color, movement, water (ATM)
  const products = [{
    name: 'Chronograph Classic 42',
    sku: 'VLT-2601',
    line: 'Classic',
    isNew: true,
    gender: 'Men',
    strap: 'Leather',
    color: 'Midnight',
    movement: 'Quartz',
    water: 5,
    f: 0,
    f2: 1
  }, {
    name: 'Heritage Automatic 40',
    sku: 'VLT-2602',
    line: 'Classic',
    isNew: true,
    gender: 'Men',
    strap: 'Steel',
    color: 'Steel',
    movement: 'Automatic',
    water: 3,
    f: 2,
    f2: 3
  }, {
    name: 'Sport Diver 44',
    sku: 'VLT-2603',
    line: 'Sport',
    isNew: true,
    gender: 'Men',
    strap: 'Rubber',
    color: 'Plum',
    movement: 'Quartz',
    water: 20,
    f: 3,
    f2: 5
  }, {
    name: 'Lunar Moonphase 41',
    sku: 'VLT-2604',
    line: 'Classic',
    isNew: true,
    gender: 'Women',
    strap: 'Leather',
    color: 'Gold',
    movement: 'Automatic',
    water: 5,
    f: 6,
    f2: 4
  }, {
    name: 'Aurora Skeleton 42',
    sku: 'VLT-2605',
    line: 'Classic',
    isNew: true,
    gender: 'Men',
    strap: 'Steel',
    color: 'Steel',
    movement: 'Automatic',
    water: 5,
    f: 7,
    f2: 4
  }, {
    name: 'Solaria Rose 36',
    sku: 'VLT-2606',
    line: 'Classic',
    isNew: true,
    gender: 'Women',
    strap: 'Mesh',
    color: 'Gold',
    movement: 'Quartz',
    water: 3,
    f: 8,
    f2: 9
  }, {
    name: 'Meridian GMT 43',
    sku: 'VLT-2607',
    line: 'Sport',
    isNew: true,
    gender: 'Men',
    strap: 'Steel',
    color: 'Midnight',
    movement: 'Quartz',
    water: 10,
    f: 4,
    f2: 0
  }, {
    name: 'Pulse Smart 45',
    sku: 'VLT-2608',
    line: 'Smart',
    isNew: true,
    gender: 'Men',
    strap: 'Rubber',
    color: 'Midnight',
    movement: 'Smart',
    water: 5,
    f: 10,
    f2: 1
  }, {
    name: 'Eclipse Dress 38',
    sku: 'VLT-1182',
    line: 'Classic',
    isNew: false,
    gender: 'Women',
    strap: 'Leather',
    color: 'Plum',
    movement: 'Quartz',
    water: 3,
    f: 5,
    f2: 2
  }, {
    name: 'Tempo Quartz 36',
    sku: 'VLT-1183',
    line: 'Smart',
    isNew: false,
    gender: 'Women',
    strap: 'Mesh',
    color: 'Steel',
    movement: 'Quartz',
    water: 3,
    f: 1,
    f2: 6
  }, {
    name: 'Nocturne Automatic 40',
    sku: 'VLT-1184',
    line: 'Classic',
    isNew: false,
    gender: 'Men',
    strap: 'Leather',
    color: 'Midnight',
    movement: 'Automatic',
    water: 5,
    f: 2,
    f2: 7
  }, {
    name: 'Regatta Sport 42',
    sku: 'VLT-1186',
    line: 'Sport',
    isNew: false,
    gender: 'Men',
    strap: 'Rubber',
    color: 'Plum',
    movement: 'Quartz',
    water: 20,
    f: 11,
    f2: 3
  }];
  const lines = [{
    name: 'Classic',
    desc: 'Timeless dress watches',
    f: 2
  }, {
    name: 'Sport',
    desc: 'Built for motion & depth',
    f: 3
  }, {
    name: 'Smart',
    desc: 'Connected, quietly',
    f: 10
  }];

  // facet option lists for filters
  const facets = {
    Gender: ['Men', 'Women'],
    Strap: ['Leather', 'Steel', 'Mesh', 'Rubber'],
    Color: ['Midnight', 'Gold', 'Steel', 'Plum'],
    Movement: ['Quartz', 'Automatic', 'Smart']
  };
  return {
    img,
    frame,
    frames,
    products,
    lines,
    facets
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/data.standalone.js", error: String((e && e.message) || e) }); }

// site/error-shell.jsx
try { (() => {
// Shared error-page shell for the Violet reference site (404 / 500).
// Celestial dark hero with a giant numeral, message, and DS Button actions.
// Reuses SiteHeader / SiteFooter from chrome.jsx and the design-system Button.
const {
  Button: VtErrButton
} = window.VioletDesignSystem_7273c4;
function VioletErrorStars() {
  // A scatter of twinkling points behind the numeral — deterministic positions.
  const pts = [[12, 22, 2], [22, 64, 1.5], [34, 16, 2.5], [44, 78, 1.5], [58, 28, 2], [67, 70, 1.5], [78, 20, 2.5], [86, 58, 2], [92, 36, 1.5], [8, 48, 1.5], [50, 12, 2], [72, 44, 1.5], [28, 86, 2], [62, 88, 1.5], [40, 50, 1.5]];
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none'
    }
  }, pts.map(([x, y, r], i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "vt-twinkle",
    style: {
      position: 'absolute',
      left: `${x}%`,
      top: `${y}%`,
      width: r * 2,
      height: r * 2,
      borderRadius: '50%',
      background: i % 3 === 0 ? 'var(--vt-gold-300)' : '#C4B5FD',
      boxShadow: '0 0 8px currentColor',
      animationDelay: `${i % 5 * 0.6}s`
    }
  })));
}
function VioletErrorPage({
  code,
  eyebrow,
  title,
  body,
  primary,
  secondary
}) {
  React.useEffect(() => {
    if (window.lucide) lucide.createIcons();
  });
  const renderAction = (a, variant) => {
    if (!a) return null;
    const btn = /*#__PURE__*/React.createElement(Button, {
      variant: variant,
      size: "lg",
      trailingIcon: variant === 'accent' ? /*#__PURE__*/React.createElement("span", null, "\u2192") : undefined
    }, a.label);
    if (a.onClick === 'reload') {
      return /*#__PURE__*/React.createElement("span", {
        role: "button",
        tabIndex: 0,
        onClick: () => window.location.reload(),
        onKeyDown: e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.location.reload();
          }
        },
        style: {
          cursor: 'pointer',
          display: 'inline-flex'
        }
      }, btn);
    }
    return /*#__PURE__*/React.createElement("a", {
      href: a.href,
      style: {
        textDecoration: 'none'
      }
    }, btn);
  };

  // alias for JSX
  const Button = VtErrButton;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    active: null,
    variant: "overlay"
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 132,
      paddingBottom: 80,
      background: 'radial-gradient(1100px 640px at 70% 22%,#3B0764 0%,transparent 60%),linear-gradient(160deg,#0D0A1E,#18122B 55%,#1c0f3a)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "vt-aurora",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: '-15%',
      pointerEvents: 'none',
      background: 'radial-gradient(560px 380px at 16% 26%,rgba(168,85,247,.24),transparent 60%),radial-gradient(460px 460px at 84% 72%,rgba(124,58,237,.20),transparent 60%),radial-gradient(360px 360px at 60% 14%,rgba(201,168,106,.12),transparent 60%)',
      filter: 'blur(10px)'
    }
  }), /*#__PURE__*/React.createElement(VioletErrorStars, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      padding: '0 40px',
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "vt-rise",
    style: {
      position: 'relative',
      display: 'inline-block',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--vt-font-display)',
      fontWeight: 300,
      letterSpacing: '-.04em',
      fontSize: 'clamp(140px,22vw,300px)',
      lineHeight: .9,
      background: 'linear-gradient(180deg,#fff 0%,#C4B5FD 55%,rgba(196,181,253,.25) 100%)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'block'
    }
  }, code)), /*#__PURE__*/React.createElement("div", {
    className: "vt-rise",
    style: {
      animationDelay: '.08s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: '.26em',
      textTransform: 'uppercase',
      fontWeight: 500,
      color: 'var(--vt-gold-300)'
    }
  }, eyebrow)), /*#__PURE__*/React.createElement("h1", {
    className: "vt-rise",
    style: {
      animationDelay: '.14s',
      fontFamily: 'var(--vt-font-display)',
      fontWeight: 300,
      letterSpacing: '-.02em',
      fontSize: 'clamp(32px,4.5vw,56px)',
      lineHeight: 1.08,
      color: '#fff',
      margin: '14px 0 18px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "vt-rise",
    style: {
      animationDelay: '.2s',
      fontSize: 18,
      lineHeight: 1.7,
      color: '#C4B5FD',
      maxWidth: 520,
      margin: '0 auto 36px'
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    className: "vt-rise",
    style: {
      animationDelay: '.26s',
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, renderAction(primary, 'accent'), renderAction(secondary, 'secondary')))), /*#__PURE__*/React.createElement(SiteFooter, null));
}
window.VioletErrorPage = VioletErrorPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/error-shell.jsx", error: String((e && e.message) || e) }); }

// site/home-i18n.jsx
try { (() => {
// Localized Violet home page body (Hero → CTA), EN/RU/AR.
// Renders into #root; reads strings from window.VT_I18N[window.VT_LANG].
(function () {
  const {
    SiteHeaderI18n,
    SiteFooterI18n
  } = window;
  const {
    Button,
    ProductCard,
    StatTile,
    BrandMark
  } = window.VioletDesignSystem_7273c4;
  const D = window.VT_SITE;
  const LANG = window.VT_LANG || 'en';
  const T = window.VT_I18N[LANG];
  const RTL = T.dir === 'rtl';
  const ARR = RTL ? '←' : '→';
  const wrap = {
    maxWidth: 1280,
    margin: '0 auto',
    padding: '0 40px'
  };
  function Hero() {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'relative',
        minHeight: 640,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: 96,
        background: 'radial-gradient(1100px 700px at 72% 38%,#45304B 0%,transparent 58%),linear-gradient(160deg,#180F19,#27192A 55%,#342032)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vt-aurora",
      style: {
        position: 'absolute',
        inset: '-20%',
        pointerEvents: 'none',
        background: 'radial-gradient(620px 420px at 22% 30%,rgba(230,180,83,.12),transparent 60%),radial-gradient(520px 520px at 80% 70%,rgba(126,88,122,.30),transparent 60%),radial-gradient(420px 420px at 60% 22%,rgba(230,180,83,.08),transparent 60%)',
        filter: 'blur(10px)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'grid',
        placeItems: 'center',
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(../assets/brand/violet-floral.svg)',
        backgroundRepeat: 'repeat',
        backgroundSize: '150px',
        opacity: .1,
        pointerEvents: 'none'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        zIndex: 2,
        ...wrap,
        display: 'grid',
        gridTemplateColumns: '1.1fr .9fr',
        gap: 40,
        alignItems: 'center',
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        letterSpacing: '.26em',
        textTransform: 'uppercase',
        color: 'var(--vt-gold-300)',
        fontWeight: 500
      }
    }, T.hero.eyebrow), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--vt-font-display)',
        fontWeight: 300,
        letterSpacing: '-.02em',
        fontSize: 'clamp(52px,6vw,96px)',
        lineHeight: 1.02,
        color: '#fff',
        margin: '18px 0 22px'
      }
    }, T.hero.h1a, /*#__PURE__*/React.createElement("br", null), T.hero.h1b, /*#__PURE__*/React.createElement("em", {
      style: {
        fontStyle: 'italic',
        color: 'var(--vt-gold-300)'
      }
    }, T.hero.h1em)), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18,
        lineHeight: 1.7,
        color: 'rgba(255,255,255,.74)',
        maxWidth: 440,
        marginBottom: 34
      }
    }, T.hero.lead), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "new-models.html",
      style: {
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      trailingIcon: /*#__PURE__*/React.createElement("span", null, ARR)
    }, T.hero.ctaNew)), /*#__PURE__*/React.createElement("a", {
      href: "about.html",
      style: {
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      style: {
        background: 'rgba(255,255,255,.06)',
        border: '1.5px solid rgba(255,255,255,.2)',
        color: '#fff'
      }
    }, T.hero.ctaBrand)))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        display: 'grid',
        placeItems: 'center',
        height: 480
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vt-spin-slow",
      style: {
        position: 'absolute',
        width: 460,
        height: 460,
        border: '1px solid rgba(230,180,83,.28)',
        borderRadius: '50%'
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "vt-spin-rev",
      style: {
        position: 'absolute',
        width: 540,
        height: 540,
        border: '1px dashed rgba(230,180,83,.18)',
        borderRadius: '50%'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 420,
        height: 420,
        borderRadius: '50%',
        background: 'radial-gradient(circle,rgba(230,180,83,.20),transparent 62%)',
        filter: 'blur(8px)'
      }
    }), /*#__PURE__*/React.createElement("img", {
      className: "vt-float",
      alt: "Violet timepiece",
      src: D.frame(0, 760),
      style: {
        width: 360,
        height: 360,
        borderRadius: '50%',
        objectFit: 'cover',
        boxShadow: '0 40px 90px rgba(0,0,0,.55),0 0 0 1px rgba(230,180,83,.22)'
      }
    }))));
  }
  function Marquee() {
    const run = [...T.marquee, ...T.marquee];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        borderBlock: '1px solid var(--vt-color-divider)',
        background: 'var(--vt-color-surface)',
        overflow: 'hidden',
        padding: '18px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vt-marquee",
      style: {
        display: 'flex',
        gap: 60,
        whiteSpace: 'nowrap',
        width: 'max-content'
      }
    }, run.map((w, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        fontFamily: 'var(--vt-font-display)',
        fontSize: 26,
        color: 'var(--vt-color-text-subtle)',
        display: 'flex',
        alignItems: 'center',
        gap: 60
      }
    }, w, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--vt-color-accent)',
        fontSize: 14
      }
    }, "\u2726")))));
  }
  function FeaturedSlider() {
    const slides = D.products.filter(p => p.isNew).slice(0, 4);
    const data = slides.length ? slides : D.products.slice(0, 4);
    const [i, setI] = React.useState(0);
    const [paused, setPaused] = React.useState(false);
    const n = data.length;
    const go = d => setI(v => (v + d + n) % n);
    React.useEffect(() => {
      if (paused) return;
      const t = setInterval(() => setI(v => (v + 1) % n), 5500);
      return () => clearInterval(t);
    }, [paused, n]);
    const p = data[i];
    const desc = p.line ? T.slider.descLine.replace('{line}', p.line) : T.slider.descNoLine;
    return /*#__PURE__*/React.createElement("section", {
      onMouseEnter: () => setPaused(true),
      onMouseLeave: () => setPaused(false),
      style: {
        padding: '0 0 100px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement(SecHead, {
      eyebrow: T.slider.eyebrow,
      title: T.slider.title
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'var(--vt-radius-2xl)',
        border: '1px solid var(--vt-color-border)',
        background: 'var(--vt-color-surface-raised)',
        boxShadow: 'var(--vt-shadow-md)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'stretch',
        minHeight: 440
      }
    }, /*#__PURE__*/React.createElement("div", {
      key: `t${i}`,
      className: "vt-slide-in",
      style: {
        padding: 'clamp(32px,4vw,56px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        letterSpacing: '.26em',
        textTransform: 'uppercase',
        color: 'var(--vt-color-accent-strong)',
        fontWeight: 500
      }
    }, T.slider.label, " \xB7 ", String(i + 1).padStart(2, '0'), " / ", String(n).padStart(2, '0')), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--vt-font-display)',
        fontWeight: 300,
        fontSize: 'clamp(34px,4vw,52px)',
        lineHeight: 1.05,
        letterSpacing: '-.02em',
        margin: '14px 0 10px',
        color: 'var(--vt-color-text-strong)'
      }
    }, p.name), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--vt-font-mono)',
        fontSize: 12,
        letterSpacing: '.1em',
        color: 'var(--vt-color-text-muted)',
        marginBottom: 18
      },
      dir: "ltr"
    }, p.sku), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        lineHeight: 1.7,
        color: 'var(--vt-color-text-muted)',
        maxWidth: 400,
        marginBottom: 28
      }
    }, desc), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
      href: `product.html?sku=${p.sku}`,
      style: {
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      trailingIcon: /*#__PURE__*/React.createElement("span", null, ARR)
    }, T.slider.cta)))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        overflow: 'hidden',
        minHeight: 440,
        background: '#180F19'
      }
    }, /*#__PURE__*/React.createElement("img", {
      key: `i${i}`,
      className: "vt-slide-img",
      alt: p.name,
      src: D.frame(p.f, 760),
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background: 'linear-gradient(110deg,rgba(24,15,25,.72) 0%,rgba(24,15,25,.12) 38%,transparent 60%),linear-gradient(0deg,rgba(24,15,25,.66),transparent 45%)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      key: `n${i}`,
      className: "vt-slide-in",
      style: {
        position: 'absolute',
        top: 18,
        insetInlineEnd: 26,
        fontFamily: 'var(--vt-font-display)',
        fontWeight: 300,
        fontSize: 96,
        lineHeight: 1,
        color: 'rgba(255,255,255,.14)',
        letterSpacing: '-.04em'
      }
    }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        insetInlineStart: 26,
        bottom: 22,
        width: 44,
        height: 2,
        background: 'var(--vt-gold-300)'
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => go(RTL ? 1 : -1),
      "aria-label": "Previous",
      style: sliderArrow('insetInlineStart')
    }, RTL ? '›' : '‹'), /*#__PURE__*/React.createElement("button", {
      onClick: () => go(RTL ? -1 : 1),
      "aria-label": "Next",
      style: sliderArrow('insetInlineEnd')
    }, RTL ? '‹' : '›'))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 20,
        insetInlineStart: 0,
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        gap: 10
      }
    }, data.map((_, k) => /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => setI(k),
      "aria-label": `Slide ${k + 1}`,
      style: {
        width: k === i ? 26 : 8,
        height: 8,
        padding: 0,
        borderRadius: 999,
        border: 'none',
        cursor: 'pointer',
        background: k === i ? 'var(--vt-color-accent-strong)' : 'var(--vt-color-border-strong)',
        transition: 'all .4s var(--vt-ease-standard)'
      }
    }))))));
  }
  const sliderArrow = side => ({
    position: 'absolute',
    top: '50%',
    [side]: 18,
    transform: 'translateY(-50%)',
    zIndex: 3,
    width: 46,
    height: 46,
    borderRadius: '50%',
    cursor: 'pointer',
    background: 'rgba(255,255,255,.08)',
    border: '1px solid rgba(230,180,83,.45)',
    color: '#fff',
    fontSize: 24,
    lineHeight: 1,
    display: 'grid',
    placeItems: 'center',
    backdropFilter: 'blur(6px)'
  });
  function SecHead({
    eyebrow,
    title,
    link,
    href
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 40,
        gap: 24,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        letterSpacing: '.26em',
        textTransform: 'uppercase',
        color: 'var(--vt-color-accent-strong)',
        fontWeight: 500
      }
    }, eyebrow), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--vt-font-display)',
        fontWeight: 300,
        fontSize: 'clamp(32px,4vw,48px)',
        color: 'var(--vt-color-text-strong)',
        margin: '6px 0 0',
        letterSpacing: '-.02em'
      }
    }, title)), link && /*#__PURE__*/React.createElement("a", {
      href: href,
      style: {
        textDecoration: 'none',
        fontSize: 14,
        fontWeight: 500,
        color: 'var(--vt-color-primary)',
        display: 'inline-flex',
        gap: 8,
        alignItems: 'center'
      }
    }, link, " ", /*#__PURE__*/React.createElement("span", null, ARR)));
  }
  function Home() {
    const newM = D.products.filter(p => p.isNew).slice(0, 4);
    const feat = D.products.slice(4, 8);
    React.useEffect(() => {
      if (window.lucide) lucide.createIcons();
      const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('in')), {
        threshold: 0.08
      });
      document.querySelectorAll('.reveal').forEach(el => io.observe(el));
      return () => io.disconnect();
    });
    return /*#__PURE__*/React.createElement("div", {
      dir: T.dir
    }, /*#__PURE__*/React.createElement(SiteHeaderI18n, {
      active: "home",
      lang: LANG,
      variant: "overlay"
    }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Marquee, null), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '100px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement(SecHead, {
      eyebrow: T.newModels.eyebrow,
      title: T.newModels.title,
      link: T.newModels.link,
      href: "new-models.html"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 24
      }
    }, newM.map((p, i) => /*#__PURE__*/React.createElement("div", {
      key: p.sku,
      className: "reveal",
      style: {
        transitionDelay: `${i * 60}ms`
      }
    }, /*#__PURE__*/React.createElement(ProductCard, {
      name: p.name,
      sku: p.sku,
      badge: "new",
      image: D.frame(p.f),
      hoverImage: D.frame(p.f2),
      href: `product.html?sku=${p.sku}`
    })))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 0 100px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement(SecHead, {
      eyebrow: T.lines.eyebrow,
      title: T.lines.title,
      link: T.lines.link,
      href: "products.html"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 24
      }
    }, D.lines.map((l, i) => /*#__PURE__*/React.createElement("a", {
      key: l.name,
      href: "products.html",
      className: "vt-linecard reveal",
      style: {
        position: 'relative',
        aspectRatio: '3/4',
        borderRadius: 'var(--vt-radius-xl)',
        overflow: 'hidden',
        display: 'block',
        transitionDelay: `${i * 70}ms`
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: D.frame(l.f, 700),
      alt: l.name,
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 1s var(--vt-ease-standard)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(transparent 38%,rgba(24,15,25,.82))'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        insetInlineStart: 26,
        bottom: 26,
        color: '#fff',
        zIndex: 2
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--vt-font-display)',
        fontSize: 32,
        fontWeight: 400,
        margin: 0
      }
    }, l.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'rgba(255,255,255,.72)',
        marginTop: 2
      }
    }, l.desc), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--vt-gold-300)',
        marginTop: 12,
        display: 'inline-flex',
        gap: 8,
        alignItems: 'center'
      }
    }, T.lines.card, " ", ARR))))))), /*#__PURE__*/React.createElement(FeaturedSlider, null), /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--vt-color-surface)',
        padding: '100px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement(SecHead, {
      eyebrow: T.featured.eyebrow,
      title: T.featured.title,
      link: T.featured.link,
      href: "products.html"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 24
      }
    }, feat.map((p, i) => /*#__PURE__*/React.createElement("div", {
      key: p.sku,
      className: "reveal",
      style: {
        transitionDelay: `${i * 60}ms`
      }
    }, /*#__PURE__*/React.createElement(ProductCard, {
      name: p.name,
      sku: p.sku,
      badge: p.isNew ? 'new' : null,
      image: D.frame(p.f),
      hoverImage: D.frame(p.f2),
      href: `product.html?sku=${p.sku}`
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginTop: 48
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "products.html",
      style: {
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      trailingIcon: /*#__PURE__*/React.createElement("span", null, ARR)
    }, T.featured.cta))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '100px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 64,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      style: {
        position: 'relative',
        aspectRatio: '4/5',
        borderRadius: 'var(--vt-radius-2xl)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: D.frame(4, 800),
      alt: "Craftsmanship",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 16,
        border: '1px solid rgba(255,255,255,.4)',
        borderRadius: 'var(--vt-radius-xl)',
        pointerEvents: 'none'
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "reveal"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        letterSpacing: '.26em',
        textTransform: 'uppercase',
        color: 'var(--vt-color-accent-strong)',
        fontWeight: 500
      }
    }, T.about.eyebrow), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--vt-font-display)',
        fontWeight: 300,
        fontSize: 'clamp(34px,4vw,52px)',
        color: 'var(--vt-color-text-strong)',
        margin: '16px 0 22px',
        lineHeight: 1.1,
        letterSpacing: '-.02em'
      }
    }, T.about.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        lineHeight: 1.8,
        color: 'var(--vt-color-text-muted)',
        marginBottom: 30,
        maxWidth: 440
      }
    }, T.about.body), /*#__PURE__*/React.createElement("a", {
      href: "about.html",
      style: {
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      trailingIcon: /*#__PURE__*/React.createElement("span", null, ARR)
    }, T.about.cta))))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--vt-color-surface)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 24,
        borderBlock: '1px solid var(--vt-color-divider)',
        padding: '56px 40px'
      }
    }, T.stats.map(([label, value]) => /*#__PURE__*/React.createElement(StatTile, {
      key: label,
      display: true,
      label: label,
      value: value
    })))), /*#__PURE__*/React.createElement("section", {
      style: {
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        color: '#fff',
        padding: '110px 0',
        background: 'radial-gradient(800px 400px at 50% 0%,#45304B,transparent 60%),linear-gradient(160deg,#180F19,#27192A)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'grid',
        placeItems: 'center',
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(../assets/brand/violet-floral.svg)',
        backgroundRepeat: 'repeat',
        backgroundSize: '150px',
        opacity: .09,
        pointerEvents: 'none'
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "vt-aurora",
      style: {
        position: 'absolute',
        inset: '-15%',
        pointerEvents: 'none',
        background: 'radial-gradient(520px 360px at 28% 30%,rgba(230,180,83,.12),transparent 60%),radial-gradient(440px 440px at 78% 72%,rgba(126,88,122,.30),transparent 60%)',
        filter: 'blur(10px)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        zIndex: 2,
        ...wrap
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        letterSpacing: '.26em',
        textTransform: 'uppercase',
        color: 'var(--vt-gold-300)',
        fontWeight: 500
      }
    }, T.cta.eyebrow), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--vt-font-display)',
        fontWeight: 300,
        fontSize: 'clamp(38px,5vw,64px)',
        margin: '12px 0 18px',
        letterSpacing: '-.02em'
      }
    }, T.cta.title), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'rgba(255,255,255,.74)',
        fontSize: 18,
        marginBottom: 32
      }
    }, T.cta.body), /*#__PURE__*/React.createElement("a", {
      href: "products.html",
      style: {
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      trailingIcon: /*#__PURE__*/React.createElement("span", null, ARR)
    }, T.cta.btn)))), /*#__PURE__*/React.createElement(SiteFooterI18n, {
      lang: LANG
    }));
  }
  ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Home, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/home-i18n.jsx", error: String((e && e.message) || e) }); }

// site/i18n.js
try { (() => {
// Translations for the Violet home page — EN / RU / AR.
// Product names & SKUs stay as-is (brand-fixed). Strings keyed for chrome + home.
window.VT_I18N = {
  en: {
    dir: 'ltr',
    htmlLang: 'en',
    nav: [['Home', 'index.html', 'home'], ['New Models', 'new-models.html', 'new'], ['Products', 'products.html', 'products'], ['Brand', 'brand.html', 'brand'], ['About', 'about.html', 'about'], ['Technologies', 'technologies.html', 'tech'], ['Contact', 'contact.html', 'contact']],
    hero: {
      eyebrow: 'Collection 2026',
      h1a: 'Timeless,',
      h1b: 'reimagined for ',
      h1em: 'now',
      lead: 'Over a thousand models of precision engineering and considered design — discover the latest Violet collection.',
      ctaNew: 'View New Models',
      ctaBrand: 'Explore the brand'
    },
    marquee: ['Precision', 'Craftsmanship', 'Heritage', 'Timeless', 'Innovation'],
    newModels: {
      eyebrow: 'Just arrived',
      title: 'New Models',
      link: 'View All New Models'
    },
    lines: {
      eyebrow: 'Find your style',
      title: 'Explore the lines',
      link: 'View All Products',
      card: 'Explore the line'
    },
    slider: {
      eyebrow: 'In the spotlight',
      title: 'Featured this season',
      label: 'Featured',
      descLine: 'From the {line} line — precision engineering and considered design, finished to Violet’s exacting standard.',
      descNoLine: 'Precision engineering and considered design, finished to Violet’s exacting standard.',
      cta: 'View this model'
    },
    featured: {
      eyebrow: 'Most loved',
      title: 'Featured Pieces',
      link: 'Explore All Products',
      cta: 'View All Products'
    },
    about: {
      eyebrow: 'About Violet',
      title: 'Timekeeping, refined to its essence',
      body: 'Each Violet timepiece unites precision movements with quiet, considered design — built to carry a sense of authenticity and confidence across borders. Restraint, made to last.',
      cta: 'Discover our story'
    },
    stats: [['Watch models', '1000+'], ['Photography frames', '4000+'], ['Languages · EN/RU/AR', '3'], ['Timeless by design', '✦']],
    cta: {
      eyebrow: 'Begin',
      title: 'Find the one that’s yours',
      body: 'Explore the complete Violet catalogue — over a thousand models await.',
      btn: 'Explore the collection'
    },
    footer: {
      tagline: 'Brand · Watches — an international reference for timeless design, crafted for those who value time.',
      explore: ['EXPLORE', [['New Models', 'new-models.html'], ['Products', 'products.html'], ['Technologies', 'technologies.html']]],
      brand: ['BRAND', [['About Violet', 'about.html'], ['History', 'about.html'], ['Quality', 'about.html']]],
      support: ['SUPPORT', [['Contact', 'contact.html'], ['Find a dealer', 'contact.html'], ['FAQ', 'contact.html']]],
      copy: '© 2026 Violet Watches. All rights reserved.',
      langs: 'English · Русский · العربية'
    }
  },
  ru: {
    dir: 'ltr',
    htmlLang: 'ru',
    nav: [['Главная', 'index-ru.html', 'home'], ['Новые модели', 'new-models.html', 'new'], ['Товары', 'products.html', 'products'], ['Бренд', 'brand.html', 'brand'], ['О нас', 'about.html', 'about'], ['Технологии', 'technologies.html', 'tech'], ['Контакты', 'contact.html', 'contact']],
    hero: {
      eyebrow: 'Коллекция 2026',
      h1a: 'Вне времени,',
      h1b: 'переосмыслено для ',
      h1em: 'сегодня',
      lead: 'Более тысячи моделей точной инженерии и продуманного дизайна — откройте новую коллекцию Violet.',
      ctaNew: 'Смотреть новые модели',
      ctaBrand: 'О бренде'
    },
    marquee: ['Точность', 'Мастерство', 'Наследие', 'Вне времени', 'Инновации'],
    newModels: {
      eyebrow: 'Только что прибыло',
      title: 'Новые модели',
      link: 'Все новые модели'
    },
    lines: {
      eyebrow: 'Найдите свой стиль',
      title: 'Линейки коллекций',
      link: 'Все товары',
      card: 'Открыть линейку'
    },
    slider: {
      eyebrow: 'В центре внимания',
      title: 'Избранное сезона',
      label: 'Избранное',
      descLine: 'Из линейки {line} — точная инженерия и продуманный дизайн, выполненные по строгим стандартам Violet.',
      descNoLine: 'Точная инженерия и продуманный дизайн, выполненные по строгим стандартам Violet.',
      cta: 'Смотреть модель'
    },
    featured: {
      eyebrow: 'Любимые',
      title: 'Избранные модели',
      link: 'Все товары',
      cta: 'Все товары'
    },
    about: {
      eyebrow: 'О Violet',
      title: 'Искусство времени в его чистейшей форме',
      body: 'Каждые часы Violet объединяют точные механизмы со сдержанным, продуманным дизайном — созданные нести подлинность и уверенность вне границ. Сдержанность, созданная на века.',
      cta: 'Узнать нашу историю'
    },
    stats: [['Моделей часов', '1000+'], ['Кадров съёмки', '4000+'], ['Языки · EN/RU/AR', '3'], ['Вне времени по сути', '✦']],
    cta: {
      eyebrow: 'Начните',
      title: 'Найдите свои',
      body: 'Откройте полный каталог Violet — вас ждут более тысячи моделей.',
      btn: 'Открыть коллекцию'
    },
    footer: {
      tagline: 'Бренд · Часы — международный эталон вневременного дизайна, созданный для тех, кто ценит время.',
      explore: ['КАТАЛОГ', [['Новые модели', 'new-models.html'], ['Товары', 'products.html'], ['Технологии', 'technologies.html']]],
      brand: ['БРЕНД', [['О Violet', 'about.html'], ['История', 'about.html'], ['Качество', 'about.html']]],
      support: ['ПОДДЕРЖКА', [['Контакты', 'contact.html'], ['Найти дилера', 'contact.html'], ['Вопросы', 'contact.html']]],
      copy: '© 2026 Violet Watches. Все права защищены.',
      langs: 'English · Русский · العربية'
    }
  },
  ar: {
    dir: 'rtl',
    htmlLang: 'ar',
    nav: [['الرئيسية', 'index-ar.html', 'home'], ['طُرز جديدة', 'new-models.html', 'new'], ['المنتجات', 'products.html', 'products'], ['العلامة', 'brand.html', 'brand'], ['عن الشركة', 'about.html', 'about'], ['التقنيات', 'technologies.html', 'tech'], ['اتصل بنا', 'contact.html', 'contact']],
    hero: {
      eyebrow: 'مجموعة 2026',
      h1a: 'خالدة،',
      h1b: 'أُعيد ابتكارها لـ',
      h1em: 'الآن',
      lead: 'أكثر من ألف طراز من الهندسة الدقيقة والتصميم المدروس — اكتشف مجموعة Violet الجديدة.',
      ctaNew: 'عرض الطُرز الجديدة',
      ctaBrand: 'اكتشف العلامة'
    },
    marquee: ['الدقة', 'الحِرفية', 'الإرث', 'الخلود', 'الابتكار'],
    newModels: {
      eyebrow: 'وصل حديثًا',
      title: 'طُرز جديدة',
      link: 'كل الطُرز الجديدة'
    },
    lines: {
      eyebrow: 'اعثر على أسلوبك',
      title: 'استكشف المجموعات',
      link: 'كل المنتجات',
      card: 'استكشف المجموعة'
    },
    slider: {
      eyebrow: 'تحت الأضواء',
      title: 'مختارات الموسم',
      label: 'مختار',
      descLine: 'من مجموعة {line} — هندسة دقيقة وتصميم مدروس، بمعايير Violet الصارمة.',
      descNoLine: 'هندسة دقيقة وتصميم مدروس، بمعايير Violet الصارمة.',
      cta: 'عرض هذا الطراز'
    },
    featured: {
      eyebrow: 'الأكثر تفضيلًا',
      title: 'قطع مختارة',
      link: 'كل المنتجات',
      cta: 'كل المنتجات'
    },
    about: {
      eyebrow: 'عن Violet',
      title: 'قياس الزمن في أنقى صوره',
      body: 'تجمع كل ساعة من Violet بين حركات دقيقة وتصميم هادئ مدروس — صُنعت لتحمل الأصالة والثقة عبر الحدود. أناقة تدوم.',
      cta: 'اكتشف قصتنا'
    },
    stats: [['طُرز الساعات', '1000+'], ['لقطات تصوير', '4000+'], ['اللغات · EN/RU/AR', '3'], ['خالدة بالتصميم', '✦']],
    cta: {
      eyebrow: 'ابدأ',
      title: 'اعثر على ساعتك',
      body: 'استكشف كتالوج Violet الكامل — أكثر من ألف طراز بانتظارك.',
      btn: 'استكشف المجموعة'
    },
    footer: {
      tagline: 'علامة · ساعات — مرجع عالمي للتصميم الخالد، صُنع لمن يقدّر الوقت.',
      explore: ['استكشف', [['طُرز جديدة', 'new-models.html'], ['المنتجات', 'products.html'], ['التقنيات', 'technologies.html']]],
      brand: ['العلامة', [['عن Violet', 'about.html'], ['التاريخ', 'about.html'], ['الجودة', 'about.html']]],
      support: ['الدعم', [['اتصل بنا', 'contact.html'], ['ابحث عن موزّع', 'contact.html'], ['الأسئلة الشائعة', 'contact.html']]],
      copy: '© 2026 Violet Watches. جميع الحقوق محفوظة.',
      langs: 'English · Русский · العربية'
    }
  }
};

// Language switcher targets (shared across pages).
window.VT_LANG_LINKS = {
  EN: 'index.html',
  RU: 'index-ru.html',
  AR: 'index-ar.html'
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/i18n.js", error: String((e && e.message) || e) }); }

// ui_kits/b2b-app/AppShell.jsx
try { (() => {
// B2B app chrome: RTL sidebar nav + topbar. Persian / Farsi.
const {
  BrandMark,
  IconButton
} = window.VioletDesignSystem_7273c4;
function AppShell({
  active,
  onNav,
  cartCount,
  onCart,
  children
}) {
  const nav = [['داشبورد', 'dashboard', 'layout-dashboard'], ['محصولات', 'dashboard', 'watch'], ['سفارش‌های من', 'orders', 'package'], ['فاکتورها', 'orders', 'file-text'], ['پشتیبانی', 'orders', 'headphones']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '248px 1fr',
      height: '100vh',
      background: 'var(--vt-color-bg)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--vt-color-surface)',
      borderInlineEnd: '1px solid var(--vt-color-border)',
      display: 'flex',
      flexDirection: 'column',
      padding: '22px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 8px 22px'
    }
  }, /*#__PURE__*/React.createElement(BrandMark, null)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, nav.map(([label, to, icon], i) => {
    const on = i === 0 ? active === 'dashboard' : i === 2 ? active === 'orders' : false;
    return /*#__PURE__*/React.createElement("a", {
      key: label,
      onClick: () => onNav(to),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 12px',
        borderRadius: 'var(--vt-radius-md)',
        cursor: 'pointer',
        fontSize: 14,
        fontWeight: on ? 600 : 500,
        color: on ? 'var(--vt-color-primary)' : 'var(--vt-color-text)',
        background: on ? 'var(--vt-color-primary-subtle)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": icon,
      style: {
        width: 18,
        height: 18
      }
    }), label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 12,
      borderRadius: 'var(--vt-radius-lg)',
      background: 'var(--vt-color-surface-sunken)',
      fontSize: 12.5,
      color: 'var(--vt-color-text-muted)',
      lineHeight: 1.7
    }
  }, "\u0646\u0645\u0627\u06CC\u0646\u062F\u06AF\u06CC ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--vt-color-text)'
    }
  }, "\u0633\u0627\u0639\u062A \u067E\u0627\u0631\u0633"), /*#__PURE__*/React.createElement("br", null), "\u06A9\u062F \u0641\u0631\u0648\u0634\u0646\u062F\u0647 ", /*#__PURE__*/React.createElement("bdi", {
    style: {
      fontFamily: 'var(--vt-font-mono)'
    }
  }, "DLR-0192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      height: 64,
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 28px',
      background: 'var(--vt-color-surface)',
      borderBottom: '1px solid var(--vt-color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--vt-color-surface-sunken)',
      borderRadius: 'var(--vt-radius-sm)',
      padding: '8px 14px',
      width: 320,
      maxWidth: '40vw'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search",
    style: {
      width: 16,
      height: 16,
      color: 'var(--vt-color-text-muted)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "\u062C\u0633\u062A\u062C\u0648\u06CC \u0645\u062F\u0644\u2026",
    style: {
      border: 'none',
      background: 'transparent',
      outline: 'none',
      font: '14px var(--vt-font-fa)',
      color: 'var(--vt-color-text)',
      flex: 1,
      textAlign: 'start'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onCart,
    style: {
      position: 'relative',
      width: 40,
      height: 40,
      display: 'grid',
      placeItems: 'center',
      borderRadius: 'var(--vt-radius-md)',
      border: '1.5px solid var(--vt-color-border-strong)',
      background: 'var(--vt-color-surface)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "shopping-bag",
    style: {
      width: 18,
      height: 18
    }
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -6,
      insetInlineStart: -6,
      minWidth: 18,
      height: 18,
      padding: '0 5px',
      borderRadius: 9,
      background: 'var(--vt-color-primary)',
      color: '#fff',
      fontSize: 11,
      fontWeight: 600,
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--vt-font-fa)'
    }
  }, window.VT_B2B.faDigits(cartCount))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'linear-gradient(135deg,var(--vt-violet-400),var(--vt-violet-600))',
      display: 'grid',
      placeItems: 'center',
      color: '#fff',
      fontWeight: 600,
      fontSize: 14
    }
  }, "\u0631"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--vt-color-text-strong)'
    }
  }, "\u0631\u0636\u0627 \u06A9\u0631\u06CC\u0645\u06CC"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--vt-color-text-muted)'
    }
  }, "\u0645\u062F\u06CC\u0631 \u062E\u0631\u06CC\u062F"))))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, children)));
}
Object.assign(window, {
  AppShell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/b2b-app/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/b2b-app/DashboardScreen.jsx
try { (() => {
// B2B Dashboard — stat cards, recent orders, wholesale catalog with MOQ + add. RTL.
const {
  Button,
  OrderStatusPill,
  QuantityStepper
} = window.VioletDesignSystem_7273c4;
const B = window.VT_B2B;
function StatCard({
  label,
  value,
  delta,
  deltaUp,
  icon
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--vt-color-surface)',
      border: '1px solid var(--vt-color-border)',
      borderRadius: 'var(--vt-radius-lg)',
      padding: 20,
      boxShadow: 'var(--vt-shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--vt-color-text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--vt-radius-md)',
      background: 'var(--vt-color-primary-subtle)',
      color: 'var(--vt-color-primary)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 17,
      height: 17
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: 'var(--vt-color-text-strong)',
      marginTop: 10,
      fontFamily: 'var(--vt-font-fa)'
    }
  }, value), delta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      marginTop: 4,
      color: deltaUp ? 'var(--vt-color-success)' : 'var(--vt-color-danger)'
    }
  }, deltaUp ? '▲' : '▼', " ", delta));
}
function DashboardScreen({
  onAdd,
  onTrack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 28px 60px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--vt-font-fa)',
      fontWeight: 600,
      fontSize: 26,
      color: 'var(--vt-color-text-strong)',
      margin: '0 0 4px'
    }
  }, "\u062F\u0627\u0634\u0628\u0648\u0631\u062F"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--vt-color-text-muted)',
      fontSize: 14,
      margin: '0 0 24px'
    }
  }, "\u062E\u0644\u0627\u0635\u0647\u0654 \u0641\u0639\u0627\u0644\u06CC\u062A \u0646\u0645\u0627\u06CC\u0646\u062F\u06AF\u06CC \u0633\u0627\u0639\u062A \u067E\u0627\u0631\u0633"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 18,
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "\u0633\u0641\u0627\u0631\u0634\u200C\u0647\u0627\u06CC \u0628\u0627\u0632",
    value: B.faDigits(4),
    delta: "\u06F2 \u0645\u0648\u0631\u062F \u0627\u06CC\u0646 \u0647\u0641\u062A\u0647",
    deltaUp: true,
    icon: "package"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631 \u062A\u0623\u06CC\u06CC\u062F",
    value: B.faDigits(1),
    icon: "clock"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "\u062C\u0645\u0639 \u062E\u0631\u06CC\u062F \u0645\u0627\u0647",
    value: "\u06F4\u066B\u06F5 \u0645\u06CC\u0644\u06CC\u0627\u0631\u062F",
    delta: "\u06F1\u06F2\u066A",
    deltaUp: true,
    icon: "trending-up"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "\u0641\u0627\u06A9\u062A\u0648\u0631\u0647\u0627\u06CC \u0628\u0627\u0632",
    value: B.faDigits(2),
    delta: "\u06F1 \u0633\u0631\u0631\u0633\u06CC\u062F \u0646\u0632\u062F\u06CC\u06A9",
    icon: "file-text"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--vt-color-surface)',
      border: '1px solid var(--vt-color-border)',
      borderRadius: 'var(--vt-radius-lg)',
      overflow: 'hidden',
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 20px',
      borderBottom: '1px solid var(--vt-color-divider)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--vt-font-fa)',
      fontWeight: 600,
      fontSize: 16,
      color: 'var(--vt-color-text-strong)',
      margin: 0
    }
  }, "\u0633\u0641\u0627\u0631\u0634\u200C\u0647\u0627\u06CC \u0627\u062E\u06CC\u0631"), /*#__PURE__*/React.createElement("a", {
    onClick: onTrack,
    style: {
      fontSize: 13,
      color: 'var(--vt-color-primary)',
      cursor: 'pointer',
      fontWeight: 500
    }
  }, "\u0645\u0634\u0627\u0647\u062F\u0647\u0654 \u0647\u0645\u0647")), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 13.5,
      textAlign: 'start'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      color: 'var(--vt-color-text-muted)',
      fontSize: 12
    }
  }, ['شماره سفارش', 'تاریخ', 'اقلام', 'مبلغ', 'وضعیت', ''].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      textAlign: 'start',
      fontWeight: 500,
      padding: '10px 20px'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, B.orders.map(o => /*#__PURE__*/React.createElement("tr", {
    key: o.id,
    style: {
      borderTop: '1px solid var(--vt-color-divider)'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '13px 20px',
      fontFamily: 'var(--vt-font-mono)',
      color: 'var(--vt-color-text-strong)'
    }
  }, /*#__PURE__*/React.createElement("bdi", null, o.id)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '13px 20px',
      color: 'var(--vt-color-text-muted)'
    }
  }, o.date), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '13px 20px',
      color: 'var(--vt-color-text)'
    }
  }, B.faDigits(o.items), " \u0645\u062F\u0644 \xB7 ", B.faDigits(o.qty), " \u0639\u062F\u062F"), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '13px 20px',
      color: 'var(--vt-color-text-strong)',
      fontWeight: 500
    }
  }, B.toman(o.total)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '13px 20px'
    }
  }, /*#__PURE__*/React.createElement(OrderStatusPill, {
    status: o.status,
    label: B.statusFa[o.status]
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '13px 20px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: onTrack,
    style: {
      color: 'var(--vt-color-primary)',
      cursor: 'pointer',
      fontWeight: 500
    }
  }, "\u067E\u06CC\u06AF\u06CC\u0631\u06CC"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--vt-font-fa)',
      fontWeight: 600,
      fontSize: 18,
      color: 'var(--vt-color-text-strong)',
      margin: 0
    }
  }, "\u06A9\u0627\u062A\u0627\u0644\u0648\u06AF \u0639\u0645\u062F\u0647"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--vt-color-text-muted)'
    }
  }, "\u0642\u06CC\u0645\u062A\u200C\u0647\u0627 \u0648\u06CC\u0698\u0647\u0654 \u0647\u0645\u06A9\u0627\u0631")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 18
    }
  }, B.products.map(p => {
    const out = p.stock === 0;
    return /*#__PURE__*/React.createElement("div", {
      key: p.sku,
      style: {
        background: 'var(--vt-color-surface)',
        border: '1px solid var(--vt-color-border)',
        borderRadius: 'var(--vt-radius-lg)',
        overflow: 'hidden',
        opacity: out ? 0.72 : 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        aspectRatio: '1/1',
        background: 'linear-gradient(160deg,var(--vt-ink-100),var(--vt-violet-50))'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: B.frame(p.f),
      alt: p.name,
      loading: "lazy",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }), out ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 10,
        insetInlineStart: 10,
        fontSize: 11,
        fontWeight: 600,
        padding: '5px 10px',
        borderRadius: 'var(--vt-radius-pill)',
        background: 'var(--vt-ink-700)',
        color: '#fff'
      }
    }, "\u0646\u0627\u0645\u0648\u062C\u0648\u062F") : /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 10,
        insetInlineStart: 10,
        fontSize: 11,
        fontWeight: 600,
        padding: '5px 10px',
        borderRadius: 'var(--vt-radius-pill)',
        background: 'var(--vt-color-success-bg)',
        color: 'var(--vt-color-success)'
      }
    }, B.faDigits(p.stock), " \u0645\u0648\u062C\u0648\u062F")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 14
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 14,
        fontWeight: 500,
        color: 'var(--vt-color-text-strong)',
        margin: 0
      }
    }, /*#__PURE__*/React.createElement("bdi", null, p.name)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--vt-font-mono)',
        fontSize: 11.5,
        color: 'var(--vt-color-text-muted)',
        marginTop: 3
      }
    }, /*#__PURE__*/React.createElement("bdi", null, p.sku)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: 600,
        color: 'var(--vt-color-primary)'
      }
    }, B.toman(p.price)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: 'var(--vt-color-text-muted)',
        marginTop: 2
      }
    }, "\u062D\u062F\u0627\u0642\u0644 \u0633\u0641\u0627\u0631\u0634 ", B.faDigits(p.moq), " \u0639\u062F\u062F"), /*#__PURE__*/React.createElement(Button, {
      variant: out ? 'secondary' : 'primary',
      size: "sm",
      disabled: out,
      onClick: () => onAdd(p),
      style: {
        width: '100%',
        marginTop: 12
      }
    }, out ? 'اطلاع موجودی' : 'افزودن به سبد')));
  })));
}
Object.assign(window, {
  DashboardScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/b2b-app/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/b2b-app/LoginScreen.jsx
try { (() => {
// B2B Login — split: celestial brand panel + Persian sign-in form. RTL.
const {
  BrandMark,
  Button,
  Input
} = window.VioletDesignSystem_7273c4;
function LoginScreen({
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      height: '100vh',
      background: 'var(--vt-color-bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 48,
      color: '#fff',
      background: 'radial-gradient(800px 500px at 70% 25%,#3B0764 0%,transparent 60%),linear-gradient(160deg,#0D0A1E,#18122B 55%,#1c0f3a)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "vt-aurora",
    style: {
      position: 'absolute',
      inset: '-20%',
      background: 'radial-gradient(500px 360px at 25% 30%,rgba(168,85,247,.25),transparent 60%),radial-gradient(420px 420px at 80% 70%,rgba(124,58,237,.22),transparent 60%)',
      filter: 'blur(10px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(BrandMark, {
    tone: "onDark",
    size: "lg"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '.2em',
      color: 'var(--vt-gold-300)',
      marginBottom: 14,
      fontFamily: 'var(--vt-font-fa)'
    }
  }, "\u0633\u0627\u0645\u0627\u0646\u0647\u0654 \u0633\u0641\u0627\u0631\u0634 \u0639\u0645\u062F\u0647"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--vt-font-fa)',
      fontWeight: 300,
      fontSize: 44,
      lineHeight: 1.4,
      margin: 0
    }
  }, "\u067E\u0646\u0644 \u0646\u0645\u0627\u06CC\u0646\u062F\u06AF\u0627\u0646", /*#__PURE__*/React.createElement("br", null), "\u0641\u0631\u0648\u0634 \u0648\u06CC\u0648\u0644\u062A"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#C4B5FD',
      fontSize: 16,
      lineHeight: 2,
      marginTop: 18,
      maxWidth: 380
    }
  }, "\u062B\u0628\u062A \u0648 \u067E\u06CC\u06AF\u06CC\u0631\u06CC \u0633\u0641\u0627\u0631\u0634\u200C\u0647\u0627\u06CC \u0639\u0645\u062F\u0647\u060C \u0645\u0634\u0627\u0647\u062F\u0647\u0654 \u0642\u06CC\u0645\u062A \u0647\u0645\u06A9\u0627\u0631 \u0648 \u0645\u0648\u062C\u0648\u062F\u06CC\u060C \u0648 \u0645\u062F\u06CC\u0631\u06CC\u062A \u0641\u0627\u06A9\u062A\u0648\u0631\u0647\u0627 \u2014 \u0647\u0645\u0647 \u062F\u0631 \u06CC\u06A9\u200C\u062C\u0627.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      display: 'flex',
      gap: 40
    }
  }, [['۱۰۰۰+', 'مدل ساعت'], ['۲۴ساعته', 'ثبت سفارش'], ['۳', 'انبار فعال']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--vt-font-fa)',
      fontSize: 26,
      color: 'var(--vt-gold-300)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: '#C4B5FD',
      marginTop: 4
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center',
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--vt-font-fa)',
      fontWeight: 600,
      fontSize: 28,
      color: 'var(--vt-color-text-strong)',
      margin: '0 0 6px'
    }
  }, "\u062E\u0648\u0634 \u0622\u0645\u062F\u06CC\u062F"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--vt-color-text-muted)',
      fontSize: 14,
      margin: '0 0 28px'
    }
  }, "\u0628\u0631\u0627\u06CC \u0648\u0631\u0648\u062F \u0628\u0647 \u067E\u0646\u0644\u060C \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u062D\u0633\u0627\u0628 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onLogin();
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u0627\u06CC\u0645\u06CC\u0644 \u0634\u0631\u06A9\u062A",
    placeholder: "dealer@company.com",
    defaultValue: "reza@saatpars.ir",
    leadingAffix: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "mail",
      style: {
        width: 18,
        height: 18
      }
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631",
    type: "password",
    defaultValue: "123456",
    leadingAffix: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "lock",
      style: {
        width: 18,
        height: 18
      }
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--vt-color-text)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    style: {
      accentColor: 'var(--vt-color-primary)'
    }
  }), "\u0645\u0631\u0627 \u0628\u0647 \u062E\u0627\u0637\u0631 \u0628\u0633\u067E\u0627\u0631"), /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'var(--vt-color-link)',
      cursor: 'pointer'
    }
  }, "\u0641\u0631\u0627\u0645\u0648\u0634\u06CC \u0631\u0645\u0632\u061F")), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    trailingIcon: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        transform: 'scaleX(-1)'
      }
    }, "\u2192"),
    style: {
      width: '100%',
      marginTop: 4
    }
  }, "\u0648\u0631\u0648\u062F \u0628\u0647 \u062D\u0633\u0627\u0628")), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontSize: 13,
      color: 'var(--vt-color-text-muted)',
      marginTop: 24
    }
  }, "\u062D\u0633\u0627\u0628 \u0646\u062F\u0627\u0631\u06CC\u062F\u061F ", /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'var(--vt-color-link)',
      cursor: 'pointer'
    }
  }, "\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0646\u0645\u0627\u06CC\u0646\u062F\u06AF\u06CC")))));
}
Object.assign(window, {
  LoginScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/b2b-app/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/b2b-app/OrdersScreen.jsx
try { (() => {
// B2B Order tracking — detail with vertical status timeline + line items. RTL.
const {
  OrderStatusPill,
  Button,
  SpecTable
} = window.VioletDesignSystem_7273c4;
const OB = window.VT_B2B;
function OrdersScreen({
  onBack
}) {
  const order = OB.orders[0]; // ORD-4821, shipped
  const steps = [['submitted', 'سفارش ثبت شد', '۱۴۰۵/۰۳/۲۱ — ۰۹:۱۲'], ['reviewing', 'در حال بررسی', '۱۴۰۵/۰۳/۲۱ — ۱۱:۴۰'], ['approved', 'تأیید شد', '۱۴۰۵/۰۳/۲۲ — ۰۸:۰۵'], ['shipped', 'ارسال شد', '۱۴۰۵/۰۳/۲۳ — ۱۴:۳۰'], ['completed', 'تکمیل سفارش', '—']];
  const currentIndex = 3; // shipped
  const lines = [['Chronograph Classic 42', 'VLT-2601', 20, 18500000], ['Eclipse Dress 38', 'VLT-1182', 25, 14700000], ['Tempo Quartz 36', 'VLT-1183', 15, 9600000]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 28px 60px',
      maxWidth: 1040,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: onBack,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13.5,
      color: 'var(--vt-color-text-muted)',
      cursor: 'pointer',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      transform: 'scaleX(-1)'
    }
  }, "\u2190"), " \u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u062F\u0627\u0634\u0628\u0648\u0631\u062F"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: 12,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--vt-font-fa)',
      fontWeight: 600,
      fontSize: 24,
      color: 'var(--vt-color-text-strong)',
      margin: '0 0 6px'
    }
  }, "\u0633\u0641\u0627\u0631\u0634 ", /*#__PURE__*/React.createElement("bdi", {
    style: {
      fontFamily: 'var(--vt-font-mono)'
    }
  }, order.id)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: 'var(--vt-color-text-muted)'
    }
  }, "\u062B\u0628\u062A\u200C\u0634\u062F\u0647 \u062F\u0631 ", order.date, " \xB7 ", OB.faDigits(order.items), " \u0645\u062F\u0644 \xB7 ", OB.faDigits(order.qty), " \u0639\u062F\u062F")), /*#__PURE__*/React.createElement(OrderStatusPill, {
    status: order.status,
    label: OB.statusFa[order.status],
    withIcon: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      gap: 28,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--vt-color-surface)',
      border: '1px solid var(--vt-color-border)',
      borderRadius: 'var(--vt-radius-lg)',
      padding: '22px 24px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--vt-font-fa)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--vt-color-text-strong)',
      margin: '0 0 18px'
    }
  }, "\u0631\u0648\u0646\u062F \u0633\u0641\u0627\u0631\u0634"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, steps.map(([key, label, time], i) => {
    const done = i < currentIndex,
      current = i === currentIndex;
    const color = done || current ? 'var(--vt-color-primary)' : 'var(--vt-color-border-strong)';
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      style: {
        display: 'flex',
        gap: 14,
        paddingBottom: i < steps.length - 1 ? 24 : 0,
        position: 'relative'
      }
    }, i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        insetInlineStart: 8,
        top: 18,
        bottom: 4,
        width: 2,
        background: done ? 'var(--vt-color-primary)' : 'var(--vt-color-divider)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative',
        zIndex: 1,
        width: 18,
        height: 18,
        flex: 'none',
        borderRadius: '50%',
        marginTop: 1,
        background: done ? 'var(--vt-color-primary)' : current ? 'var(--vt-color-surface)' : 'var(--vt-color-surface)',
        border: `2px solid ${color}`,
        display: 'grid',
        placeItems: 'center',
        boxShadow: current ? '0 0 0 4px var(--vt-color-primary-subtle)' : 'none'
      }
    }, done && /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#fff',
        fontSize: 10,
        lineHeight: 1
      }
    }, "\u2713"), current && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: 'var(--vt-color-primary)'
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: done || current ? 600 : 400,
        color: done || current ? 'var(--vt-color-text-strong)' : 'var(--vt-color-text-muted)'
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: 'var(--vt-color-text-subtle)',
        marginTop: 2,
        fontFamily: 'var(--vt-font-mono)'
      }
    }, time)));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--vt-color-surface)',
      border: '1px solid var(--vt-color-border)',
      borderRadius: 'var(--vt-radius-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      borderBottom: '1px solid var(--vt-color-divider)',
      fontFamily: 'var(--vt-font-fa)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--vt-color-text-strong)'
    }
  }, "\u0627\u0642\u0644\u0627\u0645 \u0633\u0641\u0627\u0631\u0634"), lines.map(([name, sku, qty, price], i) => /*#__PURE__*/React.createElement("div", {
    key: sku,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 20px',
      borderTop: i ? '1px solid var(--vt-color-divider)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--vt-radius-md)',
      overflow: 'hidden',
      flex: 'none',
      background: 'var(--vt-color-surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: OB.frame(i + 1, 120),
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--vt-color-text-strong)'
    }
  }, /*#__PURE__*/React.createElement("bdi", null, name)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontFamily: 'var(--vt-font-mono)',
      color: 'var(--vt-color-text-muted)'
    }
  }, /*#__PURE__*/React.createElement("bdi", null, sku), " \xB7 ", OB.faDigits(qty), " \u0639\u062F\u062F")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--vt-color-text-strong)'
    }
  }, OB.toman(qty * price))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--vt-color-surface)',
      border: '1px solid var(--vt-color-border)',
      borderRadius: 'var(--vt-radius-lg)',
      padding: '18px 20px'
    }
  }, [['جمع کل اقلام', OB.toman(order.total - 12000000)], ['هزینهٔ ارسال', OB.toman(12000000)]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13.5,
      color: 'var(--vt-color-text-muted)',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--vt-color-text)'
    }
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 12,
      borderTop: '1px solid var(--vt-color-divider)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--vt-color-text-strong)'
    }
  }, "\u0645\u0628\u0644\u063A \u0646\u0647\u0627\u06CC\u06CC"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--vt-color-primary)'
    }
  }, OB.toman(order.total))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    style: {
      flex: 1
    }
  }, "\u062F\u0627\u0646\u0644\u0648\u062F \u0641\u0627\u06A9\u062A\u0648\u0631"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: {
      flex: 1
    }
  }, "\u0633\u0641\u0627\u0631\u0634 \u0645\u062C\u062F\u062F"))))));
}
Object.assign(window, {
  OrdersScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/b2b-app/OrdersScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/b2b-app/data.js
try { (() => {
// Shared data for the Violet B2B wholesale app (Persian / RTL).
window.VT_B2B = function () {
  const img = (id, w = 400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
  const frames = ['photo-1523275335684-37898b6baf30', 'photo-1547996160-81dfa63595aa', 'photo-1524805444758-089113d48a6d', 'photo-1533139502658-0198f920d8e8', 'photo-1612817159949-195b6eb9e31a', 'photo-1508685096489-7aacd43bd3b1', 'photo-1434056886845-dac89ffe9b56', 'photo-1495856458515-0637185db551'];
  // Persian digits + thousands separators
  const faDigits = s => String(s).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
  const toman = n => faDigits(n.toLocaleString('en-US')) + ' تومان';
  const products = [{
    name: 'Chronograph Classic 42',
    sku: 'VLT-2601',
    price: 18500000,
    moq: 10,
    stock: 240,
    f: 0
  }, {
    name: 'Heritage Automatic 40',
    sku: 'VLT-2602',
    price: 22400000,
    moq: 10,
    stock: 120,
    f: 2
  }, {
    name: 'Sport Diver 44',
    sku: 'VLT-2603',
    price: 17800000,
    moq: 20,
    stock: 0,
    f: 3
  }, {
    name: 'Lunar Moonphase 41',
    sku: 'VLT-2604',
    price: 24300000,
    moq: 10,
    stock: 64,
    f: 6
  }, {
    name: 'Aurora Skeleton 42',
    sku: 'VLT-1180',
    price: 33800000,
    moq: 5,
    stock: 18,
    f: 7
  }, {
    name: 'Meridian GMT 43',
    sku: 'VLT-1181',
    price: 22300000,
    moq: 10,
    stock: 96,
    f: 4
  }, {
    name: 'Eclipse Dress 38',
    sku: 'VLT-1182',
    price: 14700000,
    moq: 15,
    stock: 310,
    f: 5
  }, {
    name: 'Tempo Quartz 36',
    sku: 'VLT-1183',
    price: 9600000,
    moq: 20,
    stock: 420,
    f: 1
  }];
  const orders = [{
    id: 'ORD-4821',
    date: '۱۴۰۵/۰۳/۲۱',
    items: 3,
    qty: 60,
    total: 1110000000,
    status: 'shipped'
  }, {
    id: 'ORD-4815',
    date: '۱۴۰۵/۰۳/۱۸',
    items: 2,
    qty: 30,
    total: 672000000,
    status: 'approved'
  }, {
    id: 'ORD-4806',
    date: '۱۴۰۵/۰۳/۱۲',
    items: 5,
    qty: 110,
    total: 2040000000,
    status: 'completed'
  }, {
    id: 'ORD-4799',
    date: '۱۴۰۵/۰۳/۰۹',
    items: 1,
    qty: 20,
    total: 192000000,
    status: 'reviewing'
  }, {
    id: 'ORD-4790',
    date: '۱۴۰۵/۰۳/۰۴',
    items: 2,
    qty: 25,
    total: 487500000,
    status: 'rejected'
  }];
  const statusFa = {
    submitted: 'ثبت‌شده',
    reviewing: 'در حال بررسی',
    approved: 'تأیید شد',
    shipped: 'ارسال شد',
    completed: 'تکمیل شد',
    rejected: 'رد شد'
  };
  return {
    img,
    frame: (i, w) => img(frames[i % frames.length], w),
    faDigits,
    toman,
    products,
    orders,
    statusFa
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/b2b-app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/reference-site/CatalogScreen.jsx
try { (() => {
// Catalog screen — filter rail + product grid with live count, sort, active chips.
const {
  Button,
  ProductCard,
  IconButton
} = window.VioletDesignSystem_7273c4;
const CD = window.VT_DATA;
function CatalogScreen({
  onOpen
}) {
  const [line, setLine] = React.useState('All');
  const [newOnly, setNewOnly] = React.useState(false);
  const [sort, setSort] = React.useState('Newest');
  const lines = ['All', 'Classic', 'Sport', 'Smart'];
  let items = CD.products.filter(p => (line === 'All' || p.line === line) && (!newOnly || p.badge === 'new'));
  if (sort === 'A–Z') items = [...items].sort((a, b) => a.name.localeCompare(b.name));
  const activeChips = [];
  if (line !== 'All') activeChips.push(['Line: ' + line, () => setLine('All')]);
  if (newOnly) activeChips.push(['New only', () => setNewOnly(false)]);
  const accGroup = (title, children) => /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--vt-color-divider)',
      padding: '18px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.04em',
      color: 'var(--vt-color-text-muted)',
      textTransform: 'uppercase',
      marginBottom: 14
    }
  }, title), children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--vt-color-bg)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '32px 40px 90px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      fontSize: 13,
      color: 'var(--vt-color-text-muted)',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: 'pointer'
    }
  }, "Home"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--vt-color-text-subtle)'
    }
  }, "/"), /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--vt-color-text)',
      fontWeight: 500
    }
  }, "Products")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--vt-font-display)',
      fontWeight: 300,
      fontSize: 48,
      color: 'var(--vt-color-text-strong)',
      margin: '0 0 6px',
      letterSpacing: '-.02em'
    }
  }, "All Products"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--vt-color-text-muted)',
      fontSize: 15,
      margin: '0 0 28px'
    }
  }, "Over a thousand models \u2014 a curated selection shown here."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '248px 1fr',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--vt-color-surface-sunken)',
      borderRadius: 'var(--vt-radius-lg)',
      padding: '4px 20px 14px',
      position: 'sticky',
      top: 88
    }
  }, accGroup('Collection', /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, lines.map(l => /*#__PURE__*/React.createElement("label", {
    key: l,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 14,
      cursor: 'pointer',
      color: line === l ? 'var(--vt-color-primary)' : 'var(--vt-color-text)',
      fontWeight: line === l ? 600 : 400
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "line",
    checked: line === l,
    onChange: () => setLine(l),
    style: {
      accentColor: 'var(--vt-color-primary)'
    }
  }), l)))), accGroup('Availability', /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 14,
      cursor: 'pointer',
      color: 'var(--vt-color-text)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: newOnly,
    onChange: e => setNewOnly(e.target.checked),
    style: {
      accentColor: 'var(--vt-color-primary)'
    }
  }), "New models only")), accGroup('Movement', /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, ['Quartz', 'Automatic', 'Smart'].map(m => /*#__PURE__*/React.createElement("span", {
    key: m,
    style: {
      fontSize: 12.5,
      padding: '6px 12px',
      borderRadius: 'var(--vt-radius-pill)',
      border: '1px solid var(--vt-color-border-strong)',
      color: 'var(--vt-color-text-muted)',
      cursor: 'pointer'
    }
  }, m))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 18,
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-live": "polite",
    style: {
      fontSize: 14,
      color: 'var(--vt-color-text-muted)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--vt-color-text-strong)'
    }
  }, items.length), " results"), activeChips.map(([label, clear], i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12.5,
      padding: '5px 6px 5px 12px',
      borderRadius: 'var(--vt-radius-pill)',
      background: 'var(--vt-color-primary-subtle)',
      color: 'var(--vt-color-primary)',
      fontWeight: 500
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    onClick: clear,
    style: {
      cursor: 'pointer',
      width: 16,
      height: 16,
      display: 'grid',
      placeItems: 'center',
      borderRadius: '50%',
      background: 'rgba(124,58,237,.16)'
    }
  }, "\xD7"))), activeChips.length > 0 && /*#__PURE__*/React.createElement("a", {
    onClick: () => {
      setLine('All');
      setNewOnly(false);
    },
    style: {
      fontSize: 13,
      color: 'var(--vt-color-text-muted)',
      cursor: 'pointer',
      textDecoration: 'underline'
    }
  }, "Clear all")), /*#__PURE__*/React.createElement("select", {
    value: sort,
    onChange: e => setSort(e.target.value),
    style: {
      fontFamily: 'var(--vt-font-sans)',
      fontSize: 14,
      padding: '8px 12px',
      borderRadius: 'var(--vt-radius-sm)',
      border: '1.5px solid var(--vt-color-border-strong)',
      background: 'var(--vt-color-surface)',
      color: 'var(--vt-color-text)'
    }
  }, /*#__PURE__*/React.createElement("option", null, "Newest"), /*#__PURE__*/React.createElement("option", null, "A\u2013Z"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 22
    }
  }, items.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.sku,
    name: p.name,
    sku: p.sku,
    badge: p.badge,
    image: CD.frame(p.f),
    hoverImage: CD.frame(p.f2),
    price: p.price,
    onClick: e => {
      e.preventDefault();
      onOpen(p);
    },
    href: "#"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Load more"))))));
}
Object.assign(window, {
  CatalogScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/reference-site/CatalogScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/reference-site/HomeScreen.jsx
try { (() => {
// Home screen — the celestial hero, marquee, New Models grid, lines, brand split, stats, CTA.
const {
  Button,
  ProductCard
} = window.VioletDesignSystem_7273c4;
const D = window.VT_DATA;
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      minHeight: 620,
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'radial-gradient(1200px 700px at 70% 30%,#3B0764 0%,transparent 60%),linear-gradient(160deg,#0D0A1E,#18122B 55%,#1c0f3a)',
      marginTop: -72,
      paddingTop: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "vt-aurora",
    style: {
      position: 'absolute',
      inset: '-20%',
      background: 'radial-gradient(600px 400px at 20% 30%,rgba(168,85,247,.25),transparent 60%),radial-gradient(500px 500px at 80% 70%,rgba(124,58,237,.22),transparent 60%),radial-gradient(400px 400px at 60% 20%,rgba(201,168,106,.10),transparent 60%)',
      filter: 'blur(10px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 1280,
      margin: '0 auto',
      padding: '0 40px',
      display: 'grid',
      gridTemplateColumns: '1.1fr .9fr',
      gap: 40,
      alignItems: 'center',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: '.26em',
      textTransform: 'uppercase',
      color: 'var(--vt-gold-300)',
      fontWeight: 500
    }
  }, "New Season \xB7 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--vt-font-display)',
      fontWeight: 300,
      letterSpacing: '-.02em',
      fontSize: 'clamp(52px,6vw,96px)',
      lineHeight: 1.02,
      color: '#fff',
      margin: '18px 0 22px'
    }
  }, "Timeless,", /*#__PURE__*/React.createElement("br", null), "reimagined for ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: '#C4B5FD'
    }
  }, "now")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.7,
      color: '#C4B5FD',
      maxWidth: 440,
      marginBottom: 34
    }
  }, "Over a thousand models of precision engineering and considered design \u2014 discover the latest Violet collection."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    trailingIcon: /*#__PURE__*/React.createElement("span", null, "\u2192"),
    onClick: () => onNav('catalog')
  }, "View New Models"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNav('catalog'),
    style: {
      background: 'rgba(255,255,255,.06)',
      border: '1.5px solid rgba(255,255,255,.2)',
      color: '#fff'
    }
  }, "Explore the brand"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      placeItems: 'center',
      height: 480
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "vt-spin-slow",
    style: {
      position: 'absolute',
      width: 460,
      height: 460,
      border: '1px solid rgba(196,181,253,.18)',
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "vt-spin-rev",
    style: {
      position: 'absolute',
      width: 540,
      height: 540,
      border: '1px dashed rgba(196,181,253,.14)',
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 420,
      height: 420,
      borderRadius: '50%',
      background: 'radial-gradient(circle,rgba(196,181,253,.30),transparent 62%)',
      filter: 'blur(8px)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    className: "vt-float",
    alt: "Violet timepiece",
    src: D.frame(0, 760),
    style: {
      width: 360,
      height: 360,
      borderRadius: '50%',
      objectFit: 'cover',
      boxShadow: '0 40px 90px rgba(0,0,0,.55),0 0 0 1px rgba(255,255,255,.08)'
    }
  }))));
}
function Marquee() {
  const words = ['Precision', 'Craftsmanship', 'Heritage', 'Timeless', 'Innovation'];
  const run = [...words, ...words];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBlock: '1px solid var(--vt-color-divider)',
      background: 'var(--vt-color-surface)',
      overflow: 'hidden',
      padding: '18px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "vt-marquee",
    style: {
      display: 'flex',
      gap: 60,
      whiteSpace: 'nowrap',
      width: 'max-content'
    }
  }, run.map((w, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--vt-font-display)',
      fontSize: 26,
      color: 'var(--vt-color-text-subtle)',
      display: 'flex',
      alignItems: 'center',
      gap: 60
    }
  }, w, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--vt-color-accent)',
      fontSize: 14
    }
  }, "\u2726")))));
}
function SecHead({
  eyebrow,
  title,
  link,
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 40,
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: '.26em',
      textTransform: 'uppercase',
      color: 'var(--vt-color-accent-strong)',
      fontWeight: 500
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--vt-font-display)',
      fontWeight: 300,
      fontSize: 'clamp(32px,4vw,48px)',
      color: 'var(--vt-color-text-strong)',
      margin: '6px 0 0',
      letterSpacing: '-.02em'
    }
  }, title)), link && /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('catalog'),
    style: {
      cursor: 'pointer',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--vt-color-primary)',
      display: 'inline-flex',
      gap: 8,
      alignItems: 'center'
    }
  }, link, " ", /*#__PURE__*/React.createElement("span", null, "\u2192")));
}
function HomeScreen({
  onNav,
  onOpen
}) {
  const wrap = {
    maxWidth: 1280,
    margin: '0 auto',
    padding: '0 40px'
  };
  const newM = D.products.filter(p => p.badge === 'new').slice(0, 4);
  const feat = D.products.slice(4, 8);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Marquee, null), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '100px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SecHead, {
    eyebrow: "Just arrived",
    title: "New Models",
    link: "View All New Models",
    onNav: onNav
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, newM.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.sku,
    name: p.name,
    sku: p.sku,
    badge: p.badge,
    image: D.frame(p.f),
    hoverImage: D.frame(p.f2),
    onClick: e => {
      e.preventDefault();
      onOpen(p);
    },
    href: "#"
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 0 100px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SecHead, {
    eyebrow: "Find your style",
    title: "Explore the lines",
    link: "View All Products",
    onNav: onNav
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, D.lines.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.name,
    onClick: () => onNav('catalog'),
    className: "vt-linecard",
    style: {
      position: 'relative',
      aspectRatio: '3/4',
      borderRadius: 'var(--vt-radius-xl)',
      overflow: 'hidden',
      cursor: 'pointer',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: D.frame(l.f, 700),
    alt: l.name,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 1s var(--vt-ease-standard)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(transparent 38%,rgba(13,10,30,.78))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      insetInlineStart: 26,
      bottom: 26,
      color: '#fff',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--vt-font-display)',
      fontSize: 32,
      fontWeight: 400,
      margin: 0
    }
  }, l.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,.72)',
      marginTop: 2
    }
  }, l.desc), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--vt-gold-300)',
      marginTop: 12,
      display: 'inline-flex',
      gap: 8,
      alignItems: 'center'
    }
  }, "Explore the line \u2192"))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--vt-color-surface)',
      padding: '100px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SecHead, {
    eyebrow: "Most loved",
    title: "Featured Pieces",
    link: "Explore All Products",
    onNav: onNav
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, feat.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.sku,
    name: p.name,
    sku: p.sku,
    badge: p.badge,
    image: D.frame(p.f),
    hoverImage: D.frame(p.f2),
    price: p.price,
    onClick: e => {
      e.preventDefault();
      onOpen(p);
    },
    href: "#"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    trailingIcon: /*#__PURE__*/React.createElement("span", null, "\u2192"),
    onClick: () => onNav('catalog')
  }, "View All Products")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '100px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4/5',
      borderRadius: 'var(--vt-radius-2xl)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: D.frame(4, 800),
    alt: "Craftsmanship",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 16,
      border: '1px solid rgba(255,255,255,.4)',
      borderRadius: 'var(--vt-radius-xl)'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: '.26em',
      textTransform: 'uppercase',
      color: 'var(--vt-color-accent-strong)',
      fontWeight: 500
    }
  }, "About Violet"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--vt-font-display)',
      fontWeight: 300,
      fontSize: 'clamp(34px,4vw,52px)',
      color: 'var(--vt-color-text-strong)',
      margin: '16px 0 22px',
      lineHeight: 1.1,
      letterSpacing: '-.02em'
    }
  }, "Timekeeping, refined to its essence"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.8,
      color: 'var(--vt-color-text-muted)',
      marginBottom: 30,
      maxWidth: 440
    }
  }, "Each Violet timepiece unites precision movements with quiet, considered design \u2014 built to carry a sense of authenticity and confidence across borders. Restraint, made to last."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    trailingIcon: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "Discover our story")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--vt-color-surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24,
      borderBlock: '1px solid var(--vt-color-divider)',
      padding: '56px 0'
    }
  }, [['1000+', 'Watch models'], ['4000+', 'Photography frames'], ['3', 'Languages · EN/RU/AR'], ['✦', 'Timeless by design']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--vt-font-display)',
      fontSize: 'clamp(44px,5vw,64px)',
      color: n === '✦' ? 'var(--vt-color-accent-strong)' : 'var(--vt-color-text-strong)',
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 13,
      color: 'var(--vt-color-text-muted)'
    }
  }, l)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
      color: '#fff',
      padding: '110px 0',
      background: 'radial-gradient(800px 400px at 50% 0%,#3B0764,transparent 60%),linear-gradient(160deg,#0D0A1E,#231940)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      ...wrap
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: '.26em',
      textTransform: 'uppercase',
      color: 'var(--vt-gold-300)',
      fontWeight: 500
    }
  }, "Begin"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--vt-font-display)',
      fontWeight: 300,
      fontSize: 'clamp(38px,5vw,64px)',
      margin: '12px 0 18px',
      letterSpacing: '-.02em'
    }
  }, "Find the one that's yours"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#C4B5FD',
      fontSize: 18,
      marginBottom: 32
    }
  }, "Explore the complete Violet catalogue \u2014 over a thousand models await."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    trailingIcon: /*#__PURE__*/React.createElement("span", null, "\u2192"),
    onClick: () => onNav('catalog')
  }, "Explore the collection"))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/reference-site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/reference-site/ProductScreen.jsx
try { (() => {
// Product detail screen — sticky gallery + info column, spec table, related grid.
const {
  Button,
  ProductCard,
  SpecTable,
  Badge
} = window.VioletDesignSystem_7273c4;
const PD = window.VT_DATA;
function ProductScreen({
  product,
  onOpen,
  onNav
}) {
  const p = product || PD.products[0];
  const views = [p.f, p.f2, (p.f + 3) % 8, (p.f + 5) % 8];
  const [main, setMain] = React.useState(0);
  const [color, setColor] = React.useState(0);
  React.useEffect(() => {
    setMain(0);
  }, [p.sku]);
  const colors = [['Midnight', '#231940'], ['Gold', '#C9A86A'], ['Steel', '#6B7280'], ['Plum', '#2E2348']];
  const related = PD.products.filter(r => r.sku !== p.sku).slice(0, 4);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--vt-color-bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '28px 40px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      fontSize: 13,
      color: 'var(--vt-color-text-muted)',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onNav('home'),
    style: {
      cursor: 'pointer'
    }
  }, "Home"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--vt-color-text-subtle)'
    }
  }, "\u203A"), /*#__PURE__*/React.createElement("span", {
    onClick: () => onNav('catalog'),
    style: {
      cursor: 'pointer'
    }
  }, "Products"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--vt-color-text-subtle)'
    }
  }, "\u203A"), /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--vt-color-text)',
      fontWeight: 500
    }
  }, p.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '560px 1fr',
      gap: 56,
      padding: '20px 0 72px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 88
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1/1',
      borderRadius: 'var(--vt-radius-lg)',
      overflow: 'hidden',
      background: 'linear-gradient(160deg,var(--vt-ink-100),var(--vt-violet-50))'
    }
  }, p.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 18,
      insetInlineStart: 18,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: p.badge
  })), /*#__PURE__*/React.createElement("img", {
    src: PD.frame(views[main], 900),
    alt: p.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 16
    }
  }, views.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => setMain(i),
    style: {
      width: 84,
      height: 84,
      borderRadius: 'var(--vt-radius-md)',
      overflow: 'hidden',
      cursor: 'pointer',
      border: `2px solid ${i === main ? 'var(--vt-color-primary)' : 'transparent'}`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: PD.frame(v, 200),
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: '.26em',
      textTransform: 'uppercase',
      color: 'var(--vt-color-accent-strong)',
      fontWeight: 500
    }
  }, p.line, " Collection"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--vt-font-display)',
      fontWeight: 300,
      fontSize: 'clamp(34px,4vw,52px)',
      color: 'var(--vt-color-text-strong)',
      lineHeight: 1.05,
      margin: '10px 0 8px',
      letterSpacing: '-.02em'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--vt-font-mono)',
      fontSize: 13,
      color: 'var(--vt-color-text-muted)'
    }
  }, p.sku), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 14
    }
  }, p.badge && /*#__PURE__*/React.createElement(Badge, {
    variant: p.badge
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.06em',
      padding: '5px 11px',
      borderRadius: 'var(--vt-radius-pill)',
      background: 'var(--vt-color-info-bg)',
      color: 'var(--vt-color-info)'
    }
  }, p.wr)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--vt-color-divider)',
      margin: '26px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.06em',
      color: 'var(--vt-color-text-muted)',
      marginBottom: 14
    }
  }, "KEY HIGHLIGHTS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, [p.mvmt, 'Stainless Steel 316L Case', 'Water Resistant — ' + p.wr, 'Sapphire-grade Mineral Glass', p.mm + ' Case Diameter'].map(h => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 15,
      color: 'var(--vt-color-text)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--vt-color-accent-strong)'
    }
  }), h))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--vt-color-divider)',
      margin: '26px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.06em',
      color: 'var(--vt-color-text-muted)',
      marginBottom: 14
    }
  }, "AVAILABLE COLOURS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, colors.map(([nm, c], i) => /*#__PURE__*/React.createElement("span", {
    key: nm,
    title: nm,
    onClick: () => setColor(i),
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: c,
      cursor: 'pointer',
      border: '2px solid var(--vt-color-surface)',
      boxShadow: i === color ? '0 0 0 2px var(--vt-color-primary)' : '0 0 0 1px var(--vt-color-border)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--vt-color-divider)',
      margin: '26px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    trailingIcon: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "Download Catalogue (PDF)"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Contact a retailer")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.7,
      color: 'var(--vt-color-text-muted)',
      marginTop: 22
    }
  }, "A refined everyday ", p.line.toLowerCase(), " timepiece \u2014 stainless steel, sapphire-clear mineral glass, and a balanced ", p.mm, " case. Designed in the Violet tradition of quiet, lasting elegance.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '0 40px'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 0',
      borderTop: '1px solid var(--vt-color-divider)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--vt-font-display)',
      fontWeight: 300,
      fontSize: 36,
      color: 'var(--vt-color-text-strong)',
      marginBottom: 24,
      letterSpacing: '-.02em'
    }
  }, "Specifications"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      border: '1px solid var(--vt-color-border)',
      borderRadius: 'var(--vt-radius-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(SpecTable, {
    rows: [['Case Diameter', p.mm], ['Case Material', 'Stainless Steel 316L'], ['Strap Material', 'Genuine Leather'], ['Glass Type', 'Mineral Crystal'], ['Movement', p.mvmt], ['Water Resistance', p.wr + ' (50 m)'], ['Available Colours', 'Midnight · Gold · Steel · Plum']]
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 0',
      borderTop: '1px solid var(--vt-color-divider)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--vt-font-display)',
      fontWeight: 300,
      fontSize: 36,
      color: 'var(--vt-color-text-strong)',
      marginBottom: 24,
      letterSpacing: '-.02em'
    }
  }, "You may also like"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, related.map(r => /*#__PURE__*/React.createElement(ProductCard, {
    key: r.sku,
    name: r.name,
    sku: r.sku,
    badge: r.badge,
    image: PD.frame(r.f),
    hoverImage: PD.frame(r.f2),
    onClick: e => {
      e.preventDefault();
      onOpen(r);
    },
    href: "#"
  }))))));
}
Object.assign(window, {
  ProductScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/reference-site/ProductScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/reference-site/SiteChrome.jsx
try { (() => {
// Site chrome: sticky header + footer for the Violet reference site.
const {
  BrandMark
} = window.VioletDesignSystem_7273c4;
function SiteHeader({
  active,
  onNav,
  dark
}) {
  const links = [['Home', 'home'], ['New Models', 'catalog'], ['Products', 'catalog'], ['About', 'home'], ['Contact', 'home']];
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById('vt-scroll');
    if (!el) return;
    const on = () => setScrolled(el.scrollTop > 40);
    el.addEventListener('scroll', on);
    return () => el.removeEventListener('scroll', on);
  }, []);
  const onHero = dark && !scrolled;
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: scrolled ? '12px 40px' : '18px 40px',
      background: onHero ? 'transparent' : 'rgba(248,247,255,.78)',
      backdropFilter: onHero ? 'none' : 'blur(18px) saturate(1.4)',
      borderBottom: `1px solid ${onHero ? 'transparent' : 'var(--vt-color-divider)'}`,
      transition: 'all var(--vt-duration-slow) var(--vt-ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('home'),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(BrandMark, {
    tone: onHero ? 'onDark' : 'light'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      alignItems: 'center'
    }
  }, links.map(([label, to], i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    onClick: () => onNav(to),
    className: "vt-navlink",
    style: {
      cursor: 'pointer',
      fontSize: 14,
      fontWeight: 500,
      color: onHero ? 'rgba(255,255,255,.82)' : active === to ? 'var(--vt-color-primary)' : 'var(--vt-color-text)'
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      fontSize: 12.5
    }
  }, ['EN', 'RU', 'AR'].map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      padding: '5px 9px',
      borderRadius: 6,
      cursor: 'pointer',
      color: i === 0 ? onHero ? '#fff' : 'var(--vt-color-primary)' : onHero ? 'rgba(255,255,255,.6)' : 'var(--vt-color-text-muted)',
      background: i === 0 ? onHero ? 'rgba(255,255,255,.16)' : 'var(--vt-color-primary-subtle)' : 'transparent'
    }
  }, l))));
}
function SiteFooter() {
  const col = (h, items) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: 'var(--vt-gold-300)',
      fontSize: 12,
      letterSpacing: '.12em',
      marginBottom: 16,
      fontWeight: 600
    }
  }, h), items.map(a => /*#__PURE__*/React.createElement("a", {
    key: a,
    style: {
      display: 'block',
      color: '#C4B5FD',
      fontSize: 14,
      marginBottom: 10,
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, a)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--vt-ink-950)',
      color: '#fff',
      padding: '64px 40px 30px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      gap: 40,
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BrandMark, {
    tone: "onDark",
    size: "lg"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#C4B5FD',
      fontSize: 13,
      lineHeight: 1.7,
      marginTop: 14,
      maxWidth: 280
    }
  }, "Brand \xB7 Watches \u2014 an international reference for timeless design, crafted for those who value time.")), col('EXPLORE', ['New Models', 'Products', 'Collections']), col('BRAND', ['About Violet', 'History', 'Quality']), col('SUPPORT', ['Contact', 'FAQ', 'Technologies'])), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(167,139,250,.2)',
      paddingTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
      color: '#A78BFA',
      fontSize: 13,
      flexWrap: 'wrap',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Violet Watches. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "English \xB7 \u0420\u0443\u0441\u0441\u043A\u0438\u0439 \xB7 \u0627\u0644\u0639\u0631\u0628\u064A\u0629"))));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/reference-site/SiteChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/reference-site/data.js
try { (() => {
// Shared mock product data for the Violet reference-site UI kit.
// Watch photography references the same Unsplash frames used by the source prototypes.
window.VT_DATA = function () {
  const img = (id, w = 600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
  const frames = ['photo-1523275335684-37898b6baf30', 'photo-1547996160-81dfa63595aa', 'photo-1524805444758-089113d48a6d', 'photo-1533139502658-0198f920d8e8', 'photo-1612817159949-195b6eb9e31a', 'photo-1508685096489-7aacd43bd3b1', 'photo-1434056886845-dac89ffe9b56', 'photo-1495856458515-0637185db551'];
  const products = [{
    name: 'Chronograph Classic 42',
    sku: 'VLT-2601',
    line: 'Classic',
    badge: 'new',
    price: '$1,250',
    f: 0,
    f2: 1,
    wr: '5 ATM',
    mvmt: 'Quartz Chronograph',
    mm: '42 mm'
  }, {
    name: 'Heritage Automatic 40',
    sku: 'VLT-2602',
    line: 'Classic',
    badge: 'new',
    price: '$1,490',
    f: 2,
    f2: 3,
    wr: '3 ATM',
    mvmt: 'Automatic',
    mm: '40 mm'
  }, {
    name: 'Sport Diver 44',
    sku: 'VLT-2603',
    line: 'Sport',
    badge: 'new',
    price: '$1,180',
    f: 3,
    f2: 5,
    wr: '20 ATM',
    mvmt: 'Quartz',
    mm: '44 mm'
  }, {
    name: 'Lunar Moonphase 41',
    sku: 'VLT-2604',
    line: 'Classic',
    badge: 'new',
    price: '$1,620',
    f: 6,
    f2: 4,
    wr: '5 ATM',
    mvmt: 'Automatic',
    mm: '41 mm'
  }, {
    name: 'Aurora Skeleton 42',
    sku: 'VLT-1180',
    line: 'Classic',
    badge: 'limited',
    price: '$2,250',
    f: 7,
    f2: 4,
    wr: '5 ATM',
    mvmt: 'Automatic Skeleton',
    mm: '42 mm'
  }, {
    name: 'Meridian GMT 43',
    sku: 'VLT-1181',
    line: 'Sport',
    badge: null,
    price: '$1,490',
    f: 4,
    f2: 0,
    wr: '10 ATM',
    mvmt: 'Quartz GMT',
    mm: '43 mm'
  }, {
    name: 'Eclipse Dress 38',
    sku: 'VLT-1182',
    line: 'Classic',
    badge: null,
    price: '$980',
    f: 5,
    f2: 2,
    wr: '3 ATM',
    mvmt: 'Quartz',
    mm: '38 mm'
  }, {
    name: 'Tempo Quartz 36',
    sku: 'VLT-1183',
    line: 'Smart',
    badge: null,
    price: '$640',
    f: 1,
    f2: 6,
    wr: '3 ATM',
    mvmt: 'Quartz',
    mm: '36 mm'
  }, {
    name: 'Nocturne Automatic 40',
    sku: 'VLT-1184',
    line: 'Classic',
    badge: null,
    price: '$1,720',
    f: 2,
    f2: 7,
    wr: '5 ATM',
    mvmt: 'Automatic',
    mm: '40 mm'
  }, {
    name: 'Pulse Smart 45',
    sku: 'VLT-1185',
    line: 'Smart',
    badge: 'new',
    price: '$890',
    f: 3,
    f2: 1,
    wr: '5 ATM',
    mvmt: 'Hybrid Smart',
    mm: '45 mm'
  }, {
    name: 'Regatta Sport 42',
    sku: 'VLT-1186',
    line: 'Sport',
    badge: null,
    price: '$1,340',
    f: 5,
    f2: 3,
    wr: '20 ATM',
    mvmt: 'Quartz Chronograph',
    mm: '42 mm'
  }, {
    name: 'Solstice Dress 39',
    sku: 'VLT-1187',
    line: 'Classic',
    badge: null,
    price: '$1,050',
    f: 6,
    f2: 0,
    wr: '3 ATM',
    mvmt: 'Quartz',
    mm: '39 mm'
  }];
  const lines = [{
    name: 'Classic',
    desc: 'Timeless dress watches',
    f: 2
  }, {
    name: 'Sport',
    desc: 'Built for motion & depth',
    f: 3
  }, {
    name: 'Smart',
    desc: 'Connected, quietly',
    f: 5
  }];
  return {
    img,
    frame: (i, w) => img(frames[i % frames.length], w),
    frames,
    products,
    lines
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/reference-site/data.js", error: String((e && e.message) || e) }); }

__ds_ns.BrandMark = __ds_scope.BrandMark;

__ds_ns.CartLineItem = __ds_scope.CartLineItem;

__ds_ns.InvoiceRow = __ds_scope.InvoiceRow;

__ds_ns.OrderTimeline = __ds_scope.OrderTimeline;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.SpecTable = __ds_scope.SpecTable;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.OrderStatusPill = __ds_scope.OrderStatusPill;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastViewport = __ds_scope.ToastViewport;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ImageUploader = __ds_scope.ImageUploader;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.SortDropdown = __ds_scope.SortDropdown;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
