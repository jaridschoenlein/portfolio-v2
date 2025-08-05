'use client'

import { useEffect, useState } from "react";
// import { MapPin } from "@deemlol/next-icons";
 

type TimeCounterProps = {
  time: number;
};


export const useTime = ({time: initial}: TimeCounterProps) => {
  const [currentTime, setCurrentTime] = useState(new Date(initial));


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return currentTime.toLocaleTimeString(undefined, {  
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}

export default function TimeCounter() {
  return (
    <div suppressHydrationWarning={true} className="col-start-1 pt-8 md:text-left">
      <div className="flex gap-4 items-center md:justify-start">
        <p className="font-extrabold md:text-5xl">
        🌲 PDX: {useTime({ time: Date.now() }) }
        </p>
     </div>
      
    </div>
  );
}

