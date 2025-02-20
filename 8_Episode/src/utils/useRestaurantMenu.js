import { useEffect, useState } from 'react';
import { MENU_API } from './constants';

const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_API + resId);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const json = await response.json();
      setRestaurantInfo(json);
    } catch (err) {
      setError(err.message); // Handle errors
    }
  };
  return restaurantInfo;
};

export default useRestaurantMenu;
