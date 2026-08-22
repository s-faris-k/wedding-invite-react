import { useEffect } from "react";
import { play } from "../lib/audioController";

export default function AudioPlayer() {
  useEffect(() => {
    // Try autoplay (works for some browsers/returning visitors)
    play();

    // Unlock audio on the first user interaction
    const unlock = () => {
      play();
    };

    window.addEventListener("pointerdown", unlock, { once: true });
    window.addEventListener("touchstart", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });

    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, []);

  return null;
}