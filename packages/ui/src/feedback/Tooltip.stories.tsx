import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip } from "./Tooltip";
import { Button } from "../forms/Button";

const meta: Meta<typeof Tooltip> = {
  title: "Feedback/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: { label: "Adds to your request list", children: <Button variant="ghost">Hover me</Button> },
  decorators: [(Story) => <div style={{ padding: 48 }}><Story /></div>],
  argTypes: { side: { control: "inline-radio", options: ["top", "bottom", "left", "right"] } },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {};
export const Bottom: Story = { args: { side: "bottom" } };
