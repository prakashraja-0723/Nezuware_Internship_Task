import React, { useEffect, useState } from 'react';

const Time = () => {
  // Auto Updating Clock
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-us", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    }),
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-us", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        }),
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div>
        {time}
      </div>
    </>
  );
};
export default Time;
