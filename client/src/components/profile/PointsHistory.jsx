import React, { useState } from "react";
import {
  StarIcon,
  CaretLeftIcon,
  CaretRightIcon,
  PlusIcon,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/shared/ui/Button";
import GradientIcon from "@/components/shared/ui/GradientIcon";

export default function PointsHistory({ history = [] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const totalPages = Math.ceil(history.length / itemsPerPage);

  const paginatedHistory = [...history]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="">
      <div className="mb-4 border-b border-Grayscale-50 bg-Grayscale-50/30 flex items-center gap-3">
        <GradientIcon
          icon={StarIcon}
          variant="blue"
          size={40}
          weight="fill"
          className="rounded-lg"
        />
        <h3 className="font-heading text-h3 text-Primary-900">
          Points History
        </h3>
      </div>
      <div className="bg-w-lb rounded-xl shadow-blue-60 border border-Primary-50 flex flex-col">
        <div className="flex-1 overflow-hidden rounded-xl">
          {paginatedHistory.length > 0 ? (
            <div className="flex flex-col">
              {paginatedHistory.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-center justify-between px-8 py-4 border-b border-Primary-50",
                    "animate-in fade-in slide-in-from-left-4 duration-300 fill-mode-both",
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                      <PlusIcon
                        weight="bold"
                        size={24}
                        className="text-Success-300"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="flex items-center gap-1 text-body-md font-bold text-Primary-900">
                        {item.points}{" "}
                        <GradientIcon
                          icon={StarIcon}
                          variant="orange"
                          size={20}
                          weight="fill"
                          className="ml-1"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 flex-[2]">
                    <span className="text-body-md text-Primary-900 truncate">
                      {item.description}
                    </span>
                    <span className="text-body-md text-Primary-900 tabular-nums">
                      {new Date(item.date).toLocaleDateString("id-ID", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              ))}
              {/* Render empty rows to maintain height */}
              {Array.from({
                length: itemsPerPage - paginatedHistory.length,
              }).map((_, index) => (
                <div
                  key={`empty-${index}`}
                  className="flex items-center justify-between px-8 py-4 border-b border-transparent opacity-0 pointer-events-none"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-8 h-8" />
                    <div className="flex flex-col items-start">
                      <div className="text-body-md font-bold text-transparent">
                        0
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full py-20 opacity-40">
              <StarIcon
                size={48}
                weight="light"
                className="text-Grayscale-300 mb-2"
              />
              <p className="text-body-sm font-medium text-Grayscale-500 italic">
                Belum ada riwayat poin
              </p>
            </div>
          )}
        </div>

        {/* Pagination Container */}
        <div className="p-4 bg-Grayscale-50/20 border-t border-Grayscale-50 flex items-center justify-between gap-2">
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
    </div>
  );
}
