import { useParams } from "react-router-dom";
import { useSearchRestaurants} from "../api/RestaurantApi";

const SearchPage = () => {
  const {city} = useParams()
  const {results,isLoading} = useSearchRestaurants(city)

  if (isLoading) {
    return <p>Loading restaurants...</p>;
  }

  if (!results) {
    return <p>Error fetching restaurants</p>; // Handle potential errors
  }

    
  return(
    <span>
        {city}
     
       <div>
        {results?.data.map((res)=>(
          <h1>
            {res.restaurantName}
          </h1>
        ))}
       </div>
    </span>
  )
}

export default SearchPage;