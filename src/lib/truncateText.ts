// Truncate long text
export default function truncateText(
  text: string,
  limit: number = 120,
): string {
  return text.length > limit ? text.slice(0, limit) + "..." : text;
}
