//import {swigyurl} from "../Contants";
import Resturantlists from "./Resturantlists";
import {useState, useEffect} from "react";


const  handlesearch = () => {
    //console.log("handle search", count ++);
}

const Body = () => {
    const [restaurant, setRestaurant] = useState([]);
    const [searchtxt, setSearchtxt] = useState([]);
    useEffect(()=>{
        getrestrauntlisy();
        console.log("inside useEffect");
    },[])

    async function getrestrauntlisy() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9331758&lng=72.8239238&sortBy=COST_FOR_TWO_H2L&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setRestaurant(json?.data?.cards[0]?.data?.data?.cards);
    }
    
    console.log("outside the return");
  
    return(
    <>
    {console.log("inside the return statement")}
     <h4>Body component</h4>
     <input type="text" value={searchtxt} onChange={(e) => setSearchtxt(e.target.value)} />
     

      <button className="buttonsearch" onClick={handlesearch}>Search</button>
     <div className ="Restrauntlistblock">
        {restaurant.map((list)=>{
            return (
            <Resturantlists {...list.data} key ={list.data.id}/>
            )
        })}
     </div>


    </>
    );
}

export default Body;