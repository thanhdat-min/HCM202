import { cloneElement, isValidElement } from "react";
import { cn } from "../../lib/utils";

const variants = {
  primary:
    "bg-museum-gold text-museum-bg hover:bg-[#e6c782] focus-visible:outline-museum-gold",
  secondary:
    "border border-white/15 bg-white/5 text-museum-cream hover:bg-white/10 focus-visible:outline-white/30",
  ghost:
    "bg-transparent text-museum-cream hover:bg-white/10 focus-visible:outline-white/20",
};

export function Button({
  asChild = false,
  className,
  variant = "primary",
  children,
  ...props
}) {
  const buttonClassName = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.18em] uppercase transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    variants[variant],
    className,
  );

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      className: cn(buttonClassName, children.props.className),
      ...props,
    });
  }

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
}
