import { useEffect, useState } from "react";

const SearchMovies = ({ onSearch = () => {} }) => {
  const [text, setText] = useState("");
  const [searchFinal, setSearchFinal] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchFinal(text);
      onSearch(text);
    }, 1000);

    return () => {
      clearTimeout(timeout); 
    };
  }, [text]);

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Buscar película..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="p-2 w-full rounded text-white"
      />
    </div>
  );
};

export default SearchMovies;