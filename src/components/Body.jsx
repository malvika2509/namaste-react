import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { swiggyApi } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredlistOfRes, filteredSetListOfRes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  console.log("promoted", listOfRes);

  const fetchData = async () => {
    const swiggyData = await fetch(swiggyApi);
    const json = await swiggyData.json();
    setListOfRes(
      // not a good way so we do optional chaining
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    filteredSetListOfRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // console.log("rendered");
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-100">
        <div className="text-center p-6 bg-white rounded-lg shadow-lg border border-red-400">
          <h1 className="text-xl font-semibold text-red-600">
            You're Offline!
          </h1>
          <p className="text-gray-700 mt-2">
            Please check your internet connection and try again.
          </p>
        </div>
      </div>
    );
  }

  // conditional rendering
  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div class="flex justify-between m-4">
        {/* Search Section */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search Restaurants..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => {
              const filtered = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
              );
              filteredSetListOfRes(filtered);
            }}
          >
            Search
          </button>
        </div>
        {/* Top Rated Button */}
        <div>
          <button
            className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
            onClick={() => {
              let updatedRestaurantList = listOfRes.filter(
                (restaurant) => restaurant.info.avgRating > 4.0
              );
              setListOfRes(updatedRestaurantList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div class="flex flex-wrap justify-between m-4 ">
        {filteredlistOfRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <ResCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
