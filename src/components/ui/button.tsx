import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 touch-action-manipulation select-none gpu-accelerated transition-all duration-300 ease-out active:scale-[0.97]",
  {
    variants: {
      variant: {
        default: "bg-foreground/10 text-foreground hover:bg-foreground/15 rounded-full shadow-sm hover:shadow-md",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 rounded-full",
        outline: "border border-foreground/10 bg-transparent text-foreground/60 hover:border-foreground/20 hover:text-foreground rounded-full shadow-sm",
        secondary: "bg-foreground/5 text-foreground/70 hover:bg-foreground/10 rounded-full",
        ghost: "text-foreground/60 hover:bg-foreground/5 hover:text-foreground rounded-full",
        link: "text-foreground/50 underline-offset-4 hover:underline hover:text-foreground",
        cta: "border border-foreground/20 bg-transparent text-foreground/70 hover:border-accent hover:text-accent rounded-full shadow-sm hover:shadow-md",
        "ghost-white": "border border-foreground/10 bg-transparent text-foreground/50 hover:border-accent hover:text-accent rounded-full",
        /* CTA principal plein (pill blanc, texte marine) — voir règle CTA dans index.css */
        hero: "group gap-3 bg-foreground text-primary hover:bg-foreground/90 rounded-full shadow-sm hover:shadow-md",
      },
      size: {
        default: "h-11 min-h-[48px] px-6 py-2.5",
        sm: "h-10 min-h-[44px] px-5 text-xs",
        lg: "h-14 min-h-[56px] px-8",
        icon: "h-11 w-11 min-h-[48px] min-w-[48px] rounded-full",
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
