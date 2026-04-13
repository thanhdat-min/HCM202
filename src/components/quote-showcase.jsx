import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function QuoteShowcase({ quotes }) {
  return (
    <section id="quotes" className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Không gian trích dẫn"
          title="Những câu nói trở thành kim chỉ nam tư tưởng"
          description="Một tuyển chọn phát biểu tiêu biểu giúp cô đọng chiều sâu đạo lý, mục tiêu chính trị và logic hành động trong tư tưởng Hồ Chí Minh."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-museum-gold/15 bg-[radial-gradient(circle_at_top_left,rgba(215,181,109,0.16),rgba(255,255,255,0.03))]">
            <CardContent className="p-8 md:p-10">
              <Badge>Trích dẫn nổi bật</Badge>
              <Quote className="mt-6 h-10 w-10 text-museum-gold" />
              <p className="mt-6 font-display text-5xl leading-tight text-museum-cream">
                "{quotes[0].text}"
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-museum-cream/72">
                Câu nói này kết tinh hạt nhân đạo lý của toàn bộ không gian
                trưng bày: độc lập và tự do không phải là biểu tượng hình thức
                của nhà nước, mà là giá trị tối thượng dẫn dắt mọi hành động
                cách mạng.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            {quotes.slice(1).map((quote, index) => (
              <motion.div
                key={quote.text}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <Card className="h-full border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))]">
                  <CardContent className="flex h-full flex-col justify-between p-7">
                    <div>
                      <Quote className="h-8 w-8 text-museum-gold" />
                      <p className="mt-6 font-display text-3xl leading-tight text-museum-cream">
                        "{quote.text}"
                      </p>
                    </div>
                    <div className="mt-8">
                      <Badge>{quote.theme}</Badge>
                    </div>
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
