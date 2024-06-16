import { useParams } from "react-router-dom";
import { useSearchRestaurants } from "../api/RestaurantApi";
import SearchResultInfo from "../components/SearchResultInfo";
import SearchResultCard from "../components/SearchResultCard";
import { useState } from "react";
import SearchBar, { SearchForm } from "../components/Searchbar";
import PaginationSelector from "../components/PaginationSelector";

export type SearchState = {
  searchQuery: string;
  page:number;
};

const SearchPage = () => {
  const { city } = useParams();
  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
    page:1

  });
  const { results, isLoading } = useSearchRestaurants(searchState,city);

  const setSearchQuery = (searchFormData: SearchForm) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,
    }));
  };

  const resetSearch = () => {
    setSearchState({ ...searchState, searchQuery: "" });
  };

  const setPage = (page:number)=>{
    setSearchState({...searchState,page})
  }

  if (isLoading) {
    return <p>Loading restaurants...</p>;
  }

  if (!results?.data || !city) {
    return <p>No results found</p>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div id="cuisines-list" className="">
        insert cuisines here:
      </div>
      <div id="main-content" className="flex flex-col gap-5 ">

        <SearchBar
          searchQuery={searchState.searchQuery}
          onSubmit={setSearchQuery}
          placeholder={"Search by cuisine or Restaurant name"}
          onReset={resetSearch}
        />

        <SearchResultInfo total={results.pagination.total} city={city} />
        {results.data.map((restaurant) => (
          <SearchResultCard restaurant={restaurant} />
        ))}
        <PaginationSelector page={results.pagination.page} pages={results.pagination.pages} onPageChange={setPage}/>
      </div>
    </div>
  );
};

export default SearchPage;
