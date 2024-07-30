import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [restuMenu, setRestuMenu] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // console.log(MENU_API + resId);
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setRestuMenu(json.data);
  };
  return restuMenu;
};
export default useRestaurantMenu;
