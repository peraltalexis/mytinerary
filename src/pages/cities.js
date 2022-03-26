import React from "react";
import MediaCard from "../components/mediaCard"
import { useStateValue } from "../StateProvider";

const Cities = () => {
    const [{cities}, dispatch] = useStateValue ()
  return (
      <div>
         <h1>World Cities</h1> 
         {cities?.map(city=> 
         <MediaCard city = {city}/>
         )}
      </div>
  )
}
export default Cities;