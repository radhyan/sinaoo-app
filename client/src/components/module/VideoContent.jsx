import React, { useEffect, useRef, useState } from "react";

const VideoContent = ({ step, onComplete }) => {
  const playerRef = useRef(null);
  const containerRef = useRef(null);
  const [isApiLoaded, setIsApiLoaded] = useState(false);

  useEffect(() => {
    // 1. Load the YouTube IFrame Player API code asynchronously.
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        setIsApiLoaded(true);
      };
    } else {
      setIsApiLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isApiLoaded && step.videoUrl) {
      let videoId = "";
      try {
        const urlObj = new URL(step.videoUrl);
        if (urlObj.pathname.includes("/embed/")) {
          videoId = urlObj.pathname.split("/embed/")[1].split("?")[0];
        } else if (urlObj.searchParams.get("v")) {
          videoId = urlObj.searchParams.get("v");
        }
      } catch (e) {
        console.error("Invalid Video URL", e);
      }

      if (!videoId) return;

      if (playerRef.current) {
        playerRef.current.destroy();
      }

      playerRef.current = new window.YT.Player(containerRef.current, {
        height: "100%",
        width: "100%",
        videoId: videoId,
        playerVars: {
          playsinline: 1,
          rel: 0,
          modestbranding: 1,
          iv_load_policy: 3,
        },
        events: {
          onStateChange: onPlayerStateChange,
        },
      });
    }

    return () => {
      if (playerRef.current) {
        try {
          // playerRef.current.destroy();
        } catch (e) {
          // ignore
        }
      }
    };
  }, [isApiLoaded, step.videoUrl]);

  const onPlayerStateChange = (event) => {
    if (event.data === 0) {
      // ENDED
      console.log("Video Finished! logic executed");
      if (step.onComplete || step.status !== "completed") {
        onComplete && onComplete();
      }
    }
  };

  return (
    <div className=" w-full mx-auto">
      <div className="mb-6">
        <h1 className="font-heading text-h3 text-Grayscale-900 mb-2">
          {step.title}
        </h1>
        <p className="text-body-lg text-Grayscale-600">{step.description}</p>
      </div>

      <div className="relative w-full pt-[56.25%] bg-black rounded-md overflow-hidden shadow-blue-glow mb-8">
        <div
          ref={containerRef}
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </div>
  );
};

export default VideoContent;
