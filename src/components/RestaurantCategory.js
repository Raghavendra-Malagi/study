import React from "react";
import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, ItemCheck, setSelectIndex, dummy }) => {
  const handleClick = () => {
    setSelectIndex();
    console.log(ItemCheck);
  };
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
        <div>
          {ItemCheck && <ItemList items={data.itemCards} dummy={dummy} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
