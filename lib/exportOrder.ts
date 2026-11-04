import type { CartItem } from "@/context/CartContext";
import * as XLSX from "xlsx";

export type CustomerDetails = {
  name: string;
  firm: string;
  phone: string;
  address: string;
  note?: string;
};

export function exportOrderExcel(items: CartItem[], customer?: CustomerDetails) {
  const now = new Date();
  const dateLabel = now.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
  const totalQty = items.reduce((sum, i) => sum + i.quantity, 0);

  const rows: (string | number)[][] = [["SPL Piston — Order Request"], ["Date", dateLabel]];
  const merges: XLSX.Range[] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 6 } }];

  if (customer) {
    rows.push([], ["CUSTOMER DETAILS"]);
    const details: [string, string][] = [
      ["Name", customer.name],
      ["Firm / Company", customer.firm],
      ["Phone", customer.phone],
      ["Address", customer.address],
      ["Additional note", customer.note?.trim() || "—"],
    ];
    details.forEach(([label, value]) => {
      merges.push({ s: { r: rows.length, c: 1 }, e: { r: rows.length, c: 6 } });
      rows.push([label, value]);
    });
  }

  rows.push([], ["ORDER ITEMS"]);
  rows.push(["S.No", "Brand", "Model", "Product Type", "Size", "SKU Code", "Quantity"]);
  items.forEach((item, i) => {
    rows.push([i + 1, item.brand, item.modelName, item.variety, item.size, item.sku, item.quantity]);
  });
  rows.push([], ["", "", "", "", "", "Total quantity", totalQty]);

  const worksheet = XLSX.utils.aoa_to_sheet(rows);
  worksheet["!cols"] = [{ wch: 18 }, { wch: 14 }, { wch: 30 }, { wch: 16 }, { wch: 8 }, { wch: 24 }, { wch: 12 }];
  worksheet["!merges"] = merges;

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Order Request");

  const safeFirm = customer?.firm ? customer.firm.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") : "";
  const dateStamp = now.toISOString().slice(0, 10);
  XLSX.writeFile(workbook, `SPL-Piston-Order${safeFirm ? `-${safeFirm}` : ""}-${dateStamp}.xlsx`);
}