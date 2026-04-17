import { useState, useEffect } from "react";

const Counter = ({ movieId = null }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!movieId) return;

    const saved = localStorage.getItem(`views_${movieId}`);
    if (saved) setCount(Number(saved));
  }, [movieId]);

  useEffect(() => {
    if (!movieId) return;

    localStorage.setItem(`views_${movieId}`, count);
  }, [count, movieId]);

  const getColor = () => {
    if (count === 0) return "bg-gray-600";
    if (count === 1) return "bg-yellow-500";
    if (count === 2) return "bg-orange-500";
    if (count === 3) return "bg-green-600";
  };

  const increase = () => {
    if (count < 3) setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="mt-4">

      <p className="text-sm mb-2">Veces que la viste</p>

      <div className="flex items-center gap-3">

        <button
          onClick={decrease}
          disabled={count === 0}
          className="px-3 py-1 bg-gray-700 rounded disabled:opacity-30"
        >
          -
        </button>

        <span className={`px-3 py-1 rounded ${getColor()}`}>
          {count}
        </span>

        <button
          onClick={increase}
          disabled={count === 3}
          className="px-3 py-1 bg-gray-700 rounded disabled:opacity-30"
        >
          +
        </button>

      </div>

    </div>
  );
};

export default Counter;