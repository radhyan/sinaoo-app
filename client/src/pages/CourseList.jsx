import React, { useState, useEffect } from "react";
import { BookBookmarkIcon } from "@phosphor-icons/react";
import GradientIcon from "@/components/shared/ui/GradientIcon";
import CourseCard, {
  CourseCardSkeleton,
} from "@/components/shared/cards/CourseCard";
import ModuleList from "@/components/module/ModuleList";
import { cn } from "@/lib/utils";
import { useUser } from "@/context/UserContext";

import LoadingBar from "@/components/shared/ui/LoadingBar";
import { RefreshButton } from "@/components/shared/ui/RefreshButton";
import { useCallback } from "react";

function CourseList() {
  const { user } = useUser();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const fetchCourses = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("http://localhost:3000/api/courses");
      if (res.ok) {
        const data = await res.json();
        setCourses(data);
      } else {
        throw new Error("Gagal mengambil daftar kelas");
      }
    } catch (err) {
      console.error("Failed to fetch courses:", err);
      setError("Gagal memuat kelas. Periksa koneksi internet Anda.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  return (
    <div className="flex flex-col gap-6 w-full h-full overflow-hidden p-1">
      {/* Page Header */}
      <div className="flex items-center gap-3 shrink-0 animate-in fade-in slide-in-from-left-4 duration-500">
        <GradientIcon
          icon={BookBookmarkIcon}
          variant="blue"
          size={32}
          weight="fill"
          className="md:size-10 lg:size-12 rounded-lg shrink-0"
        />
        <h2 className="font-heading text-h4 md:text-h3 lg:text-h2 text-Primary-900 uppercase">
          Courses
        </h2>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col xl:flex-row flex-1 overflow-visible gap-6 relative min-h-0">
        {/* Course List Container - Blue Card */}
        <div
          className={cn(
            "w-full xl:w-[552px] bg-db-b rounded-xl shadow-blue-60 flex flex-col overflow-hidden border border-Primary-50 xl:shrink-0 h-full z-10 animate-in fade-in slide-in-from-left-8 duration-700 delay-100 fill-mode-both",
            selectedCourse ? "hidden xl:flex" : "flex",
          )}
        >
          <div className="h-full overflow-y-auto custom-scrollbar p-6">
            <div className="grid grid-cols-1 gap-4">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-20 gap-6 animate-in fade-in duration-500">
                  <GradientIcon
                    icon={BookBookmarkIcon}
                    variant="orange"
                    size={64}
                    weight="fill"
                    className="animate-bounce"
                  />
                  <div className="text-center space-y-2">
                    <p className="text-h3 font-heading text-Primary-50">
                      Memuat Course
                    </p>
                    <p className="text-body-md text-Primary-100">
                      Menyiapkan materi terbaik untukmu...
                    </p>
                  </div>
                  <LoadingBar
                    className="w-full max-w-[240px] shadow-deep-blue-60"
                    variant="blue"
                  />
                </div>
              ) : error ? (
                <div className="flex flex-col items-center justify-center py-20 gap-6">
                  <p className="text-body-lg text-Grayscale-50 text-center px-10">
                    {error}
                  </p>
                  <RefreshButton onRefresh={fetchCourses} loading={loading} />
                </div>
              ) : (
                courses.map((course, index) => {
                  const completedCount =
                    user?.progress?.filter(
                      (p) =>
                        p.courseId === course._id && p.isCompleted === true,
                    ).length || 0;

                  return (
                    <div
                      key={course._id}
                      className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
                      style={{ animationDelay: `${200 + index * 50}ms` }}
                    >
                      <CourseCard
                        course={course}
                        completedModules={completedCount}
                        isSelected={selectedCourse?._id === course._id}
                        onClick={(c) =>
                          setSelectedCourse(
                            selectedCourse?._id === c._id ? null : c,
                          )
                        }
                        className={cn(
                          "cursor-pointer transition-all",
                          selectedCourse?._id === course._id
                            ? "border-2 border-Secondary-400"
                            : "",
                        )}
                      />
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        <div
          className={cn(
            "h-full transition-all duration-500 ease-in-out bg-w-lb rounded-xl shadow-blue-60 border border-Primary-50 overflow-hidden flex flex-col z-0",
            selectedCourse
              ? "flex-1 opacity-100 translate-x-0"
              : "w-0 opacity-0 -translate-x-10 pointer-events-none border-0 hidden xl:flex",
          )}
        >
          {selectedCourse && (
            <div className="h-full w-full p-3 md:p-6 pb-0 xl:min-w-[400px] animate-in fade-in slide-in-from-right-8 duration-500">
              <ModuleList
                course={selectedCourse}
                onBack={() => setSelectedCourse(null)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseList;
