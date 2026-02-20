import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/shared/ui/AlertDialog";
import { SignOutIcon, XIcon } from "@phosphor-icons/react";
import GradientIcon from "@/components/shared/ui/GradientIcon";
import { Button } from "@/components/shared/ui/Button";

export default function LogoutAlertDialog({ open, onOpenChange, onConfirm }) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-xl bg-white rounded-xl p-8 border-none shadow-blue-60">
        <Button
          onClick={() => onOpenChange(false)}
          variant="ghost"
          size="icon"
          shadow="none"
          className="absolute top-6 right-8 p-1 text-Grayscale-600 hover:text-Error-300 hover:bg-Error-50/30 transition-colors"
        >
          <XIcon weight="bold" size={20} />
        </Button>

        <AlertDialogHeader className="">
          <AlertDialogTitle className="flex items-center gap-3 !text-h4 font-heading text-Primary-900 border-none">
            <GradientIcon
              icon={SignOutIcon}
              variant="blue"
              size={28}
              weight="fill"
            />
            Log Out
          </AlertDialogTitle>
          <AlertDialogDescription className="!text-body-md lg:!text-body-l text-left font-medium text-Grayscale-900">
            Apakah Anda yakin ingin keluar dari akun Anda?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="flex-row items-center justify-between sm:justify-between w-full mt-6 sm:space-x-0">
          <AlertDialogCancel asChild>
            <Button variant="default">Batal</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant="destructive"
              onClick={onConfirm}
              leftIcon={<SignOutIcon weight="bold" />}
            >
              Keluar Akun
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
