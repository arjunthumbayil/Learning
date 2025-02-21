import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantInfo = useRestaurantMenu(resId); // hook for data collection
  // Show shimmer while loading
  if (restaurantInfo === null) {
    return <Shimmer />;
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
