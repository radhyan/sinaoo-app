import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/shared/ui/Button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/shared/ui/AlertDialog";

export default function ModuleExitButton({ isOpen, onExit }) {
  const navigate = useNavigate();

  const handleExit = () => {
    if (onExit) onExit(); // Fire-and-forget, don't block navigation
    navigate("/courses");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="destructive"
          leftIcon={<ArrowLeftIcon weight="bold" />}
          iconOnly={!isOpen}
          fullWidth={isOpen}
          className={cn(!isOpen && "shadow-none", isOpen && "justify-start")}
          title="Keluar"
        >
          {isOpen && "Keluar Modul"}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Keluar Modul?</AlertDialogTitle>
          <AlertDialogDescription>
            Apakah Anda yakin ingin keluar dari modul ini? <br />
            Progress anda pada bagian modul ini tidak akan tersimpan bila belum
            diselesaikan.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:justify-between">
          <AlertDialogAction asChild>
            <Button
              variant="destructive"
              onClick={handleExit}
              shadow="none"
              className="border-none"
            >
              Keluar
            </Button>
          </AlertDialogAction>
          <AlertDialogCancel asChild>
            <Button variant="ghost">Tidak</Button>
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
