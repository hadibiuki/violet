import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toast } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
  args: { title: "Order submitted", description: "We'll review your request shortly.", onClose: () => {} },
  argTypes: { tone: { control: "inline-radio", options: ["success", "error", "warning", "info"] } },
};
export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = { args: { tone: "success" } };
export const Error: Story = { args: { tone: "error", title: "Couldn't submit", description: "Check your connection and try again." } };
export const Warning: Story = { args: { tone: "warning", title: "Below MOQ", description: "Minimum 10 units required." } };
export const Info: Story = { args: { tone: "info", title: "New catalogue", description: "2026 models are now live." } };
