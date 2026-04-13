import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollText } from "lucide-react";
import { HeroSection } from "./components/hero-section";
import { OverviewStrip } from "./components/overview-strip";
import { MindmapSection } from "./components/mindmap-section";
import { NodeDetailDialog } from "./components/node-detail-dialog";
import { TimelineSection } from "./components/timeline-section";
import { QuoteShowcase } from "./components/quote-showcase";
import { QuizSection } from "./components/quiz-section";
import { SummarySection } from "./components/summary-section";
import { museumContent } from "./data/ideology-data";

function App() {
  const defaultNode = useMemo(() => museumContent.nodes[0], []);
  const [selectedNode, setSelectedNode] = useState(defaultNode);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const overviewItems = useMemo(
    () => [
      {
        id: "nodes",
        label: "Luận điểm cốt lõi",
        value: `${museumContent.nodes.length} nút`,
        description:
          "Sơ đồ tư tưởng liên kết quyền dân tộc, vai trò lãnh đạo và sức mạnh quần chúng.",
      },
      {
        id: "timeline",
        label: "Tiến trình lịch sử",
        value: `${museumContent.timeline.length} mốc`,
        description:
          "Những thời điểm cho thấy tư tưởng đã chuyển hóa thành tổ chức và hành động cách mạng.",
      },
      {
        id: "quotes",
        label: "Không gian trích dẫn",
        value: `${museumContent.quotes.length} câu nói`,
        description:
          "Những phát biểu cô đọng tinh thần đạo lý và logic chính trị của sự nghiệp giải phóng dân tộc.",
      },
      {
        id: "quiz",
        label: "Chế độ học tập",
        value: `${museumContent.quiz.length} câu hỏi`,
        description:
          "Phần kiểm tra ngắn phục vụ thuyết trình, ôn tập hoặc minh họa trên lớp học.",
      },
    ],
    [],
  );

  const handleSelectNode = (node) => {
    setSelectedNode(node);
  };

  const handleOpenNodeDetail = (node) => {
    setSelectedNode(node);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-museum-bg text-museum-cream">
      <div className="fixed inset-x-0 top-0 z-40 border-b border-white/8 bg-[#120b08]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4 md:flex-row md:items-center md:justify-between md:px-10">
          <a
            href="#top"
            className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-museum-gold"
          >
            <span className="rounded-full border border-museum-gold/30 bg-museum-gold/10 p-2">
              <ScrollText className="h-4 w-4" />
            </span>
            Bảo tàng tư tưởng Hồ Chí Minh
          </a>
          <nav className="flex items-center gap-2 overflow-x-auto pb-1 text-xs text-museum-cream/70 md:gap-3 md:pb-0 md:text-sm">
            <a
              href="#mindmap"
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 transition hover:border-museum-gold/30 hover:text-museum-cream"
            >
              Sơ đồ tư duy
            </a>
            <a
              href="#timeline"
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 transition hover:border-museum-gold/30 hover:text-museum-cream"
            >
              Dòng thời gian
            </a>
            <a
              href="#quotes"
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 transition hover:border-museum-gold/30 hover:text-museum-cream"
            >
              Trích dẫn
            </a>
            <a
              href="#quiz"
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 transition hover:border-museum-gold/30 hover:text-museum-cream"
            >
              Trắc nghiệm
            </a>
            <a
              href="#summary"
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 transition hover:border-museum-gold/30 hover:text-museum-cream"
            >
              Tổng kết
            </a>
          </nav>
        </div>
      </div>

      <main id="top" className="relative overflow-hidden pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_12%),radial-gradient(circle_at_top,rgba(166,29,36,0.18),transparent_35%)]" />

        <HeroSection hero={museumContent.hero} />
        <OverviewStrip items={overviewItems} />

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedNode.id}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.4 }}
          >
            <MindmapSection
              nodes={museumContent.nodes}
              activeNode={selectedNode}
              onSelectNode={handleSelectNode}
              onOpenNodeDetail={handleOpenNodeDetail}
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-museum-gold/30 to-transparent" />
          <TimelineSection timeline={museumContent.timeline} />
        </div>
        <div className="relative bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(215,181,109,0.08),transparent_60%)]" />
          <QuoteShowcase quotes={museumContent.quotes} />
          <QuizSection quiz={museumContent.quiz} />
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <SummarySection summary={museumContent.summary} />
        </div>

        <NodeDetailDialog
          node={selectedNode}
          open={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />
      </main>
    </div>
  );
}

export default App;
