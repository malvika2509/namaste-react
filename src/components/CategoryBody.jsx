import { React, useState } from "react";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

function CategoryBody(props) {
  const { data } = props;
  const dispatch = useDispatch();

  const handleAddButton = (item) => {
    // Extracting necessary item details for the cart
    const info = item?.card?.info;
    const cartItem = {
      id: info?.id,
      name: info?.name,
      price: info?.price || info?.defaultPrice,
      imageId: info?.imageId,
      description: info?.description || "No description available",
      quantity: 1, // Initialize quantity to 1, can be updated later
    };

    // Dispatch the action to add the item to the cart
    dispatch(addItem(cartItem));
  };

  if (data.length === 0) {
    return <div>No items available</div>;
  }

  return (
    <div className="p-4">
      {data.map((item) => {
        const info = item?.card?.info;
        const [isExpanded, setIsExpanded] = useState(false);

        const toggleDescription = () => {
          setIsExpanded(!isExpanded);
        };

        return (
          <div
            key={info.id}
            className="border-b border-gray-300 pb-4 mb-4 flex items-start"
          >
            <div className="flex w-[100%]">
              <div className="w-[95%]">
                <h3 className="font-medium text-lg mb-1">{info?.name}</h3>
                <p className="text-gray-800 font-semibold">
                  ₹{(info?.price || info?.defaultPrice || 0) / 100}
                </p>
                <p
                  className={`text-gray-600 text-sm mb-1 ${
                    isExpanded ? "" : "line-clamp-2"
                  }`}
                >
                  {info?.description || "No description available"}
                </p>
                {info?.description && info.description.length > 100 && (
                  <button
                    className="text-blue-500 text-sm underline"
                    onClick={toggleDescription}
                  >
                    {isExpanded ? "Show less" : "Read more"}
                  </button>
                )}
              </div>

              <div>
                <div className="absolute">
                  <button
                    className="absolute left-[-2] top-[-3] px-3 py-1 bg-green-600 rounded-md text-white"
                    onClick={() => handleAddButton(item)}
                  >
                    Add
                  </button>
                </div>
                {info?.imageId && (
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${info.imageId}`}
                    alt={info?.name}
                    className="w-20 rounded-md mx-4"
                  />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryBody;
