import {ImageUrl} from "../Contants";

const  Resturantlists  = ({id,name,cloudinaryImageId,area}) => {
    return(
        <>
          <div className="Restrauntantlist">
             
             <img  src={ImageUrl+cloudinaryImageId} alt="No-Image"/>
             <div className="cartdetails">
               <div>{name}</div>
               <div>{area}</div>
             </div>
          </div>
        </>
    );
}
export default Resturantlists;
