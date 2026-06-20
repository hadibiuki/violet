import type { Meta, StoryObj } from "@storybook/react-vite";
import { InvoiceRow } from "./InvoiceRow";

const meta: Meta<typeof InvoiceRow> = {
  title: "Commerce/InvoiceRow",
  component: InvoiceRow,
  tags: ["autodocs"],
  decorators: [(Story) => <div style={{ width: 560 }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof InvoiceRow>;

export const Table: Story = {
  render: () => (
    <div>
      <InvoiceRow header />
      <InvoiceRow description="Chronograph Classic 42" sku="VLT-2601" qty={10} unitPrice={1250} amount={12500} />
      <InvoiceRow description="Diver 300" sku="VLT-300" qty={5} unitPrice={980} amount={4900} />
      <InvoiceRow total description="Total" amount={17400} />
    </div>
  ),
};
