import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { clearWeather, getWeather } from "./weatherSlice";

const Weather = () => {
  const { data, loading, error, lastCity } = useAppSelector(
    (state) => state.weather
  );
  const dispatch = useAppDispatch();

  const handleRefresh = () => {
    if (lastCity) {
      dispatch(getWeather(lastCity));
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error)
    return <p className="text-red-600 text-center mt-4">Ошибка: {error}</p>;
  if (!data) return null;

  return (
    <div className="relative mt-6 p-6 max-w-md mx-auto bg-white text-gray-800 rounded-xl shadow-lg space-y-2">
      <button
        onClick={() => dispatch(clearWeather())}
        className="absolute top-2 right-2 w-9 h-9 rounded-full bg-red-500 hover:bg-red-600 text-white text-lg font-bold shadow-md hover:shadow-lg transition-transform transform hover:scale-110 active:scale-95"
        aria-label="Закрыть"
      >
        &times;
      </button>

      <h3 className="text-2xl font-semibold text-center">
        {data.name}, {data.sys.country}
      </h3>
      <p className="text-lg">🌡 Температура: {data.main.temp}°C</p>
      <hr className="my-6 border-0 h-[1px] bg-gradient-to-r from-blue-400 via-gray-300 to-blue-400" />
      <p>💧 Влажность: {data.main.humidity}%</p>
      <hr className="my-6 border-0 h-[1px] bg-gradient-to-r from-blue-400 via-gray-300 to-blue-400" />
      <p>🌥 Описание: {data.weather[0].description}</p>
      <hr className="my-6 border-0 h-[1px] bg-gradient-to-r from-blue-400 via-gray-300 to-blue-400" />
      <p>🌬 Скорость ветра: {data.wind.speed} м/с</p>

      <div className="flex justify-center pt-2">
        <button
          onClick={handleRefresh}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Обновить погоду для {lastCity}
        </button>
      </div>
    </div>
  );
};

export default Weather;
