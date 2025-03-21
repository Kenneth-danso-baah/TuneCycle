"use client"

import React, { useRef, useState } from 'react';

function AudioPlayerTest() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Failed to play audio:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <audio
        ref={audioRef}
        src="https://ipfs.io/ipfs/bafybeieuuu3ljstcdy2drjv5vansx4gpgyyivq7uihlkcphxzpnaunzabi"
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
}

export default AudioPlayerTest;