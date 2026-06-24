import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Forms/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: { label: "Message", placeholder: "Tell us about your enquiry…" },
  decorators: [(Story) => <div style={{ width: 360 }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};
export const WithHint: Story = { args: { hint: "We'll respond within 2 business days." } };
export const WithError: Story = { args: { error: "Please enter a message." } };
export const Tall: Story = { args: { minHeight: 200, label: "Notes" } };
