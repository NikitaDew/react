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
    <div className="restaurantCard">
      <div className="restaurantImage">
        <img width="230" height="160" src={CDN_URL + cloudinaryImageId} />
      </div>
      <div className="restaurntDetails">
        <h3 className="restaurantName">{name}</h3>
        <div className="restaurantCuisine">{cuisines.join(", ")}</div>
      </div>
      <div className="restaurantMoreDetails">
        <div className="rating">
          <span></span>
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
