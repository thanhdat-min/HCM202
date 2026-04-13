import { motion } from "framer-motion";
import { Network, Quote, ScrollText, Target } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const iconMap = {
  nodes: Network,
  timeline: ScrollText,
  quotes: Quote,
  quiz: Target,
};

export function OverviewStrip({ items }) {
  return (
    <section className="px-6 pb-8 md:px-10 md:pb-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => {
            const Icon = iconMap[item.id] ?? ScrollText;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 + index * 0.08 }}
              >
                <Card className="h-full border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]">
                  <CardContent className="flex h-full items-start gap-4 p-5">
                    <div className="rounded-2xl border border-museum-gold/20 bg-museum-gold/10 p-3 text-museum-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-museum-gold/80">
                        {item.label}
                      </p>
                      <p className="mt-2 font-display text-3xl text-museum-cream">
                        {item.value}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-museum-cream/68">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
