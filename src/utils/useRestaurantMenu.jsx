import React, { useState } from "react";
import { useEffect } from "react";
import { swiggyMenu } from "../utils/constants";

function useRestaurantMenu(resId) {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const menu = await fetch(swiggyMenu + resId);
    menuJson = await menu.json();
    setResInfo(menuJson.data);
  };
  return resInfo;
}

export default useRestaurantMenu;
