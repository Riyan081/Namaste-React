import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mokData";
import {useState,useEffect}from "react";
import resObj from "../utils/mokData";

const Body =() =>{
  //Local State Variable - Super Powerful Variable 
  let [ListOfRestaurants,setListOfRestaraunts] = useState(resObj);

    useEffect(()=>{
     fetchData();
    },[]);

    const fetchData = async () =>{
      const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667');
      const json = await data.json();
      
      console.log(json);
    }
    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>
                {
                //filter logic here 
                const filterdList = ListOfRestaurants.filter(
                  (res)=> res.data.avgRating > 4
                );  
               
                setListOfRestaraunts(filterdList);
                }
            }
            >Top Rated Restaurants</button>
        </div>
        <div className="res-container">
        {
          ListOfRestaurants.map((restaurant)=> (<RestaurantCard key={restaurant.data.id} resData = {restaurant}/>))
        }
        </div>
      </div>
    )
    };

    export default Body;


