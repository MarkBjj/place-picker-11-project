import { useState, useEffect } from "react";
export default function ProgressBar({ timer }) {
  //progress bar state
  const [remainingTime, setRemainingTime] = useState(timer);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <progress id="delete-progress" max={timer} value={remainingTime}></progress>
  );
}
