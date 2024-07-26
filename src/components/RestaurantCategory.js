import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [ItmeCheck, setItemCheck] = useState(false);
  const handleClick = () => {
    setItemCheck(!ItmeCheck);
  };
  //   console.log(data);
  return (
    <div>
      <div className="w-6/12 shadow-lg mx-auto p-4 bg-gray-50 my-5 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-3xl">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        <div>{ItmeCheck && <ItemList items={data.itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
