import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
  } = props.resData.data;
  return (
    <div className="restaurantCard w-64  p-3 m-4 hover:shadow-md">
      <div className="restaurantImage w-64 h-40 relative">
        <img width="230" height="160" src={CDN_URL + cloudinaryImageId} />
      </div>
      <div className="restaurntDetails  mb-2">
        <h3 className="restaurantName text-base font-medium">{name}</h3>
        <div className="restaurantCuisine text-gray-500 text-xs mt-1">
          {cuisines.join(", ")}
        </div>
      </div>
      <div className="restaurantMoreDetails flex items-center text-gray-500 text-xs mt-2 justify-between">
        <div className="rating">
          <span>⭐️</span>
          <span>{avgRating}</span>
        </div>
        <div>.</div>
        <div>{deliveryTime} MINS</div>
        <div>.</div>
        <div>₹{costForTwo / 100} FOR TWO</div>
      </div>
    </div>
  );
};
export default RestaurantCard;
