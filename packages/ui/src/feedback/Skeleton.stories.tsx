import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  decorators: [(Story) => <div style={{ width: 260 }}><Story /></div>],
  argTypes: { variant: { control: "inline-radio", options: ["line", "text", "card", "circle"] } },
};
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Line: Story = { args: { variant: "line" } };
export const Text: Story = { args: { variant: "text", lines: 3 } };
export const Card: Story = { args: { variant: "card" } };
export const Circle: Story = { args: { variant: "circle", width: 48 } };
