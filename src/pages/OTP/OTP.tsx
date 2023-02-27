import React, { useEffect, useRef, useState } from 'react';

const TEN_SECONDS = 10;

export const Otp = () => {
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const [count, setCount] = useState(TEN_SECONDS);
  const [code, setCode] = useState(getCode);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (count <= 1) {
        setCount(TEN_SECONDS);
        setCode(getCode);
      } else {
        setCount((c) => c - 1);
      }
    }, 500);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [count]);

  return (
    <div className="otp text-center">
      <p className="p-3 otp__code">{code}</p>
      <p className="otp__timer">{count}</p>
      <button className='btn btn-warning'
        onClick={() => clearInterval(timerRef.current)}>pause</button>
    </div>
  );
};

function getCode() {
  const DIGIT_SIZE = 6;
  const nums: number[] = [];

  for (let i = 0; i < DIGIT_SIZE; i++) {
    const num = Math.floor((Math.random() * 10) % 10);
    nums.push(num);
  }

  return nums.join('');
}
