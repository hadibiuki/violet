import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Forms/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  args: { icon: <span>★</span>, "aria-label": "Favourite" },
  argTypes: {
    variant: { control: "inline-radio", options: ["ghost", "secondary", "primary"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof IconButton>;

export const Ghost: Story = {};
export const Secondary: Story = { args: { variant: "secondary" } };
export const Primary: Story = { args: { variant: "primary" } };
