import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Forms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: { label: "In stock only" },
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args) => {
    const [c, setC] = useState(true);
    return <Checkbox {...args} checked={c} onChange={setC} />;
  },
};
export const Indeterminate: Story = { args: { indeterminate: true, label: "Select all" } };
export const Disabled: Story = { args: { disabled: true, checked: true } };
