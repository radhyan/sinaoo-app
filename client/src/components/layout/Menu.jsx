import { Button } from "@/components/shared/ui/Button";
import {
  SignOutIcon,
  HouseIcon,
  BookOpenIcon,
  TrophyIcon,
  UserCircleIcon,
  RankingIcon,
} from "@phosphor-icons/react";
import React from "react";

export default function MenuItem() {
  return (
    <Button
      variant="ghost"
      className="flex w-[232px] items-center gap-2 px-4 py-2 relative h-auto hover:bg-transparent"
    >
      <div className="inline-flex items-center justify-center gap-2.5 p-1 relative flex-[0_0_auto] rounded-lg overflow-hidden shadow-shadow-blue-blue-60">
        <div className="absolute top-[calc(50.00%_-_20px)] left-[calc(50.00%_-_20px)] w-[41px] h-[41px] rounded-[20.5px] bg-[linear-gradient(135deg,rgba(20,69,166,1)_0%,rgba(102,150,248,1)_100%)]" />
        <Home className="relative w-7 h-7 text-white z-10" strokeWidth={2} />
      </div>

      <span className="relative flex-1 [text-shadow:0px_0px_2px_#1557dc33] font-links-m font-[number:var(--links-m-font-weight)] text-primitiveprimary-500 text-[length:var(--links-m-font-size)] tracking-[var(--links-m-letter-spacing)] leading-[var(--links-m-line-height)] [font-style:var(--links-m-font-style)] shadow-shadow-blue-blue-60 text-left">
        Home
      </span>

      <div className="absolute top-0 left-0 w-1.5 h-12 rounded-[0px_6px_6px_0px] shadow-shadow-blue-blue-60 bg-[linear-gradient(135deg,rgba(20,69,166,1)_0%,rgba(102,150,248,1)_100%)]" />
    </Button>
  );
}
