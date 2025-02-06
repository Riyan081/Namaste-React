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
const resto =  () =>{
return (
<div>
  <h1>hi</h1>
  <h2>hello world</h2>

  <h4>I am doing some try and error shit tbh </h4>
  <h4>Hello i am leonel messi and i am best player int the world dont you know that bitvh </h4>
  <k>what does this tab do can you tell me this hnn plz tell me </k>
</div>
);
}

export default RestaurantCard;
