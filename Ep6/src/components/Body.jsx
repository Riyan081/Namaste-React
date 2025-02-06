import RestaurantCard from "./RestaurantCard";
import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";


const Body = () => {
  // Local State Variable - Super Powerful Variable
  let [ListOfRestaurants, setListOfRestaurants] = useState([]);
  let [filteredRestaurants, setFilteredRestaurants] = useState([]); // Added state for filtered restaurants
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
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

  if (ListOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredList = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredList); // Update filtered restaurants
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
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

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => ( // Render filtered restaurants
        <Link 
         key={restaurant.info.id} 
         to={"/restaurants/"+restaurant.info.id}
         > 
          <RestaurantCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
