import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { url5 } from '../utils/constants';

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [error, setError] = useState(null);

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
      setError(err.message);
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

  // Safely access nested data with default values
  const {
    name = 'Unknown',
    cuisines = [],
    costForTwoMessage = 'N/A',
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
      <h2>{title}</h2>
      <ul>
        {itemCards.map((item) => {
          const { id, name } = item.card.info; // Destructure id and name from each item
          return <li key={id}>{name}</li>; // Use id as the key and render the name
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
