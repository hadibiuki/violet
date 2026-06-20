import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Forms/Radio",
  component: Radio,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Radio>;

export const Group: Story = {
  render: () => {
    const [v, setV] = useState("std");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Radio name="ship" value="std" label="Standard shipping" checked={v === "std"} onChange={setV} />
        <Radio name="ship" value="exp" label="Express shipping" checked={v === "exp"} onChange={setV} />
        <Radio name="ship" value="pick" label="Pickup" checked={v === "pick"} onChange={setV} />
      </div>
    );
  },
};
