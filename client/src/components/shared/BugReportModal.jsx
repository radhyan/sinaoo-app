import React, { useState } from "react";
import {
  BugBeetleIcon,
  BugIcon,
  PaperPlaneRightIcon,
  XIcon,
  WarningCircleIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/shared/ui/Button";
import { Input } from "@/components/shared/ui/Input";
import { Label } from "@/components/shared/ui/Label";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/shared/ui/AlertDialog";
import { useUser } from "@/context/UserContext";
import { apiUrl } from "@/lib/api";

export default function BugReportModal({ open, onOpenChange }) {
  const { user } = useUser();
  const [type, setType] = useState("UI");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description.trim()) {
      setError("Deskripsi bug tidak boleh kosong");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(apiUrl("/api/bug-reports"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reporter: user ? user.username : "Anonymous",
          type,
          description,
        }),
      });

      if (!res.ok) {
        throw new Error("Gagal mengirim laporan. Silakan coba lagi.");
      }

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setType("UI");
        setDescription("");
        onOpenChange(false);
      }, 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="sm:max-w-md bg-white border-none shadow-blue-60 rounded-xl p-6">
        <AlertDialogHeader className="mb-4">
          <div className="flex items-center justify-between">
            <AlertDialogTitle className="flex items-center gap-2 text-h5 font-heading text-Primary-900 border-none m-0">
              <BugIcon weight="bold" className="text-Primary-600" />
              Laporkan Bug
            </AlertDialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="text-Grayscale-500 hover:text-Grayscale-900 shadow-none border-none"
              onClick={() => onOpenChange(false)}
            >
              <XIcon weight="bold" size={20} />
            </Button>
          </div>
          <AlertDialogDescription className="text-body-md text-Grayscale-600 mt-2 text-left">
            Waduh, ada fitur yang tidak berjalan semestinya? Beritahu kami agar
            bisa segera diperbaiki!
          </AlertDialogDescription>
        </AlertDialogHeader>

        {success ? (
          <div className="flex flex-col items-center justify-center p-6 text-center">
            <div className="bg-Success-50 p-4 rounded-full mb-4 shrink-0">
              <PaperPlaneRightIcon
                size={32}
                weight="fill"
                className="text-Success-500"
              />
            </div>
            <h4 className="text-h5 font-bold text-Grayscale-900 mb-2">
              Laporan Terkirim!
            </h4>
            <p className="text-body-md text-Grayscale-600">
              Terima kasih atas bantuannya. Laporan kamu akan kami tindak
              lanjuti.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {error && (
              <div className="flex items-center gap-2 text-body-md text-Error-500 bg-Error-50 p-3 rounded-lg border border-Error-200">
                <WarningCircleIcon size={20} weight="bold" />
                {error}
              </div>
            )}

            <div className="flex flex-col gap-2">
              <Label>Kategori Laporan</Label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full text-body-md px-3 py-2 border border-Grayscale-200 rounded-md bg-transparent focus:ring-1 focus:ring-Primary-500 outline-none transition-all"
              >
                <option value="UI">Masalah Tampilan (UI)</option>
                <option value="Logic">Fitur Error (Logic)</option>
                <option value="Content">
                  Kesalahan Materi Konten (Content)
                </option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <Label>Deskripsi Bug</Label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Jelaskan kendala apa yang kamu temukan secara detail..."
                className="w-full text-body-md px-3 py-2 border border-Grayscale-200 rounded-md bg-transparent focus:ring-1 focus:ring-Primary-500 outline-none min-h-[120px] resize-y transition-all"
                required
              />
            </div>

            <div className="mt-4 flex justify-end">
              <Button
                type="submit"
                variant="default"
                disabled={loading || !description.trim()}
                rightIcon={!loading && <PaperPlaneRightIcon weight="bold" />}
                className="w-full sm:w-auto"
              >
                {loading ? "Mengirim..." : "Kirim Laporan"}
              </Button>
            </div>
          </form>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
}
