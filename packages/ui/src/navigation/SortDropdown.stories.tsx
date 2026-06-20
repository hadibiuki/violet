import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SortDropdown } from "./SortDropdown";

const meta: Meta<typeof SortDropdown> = {
  title: "Navigation/SortDropdown",
  component: SortDropdown,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof SortDropdown>;

export const Default: Story = {
  render: () => {
    const [v, setV] = useState("newest");
    return <SortDropdown value={v} onChange={setV} />;
  },
};
