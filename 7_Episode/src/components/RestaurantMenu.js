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
  const { name, cuisines } = restaurantInfo.data.cards[2].card.card.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(', ')}</p>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
