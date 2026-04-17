import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mb-4">
      <p className="text-sm text-gray-400">Hora actual</p>
      <h2 className="text-xl font-bold">
        {time.toLocaleTimeString()}
      </h2>
    </div>
  );
};

export default Clock;