import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { Card, CardContent } from "./ui/card";

export function AIUsageSection({ aiUsage }) {
  return (
    <section id="ai-usage" className="px-6 pb-24 pt-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={aiUsage.eyebrow}
          title={aiUsage.title}
          description={aiUsage.description}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {aiUsage.tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <Card className="h-full border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))]">
                <CardContent className="p-7">
                  <p className="text-xs uppercase tracking-[0.28em] text-museum-gold/80">
                    Công cụ {index + 1}
                  </p>
                  <h3 className="mt-3 font-display text-3xl text-museum-cream">
                    {tool.name}
                  </h3>

                  <div className="mt-6 space-y-4 text-sm leading-7 text-museum-cream/76">
                    <div>
                      <p className="font-semibold text-museum-cream">Mục đích</p>
                      <p>{tool.purpose}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-museum-cream">
                        Prompt chính
                      </p>
                      <p>{tool.prompt}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-museum-cream">Kết quả</p>
                      <p>{tool.result}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-museum-cream">
                        Phần chỉnh sửa của sinh viên
                      </p>
                      <p>{tool.edited}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <Card className="border-museum-gold/15 bg-museum-gold/10">
            <CardContent className="p-7">
              <p className="text-xs uppercase tracking-[0.28em] text-museum-gold/80">
                Nguyên tắc sử dụng
              </p>
              <div className="mt-5 space-y-4">
                {aiUsage.principles.map((principle) => (
                  <div
                    key={principle}
                    className="rounded-2xl border border-white/10 bg-black/15 px-4 py-4 text-sm leading-7 text-museum-cream/75"
                  >
                    {principle}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-[linear-gradient(135deg,rgba(166,29,36,0.18),rgba(255,255,255,0.03))]">
            <CardContent className="p-7 md:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-museum-gold/80">
                Cam kết học thuật
              </p>
              <p className="mt-5 font-display text-3xl leading-tight text-museum-cream md:text-4xl">
                {aiUsage.commitment}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
