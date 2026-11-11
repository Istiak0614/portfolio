import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-control)] font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-300 ease-[var(--ease-out-expo)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-electric text-ink shadow-[0_8px_30px_-8px_rgb(77_141_255/0.6)] hover:-translate-y-0.5 hover:bg-electric-soft hover:shadow-[0_12px_36px_-8px_rgb(77_141_255/0.75)]",
        secondary:
          "glass text-text hover:-translate-y-0.5 hover:border-electric/50 hover:text-white",
        ghost: "text-muted hover:bg-white/5 hover:text-text",
      },
      size: {
        sm: "h-9 px-3.5 text-sm",
        md: "h-11 px-5 text-[0.95rem]",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
