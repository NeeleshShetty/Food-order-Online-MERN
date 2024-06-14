import { useParams } from "react-router-dom";

const SearchPage = () => {
  const {city} = useParams()

  return(
    <span>
        {city}2342342
    </span>
  )
}

export default SearchPage;