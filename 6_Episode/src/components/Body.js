import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import { useState, useEffect } from 'react';

const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const url1 =
    'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null';

  const url2 =
    'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

  const url3 =
    'https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.9187787&lng=79.8163671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

  const url4 =
    'https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
  const fetchData = async () => {
    const data = await fetch(url3);

    const json = await data.json();

    const requiredData =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

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
