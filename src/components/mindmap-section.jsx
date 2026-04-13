import { motion } from "framer-motion";
import { Landmark, MoveRight } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

function NodeCard({ node, activeNode, onSelectNode, className = "" }) {
  const isActive = activeNode?.id === node.id;

  return (
    <motion.button
      type="button"
      onClick={() => onSelectNode(node)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className={`rounded-[28px] border p-5 text-left shadow-soft transition duration-300 ${
        isActive
          ? "border-museum-gold/60 bg-museum-gold/12"
          : "border-white/10 bg-[#221510]/82 hover:border-museum-gold/35 hover:bg-white/[0.06]"
      } ${className}`}
    >
      <Badge className="mb-3">{`Nút 0${node.id}`}</Badge>
      <h3 className="font-display text-[2rem] leading-tight text-museum-cream">
        {node.shortTitle}
      </h3>
      <p className="mt-3 text-sm leading-7 text-museum-cream/72">
        {node.tagline}
      </p>
    </motion.button>
  );
}

export function MindmapSection({
  nodes,
  activeNode,
  onSelectNode,
  onOpenNodeDetail,
}) {
  const primary = nodes[0];
  const upperLeft = nodes[4];
  const upperRight = nodes[1];
  const lowerLeft = nodes[3];
  const lowerRight = nodes[2];

  return (
    <section id="mindmap" className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Sơ đồ tư duy"
          title="Năm luận điểm cốt lõi của tư tưởng giải phóng dân tộc"
          description="Bố cục được tái tổ chức như một bản đồ trưng bày: một hạt nhân trung tâm, các nhánh nội dung cân đối và một bảng diễn giải riêng để người xem không bị rối mắt."
        />

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {nodes.map((node) => (
            <button
              key={node.id}
              type="button"
              onClick={() => onSelectNode(node)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                activeNode?.id === node.id
                  ? "border-museum-gold/60 bg-museum-gold/12 text-museum-cream"
                  : "border-white/10 bg-white/[0.03] text-museum-cream/65 hover:border-museum-gold/25 hover:text-museum-cream"
              }`}
            >
              {node.shortTitle}
            </button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="relative overflow-hidden border-museum-gold/15 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-transparent">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,181,109,0.10),transparent_28%),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:auto,78px_78px,78px_78px]" />

            <div className="relative hidden gap-4 p-6 lg:grid lg:grid-cols-[1fr_0.82fr_1fr] lg:grid-rows-[auto_auto_auto]">
              <div className="col-start-2 row-start-1">
                <NodeCard
                  node={primary}
                  activeNode={activeNode}
                  onSelectNode={onSelectNode}
                />
              </div>

              <div className="col-start-1 row-start-2">
                <NodeCard
                  node={upperLeft}
                  activeNode={activeNode}
                  onSelectNode={onSelectNode}
                  className="h-full"
                />
              </div>

              <motion.div
                className="col-start-2 row-start-2 flex min-h-[260px] items-center justify-center"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
              >
                <div className="relative flex h-[240px] w-[240px] flex-col items-center justify-center rounded-full border border-museum-gold/30 bg-[radial-gradient(circle,rgba(215,181,109,0.16),rgba(33,20,16,0.94))] p-8 text-center shadow-glow">
                  <div className="absolute inset-4 rounded-full border border-museum-gold/10" />
                  <Landmark className="mb-4 h-8 w-8 text-museum-gold" />
                  <p className="font-display text-3xl leading-tight text-museum-cream">
                    Độc lập dân tộc
                  </p>
                  <p className="mt-3 text-sm leading-6 text-museum-cream/70">
                    Hạt nhân tư tưởng, nơi quy tụ chính nghĩa, mục tiêu và động
                    lực của cách mạng.
                  </p>
                </div>
              </motion.div>

              <div className="col-start-3 row-start-2">
                <NodeCard
                  node={upperRight}
                  activeNode={activeNode}
                  onSelectNode={onSelectNode}
                  className="h-full"
                />
              </div>

              <div className="col-start-1 row-start-3">
                <NodeCard
                  node={lowerLeft}
                  activeNode={activeNode}
                  onSelectNode={onSelectNode}
                  className="h-full"
                />
              </div>

              <div className="col-start-2 row-start-3 rounded-[24px] border border-white/10 bg-black/15 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-museum-gold/80">
                  Trục liên kết
                </p>
                <p className="mt-3 text-sm leading-7 text-museum-cream/70">
                  Từ quyền dân tộc đến hạnh phúc của nhân dân, từ vai trò lãnh
                  đạo đến sức mạnh quần chúng, toàn bộ sơ đồ vận động xoay quanh
                  mục tiêu giải phóng dân tộc.
                </p>
              </div>

              <div className="col-start-3 row-start-3">
                <NodeCard
                  node={lowerRight}
                  activeNode={activeNode}
                  onSelectNode={onSelectNode}
                  className="h-full"
                />
              </div>
            </div>

            <div className="relative grid gap-4 p-5 lg:hidden">
              {nodes.map((node) => (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => onSelectNode(node)}
                  className={`rounded-[24px] border p-5 text-left transition ${
                    activeNode?.id === node.id
                      ? "border-museum-gold/55 bg-museum-gold/12"
                      : "border-white/10 bg-white/5 hover:border-museum-gold/35 hover:bg-white/[0.08]"
                  }`}
                >
                  <Badge className="mb-3">{`Nút 0${node.id}`}</Badge>
                  <h3 className="font-display text-2xl text-museum-cream">
                    {node.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-museum-cream/70">
                    {node.summary}
                  </p>
                </button>
              ))}
            </div>
          </Card>

          <Card className="border-white/10 bg-white/[0.03]">
            <CardContent className="flex h-full flex-col justify-between p-7">
              <div>
                <Badge>Trọng tâm diễn giải</Badge>
                <h3 className="mt-5 font-display text-4xl text-museum-cream">
                  {activeNode.title}
                </h3>
                <p className="mt-4 text-sm uppercase tracking-[0.24em] text-museum-gold/80">
                  {activeNode.tagline}
                </p>
                <p className="mt-6 text-base leading-8 text-museum-cream/78">
                  {activeNode.summary}
                </p>

                <div className="mt-8 space-y-3">
                  {activeNode.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-2xl border border-white/8 bg-black/15 px-4 py-4 text-sm leading-6 text-museum-cream/75"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[24px] border border-museum-gold/15 bg-museum-gold/10 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-museum-gold/80">
                    Gợi ý đọc hiểu
                  </p>
                  <p className="mt-3 text-sm leading-7 text-museum-cream/72">
                    Hãy đọc luận điểm này như một mắt xích trong toàn bộ chỉnh
                    thể tư tưởng: quyền dân tộc, mục tiêu vì nhân dân, tổ chức
                    lãnh đạo, sức mạnh quần chúng và tinh thần chủ động cách
                    mạng.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenNodeDetail(activeNode)}
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-museum-gold transition hover:text-[#eccd87]"
              >
                Xem chi tiết
                <MoveRight className="h-4 w-4" />
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
