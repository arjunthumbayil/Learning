import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import { url3 } from '../utils/constants';

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(url3);

    const json = await data.json();

    const requiredData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    console.log(requiredData);

    setListOfRes(requiredData);
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListOfRes(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
