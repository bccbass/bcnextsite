import React, {useState, useEffect} from 'react'

type LoadingProgressProps = {  videoRef: React.RefObject<HTMLVideoElement | null>;
}
const LoadingProgress = ({videoRef}:LoadingProgressProps) => {

      const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleProgress = () => {
      const video = videoRef.current;
      if (video && video?.buffered.length > 0 && video.duration) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        const duration = video.duration;
        const percent = Math.min((bufferedEnd / (duration)) * 100, 100);
        setProgress(Math.floor(percent));
      }
    };

    const video = videoRef.current;
    video?.addEventListener('progress', handleProgress);

    return () => {
      video?.removeEventListener('progress', handleProgress);
    };
  }, [videoRef]);

  return (
    <div>{progress}</div>
  )
}

export default LoadingProgress