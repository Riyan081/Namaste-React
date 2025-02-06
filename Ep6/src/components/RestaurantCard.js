import { CDN_URL } from "../utils/constants";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {  name, cuisines, avgRating, deliveryTime, cloudinaryImageId } = resData?.info; // Add cloudinaryImageId here

  return (
    <div className="res-card">
      <img className="res-logo" alt="foods" src={CDN_URL + cloudinaryImageId} />
      <h3 className="hnn">{name}</h3>
      <h4 className="hnn">{cuisines.join(", ")}</h4> {/* Join cuisines array */}
      <h4 className="hnn">Rating: {avgRating} ⭐</h4> {/* Add rating icon */}
      <h4 className="hnn">Delivery Time: {deliveryTime} mins</h4> {/* Add units to delivery time */}
    </div>
  );
};

export default RestaurantCard;
