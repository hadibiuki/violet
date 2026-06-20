import type { Meta, StoryObj } from "@storybook/react-vite";
import { SpecTable } from "./SpecTable";

const meta: Meta<typeof SpecTable> = {
  title: "Display/SpecTable",
  component: SpecTable,
  tags: ["autodocs"],
  decorators: [(Story) => <div style={{ width: 360 }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof SpecTable>;

export const Default: Story = {
  args: {
    rows: [
      ["Case size", "42 mm"],
      ["Water resistance", "5 ATM (50 m)"],
      ["Movement", "Quartz Chronograph"],
      ["Material", "Stainless Steel 316L"],
    ],
  },
};
