import { useState } from "react";

const API_KEY = "ee2591bd88c54656abf17769af833ecb";

export default function PlaceSearch({ onSelectedPlace }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (text) => {
    setQuery(text);

    if (text.length < 3) {
      setResults([]);
      return;
    }

    try {
      const res = await fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&limit=5&apiKey=${API_KEY}`
      );

      const data = await res.json();
      setResults(data.features || []);
    } catch (error) {
      console.error("Geoapify Error:", error);
      setResults([]);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto mt-10 relative">
      {/* Input */}
      <input
        type="text"
        placeholder="Search places..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Dropdown */}
      {results.length > 0 && (
        <ul className="absolute w-full bg-white border border-gray-200 rounded-lg
                       mt-2 shadow-lg z-10">
          {results.map((place) => (
            <li
              key={place.properties.place_id}
              className="px-4 py-2 text-sm cursor-pointer
                         hover:bg-blue-50 transition"
              onClick={() => {
                setQuery(place.properties.formatted);
                setResults([]);

                // Send selected place to parent
                onSelectedPlace?.(place);
              }}
            >
              {place.properties.formatted}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
