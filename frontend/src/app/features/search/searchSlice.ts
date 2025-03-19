import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SearchState<T> {
  query: string;
  data: T[];
  filteredData: T[];
}

// Define a generic function for the initial state
const initialState = <T = unknown>(): SearchState<T> => ({
  query: '',
  data: [],
  filteredData: [],
});

const searchSlice = createSlice({
  name: 'search',
  initialState: initialState<unknown>(), // Use `unknown` instead of `any`
  reducers: {
    setQuery: (state, action: PayloadAction<{ query: string }>) => {
      state.query = action.payload.query;
    },
    setData: <T>(state: SearchState<T>, action: PayloadAction<T[]>) => {
      state.data = action.payload;
      state.filteredData = action.payload;
    },
  },
});

export const { setQuery, setData } = searchSlice.actions;
export default searchSlice.reducer;
