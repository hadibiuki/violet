import type { Meta, StoryObj } from "@storybook/react-vite";
import { OrderTimeline } from "./OrderTimeline";

const meta: Meta<typeof OrderTimeline> = {
  title: "Commerce/OrderTimeline",
  component: OrderTimeline,
  tags: ["autodocs"],
  args: { current: "approved", times: { submitted: "10:02", reviewing: "11:15", approved: "12:30" } },
  argTypes: {
    current: { control: "select", options: ["submitted", "reviewing", "approved", "shipped", "completed"] },
    orientation: { control: "inline-radio", options: ["vertical", "horizontal"] },
  },
};
export default meta;
type Story = StoryObj<typeof OrderTimeline>;

export const Vertical: Story = {};
export const Horizontal: Story = { args: { orientation: "horizontal" }, decorators: [(S) => <div style={{ width: 560 }}><S /></div>] };
export const Rejected: Story = { args: { current: "reviewing", rejected: true } };
