// Component gallery for @violet/ui — a living catalog of every primitive.
// Visit /gallery in the order-app dev server to browse all components.
import { useState } from "react";
import {
  BrandMark, Button, IconButton, Input, Select, Checkbox, Radio, Switch, QuantityStepper,
  Badge, ProductCard, SpecTable, Chip, Avatar, StatTile, Divider,
  OrderStatusPill, Spinner, Skeleton, Tooltip, Toast, Modal,
  Breadcrumb, Tabs, Pagination, SortDropdown,
  OrderTimeline, CartLineItem, InvoiceRow,
  Hero, Marquee,
} from "@violet/ui";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section style={{ marginBottom: "var(--vt-space-12)" }}>
    <h2 style={{ fontFamily: "var(--vt-font-display)", fontSize: "var(--vt-text-2xl)", color: "var(--vt-color-text-strong)", marginBottom: "var(--vt-space-4)" }}>{title}</h2>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--vt-space-4)", alignItems: "flex-start" }}>{children}</div>
  </section>
);

export function Gallery() {
  const [qty, setQty] = useState(10);
  const [tab, setTab] = useState("new");
  const [page, setPage] = useState(3);
  const [checked, setChecked] = useState(true);
  const [on, setOn] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div dir="ltr" style={{ maxWidth: 1100, margin: "0 auto", padding: "var(--vt-space-10) var(--vt-space-8)", fontFamily: "var(--vt-font-sans)", color: "var(--vt-color-text)" }}>
      <Hero eyebrow="New Season · 2026" title="Timeless, reimagined for now." lead="A token-driven component library." actions={<><Button variant="accent">View New Models</Button><Button variant="secondary">Download Catalogue</Button></>} minHeight={340} align="center" style={{ borderRadius: "var(--vt-radius-2xl)", marginBottom: "var(--vt-space-12)" }} />

      <Section title="Brand"><BrandMark variant="lockup" tagline /><BrandMark variant="horizontal" /><BrandMark variant="monogram" /></Section>

      <Section title="Buttons">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="accent">Accent</Button>
        <Button variant="danger">Danger</Button>
        <Button loading>Loading</Button>
        <IconButton icon={<span>★</span>} aria-label="Star" />
      </Section>

      <Section title="Forms">
        <div style={{ width: 220 }}><Input label="Dealer name" placeholder="Acme Watches" hint="As on your licence" /></div>
        <div style={{ width: 220 }}><Select label="Country" placeholder="Choose…" options={["Iran", "UAE", "Russia"]} /></div>
        <Checkbox label="In stock only" checked={checked} onChange={setChecked} />
        <Radio name="g" value="a" label="Option A" checked />
        <Switch label="Notify on restock" checked={on} onChange={setOn} />
        <QuantityStepper value={qty} moq={10} onChange={setQty} />
      </Section>

      <Section title="Display">
        <Badge variant="new" /><Badge variant="limited" /><Badge variant="soldout">Out</Badge>
        <Chip selected>Active filter</Chip>
        <Avatar name="Hadi B" />
        <div style={{ width: 220 }}><ProductCard name="Chronograph Classic 42" sku="VLT-2601" badge="new" price="$1,250" moq={10} /></div>
        <div style={{ width: 240 }}><StatTile value="1000+" label="Models" delta="12%" /></div>
        <div style={{ width: 240 }}><SpecTable rows={[["Case", "42 mm"], ["Water", "5 ATM"], ["Movement", "Quartz"]]} /></div>
      </Section>

      <Section title="Feedback">
        <OrderStatusPill status="reviewing" /><OrderStatusPill status="shipped" /><OrderStatusPill status="completed" />
        <Spinner />
        <Tooltip label="Hello"><Button variant="ghost">Hover me</Button></Tooltip>
        <Button onClick={() => setModalOpen(true)}>Open modal</Button>
        <div style={{ width: 200 }}><Skeleton variant="text" /></div>
        <Toast tone="success" title="Order submitted" description="We'll review shortly." onClose={() => {}} />
      </Section>

      <Section title="Navigation">
        <Breadcrumb items={[{ label: "Home", href: "#" }, { label: "Watches", href: "#" }, { label: "VLT-2601" }]} />
        <div style={{ width: "100%" }}><Tabs tabs={[{ value: "new", label: "New" }, { value: "all", label: "All" }]} value={tab} onChange={setTab} /></div>
        <Pagination page={page} pageCount={8} onChange={setPage} />
        <SortDropdown value="newest" />
      </Section>

      <Section title="Commerce">
        <div style={{ width: 280 }}><OrderTimeline current="approved" times={{ submitted: "10:02", approved: "12:30" }} /></div>
        <div style={{ width: 420 }}>
          <CartLineItem name="Diver 300" sku="VLT-300" price={980} qty={qty} moq={5} onQty={setQty} onRemove={() => {}} />
          <Divider />
          <InvoiceRow header />
          <InvoiceRow description="Diver 300" sku="VLT-300" qty={10} unitPrice={980} amount={9800} />
          <InvoiceRow total description="Total" amount={9800} />
        </div>
      </Section>

      <Marquee items={["Timeless", "Refined", "Authentic"]} />

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Confirm order" description="This will submit your request for review." footer={<><Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button><Button onClick={() => setModalOpen(false)}>Confirm</Button></>}>
        A centered dialog over a scrim. Closes on Esc, backdrop click, or ×.
      </Modal>
    </div>
  );
}
