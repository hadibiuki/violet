import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Forms/Input",
  component: Input,
  tags: ["autodocs"],
  args: { label: "Dealer name", placeholder: "Acme Watches" },
  decorators: [(Story) => <div style={{ width: 280 }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};
export const WithHint: Story = { args: { hint: "As shown on your trade licence" } };
export const WithError: Story = { args: { error: "This field is required" } };
export const WithAffix: Story = { args: { label: "Price", leadingAffix: <span>$</span>, placeholder: "0.00" } };
