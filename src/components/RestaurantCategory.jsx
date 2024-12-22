import React, { useState } from "react";
import CategoryBody from "./CategoryBody";

function RestaurantCategory({ data, showItems, setShowIndex }) {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div class="px-4 py-2">
        <div
          class="flex justify-between items-center cursor-pointer"
          onClick={handleClick}
        >
          {/* header- accordian item */}
          <span class="font-bold text-md">
            {data.title} ({data.itemCards.length})
          </span>
          <button>{showItems ? "▼" : "▲"}</button>
        </div>
        <div>{showItems && <CategoryBody data={data.itemCards} />}</div>
      </div>
      {/* Line Below the Title */}

      <div class="border-t-4 border-gray-300"></div>

      {/* accordian body */}
    </div>
  );
}

export default RestaurantCategory;
