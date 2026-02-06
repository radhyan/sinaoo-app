import React, { useState } from "react";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import RankCard from "./RankCard";
import { Button } from "@/components/shared/ui/Button";
import { cn } from "@/lib/utils";

export default function RankingList({ scholars = [] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(scholars.length / itemsPerPage);

  const paginatedScholars = scholars.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="bg-w-lb rounded-xl shadow-blue-60 border border-Primary-50 flex flex-col h-full p-4">
      <div className="flex-1 p-2">
        {paginatedScholars.length > 0 ? (
          paginatedScholars.map((scholar, index) => (
            <div
              key={`${currentPage}-${scholar._id || scholar.username}`}
              className="animate-in fade-in slide-in-from-right-8 duration-500 fill-mode-both"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <RankCard
                rank={(currentPage - 1) * itemsPerPage + index + 4}
                userProfile={scholar}
              />
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center h-40 text-Grayscale-400">
            Belum ada peringkat
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between gap-2">
        <Button
          variant="ghostDark"
          size="icon"
          shadow="none"
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >
          <CaretLeftIcon weight="bold" />
        </Button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={cn(
                "w-8 h-8 rounded-xsm text-body-sm font-bold transition-all",
                currentPage === page
                  ? "bg-b-lb text-white shadow-blue-60"
                  : "text-Primary-900 hover:bg-Primary-50 hover:text-Primary-900",
              )}
            >
              {page}
            </button>
          ))}
        </div>

        <Button
          variant="ghostDark"
          size="icon"
          shadow="none"
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          <CaretRightIcon weight="bold" />
        </Button>
      </div>
    </div>
  );
}
