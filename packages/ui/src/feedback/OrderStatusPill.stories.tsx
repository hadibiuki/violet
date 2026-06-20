import type { Meta, StoryObj } from "@storybook/react-vite";
import { OrderStatusPill } from "./OrderStatusPill";

const meta: Meta<typeof OrderStatusPill> = {
  title: "Feedback/OrderStatusPill",
  component: OrderStatusPill,
  tags: ["autodocs"],
  argTypes: {
    status: { control: "select", options: ["submitted", "reviewing", "approved", "shipped", "completed", "rejected"] },
  },
};
export default meta;
type Story = StoryObj<typeof OrderStatusPill>;

export const Reviewing: Story = { args: { status: "reviewing" } };
export const Pipeline: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <OrderStatusPill status="submitted" />
      <OrderStatusPill status="reviewing" />
      <OrderStatusPill status="approved" />
      <OrderStatusPill status="shipped" />
      <OrderStatusPill status="completed" />
      <OrderStatusPill status="rejected" />
    </div>
  ),
};
