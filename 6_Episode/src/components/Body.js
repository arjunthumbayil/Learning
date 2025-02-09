import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import RestaurantCard from './RestaurantCard';
import { url3 } from '../utils/constants';

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]); // 🔹 Keep original list
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); // 🔹 Display list
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(url3);
    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setAllRestaurants(restaurants); // Store original list
    setFilteredRestaurants(restaurants); // Initially, both are the same
  };

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        {/* 🔎 Search */}
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filtered = allRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>

        {/* ⭐ Top Rated Filter */}
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = allRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRestaurants(filtered);
          }}
        >
          Top Rated Restaurant
        </button>

        {/* 🔄 Reset Button */}
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRestaurants(allRestaurants);
            setSearchText('');
          }}
        >
          Reset
        </button>
      </div>

      {/* 🍽️ Restaurant List */}
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
