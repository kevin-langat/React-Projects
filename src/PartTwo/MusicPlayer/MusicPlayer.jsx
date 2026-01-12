import { useEffect, useRef, useState } from 'react';
import tungevaag from '../../assets/tungevaag.mp3';
import dayfox from '../../assets/dayfox.mp3';
import zerb from '../../assets/zerb.mp3';
import { Pause, Play, SkipBackIcon, SkipForward } from 'lucide-react';
const tracks = [
  {
    title: 'Track 1',
    source: tungevaag,
    image: 'https://placehold.co/150',
  },
  {
    title: 'Track 1',
    source: zerb,
    image: 'https://placehold.co/150',
  },
  {
    title: 'Track 1',
    source: dayfox,
    image: 'https://placehold.co/150',
  },
];

function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMusicTrack, setCurrentMusicTrack] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setTrackProgress(
          (audioRef.current.currentTime / audioRef.current.duration) * 100
        );
      }, 1000);
      return () => clearInterval();
    }
  }, [isPlaying]);
  return (
    <div className='flex flex-col gap-2 items-center justify-center '>
      <h2>Music Player</h2>
      <h2>{tracks[currentMusicTrack].title}</h2>
      <img
        src={tracks[currentMusicTrack].image}
        alt={tracks[currentMusicTrack].title}
      />
      <audio ref={audioRef} src={tracks[currentMusicTrack].source} />

      <div className='w-40 h-2 rounded-full bg-green-400'>
        <div
          className='h-full bg-blue-500 rounded-full '
          style={{ width: `${trackProgress}%` }}
        ></div>
      </div>

      <div className='flex flex-row items-center justify-center gap-3'>
        <SkipBackIcon
          size={34}
          className='active:scale-95 hover:bg-green-400 p-1.5 active:bg-blue-600 rounded-full  duration-75 ease-in transform'
          onClick={() => {
            if (currentMusicTrack > 0) {
              setCurrentMusicTrack(currentMusicTrack - 1);
              setIsPlaying(false);
            }
          }}
        />
        {isPlaying ? (
          <Pause
            className='animateRotate 239'
            j
            onClick={() => {
              audioRef.current.pause();
              setIsPlaying(!isPlaying);
            }}
          />
        ) : (
          <Play
            className='animateRotatePlay'
            onClick={() => {
              audioRef.current.play();
              setIsPlaying(!isPlaying);
            }}
          />
        )}
        <SkipForward
          size={34}
          className='active:scale-95 hover:bg-green-400 p-1.5 active:bg-blue-600 rounded-full  duration-75 ease-in transform'
          onClick={() => {
            if (currentMusicTrack < tracks.length - 1) {
              setCurrentMusicTrack(currentMusicTrack + 1);
              setIsPlaying(false);
            }
          }}
        />
      </div>
    </div>
  );
}
export default MusicPlayer;
