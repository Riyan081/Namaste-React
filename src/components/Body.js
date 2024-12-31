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
      const data = await fetch();
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
          ListOfRestaurants.map((restaurant)=> (<RestaurantCard key={restaurant.data.id}resData = {restaurant}/>))
        }
        </div>
      </div>
    )
    };

    export default Body;


