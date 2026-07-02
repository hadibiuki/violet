"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Button, ProductCard, StatTile, Tabs } from "@violet/ui";
import { Link } from "../../i18n/navigation";
import { PRODUCTS_FULL, frame } from "../../lib/catalog-data";

const copy = {
  en: ["The Violet families", "Four expressions of time", "Each line carries the same Violet restraint in a distinct register.", "Explore all products"],
  ru: ["Семейства Violet", "Четыре выражения времени", "Каждая линия сохраняет сдержанный характер Violet и раскрывает его в собственном ритме.", "Смотреть все модели"],
  ar: ["عائلات فيوليت", "أربعة تعبيرات للوقت", "يحمل كل خط هدوء فيوليت ودقتها، لكن بإيقاع وشخصية مستقلين.", "استكشف جميع المنتجات"],
} as const;

const meta = {
  Classic: { image: 0, models: "420+", water: "5 ATM", movement: "Quartz" },
  Sport: { image: 3, models: "260+", water: "20 ATM", movement: "Automatic" },
  Smart: { image: 10, models: "180+", water: "5 ATM", movement: "Hybrid" },
  Heritage: { image: 2, models: "140+", water: "5 ATM", movement: "Automatic" },
} as const;
type Line = keyof typeof meta;

export function CollectionsClient() {
  const locale = useLocale() as keyof typeof copy;
  const text = copy[locale] ?? copy.en;
  const [active, setActive] = useState<Line>("Classic");
  const current = meta[active];
  const products = PRODUCTS_FULL.filter((product) =>
    active === "Heritage" ? product.movement === "Automatic" : product.line === active,
  ).slice(0, 4);

  return (
    <main>
      <section className="collection-hero">
        <img key={active} src={frame(current.image)} alt="" />
        <div className="collection-hero-scrim" />
        <div className="collection-hero-copy">
          <span>{text[0]}</span>
          <h1>{active}</h1>
          <p>{text[2]}</p>
        </div>
      </section>
      <section className="collection-content">
        <Tabs
          aria-label={text[1]}
          value={active}
          onChange={(value) => setActive(value as Line)}
          tabs={(Object.keys(meta) as Line[]).map((value) => ({ value, label: value }))}
        />
        <div className="collection-story">
          <div>
            <span className="collection-eyebrow">{text[0]}</span>
            <h2>{text[1]}</h2>
            <p>{text[2]}</p>
            <Link href="/products" style={{ textDecoration: "none" }}>
              <Button variant="secondary">{text[3]} →</Button>
            </Link>
          </div>
          <div className="collection-stats">
            <StatTile display value={current.models} label="Models" />
            <StatTile display value={current.water} label="Water resistance" />
            <StatTile display value={current.movement} label="Movement" />
          </div>
        </div>
        <div className="collection-grid">
          {products.map((product) => (
            <ProductCard
              key={product.sku}
              name={product.name}
              sku={product.sku}
              image={product.image}
              hoverImage={product.hoverImage}
              badge={product.isNew ? "new" : null}
              href={`/${locale}/products/${product.sku}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
