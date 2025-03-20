import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SearchState<T> {
  query: string;
  data: T[];
  filteredData: T[];
  loading: boolean;
}

const initialState: SearchState<any> = {
  query: "",
  data: [],
  filteredData: [],
  loading: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setData: (state, action: PayloadAction<any[]>) => {
      state.data = action.payload;
      state.filteredData = action.payload;
    },
    setFilteredQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
      state.filteredData = state.data.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setQuery, setData, setFilteredQuery, setLoading } = searchSlice.actions;
export default searchSlice.reducer;
