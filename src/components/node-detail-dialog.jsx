import { Quote } from "lucide-react";
import { Dialog } from "./ui/dialog";
import { Badge } from "./ui/badge";

export function NodeDetailDialog({ node, open, onClose }) {
  if (!node) return null;

  return (
    <Dialog open={open} onClose={onClose} title={node.title}>
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Badge>{`Nút 0${node.id}`}</Badge>
          <p className="mt-4 text-lg leading-8 text-museum-cream/80">
            {node.explanation}
          </p>
          <div className="mt-8 rounded-[28px] border border-museum-gold/20 bg-museum-gold/10 p-6">
            <Quote className="h-6 w-6 text-museum-gold" />
            <p className="mt-4 font-display text-3xl leading-tight text-museum-cream">
              "{node.quote}"
            </p>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
          <p className="text-sm uppercase tracking-[0.24em] text-museum-gold">
            Ghi chú diễn giải
          </p>
          <div className="mt-5 space-y-4">
            {node.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-2xl border border-white/10 bg-black/15 px-4 py-4 text-sm leading-6 text-museum-cream/75"
              >
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Dialog>
  );
}
