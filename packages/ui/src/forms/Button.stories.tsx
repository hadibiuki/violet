import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Forms/Button",
  component: Button,
  tags: ["autodocs"],
  args: { children: "View New Models" },
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "ghost", "accent", "danger"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: "secondary" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Accent: Story = { args: { variant: "accent", children: "Order Now" } };
export const Danger: Story = { args: { variant: "danger", children: "Delete" } };
export const Loading: Story = { args: { loading: true } };
export const WithArrow: Story = { args: { trailingIcon: <span>→</span> } };
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
};
