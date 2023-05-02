import { useParams } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);
  const restaurantInfo = restaurant?.[0]?.card?.card?.info;

  const restaurantMenuItems =
    restaurant?.[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card
      .itemCards;

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="Restaurantbody_wrapper">
      <div className="RestaurantHeader_container">
        <div className="RestaurantHeader_wrapper">
          <div className="RestaurantNameAddress_wrapper">
            <div>
              <div className="RestaurantNameAddress_name">
                {restaurantInfo?.name}
              </div>
              <div className="RestaurantNameAddress_cuisines">
                {restaurantInfo?.cuisines.join(", ")}
              </div>
            </div>
            <div>
              <div className="RestaurantRatings_wrapper">
                <span className="RestaurantRatings_avgRating">
                  <span>{restaurantInfo.avgRating}</span>
                </span>
                <span className="RestaurantRatings_totalRatings">
                  {restaurantInfo.totalRatingsString}
                </span>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="RestaurantNameAddress_area">
              {restaurantInfo?.areaName},{" "}
              {restaurantInfo?.sla.lastMileTravelString}
            </div>
          </div>
        </div>
        <div className="RestaurantMessage_wrapper">
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648635511/Delivery_fee_new_cjxumu"
            alt="DISTANCE_FEE_NON_FOOD_LM"
            className="RestaurantMessage_icon__1qCvu"
            aria-hidden="true"
          />
          <span className="RestaurantMessage_text__1k5GF" aria-hidden="true">
            2.7 kms | ₹27 Delivery fee will apply
          </span>
        </div>
        <div className="RestaurantHeader_marginBottom" aria-hidden="true">
          <ul className="RestaurantTimeCost_wrapper">
            <li className="RestaurantTimeCost_item">
              <svg
                className="RestaurantTimeCost_icon"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <circle
                  r="8.35"
                  transform="matrix(-1 0 0 1 9 9)"
                  stroke="#3E4152"
                  strokeWidth="1.3"
                ></circle>
                <path
                  d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
                  fill="#3E4152"
                ></path>
              </svg>
              <span>21 MINS</span>
            </li>
            <li className="RestaurantTimeCost_item">
              <svg
                className="RestaurantTimeCost_icon"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <circle
                  cx="9"
                  cy="9"
                  r="8.25"
                  stroke="#3E4152"
                  strokeWidth="1.5"
                ></circle>
                <path
                  d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
                  fill="#3E4152"
                ></path>
              </svg>
              <span>₹200 for two</span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {restaurantMenuItems?.map((item) => {
          const itemInfo = item.card?.info;
          return (
            <div key={itemInfo.id}>
              <div
                style={{
                  paddingBottom: "14px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div className="item_name_text">{itemInfo.name}</div>
                  <div style={{ fontSize: "1rem" }}>
                    ₹{itemInfo.price / 100}
                  </div>
                  <div className="item_Description">{itemInfo.description}</div>
                </div>
                <div>
                  <img
                    src={CDN_URL + itemInfo.imageId}
                    className="Item_image"
                  />
                </div>
              </div>
              <div className="divider" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantMenu;
