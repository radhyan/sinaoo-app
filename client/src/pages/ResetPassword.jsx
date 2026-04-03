import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/shared/ui/Button";
import { Input } from "@/components/shared/ui/Input";
import { Label } from "@/components/shared/ui/Label";
import { PasswordInput } from "@/components/shared/ui/PasswordInput";
import SinaooLogo from "@/assets/SINAOO LOGO.svg";
import BackgroundImage from "@/assets/Register and login background.webp";
import { apiUrl } from "@/lib/api";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    // Validate if passwords match
    if (password !== confirmPassword) {
      setError("Password dan Konfirmasi Password tidak sama.");
      setLoading(false);
      return;
    }

    // Validate password pattern
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
      setError(
        "Password minimal 8 karakter dan harus mengandung huruf besar, huruf kecil, angka, dan karakter spesial.",
      );
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(apiUrl(`/api/reset-password/${token}`), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Gagal mengatur ulang password.");
      }

      setMessage("Password berhasil diubah!");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center p-4 sm:p-6 bg-cover bg-center"
      style={{ backgroundImage: `url('${BackgroundImage}')` }}
    >
      <div className="bg-w-lb rounded-lg px-6 py-10 sm:px-20 sm:py-20 shadow-blue-60 border border-Primary-50 w-full max-w-[660px]">
        {/* Brand Logo */}
        <div className="flex justify-center mb-10 sm:mb-24">
          <img src={SinaooLogo} alt="Sinaoo Logo" className="h-10 sm:h-12" />
        </div>

        {/* Title */}
        <h1 className="font-heading text-h1 text-Primary-900 text-center mb-6">
          Reset Password
        </h1>
        <p className="text-center text-Grayscale-500 mb-8">
          Masukkan password baru untuk akun Anda.
        </p>

        {message ? (
          <div className="flex flex-col items-center">
            <div className="w-full p-3 text-sm text-green-600 bg-green-50 rounded-md text-center mb-6">
              {message}
            </div>
            <Link to="/">
              <Button className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-lg shadow-blue-200 shadow-lg">
                Masuk Sekarang
              </Button>
            </Link>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 flex flex-col items-start w-full"
          >
            {error && (
              <div className="w-full p-3 text-sm text-red-500 bg-red-50 rounded-md">
                {error}
              </div>
            )}

            <div className="space-y-2 flex flex-col items-start w-full">
              <Label
                htmlFor="password"
                className="text-Primary-900 font-body-md text-left"
              >
                Password Baru
              </Label>
              <PasswordInput
                id="password"
                placeholder="Masukkan password baru Anda"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-sm border-Grayscale-400 bg-Grayscale-50 h-11 w-full"
                required
              />
            </div>

            <div className="space-y-2 flex flex-col items-start w-full">
              <Label
                htmlFor="confirmPassword"
                className="text-Primary-900 font-body-md text-left"
              >
                Konfirmasi Password Baru
              </Label>
              <PasswordInput
                id="confirmPassword"
                placeholder="Konfirmasi password baru Anda"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="rounded-sm border-Grayscale-400 bg-Grayscale-50 h-11 w-full"
                required
              />
            </div>

            <Button
              className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-lg shadow-blue-200 shadow-lg mt-4"
              type="submit"
              disabled={loading}
            >
              {loading ? "Menyimpan..." : "Ubah Password"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
