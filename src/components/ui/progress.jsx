import { cn } from "../../lib/utils";

export function Progress({ value, className }) {
  return (
    <div
      className={cn(
        "h-2 overflow-hidden rounded-full bg-white/10",
        className,
      )}
    >
      <div
        className="h-full rounded-full bg-gradient-to-r from-museum-red via-museum-rose to-museum-gold transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
