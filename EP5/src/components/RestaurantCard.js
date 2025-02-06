import { CDN_URL } from "../utils/constants";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId } = resData?.data; // Add cloudinaryImageId here

  return (
    <div className="res-card">
      <img className="res-logo" alt="foods" src={CDN_URL + cloudinaryImageId } />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
