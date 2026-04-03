import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/shared/ui/Button";
import SinaooLogo from "@/assets/SINAOO LOGO.svg";
import { apiUrl } from "@/lib/api";

export default function VerifyEmail() {
  const { token } = useParams();
  const [status, setStatus] = useState("loading"); // loading, success, error
  const [message, setMessage] = useState("Sedang memverifikasi email Anda...");

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await fetch(apiUrl(`/api/verify-email/${token}`), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Verifikasi gagal.");
        }

        setStatus("success");
        setMessage("Email berhasil diverifikasi! Anda sekarang dapat login.");
      } catch (err) {
        setStatus("error");
        setMessage(err.message);
      }
    };

    if (token) {
      verifyToken();
    }
  }, [token]);

  return (
    <div className="flex min-h-screen items-left justify-left bg-Grayscale-50 p-6">
      <div className="bg-w-lb rounded-lg px-20 py-20 shadow-blue-60 border border-Primary-50 w-[660px]">
        {/* Brand Logo */}
        <div className="flex justify-center mb-24">
          <img src={SinaooLogo} alt="Sinaoo Logo" className="h-12" />
        </div>

        {/* Title */}
        <h1 className="font-heading text-h1 text-Primary-900 text-center mb-6">
          Verifikasi Email
        </h1>

        <div className="flex flex-col items-center">
          <p className="text-center text-Grayscale-600 mb-8">{message}</p>

          {status === "loading" && (
            <div className="w-10 h-10 border-4 border-Primary-200 border-t-Primary-600 rounded-full animate-spin"></div>
          )}

          {status === "success" && (
            <Link to="/">
              <Button className="w-full h-12 px-8 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-lg shadow-blue-200 shadow-lg">
                Pergi ke Halaman Login
              </Button>
            </Link>
          )}

          {status === "error" && (
            <Link to="/">
              <Button
                variant="outline"
                className="w-full h-12 px-8 rounded-xl font-bold text-lg"
              >
                Kembali ke Halaman Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
