import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import {Link}  from "react-router";
import useRestrauntMenu from "../utils/useRestrauntMenu"; 

const RestaurantMenu = () => {
   
    const { resId } = useParams();//hoook that gives us resid from link
  
   const resInfo = useRestrauntMenu(resId);
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
