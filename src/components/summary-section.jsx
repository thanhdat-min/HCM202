import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { Card, CardContent } from "./ui/card";

export function SummarySection({ summary }) {
  return (
    <section id="summary" className="px-6 pb-24 pt-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tổng kết"
          title={summary.title}
          description={summary.description}
        />

        <div className="mb-8 rounded-[32px] border border-museum-gold/15 bg-[linear-gradient(135deg,rgba(166,29,36,0.18),rgba(255,255,255,0.03))] p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.28em] text-museum-gold/80">
            Lời kết diễn giải
          </p>
          <p className="mt-4 max-w-4xl font-display text-4xl leading-tight text-museum-cream md:text-5xl">
            Trong hệ tư tưởng này, độc lập dân tộc vừa là mục tiêu chính trị,
            vừa là cam kết đạo lý đối với phẩm giá con người, khối đại đoàn kết
            và năng lực tự quyết của cả dân tộc.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {summary.pillars.map((pillar, index) => (
            <motion.div
              key={pillar}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card className="h-full border-white/10 bg-white/[0.04]">
                <CardContent className="p-7">
                  <p className="text-sm uppercase tracking-[0.28em] text-museum-gold">
                    Luận điểm 0{index + 1}
                  </p>
                  <p className="mt-5 font-display text-3xl leading-tight text-museum-cream">
                    {pillar}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
