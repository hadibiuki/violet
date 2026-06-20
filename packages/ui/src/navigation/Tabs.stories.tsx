import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Navigation/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  decorators: [(Story) => <div style={{ width: 420 }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => {
    const [v, setV] = useState("new");
    return <Tabs tabs={[{ value: "new", label: "New Models" }, { value: "all", label: "All" }, { value: "limited", label: "Limited" }]} value={v} onChange={setV} />;
  },
};
