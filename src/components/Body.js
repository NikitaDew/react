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
      <div className="searchContainer p-5">
        <input
          data-testid="search-input"
          className="searchInput border rounded-sm px-3 focus:bg-green-50 focus:border-green-300"
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          data-testid="search-btn"
          className="searchButton px-3 mx-5 border rounded-sm hover:bg-green-100 hover:border-green-300"
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
      <div
        className="restaurantContainer flex flex-wrap"
        data-testid="res-list"
      >
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
