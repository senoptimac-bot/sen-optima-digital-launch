import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-normal focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/20 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 touch-action-manipulation select-none gpu-accelerated transition-gpu active:scale-[0.98] active:opacity-90",
  {
    variants: {
      variant: {
        default: "bg-foreground/10 text-foreground hover:bg-foreground/15 rounded-lg",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 rounded-lg",
        outline: "border border-foreground/10 bg-transparent text-foreground/60 hover:border-foreground/20 hover:text-foreground rounded-lg",
        secondary: "bg-foreground/5 text-foreground/70 hover:bg-foreground/10 rounded-lg",
        ghost: "text-foreground/60 hover:bg-foreground/5 hover:text-foreground rounded-lg",
        link: "text-foreground/50 underline-offset-4 hover:underline hover:text-foreground",
        cta: "border border-foreground/20 bg-transparent text-foreground/70 hover:border-accent hover:text-accent rounded-lg",
        "ghost-white": "border border-foreground/10 bg-transparent text-foreground/50 hover:border-accent hover:text-accent rounded-lg",
      },
      size: {
        default: "h-10 min-h-[48px] px-5 py-2",
        sm: "h-9 min-h-[44px] px-4 text-xs",
        lg: "h-12 min-h-[52px] px-8",
        icon: "h-10 w-10 min-h-[48px] min-w-[48px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
