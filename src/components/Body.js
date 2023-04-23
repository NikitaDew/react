import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [allRestaurantList, setAllRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.976888&lng=77.710466&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await res.json();
    setAllRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
  }

  const handleFilterButton = () => {
    const filteredData = allRestaurantList?.filter((res) => {
      return res?.data?.avgRating >= 4;
    });
    setFilteredRestaurantList(filteredData);
  };

  const handleSearch = () => {
    const searchedData = allRestaurantList?.filter((res) => {
      return res?.data?.name?.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRestaurantList(searchedData);
  };

  // Not rendered component (early return)
  if (!allRestaurantList) return null;

  // if (filteredRestaurantList?.length === 0)
  //   return <h1>No Restaurant match your filter</h1>;

  return filteredRestaurantList?.length === 0 ? (
    <h1>Shimmer UI is loading.........</h1>
  ) : (
    <div className="body">
      <button className="filterButton" onClick={handleFilterButton}>
        Top Rated Restaurants
      </button>
      <div className="searchContainer">
        <input
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="searchButton" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="restaurantContainer">
        {filteredRestaurantList?.map((resData) => {
          return <RestaurantCard key={resData.data.id} resData={resData} />;
        })}
      </div>
    </div>
  );
};

export default Body;
