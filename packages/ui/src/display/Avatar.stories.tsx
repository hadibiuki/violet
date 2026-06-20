import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: { name: "Hadi Biuki" },
  argTypes: { size: { control: "inline-radio", options: ["sm", "md", "lg"] } },
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Initials: Story = {};
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Avatar name="Ali Reza" size="sm" /><Avatar name="Ali Reza" size="md" /><Avatar name="Ali Reza" size="lg" />
    </div>
  ),
};
