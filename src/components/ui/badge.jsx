import { cn } from "../../lib/utils";

export function Badge({ className, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-museum-gold/30 bg-museum-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-museum-gold",
        className,
      )}
      {...props}
    />
  );
}
