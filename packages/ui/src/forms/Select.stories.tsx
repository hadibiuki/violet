import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Forms/Select",
  component: Select,
  tags: ["autodocs"],
  args: { label: "Country", placeholder: "Choose…", options: ["Iran", "UAE", "Russia"] },
  decorators: [(Story) => <div style={{ width: 280 }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};
export const WithError: Story = { args: { error: "Please pick a country" } };
export const ObjectOptions: Story = {
  args: { options: [{ value: "az", label: "A–Z" }, { value: "newest", label: "Newest" }] },
};
