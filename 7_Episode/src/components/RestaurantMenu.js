import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { url5 } from '../utils/constants';

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(url5);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const json = await response.json();
      setRestaurantInfo(json);
    } catch (err) {
      setError(err.message); // Handle errors
    }
  };

  // Show shimmer while loading
  if (restaurantInfo === null) {
    return <Shimmer />;
  }

  // Show error message if there's an error
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Safely access nested data
  const {
    name = 'Unknown',
    cuisines = [],
    cloudinaryImageId,
    costForTwoMessage = 'N/A',
    avgRating,
    sla,
  } = restaurantInfo?.data?.cards[2]?.card?.card?.info || {};

  const menuCategoriesArray =
    restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    [];

  const { title = 'Menu', itemCards = [] } =
    menuCategoriesArray[1]?.card?.card || {};

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards.map((item) => {
          const { id, name, price } = item.card.info;
          return (
            <li key={id}>
              {name} - ₹{price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
