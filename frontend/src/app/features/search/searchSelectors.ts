import { RootState } from "@/app/store";


export const selectFilteredData = <T>(
  state: RootState,
  filterFunction: (item: T, query: string) => boolean
): T[] => {
  return (state.search.data as T[]).filter(item =>
    filterFunction(item, state.search.query || "")
  );
};
