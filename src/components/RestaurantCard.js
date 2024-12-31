import { CDN_URL } from "../utils/constants";
const RestaurantCard =(props) =>{
    const {resData} = props;
    const{name,cuisines,avgRating,deliveryTime}  = resData?.data;
      return(
          <div className="res-card">
  
              <img className="res-logo" alt="foods"src= {CDN_URL}/>
             <h3>{name}</h3> 
             <h4>{cuisines}</h4>
             <h4>{avgRating}</h4>
             <h4>{deliveryTime}</h4>
          </div>
      )
  }

  export default RestaurantCard;