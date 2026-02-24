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
import { UserCircleGearIcon, XIcon, UserIcon } from "@phosphor-icons/react";
import GradientIcon from "@/components/shared/ui/GradientIcon";
import { Button } from "@/components/shared/ui/Button";
import { Input } from "@/components/shared/ui/Input";

export default function UsernameEditDialog({
  isOpen,
  onOpenChange,
  currentUsername,
  onSave,
}) {
  const [username, setUsername] = useState(currentUsername || "");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setUsername(currentUsername || "");
      setError("");
    }
  }, [isOpen, currentUsername]);

  const handleSave = async (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setError("Username tidak boleh kosong");
      return;
    }
    if (username === currentUsername) {
      onOpenChange(false);
      return;
    }

    setIsLoading(true);
    try {
      await onSave(username);
      onOpenChange(false);
    } catch (err) {
      setError(err.message || "Gagal mengubah username");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-xl w-[90vw] md:w-full bg-white rounded-lg xl:rounded-xl p-6 md:p-8 border-none">
        <Button
          onClick={() => onOpenChange(false)}
          variant="ghost"
          size="icon"
          shadow="none"
          className="absolute top-4 right-4 md:top-8 md:right-8 p-1 text-Grayscale-600 hover:text-Error-300 hover:bg-Error-50/30 transition-colors"
        >
          <XIcon weight="bold" size={20} />
        </Button>

        <AlertDialogHeader className="mb-1">
          <AlertDialogTitle className="flex items-center gap-2 md:gap-3 text-h4 md:!text-h3 font-heading text-Primary-900 border-none">
            <GradientIcon
              icon={UserIcon}
              variant="blue"
              size={36}
              weight="fill"
            />
            Ubah Username
          </AlertDialogTitle>
          <AlertDialogDescription className="text-body-md md:!text-body-l font-medium">
            Masukkan username baru yang ingin kamu gunakan.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <form onSubmit={handleSave} className="space-y-4 py-2">
          <div className="space-y-2">
            <label className="text-body-sm font-bold text-Grayscale-700">
              Username Baru
            </label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={error}
              placeholder="Masukkan username..."
              autoFocus
            />
            {error && <p className="text-Error-400 text-body-sm">{error}</p>}
          </div>

          <AlertDialogFooter className="flex flex-col-reverse sm:flex-row items-center sm:justify-between w-full mt-6 pt-2 gap-3">
            <AlertDialogCancel
              asChild
              variant="ghost"
              className="w-full sm:w-auto"
            >
              <Button
                variant="exitAlert"
                className="text-Error-100 hover:text-Error-200 w-full sm:w-auto font-bold h-auto shadow-none hover:shadow-none hover:bg-Error-50/20 border-none"
              >
                Cancel
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild className="w-full sm:w-auto mt-0">
              <Button
                type="submit"
                onClick={handleSave}
                isLoading={isLoading}
                disabled={username === currentUsername || !username.trim()}
                size="xl"
                rounded="xl"
                shadow="glowBlue"
                className="w-full sm:w-auto"
              >
                Simpan Perubahan
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
