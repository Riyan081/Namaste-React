import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { Link } from "react-router";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams(); //hoook that gives us resid from link

  const resInfo = useRestrauntMenu(resId);

  const[showIndex, setshowIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || [];

  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>

      <h2 className="font-bold text-lg">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </h2>
      {/* catagory accordion*/}

      {categories.map((catagory,index) => (
        <RestaurantCategory
          key={catagory?.card?.card.title}
          data={catagory?.card?.card}

          showItems ={index === showIndex  ? true:false}
          setshowIndex ={() => setshowIndex(index === showIndex ? null : index)}
         index = {index}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

//-------Mounting
//  constructor(dummy)
//  render (dummy)
//
//<html> dummy
//componentDidMount(dummy)
//<api call
//this.setState(dummy) ->state variable is updated
// ------UPDATE
// render(API DATA))
//Html (new api data)
//componentDidUpdate
