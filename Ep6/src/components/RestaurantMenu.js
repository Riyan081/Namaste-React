import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import {Link}  from "react-router";

const RestaurantMenu = () => {
    const [resInfo, setresInfo] = useState(null);
    const { resId } = useParams();
  
    useEffect(() => {
      fetchMenu();
    }, []);
  
    const fetchMenu = async () => {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0407162&lng=72.9149894&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await data.json();
      console.log(json.data);
      setresInfo(json.data);
    };
  
    if (resInfo === null) {
      return <Shimmer />;
    }
  
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];
  
    return (
      <div className="menu">
        <h1>{name}</h1>
        <h2>
          {cuisines?.join(", ")} - {costForTwoMessage}
        </h2>
        <ul>
          {Array.isArray(itemCards) && itemCards.length > 0 ? (
            itemCards.map((item) => (
              <li key={item.card.info.id}>
                {item.card.info.name} -{" Rs."}
                {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
              </li>
            ))
          ) : (
            <p>No menu items available.</p>
          )}
        </ul>
      </div>
    );
  };
  
  export default RestaurantMenu;
  
