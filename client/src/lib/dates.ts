export function prettifyDate(date: string | Date): string {
  switch (typeof date) {
    case "string":
      return prettifyDateString(date);
    case "object":
      return prettifyDateString(date.toISOString());
    default:
      return new Date().toLocaleString();
  }
}

function prettifyDateString(date: string): string {
  return new Date(date).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });
}
