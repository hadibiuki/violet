import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrandMark } from "./BrandMark";

const meta: Meta<typeof BrandMark> = {
  title: "Brand/BrandMark",
  component: BrandMark,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "inline-radio", options: ["lockup", "horizontal", "monogram", "wordmark"] },
    tone: { control: "inline-radio", options: ["light", "ink", "onDark"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg", "xl"] },
  },
};
export default meta;
type Story = StoryObj<typeof BrandMark>;

export const Lockup: Story = { args: { variant: "lockup", tagline: true } };
export const Horizontal: Story = { args: { variant: "horizontal" } };
export const Monogram: Story = { args: { variant: "monogram" } };
export const Wordmark: Story = { args: { variant: "wordmark" } };
export const OnInk: Story = {
  args: { variant: "lockup", tone: "ink", tagline: true },
  parameters: { backgrounds: { value: "ink" } },
};
