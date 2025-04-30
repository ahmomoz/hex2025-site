// 時間格式轉成 YYYY/MM/DD
export function formatDateToYMD(dateStr: string): string {
  const date = new Date(dateStr);
  const y = date.getFullYear();
  const m = (date.getMonth() + 1).toString().padStart(2, "0");
  const d = date.getDate().toString().padStart(2, "0");
  return `${y}/${m}/${d}`;
}