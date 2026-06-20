import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { QuantityStepper } from "./QuantityStepper";

const meta: Meta<typeof QuantityStepper> = {
  title: "Forms/QuantityStepper",
  component: QuantityStepper,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof QuantityStepper>;

export const Default: Story = {
  render: () => {
    const [n, setN] = useState(10);
    return <QuantityStepper value={n} onChange={setN} />;
  },
};
export const WithMOQ: Story = {
  render: () => {
    const [n, setN] = useState(10);
    return <QuantityStepper value={n} moq={10} onChange={setN} />;
  },
};
