import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { CartLineItem } from "./CartLineItem";

const meta: Meta<typeof CartLineItem> = {
  title: "Commerce/CartLineItem",
  component: CartLineItem,
  tags: ["autodocs"],
  decorators: [(Story) => <div style={{ width: 460 }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof CartLineItem>;

export const Editable: Story = {
  render: () => {
    const [n, setN] = useState(10);
    return <CartLineItem name="Diver 300" sku="VLT-300" price={980} qty={n} moq={5} onQty={setN} onRemove={() => {}} />;
  },
};
export const ReadOnly: Story = {
  args: { name: "Diver 300", sku: "VLT-300", price: 980, qty: 10, editable: false },
};
