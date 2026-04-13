import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";

export function Dialog({ open, onClose, title, children, className }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/65 p-4 md:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={cn(
              "relative w-full max-w-3xl rounded-[32px] border border-white/10 bg-[#1b110d]/95 p-6 text-museum-cream shadow-glow backdrop-blur-xl md:p-8",
              className,
            )}
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-museum-cream transition hover:bg-white/10"
              aria-label="Đóng hộp thoại"
            >
              <X className="h-4 w-4" />
            </button>
            {title ? (
              <div className="mb-6 border-b border-white/10 pb-4 pr-12">
                <h3 className="font-display text-3xl text-museum-cream">
                  {title}
                </h3>
              </div>
            ) : null}
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
