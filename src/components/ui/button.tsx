/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva("relative flex items-center justify-center gap-2", {
  variants: {
    variant: {
      default:
        "overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25",
      animatedBorder:
        "overflow-visible rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 bg-transparent border border-border text-foreground hover:border-primary/50 transition-all duration-1000 disabled:opacity-50 disabled:cursor-not-allowed group",
    },
    size: {
      default: "h-9 px-4 py-2 has-[>svg]:px-3 text-sm",
      sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5 text-sm",
      lg: "h-10 px-6 has-[>svg]:px-4 text-sm",
      icon: "size-9",
      "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
      "icon-sm": "size-8",
      "icon-lg": "size-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
