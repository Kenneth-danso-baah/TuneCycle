// searchSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Listing } from "../../../../types/global.types";


export interface SearchState {
  query: string;
  data: Listing[];
  filteredData: Listing[];
  loading: boolean;
}

const initialState: SearchState = {
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
    setData: (state, action: PayloadAction<Listing[]>) => {
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