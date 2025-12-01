import axios from "axios";
import type { WeatherResponse } from "../../types/WeatherResponse";

const API_KEY = "75aaf55204368e015c579a40ad42f3cc";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city: string): Promise<WeatherResponse> => {
  const response = await axios.get<WeatherResponse>(
    `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
  );
  return response.data;
};
