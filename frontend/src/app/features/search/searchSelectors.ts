import { RootState } from "@/app/store";


export const selectFilteredData = (state: RootState, filterFunction: (item: any, query: string) => boolean) => {
  return state.search.data.filter(item => filterFunction(item, state.search.query));
};
