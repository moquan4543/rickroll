"use client"
import { useRef, useState } from 'react';

export default function Home() {
    const videoRef = useRef(null);
    const [isVideoVisible, setVideoVisible] = useState(false);

    const handlePlayVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setVideoVisible(true);
        }
    };
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div>
              {!isVideoVisible && (
                  <button onClick={handlePlayVideo}
                          className="group p-5 cursor-pointer relative text-xl font-normal border-0 flex items-center justify-centerbg-transparent text-amber-50 h-auto w-[270px] overflow-hidden transition-all duration-100 justify-center">
                        <span className="
                        group-hover:w-full
                        absolute
                        left-0
                        h-full
                        w-5
                        border-y
                        border-l
                         border-purple-500
                           transition-all
                         duration-500">
                        </span>

                          <p className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
             duration-200">Group2 期末專題</p>

                      <span
                          className="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">進入網站
        </span>

                      <span
                          className="group-hover:w-full absolute right-0 h-full w-5  border-y border-r  border-purple-500 transition-all duration-500">
        </span>
                  </button>
          )}
          <video src="/video.mp4" width={720} height={640} autoPlay playsInline
                 style={{display: isVideoVisible ? 'block' : 'none'}} ref={videoRef}></video>

      </div>
</main>
)
    ;
}
