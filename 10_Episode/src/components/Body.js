import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import RestaurantCard from './RestaurantCard';
import { url3 } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

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

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like your're Offline! Please check your Internet connection.
      </h1>
    );
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-between items-center m-4 p-5">
        {/* Left Side: Input, Search, Reset */}
        <div className=" flex items-center space-x-4">
          <input
            type="text"
            className="border border-solid border-black rounded-lg px-3 py-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-blue-300 rounded-lg hover:bg-blue-400 transition-colors"
            onClick={() => {
              const filtered = allRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filtered);
            }}
            aria-label="Search"
          >
            Search
          </button>
          <button
            className="px-4 py-2 bg-blue-300 rounded-lg hover:bg-blue-400 transition-colors"
            onClick={() => {
              setFilteredRestaurants(allRestaurants);
              setSearchText('');
            }}
            aria-label="Reset"
          >
            Reset
          </button>
        </div>

        {/* Right Side: Top Rated Restaurant Button */}

        <div className="flex items-center">
          <button
            className="px-4 py-2 bg-blue-300 rounded-lg hover:bg-blue-400 transition-colors"
            onClick={() => {
              const filtered = allRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredRestaurants(filtered);
            }}
            aria-label="Top Rated Restaurant"
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={'/restaurant/' + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
