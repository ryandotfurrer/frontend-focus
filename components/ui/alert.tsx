"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "flex flex-col space-y-2 border-l-2 bg-gradient-to-r from-80% to-transparent p-4 text-sm",
  {
    variants: {
      variant: {
        note: "border-blue-500 bg-gradient-to-r from-blue-500/15 text-blue-950 dark:text-blue-50",
        tip: "border-green-500 bg-gradient-to-r from-green-500/15 text-green-950 dark:text-green-50",
        important:
          "border-violet-500 bg-gradient-to-r from-violet-500/15 text-violet-950 dark:text-violet-50",
        warning:
          "border-amber-500 bg-gradient-to-r from-amber-500/15 text-amber-950 dark:text-amber-50",
        caution:
          "border-red-500 bg-gradient-to-r from-red-500/15 text-red-950 dark:text-red-50",
      },
    },
    defaultVariants: {
      variant: "note",
    },
  }
);

const AlertContext = React.createContext<{
  variant: VariantProps<typeof alertVariants>["variant"];
}>({
  variant: "note",
});

function Alert({
  className,
  variant = "note",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <AlertContext.Provider value={{ variant }}>
      <div
        data-slot="alert"
        data-variant={variant}
        className={cn(alertVariants({ variant }), className)}
        {...props}
      />
    </AlertContext.Provider>
  );
}

function AlertHeader({ className, ...props }: React.ComponentProps<"span">) {
  const { variant } = React.useContext(AlertContext);
  const variantName = variant || "note";
  const displayName =
    variantName.charAt(0).toUpperCase() + variantName.slice(1);

  return (
    <span
      data-slot="alert-header"
      className={cn("text-sm font-medium tracking-tight uppercase", className)}
      {...props}
    >
      {displayName}
    </span>
  );
}

function AlertBody({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="alert-body" className={cn(className)} {...props} />;
}

export { Alert, AlertHeader, AlertBody, alertVariants };
