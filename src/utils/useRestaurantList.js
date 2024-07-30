import { useEffect, useState } from "react";
import { RESTAURANT_API } from "./constants";

const useRestaurantList = () => {
  const [resList1, setResList1] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);
    const json = await data.json();
    // console.log(json);
    setResList1(
      jsonData?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        .restaurants
    );
    setFilteredList(
      jsonData?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
};

export default useRestaurantList;
