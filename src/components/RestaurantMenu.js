import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [selectIndex, setSelectIndex] = useState(null);
  const params = useParams();
  const { resId } = params;
  const dummy = "Dummy data";
  // console.log(params);
  const restuMenu = useRestaurantMenu(resId);
  if (restuMenu === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    restuMenu?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restuMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  // console.log(restuMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    restuMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (res) =>
        res.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-green-600">{name}</h1>
      <h2 className="text-2xl">
        {cuisines.join(",")} - {costForTwoMessage}
      </h2>
      {categories.map((categories, index) => (
        <>
          <RestaurantCategory
            key={index}
            ItemCheck={index === selectIndex ? true : false}
            data={categories?.card?.card}
            setSelectIndex={() => setSelectIndex(index)}
            dummy={dummy}
          />
        </>
      ))}
    </div>
  );
};

export default RestaurantMenu;
