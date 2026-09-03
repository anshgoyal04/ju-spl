import type { CartItem } from "@/context/CartContext";
import * as XLSX from "xlsx";

export function exportOrderExcel(items: CartItem[]) {
  const rows = items.map((item) => ({
    Brand: item.brand,
    Model: item.modelName,
    "Product Type": item.variety,
    Size: item.size,
    "SKU Code": item.sku,
    Quantity: item.quantity,
  }));

  const worksheet = XLSX.utils.json_to_sheet(rows);
  worksheet["!cols"] = [{ wch: 14 }, { wch: 28 }, { wch: 14 }, { wch: 8 }, { wch: 22 }, { wch: 10 }];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Order Request");

  const date = new Date().toISOString().slice(0, 10);
  XLSX.writeFile(workbook, `SPL-Piston-Order-Request-${date}.xlsx`);
}