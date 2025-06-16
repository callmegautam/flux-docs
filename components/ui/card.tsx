"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
    "relative rounded-[var(--radius)] bg-[hsl(var(--hu-card))] text-[hsl(var(--hu-card-foreground))] transition-all duration-300 ease-out overflow-hidden",
    {
        variants: {
            variant: {
                default:
                    "border border-[hsl(var(--hu-border))] shadow-sm hover:shadow-lg hover:shadow-[hsl(var(--hu-primary))]/5 hover:-translate-y-0.5",
                outline:
                    "border-2 border-[hsl(var(--hu-border))] shadow-sm hover:border-[hsl(var(--hu-primary))]/30 hover:shadow-lg hover:-translate-y-0.5",
                ghost: "border-transparent shadow-none hover:bg-[hsl(var(--hu-accent))] hover:shadow-md",
                elevated:
                    "border border-[hsl(var(--hu-border))]/50 shadow-lg shadow-[hsl(var(--hu-primary))]/5 hover:shadow-xl hover:shadow-[hsl(var(--hu-primary))]/10 hover:-translate-y-1",
                gradient:
                    "border border-[hsl(var(--hu-border))]/30 bg-gradient-to-br from-[hsl(var(--hu-card))] via-[hsl(var(--hu-card))] to-[hsl(var(--hu-accent))]/20 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
                glass: "border border-[hsl(var(--hu-border))]/20 bg-[hsl(var(--hu-card))]/80 backdrop-blur-sm shadow-lg hover:bg-[hsl(var(--hu-card))]/90 hover:shadow-xl hover:-translate-y-0.5",
            },
            size: {
                sm: "p-4",
                default: "p-6",
                lg: "p-8",
                xl: "p-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, variant, size, ...props }, ref) => (
    <div ref={ref} className={cn(cardVariants({ variant, size }), className)} {...props} />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn("flex flex-col space-y-2 pb-4", className)} {...props} />
    )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h3
            ref={ref}
            className={cn(
                "text-xl font-semibold leading-tight tracking-tight text-[hsl(var(--hu-foreground))]",
                className
            )}
            {...props}
        />
    )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => (
        <p
            ref={ref}
            className={cn("text-sm text-[hsl(var(--hu-muted-foreground))] leading-relaxed", className)}
            {...props}
        />
    )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => <div ref={ref} className={cn("space-y-4", className)} {...props} />
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "flex items-center justify-between pt-4 mt-6 border-t border-[hsl(var(--hu-border))]/30",
                className
            )}
            {...props}
        />
    )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants };
