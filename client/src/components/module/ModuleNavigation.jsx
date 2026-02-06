import React from "react";
import { Button } from "@/components/shared/ui/Button";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
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
    <div className="flex items-center justify-between mt-6 pt-6 border-t border-Grayscale-100 animate-in fade-in slide-in-from-bottom-2 duration-500">
      {!isFirstStep ? (
        <Button
          variant="outline"
          size="default"
          leftIcon={<CaretLeftIcon />}
          onClick={onPrev}
          disabled={prevDisabled}
          className="animate-in fade-in slide-in-from-left-2 duration-300"
        >
          Sebelumnya
        </Button>
      ) : (
        <div />
      )}
      {!isLastStep ? (
        <Button
          variant="default"
          size="default"
          rightIcon={<CaretRightIcon weight="bold" />}
          onClick={onNext}
          disabled={nextDisabled}
          className="animate-in fade-in slide-in-from-right-2 duration-300"
        >
          Selanjutnya
        </Button>
      ) : (
        <div />
      )}
    </div>
  );
};

export default ModuleNavigation;
