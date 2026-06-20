import type { Meta, StoryObj } from "@storybook/react-vite";
import { Hero } from "./Hero";
import { Button } from "../forms/Button";

const meta: Meta<typeof Hero> = {
  title: "Marketing/Hero",
  component: Hero,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  args: {
    eyebrow: "New Season · 2026",
    title: "Timeless, reimagined for now.",
    lead: "Discover the latest Violet collection — built to keep pace with you.",
    actions: <><Button variant="accent">View New Models</Button><Button variant="secondary">Download Catalogue</Button></>,
  },
  argTypes: { align: { control: "inline-radio", options: ["left", "center"] } },
};
export default meta;
type Story = StoryObj<typeof Hero>;

export const Left: Story = {};
export const Centered: Story = { args: { align: "center" } };
