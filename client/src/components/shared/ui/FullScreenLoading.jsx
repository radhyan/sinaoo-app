import React from "react";
import LoadingBar from "@/components/shared/ui/LoadingBar";
import SinaooLogo from "@/assets/SINAOO LOGO.svg";

export default function FullScreenLoading({
  title = "Memuat...",
  subtitle = "Mohon tunggu sebentar",
  showMaterialBy = false,
}) {
  return (
    <div className="min-h-screen w-full bg-w-lb flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white border border-Primary-50 shadow-blue-60 rounded-xl p-8 text-center space-y-5 animate-in fade-in duration-300">
        <img src={SinaooLogo} alt="SINAOO Logo" className="h-10 mx-auto" />
        <div className="space-y-2">
          <h2 className="text-h3 font-heading text-Primary-900">{title}</h2>
          <p className="text-body-md text-Grayscale-600">{subtitle}</p>
        </div>
        <LoadingBar className="w-full" variant="blue" />
        {showMaterialBy && (
          <div className="flex items-center justify-center gap-2 text-body-sm text-Grayscale-600 pt-1">
            <span>material by</span>
            <img
              src="/images/logo-letstudy.png"
              alt="Letstudy Logo"
              className="h-6 object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
}
