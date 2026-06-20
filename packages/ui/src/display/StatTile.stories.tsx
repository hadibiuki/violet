import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatTile } from "./StatTile";

const meta: Meta<typeof StatTile> = {
  title: "Display/StatTile",
  component: StatTile,
  tags: ["autodocs"],
  args: { value: "1000+", label: "Models" },
  decorators: [(Story) => <div style={{ width: 240 }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof StatTile>;

export const Dashboard: Story = { args: { delta: "12%", deltaDir: "up" } };
export const Down: Story = { args: { value: "320", label: "Open orders", delta: "4%", deltaDir: "down" } };
export const DisplayFace: Story = { args: { value: "4000+", label: "Photo frames", display: true } };
