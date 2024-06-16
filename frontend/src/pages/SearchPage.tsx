import { useParams } from "react-router-dom";
import { useSearchRestaurants } from "../api/RestaurantApi";
import SearchResultInfo from "../components/SearchResultInfo";
import SearchResultCard from "../components/SearchResultCard";

const SearchPage = () => {
  const { city } = useParams();
  const { results, isLoading } = useSearchRestaurants(city);

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
        <SearchResultInfo total={results.pagination.total} city={city} />
        {results.data.map((restaurant)=>(
        <SearchResultCard restaurant={restaurant}/>
      ))}
    </div>
      </div>

     
  );
};

export default SearchPage;
