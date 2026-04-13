import { motion } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function HeroSection({ hero }) {
  return (
    <section className="relative overflow-hidden px-6 pb-12 pt-8 md:px-10 md:pb-16 md:pt-12">
      <div className="absolute inset-0 bg-grain opacity-90" />
      <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-museum-red/20 blur-3xl" />
      <div className="absolute right-[12%] top-[20%] h-40 w-40 rounded-full border border-museum-gold/25 bg-museum-gold/10 blur-2xl" />
      <div className="absolute left-[8%] top-[18%] hidden h-56 w-56 rounded-full border border-white/5 bg-white/[0.03] blur-3xl lg:block" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Badge>{hero.eyebrow}</Badge>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-none text-museum-cream md:text-7xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-museum-cream/78 md:text-xl">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-museum-cream/56">
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">
              Không gian học thuật hiện đại
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">
              Hành trình tương tác như bảo tàng số
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">
              Tối ưu cho trình bày và học tập
            </span>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild>
              <a href="#mindmap">
                {hero.ctaPrimary}
                <ArrowDownRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href="#quiz">{hero.ctaSecondary}</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="relative overflow-hidden rounded-[32px] border border-museum-gold/20 bg-gradient-to-br from-white/10 via-white/[0.03] to-transparent p-8 shadow-glow">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,181,109,0.18),transparent_35%),linear-gradient(145deg,rgba(255,255,255,0.06),transparent_60%)]" />
            <div className="relative">
              <div className="mb-10 inline-flex rounded-full border border-museum-gold/25 bg-museum-gold/10 p-3 text-museum-gold">
                <Sparkles className="h-6 w-6" />
              </div>
              <p className="font-display text-4xl leading-tight text-museum-cream">
                "{hero.quote}"
              </p>
              <p className="mt-6 text-sm uppercase tracking-[0.28em] text-museum-gold/90">
                {hero.quoteSource}
              </p>
              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {[
                  "Sơ đồ tư tưởng tương tác",
                  "Tiến trình lịch sử trọng điểm",
                  "Khu trắc nghiệm và tổng kết",
                  "Thiết kế phù hợp thuyết trình",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-museum-cream/75"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-[24px] border border-white/10 bg-black/15 p-5 text-sm leading-7 text-museum-cream/72">
                Trang được tổ chức như một tuyến tham quan học thuật: mở đầu,
                sơ đồ khái niệm, bối cảnh lịch sử, không gian trích dẫn, phần
                tương tác học tập và khối tổng kết cuối hành trình.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
