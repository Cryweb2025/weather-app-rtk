import { useState } from "react";
import { getWeather } from "../features/weather/weatherSlice";
import { useAppDispatch } from "../hooks/hooks";

const WeatherForm = () => {
  const [city, setCity] = useState("");
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    if (!city.trim()) {
      alert("Введите название города");
      return;
    }

    dispatch(getWeather(city));
    setCity("");
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md">
      <p>
        Введите ниже название города например: <b>Berlin</b>
      </p>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Введите город"
        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleSearch}
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
      >
        Получить погоду
      </button>
    </div>
  );
};

export default WeatherForm;
