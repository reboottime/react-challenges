import React, { useRef, useState } from 'react';

export const StopWatch = () => {
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>();
  const [seconds, setSeconds] = useState<number>(0);

  const handleActivateButtonClick = () => {
    if (timerRef.current) {
      return;
    }

    timerRef.current = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
  };

  const handleStopButtonClick = () => {
    clearInterval(timerRef.current);
    timerRef.current = undefined;
  };

  const handleResetButtonClick = () => {
    setSeconds(0);
  };

  return (
    <div className="stop-watch text-center">
      <h2 className="stop-watch__title">Timer</h2>
      <p className="stop-watch__time p-3">{getTime(seconds)}</p>
      <p className="btn-group">
        <button className="btn btn-success btn-sm"
          onClick={handleActivateButtonClick}>
          activate
        </button>
        <button className="btn btn-warning btn-sm"
          onClick={handleStopButtonClick}>
          pause
        </button>
        <button className="btn btn-danger btn-sm"
          onClick={handleResetButtonClick}>
          reset
        </button>
      </p>
    </div>
  );
};

function getTime(totalSeconds: number): string {
  const NOTATION = 60;
  let timeString = '';

  const seconds = totalSeconds % NOTATION;
  const totalMinutes = Math.floor(totalSeconds / NOTATION);
  const minutes = Math.floor(totalMinutes % NOTATION);
  const hours = Math.floor(totalMinutes / NOTATION);

  if (hours) {
    timeString += `${hours} hrs `;
  }

  if (minutes) {
    timeString += `${minutes} mins `;
  }

  if (seconds) {
    timeString += `${seconds} secs`;
  }

  return totalSeconds
    ? timeString
    : 'please activate timer';
}
