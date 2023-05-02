import { useState, useEffect } from "react";
import { FETCH_RESTAURANTS_URL } from "./constants";

const useGetAllRestaurants = () => {
  const [allRestaurantList, setAllRestaurantList] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const res = await fetch(FETCH_RESTAURANTS_URL);
    const json = await res.json();
    setAllRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
  }

  return allRestaurantList;
};
export default useGetAllRestaurants;
