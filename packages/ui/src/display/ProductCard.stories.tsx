import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProductCard } from "./ProductCard";

const meta: Meta<typeof ProductCard> = {
  title: "Display/ProductCard",
  component: ProductCard,
  tags: ["autodocs"],
  args: { name: "Chronograph Classic 42", sku: "VLT-2601" },
  decorators: [(Story) => <div style={{ width: 280 }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Site: Story = { args: { badge: "new" } };
export const B2B: Story = { args: { badge: "limited", price: "$1,250", moq: 10 } };
export const OutOfStock: Story = { args: { unavailable: true, price: "$980" } };
