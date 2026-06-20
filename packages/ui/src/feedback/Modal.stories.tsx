import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Modal } from "./Modal";
import { Button } from "../forms/Button";

const meta: Meta<typeof Modal> = {
  title: "Feedback/Modal",
  component: Modal,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Confirm order"
          description="This will submit your request for review."
          footer={<><Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button><Button onClick={() => setOpen(false)}>Confirm</Button></>}
        >
          A centered dialog over a scrim. Closes on Esc, backdrop click, or ×.
        </Modal>
      </>
    );
  },
};
