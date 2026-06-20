import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chip } from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Display/Chip",
  component: Chip,
  tags: ["autodocs"],
  args: { children: "Automatic" },
};
export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {};
export const Selected: Story = { args: { selected: true } };
export const Removable: Story = { args: { selected: true, onRemove: () => {} } };
