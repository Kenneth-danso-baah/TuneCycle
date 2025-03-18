import { setQuery } from '@/app/features/search/searchSlice';
import React, { ChangeEvent } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch} from '@/app/store';
import { selectFilteredData } from '@/app/features/search/searchSelectors';

interface SearchFilterColumnProps {
  filterFunction: (item: any, query: string) => boolean;
}

const SearchFilterColumn: React.FC<SearchFilterColumnProps> = ({ filterFunction }) => {
  const dispatch = useDispatch<AppDispatch>();
  const query = useSelector((state: RootState) => state.search.query);
  const filteredData = useSelector((state: RootState) => selectFilteredData(state, filterFunction));

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery({ query: e.target.value }));
  };

  return (
    <div>
      <div className="flex items-center py-4 gap-5 px-5 bg-[#333945] rounded-[5px]">
        <FiSearch className="text-2xl" />
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleInputChange}
          className="bg-transparent w-full outline-none placeholder:font-bold text-[18px] italic"
        />
      </div>
 
 
      <div className="mt-3">
        {filteredData.map((item: any) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchFilterColumn;
