import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Display/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: { variant: { control: "inline-radio", options: ["new", "limited", "neutral", "soldout"] } },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const New: Story = { args: { variant: "new" } };
export const Limited: Story = { args: { variant: "limited" } };
export const SoldOut: Story = { args: { variant: "soldout", children: "Out of stock" } };
export const All: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8 }}>
      <Badge variant="new" /><Badge variant="limited" /><Badge variant="neutral">Draft</Badge><Badge variant="soldout">Out</Badge>
    </div>
  ),
};
