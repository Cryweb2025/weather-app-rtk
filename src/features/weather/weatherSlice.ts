import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWeather } from './weatherAPI';
import type { WeatherResponse } from '../../types/WeatherResponse';

interface WeatherState {
  data: WeatherResponse | null;
  loading: boolean;
  error: string | null;
  lastCity: string;
}

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
  lastCity: '',
};

export const getWeather = createAsyncThunk('weather/fetch', async (city: string, thunkAPI) => {
  try {
    return await fetchWeather(city);
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Ошибка загрузки');
  }
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    clearWeather(state) {
    state.data = null;
    state.error = null;
  },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.data = null;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.lastCity = action.payload.name;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default weatherSlice.reducer;
export const { clearWeather } = weatherSlice.actions;

