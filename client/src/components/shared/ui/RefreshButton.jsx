import React from "react";
import { ArrowsCounterClockwise } from "@phosphor-icons/react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

export function RefreshButton({
  onRefresh,
  children = "Coba Lagi",
  className,
  loading = false,
  ...props
}) {
  return (
    <Button
      variant="default"
      shadow="blue"
      leftIcon={
        <ArrowsCounterClockwise
          className={cn(loading && "animate-spin")}
          weight="bold"
        />
      }
      onClick={onRefresh}
      disabled={loading}
      className={cn("gap-2", className)}
      {...props}
    >
      {children}
    </Button>
  );
}
