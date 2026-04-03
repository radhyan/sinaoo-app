import { useState } from "react";
import { useUser } from "@/context/UserContext";
import { Button } from "@/components/shared/ui/Button";
import { Input } from "@/components/shared/ui/Input";
import { Label } from "@/components/shared/ui/Label";
import { Link, useNavigate } from "react-router-dom";
import { PasswordInput } from "@/components/shared/ui/PasswordInput";
import SinaooLogo from "@/assets/SINAOO LOGO.svg";
import BackgroundImage from "@/assets/Register and login background.png";
import FullScreenLoading from "@/components/shared/ui/FullScreenLoading";
import { apiUrl } from "@/lib/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [errorField, setErrorField] = useState(null); // 'email' or 'password'
  const [unverified, setUnverified] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendMessage, setResendMessage] = useState(null);
  const navigate = useNavigate();
  const { login } = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setErrorField(null);
    setUnverified(false);
    setResendMessage(null);

    // REAL LOGIN: Call backend authentication
    try {
      const response = await fetch(apiUrl("/api/login"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.field) {
          setErrorField(data.field);
        }
        if (data.unverified) {
          setUnverified(true);
        }
        throw new Error(
          data.message || "Login gagal. Silakan cek email/password.",
        );
      }

      // Save user to local storage (data from DB)
      login(data);

      // Redirect to dashboard
      setIsRedirecting(true);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResendVerification = async () => {
    setResendLoading(true);
    setResendMessage(null);
    setError(null);
    try {
      const response = await fetch(apiUrl("/api/resend-verification"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error || "Gagal mengirim ulang email.");
      setResendMessage(
        data.message || "Email verifikasi berhasil dikirim ulang.",
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setResendLoading(false);
    }
  };

  if (loading || isRedirecting) {
    return (
      <FullScreenLoading
        title="Masuk ke akunmu..."
        subtitle="Kami sedang menyiapkan dashboard belajarmu"
      />
    );
  }

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
          Selamat Datang!
        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-4 flex flex-col items-start w-full"
        >
          {error && (
            <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md w-full">
              {error}
              {unverified && (
                <div className="mt-2 w-full">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full text-blue-600 border-blue-200 hover:bg-blue-50 mt-1"
                    onClick={handleResendVerification}
                    disabled={resendLoading}
                  >
                    {resendLoading
                      ? "Mengirim ulang..."
                      : "Kirim Ulang Email Verifikasi"}
                  </Button>
                </div>
              )}
            </div>
          )}
          {resendMessage && (
            <div className="p-3 text-sm text-green-600 bg-green-50 rounded-md w-full">
              {resendMessage}
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
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errorField === "email"}
              className="rounded-sm border-Grayscale-400 bg-Grayscale-50 h-11 w-full"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errorField === "password"}
              className="rounded-sm border-Grayscale-400 bg-Grayscale-50 h-11 pr-10 transition-all ease-in-out w-full"
            />
            <Link
              to="/forgot-password"
              className="text-sm text-Primary-500 font-body-md font-bold hover:underline"
            >
              Lupa password?
            </Link>
          </div>

          <div className="flex items-center space-x-2 w-full">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-600"
            >
              Ingat saya
            </label>
          </div>

          <Button
            className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-lg shadow-blue-200 shadow-lg mt-4"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging In..." : "Log In"}
          </Button>

          <div className="pt-4">
            <Link
              to="/register"
              className="text-sm font-bold text-orange-400 hover:text-orange-500"
            >
              Belum memiliki akun?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
