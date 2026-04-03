import { useState } from "react";
import { Button } from "@/components/shared/ui/Button";
import { Input } from "@/components/shared/ui/Input";
import { Label } from "@/components/shared/ui/Label";
import { Link, useNavigate } from "react-router-dom";
import { PasswordInput } from "@/components/shared/ui/PasswordInput";
import SinaooLogo from "@/assets/SINAOO LOGO.svg";
import BackgroundImage from "@/assets/Register and login background.png";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/shared/ui/AlertDialog";
import { CheckCircleIcon, XIcon } from "@phosphor-icons/react";
import {
  validateUsername,
  validateEmail,
  validatePassword,
} from "@/lib/validation";
import { apiUrl } from "@/lib/api";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!validateUsername(formData.username)) {
      setError("Username harus 3-20 karakter (huruf, angka, underscore).");
      setLoading(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Format email tidak valid.");
      setLoading(false);
      return;
    }

    if (!validatePassword(formData.password)) {
      setError(
        "Password harus minimal 8 karakter, mengandung huruf besar, kecil, angka, dan simbol.",
      );
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Konfirmasi password tidak sesuai.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(apiUrl("/api/register"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Excluding confirmPassword from payload
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          dateOfBirth: formData.dateOfBirth,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Pendaftaran gagal.");
      }

      setIsSuccessDialogOpen(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center p-4 sm:p-6 bg-cover bg-center"
      style={{ backgroundImage: `url('${BackgroundImage}')` }}
    >
      <div className="bg-w-lb rounded-lg px-6 py-10 sm:px-20 sm:py-20 shadow-blue-60 border border-Primary-50 w-full max-w-[660px]">
        {/* Brand Logo */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <img src={SinaooLogo} alt="Sinaoo Logo" className="h-10 sm:h-12" />
        </div>

        {/* Title */}
        <h1 className="font-heading text-h1 text-Primary-900 text-center mb-6">
          Daftar Akun
        </h1>

        <form
          onSubmit={handleRegister}
          className="space-y-4 flex flex-col items-start w-full"
        >
          {error && (
            <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
              {error}
            </div>
          )}

          <div className="space-y-2 flex flex-col items-start w-full">
            <Label
              htmlFor="username"
              className="text-Primary-900 font-body-md text-left"
            >
              Username
            </Label>
            <Input
              id="username"
              type="text"
              placeholder="Masukkan username"
              value={formData.username}
              onChange={handleChange}
              className="rounded-sm border-Grayscale-400 bg-Grayscale-50 h-11 w-full"
              required
            />
          </div>

          <div className="space-y-2 flex flex-col items-start w-full">
            <Label
              htmlFor="email"
              className="text-Primary-900 font-body-md text-left"
            >
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Masukkan email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-sm border-Grayscale-400 bg-Grayscale-50 h-11 w-full"
              required
            />
          </div>

          <div className="space-y-2 flex flex-col items-start w-full">
            <Label
              htmlFor="dateOfBirth"
              className="text-Primary-900 font-body-md text-left"
            >
              Tanggal Lahir
            </Label>
            <Input
              id="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="rounded-sm border-Grayscale-400 bg-Grayscale-50 h-11 w-full"
              required
            />
          </div>

          <div className="space-y-2 flex flex-col items-start w-full">
            <Label
              htmlFor="password"
              className="text-Primary-900 font-body-md text-left"
            >
              Password
            </Label>
            <PasswordInput
              id="password"
              placeholder="Masukkan password"
              value={formData.password}
              onChange={handleChange}
              error={error === "Passwords do not match"}
              className="rounded-sm border-Grayscale-400 bg-Grayscale-50 h-11 pr-10 transition-all ease-in-out w-full"
              required
            />
          </div>

          <div className="space-y-2 flex flex-col items-start w-full">
            <Label
              htmlFor="confirmPassword"
              className="text-Primary-900 font-body-md text-left"
            >
              Konfirmasi Password
            </Label>
            <PasswordInput
              id="confirmPassword"
              placeholder="Ulangi password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={error === "Passwords do not match"}
              className="rounded-sm border-Grayscale-400 bg-Grayscale-50 h-11 pr-10 transition-all ease-in-out w-full"
              required
            />
          </div>

          <Button
            className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-lg shadow-blue-200 shadow-lg mt-4"
            type="submit"
            disabled={loading}
          >
            {loading ? "Mendaftar..." : "Buat Akun"}
          </Button>

          <div className="pt-4">
            <Link
              to="/"
              className="text-sm font-bold text-orange-400 hover:text-orange-500"
            >
              Sudah memiliki akun?
            </Link>
          </div>
        </form>
      </div>

      {/* Success Dialog */}
      <AlertDialog
        open={isSuccessDialogOpen}
        onOpenChange={setIsSuccessDialogOpen}
      >
        <AlertDialogContent className="sm:max-w-md bg-white border-none shadow-blue-60 rounded-xl p-6">
          <AlertDialogHeader className="mb-4">
            <div className="flex items-center justify-between">
              <AlertDialogTitle className="flex items-center gap-2 text-h5 font-heading text-Primary-900 border-none m-0">
                <CheckCircleIcon
                  weight="fill"
                  className="text-Success-500"
                  size={24}
                />
                Pendaftaran Berhasil!
              </AlertDialogTitle>
              <Button
                variant="ghost"
                size="icon"
                className="text-Grayscale-500 hover:text-Grayscale-900 shadow-none border-none hover:bg-Grayscale-100 shrink-0"
                onClick={() => {
                  setIsSuccessDialogOpen(false);
                  navigate("/");
                }}
              >
                <XIcon weight="bold" size={20} />
              </Button>
            </div>
            <AlertDialogDescription className="text-body-md text-Grayscale-600 mt-2 text-left">
              Silakan cek email Anda untuk memverifikasi akun sebelum login.
              Jika email tidak masuk, periksa juga folder Spam Anda.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="mt-4 flex justify-end">
            <Button
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold"
              onClick={() => {
                setIsSuccessDialogOpen(false);
                navigate("/");
              }}
            >
              Kembali ke Login
            </Button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
