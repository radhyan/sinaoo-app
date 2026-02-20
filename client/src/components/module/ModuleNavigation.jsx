import React from "react";
import { Button } from "@/components/shared/ui/Button";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const ModuleNavigation = ({
  onPrev,
  onNext,
  prevDisabled,
  nextDisabled,
  isFirstStep,
  isLastStep,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-Grayscale-100 animate-in fade-in slide-in-from-bottom-2 duration-500">
      {!isFirstStep ? (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              leftIcon={<CaretLeftIcon />}
              onClick={onPrev}
              disabled={prevDisabled}
              className="w-full sm:w-auto animate-in fade-in slide-in-from-left-2 duration-300"
            >
              Sebelumnya
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>bagian sebelumnya</p>
          </TooltipContent>
        </Tooltip>
      ) : (
        <div className="hidden sm:block" />
      )}
      {!isLastStep ? (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="default"
              size="sm"
              rightIcon={<CaretRightIcon weight="bold" />}
              onClick={onNext}
              disabled={nextDisabled}
              className="w-full sm:w-auto animate-in fade-in slide-in-from-right-2 duration-300"
            >
              Selanjutnya
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>bagian selanjutnya</p>
          </TooltipContent>
        </Tooltip>
      ) : (
        <div className="hidden sm:block" />
      )}
    </div>
  );
};

export default ModuleNavigation;
