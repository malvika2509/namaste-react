import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { useState } from "react";

function RestaurantMenu() {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    areaName,
    totalRatingsString,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log("print", itemCards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("category", categories);

  return (
    <div class="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg mt-6">
      {/* Restaurant Info */}
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-800">{name}</h1>
        <p class="text-gray-600">
          {avgRating} ⭐ ({totalRatingsString}) - {costForTwoMessage}
        </p>
        <h3 class="text-lg text-gray-700 mt-2">{cuisines.join(", ")}</h3>
        <h4 class="text-gray-500">{areaName}</h4>
      </div>
      {/* categories accordion */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
}

export default RestaurantMenu;
