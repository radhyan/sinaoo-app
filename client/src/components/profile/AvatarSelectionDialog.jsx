import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/shared/ui/AlertDialog";
import { avatarMap } from "@/lib/avatar";
import { cn } from "@/lib/utils";
import {
  CheckCircleIcon,
  UserCircleGearIcon,
  UserCircleIcon,
  XIcon,
} from "@phosphor-icons/react";
import GradientIcon from "@/components/shared/ui/GradientIcon";
import { Button } from "@/components/shared/ui/Button";

export default function AvatarSelectionDialog({
  isOpen,
  onOpenChange,
  currentAvatarId,
  onSelect,
}) {
  const [selectedId, setSelectedId] = useState(currentAvatarId || 1);

  // Sync selection with current avatar when dialog opens
  React.useEffect(() => {
    if (isOpen) {
      setSelectedId(currentAvatarId || 1);
    }
  }, [isOpen, currentAvatarId]);

  const avatars = avatarMap.slice(1); // Skip index 0

  const handleSave = () => {
    onSelect(selectedId);
    onOpenChange(false);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-3xl bg-white rounded-xl p-10 border-none data-[state=open]:slide-in-from-bottom-full data-[state=open]:slide-in-from-left-1/2">
        <Button
          onClick={() => onOpenChange(false)}
          variant="ghost"
          size="icon"
          className="absolute top-8 right-8 p-1 text-Grayscale-600 hover:text-Error-300 hover:bg-Error-50/30 transition-colors"
        >
          <XIcon weight="bold" size={20} />
        </Button>

        <AlertDialogHeader className="mb-8">
          <AlertDialogTitle className="flex items-center gap-3 !text-h3 font-heading text-Primary-900 border-none">
            <GradientIcon
              icon={UserCircleGearIcon}
              variant="blue"
              size={36}
              weight="fill"
            />
            Pilih Avatar
          </AlertDialogTitle>
          <AlertDialogDescription className="!text-body-l font-medium">
            Pilih karakter yang paling menggambarkan dirimu.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="grid grid-cols-5 gap-8 py-2">
          {avatars.map((src, index) => {
            const id = index + 1;
            const isSelected = selectedId === id;

            return (
              <button
                key={id}
                onClick={() => setSelectedId(id)}
                className={cn(
                  "relative aspect-square rounded-full transition-all duration-300",
                  isSelected
                    ? "ring-4 ring-Primary-500 shadow-blue-60"
                    : "hover:scale-105",
                )}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-Grayscale-50 flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Avatar ${id}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div
                  className={cn(
                    "absolute top-0 left-0 w-6 h-6 rounded-md flex items-center justify-center border-2 transition-all duration-200",
                    isSelected
                      ? "bg-Primary-500 border-white shadow-sm scale-110"
                      : "bg-Grayscale-300/60 border-white/50",
                  )}
                >
                  {isSelected && (
                    <CheckCircleIcon
                      weight="fill"
                      size={24}
                      className="text-white"
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <AlertDialogFooter className="flex items-center justify-between sm:justify-between w-full mt-4">
          <AlertDialogCancel asChild variant="ghost">
            <Button
              variant="exitAlert"
              className="text-Error-100 hover:text-Error-200 font-bold h-auto shadow-none hover:shadow-none hover:bg-Error-50/20 border-none"
            >
              Cancel
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              onClick={handleSave}
              disabled={selectedId === currentAvatarId}
              size="xl"
              rounded="xl"
              shadow="glowBlue"
            >
              Ubah Avatar
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
