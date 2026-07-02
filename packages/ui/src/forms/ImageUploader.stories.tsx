import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageUploader, type UploadedImage } from "./ImageUploader";

const meta = {
  title: "Forms/ImageUploader",
  component: ImageUploader,
} satisfies Meta<typeof ImageUploader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [images, setImages] = useState<UploadedImage[]>([]);
    return <ImageUploader {...args} value={images} onChange={setImages} />;
  },
  args: { label: "Product images", hint: "PNG, JPG, or WebP · up to 8 images" },
};
