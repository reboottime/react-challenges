import React, { useEffect, useState } from 'react';

const TEN_SECONDS = 10;

export const MaxCount = () => {
  const [count, setCount] = useState<number>(0);
  const [remainingTime, setRemainingTime] = useState<number>(TEN_SECONDS);

  const handleCountButtonClick = () => {
    setCount((c) => c + 1);
  };
  const handleRestartButtonClick = () => {
    setCount(0);
    setRemainingTime(TEN_SECONDS);
  };
  const handleExtendButtonClick = () => {
    setRemainingTime((c) => c + TEN_SECONDS);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime <= 1) {
        clearInterval(timer);
      } else {
        setRemainingTime((t) => t - 1);
      }
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, [remainingTime]);

  return (
    <div className="text-center">
      {remainingTime >= 1
        ? (
          <React.Fragment>
            <h2 className="count">{count}</h2>
            <p className="p-3">Time left {remainingTime} seconds</p>
            <p className="btn-group">
              <button
                className="btn btn-sm btn-primary"
                onClick={handleCountButtonClick}
              >
                count
              </button>
              <button
                className="btn btn-sm btn-info"
                onClick={handleExtendButtonClick}
              >
                exend time
              </button>
            </p>
          </React.Fragment>
        )
        : (
          <React.Fragment>
            <h2 className="p-3">Time out</h2>
            <p>
              you clicked <span className="fs-1">{count}</span> times
            </p>
            <button
              className="btn btn-primary"
              onClick={handleRestartButtonClick}
            >
              restart
            </button>
          </React.Fragment>
        )}
    </div>
  );
};
