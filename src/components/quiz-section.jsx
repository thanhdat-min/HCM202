import { motion } from "framer-motion";
import { CheckCircle2, Circle, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import { SectionHeading } from "./section-heading";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

export function QuizSection({ quiz }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const currentQuestion = quiz[currentIndex];
  const totalQuestions = quiz.length;

  const score = useMemo(() => {
    return quiz.reduce((total, item, index) => {
      return total + (selectedAnswers[index] === item.answer ? 1 : 0);
    }, 0);
  }, [quiz, selectedAnswers]);

  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  const handleSelect = (optionIndex) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [currentIndex]: optionIndex }));
  };

  const handleNext = () => {
    if (currentIndex === totalQuestions - 1) {
      setSubmitted(true);
      return;
    }
    setCurrentIndex((prev) => prev + 1);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setSubmitted(false);
  };

  return (
    <section id="quiz" className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Trắc nghiệm nhận thức"
          title="Kiểm tra mức độ hiểu bài"
          description="Một phần trắc nghiệm ngắn giúp ôn lại nội dung cốt lõi, phù hợp cho thuyết trình, học tập hoặc minh họa trên lớp."
        />

        <Card className="border-museum-gold/15 bg-[linear-gradient(160deg,rgba(166,29,36,0.12),rgba(255,255,255,0.03))]">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-museum-gold">
                  Câu {currentIndex + 1} / {totalQuestions}
                </p>
                <p className="mt-3 text-sm text-museum-cream/70">
                  Điểm tạm thời: {score} / {totalQuestions}
                </p>
              </div>
              <div className="w-full max-w-xs">
                <Progress value={submitted ? 100 : progress} />
              </div>
            </div>

            <motion.div
              key={currentIndex + Number(submitted)}
              className="mt-8"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {submitted ? (
                <div className="rounded-[28px] border border-museum-gold/20 bg-black/15 p-8 text-center">
                  <p className="font-display text-5xl text-museum-cream">
                    {score} / {totalQuestions}
                  </p>
                  <p className="mt-4 text-lg leading-8 text-museum-cream/78">
                    {score === totalQuestions
                      ? "Rất tốt. Bạn đã nắm chắc các luận điểm cốt lõi của nội dung."
                      : score >= totalQuestions / 2
                        ? "Kết quả khá tốt. Hãy xem lại sơ đồ tư duy để củng cố những điểm then chốt."
                        : "Bạn nên đọc lại các nút tư tưởng và phần trích dẫn để hiểu rõ hơn mạch logic của bài học."}
                  </p>
                  <Button
                    type="button"
                    variant="secondary"
                    className="mt-8"
                    onClick={handleReset}
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Làm lại bài
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-4xl leading-tight text-museum-cream">
                    {currentQuestion.question}
                  </h3>
                  <div className="mt-8 grid gap-4">
                    {currentQuestion.options.map((option, optionIndex) => {
                      const isSelected =
                        selectedAnswers[currentIndex] === optionIndex;

                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleSelect(optionIndex)}
                          className={`flex items-start gap-4 rounded-[24px] border px-5 py-5 text-left transition ${
                            isSelected
                              ? "border-museum-gold/55 bg-museum-gold/12"
                              : "border-white/10 bg-white/[0.04] hover:border-museum-gold/30 hover:bg-white/[0.08]"
                          }`}
                        >
                          {isSelected ? (
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-museum-gold" />
                          ) : (
                            <Circle className="mt-0.5 h-5 w-5 shrink-0 text-museum-cream/45" />
                          )}
                          <span className="text-base leading-7 text-museum-cream/80">
                            {option}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-8 flex justify-end">
                    <Button
                      type="button"
                      onClick={handleNext}
                      disabled={selectedAnswers[currentIndex] === undefined}
                      className={`${
                        selectedAnswers[currentIndex] === undefined
                          ? "cursor-not-allowed opacity-50"
                          : ""
                      }`}
                    >
                      {currentIndex === totalQuestions - 1
                        ? "Nộp bài"
                        : "Câu tiếp theo"}
                    </Button>
                  </div>
                </>
              )}
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
