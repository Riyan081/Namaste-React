import RestaurantCard, {withPromotedLabel}from "./RestaurantCard";
import React, { useState, useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";
import UserContext from "../utils/UserContext";



const Body = () => {
  // Local State Variable - Super Powerful Variable
  let [ListOfRestaurants, setListOfRestaurants] = useState([]);
  let [filteredRestaurants, setFilteredRestaurants] = useState([]); // Added state for filtered restaurants
  let [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  //console.log("Body Rendered", ListOfRestaurants);

  useEffect(() => {//if i dont put dependacy array it wil called after each render 
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0407162&lng=72.9149894&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data);
    const restaurants = json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []; // Added fallback to ensure restaurants is always an array
    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants); // Set filtered restaurants initially
  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false)
    return (<h1>Offline</h1>);
  
  const {setUserName,loggedInUser} = useContext(UserContext);

  if (ListOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search m-4 p4 flex items-center">
          <input
            type="text"
            className="border border-solid"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="p-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredList = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredList); // Update filtered restaurants
            }}
          >
            Search
          </button>
      
<div className="search m-4 p4 flex items-center">
<button
          className="px-4 py-2 bg-gray-300 rounded-lg "
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurants(filteredList); // Update filtered restaurants
          }}
        >
          Top Rated Restaurants
        </button>
</div>
<div className="m-4 p-4 flex item-center">
  <label>UserName</label>
  <input className=" border border-black p-2 " value={loggedInUser} onChange={(e)=> setUserName(e.target.value)}/>
</div>

</div>
      
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => ( // Render filtered restaurants
        <Link 
         key={restaurant.info.id} 
         to={"/restaurants/"+restaurant.info.id}
         > 

         {/* if the restorant is promoted then add promoted label to it but now we dont have anything so dekhte hai kuch alag add krte */
         restaurant.info.areaName ? <RestaurantCardPromoted resData={restaurant} /> :
          <RestaurantCard resData={restaurant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};


export default Body;
