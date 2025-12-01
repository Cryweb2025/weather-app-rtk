import WeatherForm from "./components/WeatherForm";
import Weather from "./features/weather/Weather";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-200 flex flex-col items-center justify-start p-4">
      <div className="relative flex flex-col items-center mb-6 mt-10">
        <h1 className="text-2xl font-bold text-gray-800">
          Weather Ap
          <span className="relative inline-block">
            p
            <span className="absolute -top-2 left-1/2 -translate-x-6px text-xs text-gray-500 font-semibold tracking-widest">
              LIGHT
            </span>
          </span>
        </h1>
      </div>

      <WeatherForm />
      <Weather />
    </div>
  );
}

export default App;
