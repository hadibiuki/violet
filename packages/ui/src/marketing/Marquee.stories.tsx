import type { Meta, StoryObj } from "@storybook/react-vite";
import { Marquee } from "./Marquee";

const meta: Meta<typeof Marquee> = {
  title: "Marketing/Marquee",
  component: Marquee,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof Marquee>;

export const Default: Story = {
  args: { items: ["Timeless", "Refined", "Authentic", "Heritage", "Precision"] },
};
