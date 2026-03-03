import { useState } from "react";
import { Button } from "@/components/shared/ui/Button";
import { Input } from "@/components/shared/ui/Input";
import { Label } from "@/components/shared/ui/Label";
import { Link } from "react-router-dom";
import SinaooLogo from "@/assets/SINAOO LOGO.svg";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Format email tidak valid.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3000/api/forgot-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Gagal mengirim permintaan.");
      }

      setMessage("Instruksi reset password telah dikirim ke email Anda.");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-left justify-left bg-Grayscale-50 p-6">
      <div className="bg-w-lb rounded-lg px-20 py-20 shadow-blue-60 border border-Primary-50 w-[660px]">
        {/* Brand Logo */}
        <div className="flex justify-center mb-24">
          <img src={SinaooLogo} alt="Sinaoo Logo" className="h-12" />
        </div>

        {/* Title */}
        <h1 className="font-heading text-h1 text-Primary-900 text-center mb-6">
          Lupa Password?
        </h1>
        <p className="text-center text-Grayscale-500 mb-8">
          Masukkan email Anda untuk menerima instruksi pengaturan ulang kata
          sandi.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 flex flex-col items-start w-full"
        >
          {error && (
            <div className="w-full p-3 text-sm text-red-500 bg-red-50 rounded-md">
              {error}
            </div>
          )}
          {message && (
            <div className="w-full p-3 text-sm text-green-600 bg-green-50 rounded-md">
              {message}
            </div>
          )}

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
              placeholder="Masukkan email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-sm border-Grayscale-400 bg-Grayscale-50 h-11 w-full"
              required
            />
          </div>

          <Button
            className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-lg shadow-blue-200 shadow-lg mt-4"
            type="submit"
            disabled={loading}
          >
            {loading ? "Mengirim..." : "Kirim Instruksi"}
          </Button>

          <div className="pt-4 w-full text-center">
            <Link
              to="/"
              className="text-sm font-bold text-Primary-500 hover:underline"
            >
              Kembali ke Halaman Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
