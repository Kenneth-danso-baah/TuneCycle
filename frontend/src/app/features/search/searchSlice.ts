import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface SearchState<T = any> {
  query: string;
  data: T[];
  filteredData: T[];
}

const initialState: SearchState = {
  query: '',
  data: [],
  filteredData: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (
      state, 
      action: PayloadAction<{ query: string }>
    ) => {
      state.query = action.payload.query;
    },
    setData: (state, action: PayloadAction<any[]>) => {
      state.data = action.payload;
      state.filteredData = action.payload;
    },
  },
});

export const { setQuery, setData } = searchSlice.actions;
export default searchSlice.reducer;
