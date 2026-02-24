import React from "react";
import {
  CrownIcon,
  CrownSimpleIcon,
  InfoIcon,
  StarIcon,
  XIcon,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import GradientIcon from "@/components/shared/ui/GradientIcon";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogTrigger,
} from "@/components/shared/ui/AlertDialog";
import { useUser } from "@/context/UserContext";
import { Button } from "@/components/shared/ui/Button";
import { getLevelInfo } from "@/lib/title";

// Import title images
import title1 from "@/assets/Title/Title 1.png";
import title2 from "@/assets/Title/Title 2.png";
import title3 from "@/assets/Title/Title 3.png";
import title4 from "@/assets/Title/Title 4.png";

const titleImages = {
  "Maba Halu": title1,
  "Sobat Ambis": title2,
  Suhu: title3,
  Valedictorian: title4,
};

export default function TitleDisplay({ user }) {
  const { titles } = useUser();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const { title, nextTarget, percentage, isMax, remaining, image } =
    getLevelInfo(user?.points || 0, titles);

  // Use title from getLevelInfo as the source of truth
  const points = user?.points || 0;

  return (
    <div>
      <div className="mb-4 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <GradientIcon
            icon={CrownSimpleIcon}
            variant="blue"
            size={40}
            weight="fill"
          />
          <h3 className="font-heading text-h3 text-Primary-900">Title</h3>
        </div>
        <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <AlertDialogTrigger asChild>
            <Button
              variant="ghost"
              size="default"
              shadow="none"
              onClick={() => setIsDialogOpen(true)}
              rightIcon={<InfoIcon weight="bold" size={20} />}
              className="duration-300 text-Primary-500 hover:bg-Primary-50 mr-1"
            >
              Informasi
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="max-w-4xl w-[90vw] md:w-full bg-white rounded-lg xl:rounded-xl p-6 md:p-10 border-none data-[state=open]:slide-in-from-bottom-full data-[state=open]:slide-in-from-left-1/2">
            <Button
              onClick={() => setIsDialogOpen(false)}
              variant="ghost"
              size="icon"
              shadow="none"
              className="absolute top-4 right-4 md:top-8 md:right-8 p-1 text-Grayscale-600 hover:text-Error-300 hover:bg-Error-50/30 transition-colors"
            >
              <XIcon weight="bold" size={20} />
            </Button>

            <AlertDialogHeader className="mb-4">
              <AlertDialogTitle className="flex items-center gap-2 md:gap-3 text-h4 md:!text-h3 font-heading text-Primary-900 border-none">
                <GradientIcon
                  icon={CrownSimpleIcon}
                  variant="blue"
                  size={36}
                  weight="fill"
                />
                Title
              </AlertDialogTitle>
              <AlertDialogDescription className="text-body-md md:!text-body-l font-medium text-left sm:text-center md:text-left">
                Daftar gelar yang bisa kamu raih berdasarkan total point yang
                kamu kumpulkan.
              </AlertDialogDescription>
            </AlertDialogHeader>

            <div className="mb-2 py-4 bg-Primary-50/50 border border-Primary-200 rounded-full flex items-center justify-center">
              <span className="text-h4 text-Primary-900 font-medium">
                You are <span className="font-bold">{title}!</span>
              </span>
            </div>

            <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 custom-scrollbar snap-x px-1">
              {titles.map((t) => {
                const isCurrent = t.title === title;
                const isUnlocked = points >= t.min;

                return (
                  <div
                    key={t._id}
                    className={cn(
                      "flex-shrink-0 w-48 md:w-56 p-4 rounded-2xl md:rounded-3xl border-2 transition-all duration-300 snap-center",
                      isCurrent
                        ? "bg-Primary-50 border-Primary-300 shadow-blue-glow"
                        : isUnlocked
                          ? "bg-white border-Grayscale-200 shadow-sm hover:border-Primary-200"
                          : "bg-Grayscale-100 border-Grayscale-200 grayscale opacity-50",
                    )}
                  >
                    <div className="w-full aspect-square relative mb-4">
                      <img
                        src={titleImages[t.title] || t.image}
                        alt={t.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <h4
                        className={cn(
                          "font-heading text-h5 text-center leading-tight",
                          isCurrent
                            ? "text-Primary-900"
                            : isUnlocked
                              ? "text-Primary-800"
                              : "text-Grayscale-600",
                        )}
                      >
                        {t.title}
                      </h4>
                      <div className="flex items-center gap-1 py-1 px-3 bg-Grayscale-50/50 rounded-full border border-Grayscale-100">
                        <StarIcon
                          weight="fill"
                          size={18}
                          className={
                            isUnlocked
                              ? "text-Secondary-400"
                              : "text-Grayscale-400"
                          }
                        />
                        <span className="text-body-md font-bold text-Primary-800">
                          {t.min}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <AlertDialogFooter className="flex items-center justify-end w-full mt-2">
              <AlertDialogAction asChild className="w-full sm:w-auto">
                <Button
                  size="xl"
                  rounded="xl"
                  shadow="glowBlue"
                  className="w-full sm:w-auto"
                >
                  Tutup
                </Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <div className="bg-w-lb rounded-xl shadow-blue-60 border border-Primary-50 flex flex-col p-10 gap-6 relative">
        <div className="flex-1 flex flex-col items-center justify-center gap-4 relative z-10 py-4">
          <div className="">
            <img
              src={titleImages[title] || image}
              alt={title}
              className="w-full max-w-[280px] h-auto object-contain transition-transform duration-700 hover:scale-110"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="font-heading text-h3 text-Primary-900 tracking-tight">
              {title}
            </h3>
            <p className="text-body-md text-Grayscale-700">
              {!isMax
                ? `${remaining} points untuk ke title selanjutnya`
                : "Anda telah mencapai title tertinggi!"}
            </p>
          </div>
        </div>

        {/* Progress Footer */}
        <div className="flex items-center gap-4 relative z-10 mt-auto px-2">
          <div className="flex items-center gap-2 flex-1">
            <div className="shrink-0 mb-1">
              <StarIcon
                weight="fill"
                size={28}
                className="text-Secondary-400 drop-shadow-deep-blue-60"
              />
            </div>

            <div className="h-2 w-full rounded-full bg-Primary-900/60 shadow-deep-blue-60 relative overflow-hidden">
              <div
                className="h-full rounded-full bg-o-do transition-all duration-1000 ease-out relative"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>

          <div className="flex items-baseline gap-1 shrink-0">
            <span className="font-bold text-body-md text-Primary-900 leading-none">
              {points} / {nextTarget}
            </span>
            <span className="text-body-sm text-Primary-900 font-medium font-body leading-none">
              pts
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
