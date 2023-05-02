export const handleSearch = () => {
  const searchedData = allRestaurantList?.filter((res) => {
    return res?.data?.name?.toLowerCase().includes(searchText.toLowerCase());
  });
  setFilteredRestaurantList(searchedData);
};

export function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filterData;
}
