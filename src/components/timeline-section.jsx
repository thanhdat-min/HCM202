import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { Card, CardContent } from "./ui/card";

export function TimelineSection({ timeline }) {
  return (
    <section id="timeline" className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Dòng thời gian lịch sử"
          title="Những mốc chuyển hóa tư tưởng thành hành động"
          description="Một tuyến thời gian cô đọng cho thấy tư tưởng, tổ chức và thực tiễn đấu tranh đã hội tụ như thế nào trong những bước ngoặt lịch sử của cách mạng Việt Nam."
        />

        <div className="mb-10 grid gap-4 lg:grid-cols-[0.7fr_1.3fr]">
          <Card className="border-museum-gold/15 bg-museum-gold/10">
            <CardContent className="p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-museum-gold/80">
                Lăng kính đọc hiểu
              </p>
              <p className="mt-4 text-base leading-8 text-museum-cream/76">
                Dòng thời gian không chỉ kể lại sự kiện. Nó cho thấy quá trình
                tư tưởng được hình thành từ trải nghiệm cá nhân, phát triển
                thành đường lối tổ chức và kết tinh thành chân lý chính trị của
                dân tộc.
              </p>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/[0.03]">
            <CardContent className="grid gap-4 p-6 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-museum-gold/80">
                  Khởi đầu
                </p>
                <p className="mt-3 font-display text-3xl text-museum-cream">
                  1911
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-museum-gold/80">
                  Bước ngoặt nền tảng
                </p>
                <p className="mt-3 font-display text-3xl text-museum-cream">
                  1930
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-museum-gold/80">
                  Chân lý bền vững
                </p>
                <p className="mt-3 font-display text-3xl text-museum-cream">
                  1966
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-museum-gold via-museum-rose to-transparent md:left-1/2 md:block" />
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className={`grid gap-6 md:grid-cols-2 ${
                  index % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <div className="hidden md:block" />
                <Card className="relative overflow-hidden border-white/10 bg-white/[0.04]">
                  <span className="absolute left-6 top-6 z-10 inline-flex h-3 w-3 rounded-full bg-museum-gold shadow-[0_0_0_6px_rgba(215,181,109,0.15)] md:left-auto md:right-[-34px]" />
                  <CardContent className="p-6 md:p-7">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-museum-gold">
                      {item.year}
                    </p>
                    <h3 className="mt-3 font-display text-3xl text-museum-cream">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-museum-cream/76">
                      {item.description}
                    </p>

                    {item.images?.[0] ? (
                      <figure className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#1c120e] p-4">
                        <div className="flex min-h-[240px] items-center justify-center rounded-xl bg-black/15 sm:min-h-[320px]">
                          <img
                            src={item.images[0].src}
                            alt={item.images[0].alt}
                            className="max-h-[420px] w-full object-contain"
                            loading="lazy"
                          />
                        </div>
                        {item.images[0].sourceUrl ? (
                          <figcaption className="mt-4 text-sm leading-6 text-museum-cream/68">
                            Nguồn:{" "}
                            <a
                              href={item.images[0].sourceUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="break-all text-museum-gold transition hover:text-museum-cream"
                            >
                              {item.images[0].sourceLabel ??
                                item.images[0].sourceUrl}
                            </a>
                          </figcaption>
                        ) : null}
                      </figure>
                    ) : null}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
