import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { FETCH_RESTAURANTS_URL } from "../utils/constants";
import useOnline from "../utils/useOnline";
import { filterData } from "../utils/helper";
const Body = () => {
  const [allRestaurantList, setAllRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] =
    useState(allRestaurantList);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const res = await fetch(FETCH_RESTAURANTS_URL);
      const json = await res.json();
      setAllRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
    } catch (e) {
      console.log(e);
    }
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>🔴 Offline, Please check your internet connection</h1>;
  }
  // Not rendered component (early return)
  if (!allRestaurantList) return null;

  return allRestaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <button
        className="filterButton"
        onClick={() => filterData(searchText, allRestaurantList)}
      >
        Top Rated Restaurants
      </button> */}
      <div className="searchContainer">
        <input
          className="searchInput"
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="searchButton"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurantList);
            // update the state - restaurants
            setFilteredRestaurantList(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurantContainer">
        {filteredRestaurantList?.map((resData) => {
          return (
            <Link to={"/restaurant/" + resData.data.id} key={resData.data.id}>
              <RestaurantCard resData={resData} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
