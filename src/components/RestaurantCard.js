import { CDN_URL } from "../utils/constants";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {  name, cuisines, avgRating, deliveryTime, cloudinaryImageId } = resData?.info; // Add cloudinaryImageId here

  return (
    <div className="m-4 p-4 w-[250px] h-[450px] rounded-lg hover:bg-amber-100 lg:bg-amber-400  sm:bg-amber-700">
      <img className="res-logo rounded-lg" alt="foods" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="hnn">{cuisines.join(", ")}</h4> {/* Join cuisines array */}
      <h4 className="hnn">Rating: {avgRating} ⭐</h4> {/* Add rating icon */}
      <h4 className="hnn">Delivery Time: {deliveryTime} mins</h4> {/* Add units to delivery time */}
    </div>
  );
};

//create Higher Order Component
//input - RestaurantCard => restocardpromoted

export const withPromotedLabel = (RestorantCard) => {
 return(props) =>{
  return(
<div>
  <label className=" absolute bg-black text-white m-1 p-1 rounded-lg">Somthing</label>
  <RestaurantCard {...props}/>
</div>

  );
 };

};
export default RestaurantCard;
