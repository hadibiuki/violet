import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Feedback/Spinner",
  component: Spinner,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};
export const Large: Story = { args: { size: 40, thickness: 3 } };
