import { React, useState } from "react";

function CategoryBody(props) {
  const { data } = props;
  // console.log("blah", data);

  // Check if data is valid and contains itemCards
  if (data.length === 0) {
    return <div>No items available</div>;
  }

  return (
    <div class="p-4">
      {data.map((item) => {
        const info = item?.card?.info;
        // console.log("blahblah", info);
        const [isExpanded, setIsExpanded] = useState(false);

        // Function to toggle description
        const toggleDescription = () => {
          setIsExpanded(!isExpanded);
        };
        return (
          <div
            key={info.id}
            class="border-b border-gray-300 pb-4 mb-4 flex items-start"
          >
            {/* Details */}
            <div class="flex w-[100%]">
              <div class="w-[95%]">
                <h3 class="font-medium text-lg mb-1">{info?.name}</h3>
                <p class="text-gray-800 font-semibold">
                  ₹{(info?.price || info?.defaultPrice || 0) / 100}
                </p>
                {/* Description */}

                <p
                  class={`text-gray-600 text-sm mb-1 ${
                    isExpanded ? "" : "line-clamp-2"
                  }`}
                >
                  {info?.description || "No description available"}
                </p>
                {info?.description && info.description.length > 100 && (
                  <button
                    class="text-blue-500 text-sm underline"
                    onClick={toggleDescription}
                  >
                    {isExpanded ? "Show less" : "Read more"}
                  </button>
                )}
              </div>

              <div>
                <div class="absolute">
                  <button class="absolute left-[-2] top-[-3] px-3 py-1 bg-green-600 rounded-md text-white">
                    Add
                  </button>
                </div>
                <div>
                  {" "}
                  {/* Image */}
                  {info?.imageId && (
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${info.imageId}`}
                      alt={info?.name}
                      class="w-20 rounded-md mx-4"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryBody;
