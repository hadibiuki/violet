import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Forms/Switch",
  component: Switch,
  tags: ["autodocs"],
  args: { label: "Notify me on restock" },
};
export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (args) => {
    const [on, setOn] = useState(true);
    return <Switch {...args} checked={on} onChange={setOn} />;
  },
};
export const Off: Story = { args: { checked: false } };
export const Disabled: Story = { args: { disabled: true, checked: true } };
