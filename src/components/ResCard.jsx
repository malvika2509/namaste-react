import React from "react";
import { mediaUrl } from "../utils/constants";

function ResCard(props) {
  const { resData } = props;
  const { cloudinaryImageId, cuisines, name, avgRating, costForTwo } =
    resData.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div class="bg-gray-200 rounded-lg mb-3 flex flex-col items-center justify-between w-[300px] h-[350px] transform transition-transform duration-300 hover:scale-95 hover:-translate-z-10 shadow-lg">
      <img
        src={mediaUrl + cloudinaryImageId}
        alt="res-logo"
        class="w-full h-40 object-cover rounded-t-lg"
      />
      <div class="p-4 flex flex-col flex-grow">
        <h3
          class="text-center font-bold truncate overflow-hidden"
          title={name} // Tooltip to show full name on hover
        >
          {name}
        </h3>
        <div class="flex justify-center mt-2">
          <h3 class="mr-3">⭐{avgRating}</h3>
          <h3 class="font-semibold">▪{deliveryTime} mins</h3>
          <h3 class="font-medium ml-3">{costForTwo}</h3>
        </div>
        <h3
          class="text-gray-600 mt-2 text-center break-words"
          style={{
            wordWrap: "break-word", // Ensures text wraps within the container
            overflowWrap: "break-word",
          }}
          title={cuisines.join(", ")} // Tooltip for full cuisines list
        >
          {cuisines.slice(0, 5).join(", ")}
        </h3>
      </div>
    </div>
  );
}

export default ResCard;
