import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Display/Divider",
  component: Divider,
  tags: ["autodocs"],
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {};
export const WithLabel: Story = { args: { label: "or" } };
export const Vertical: Story = {
  render: () => (
    <div style={{ display: "flex", height: 40, alignItems: "center", gap: 12 }}>
      <span>Left</span><Divider vertical /><span>Right</span>
    </div>
  ),
};
