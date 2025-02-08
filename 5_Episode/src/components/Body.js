import RestaurantCard from './RestaurantCard'
import resList from '../utils/mockData'
import { useState } from 'react'

const Body = () => {
  const [listOfRes, setListOfRes] = useState([
    {
      info: {
        id: '74444',
        name: 'Samosa Party',
        cloudinaryImageId:
          'RX_THUMBNAIL/IMAGES/VENDOR/2024/12/23/da7b84bd-6e62-4c24-a1ce-589ea71a4941_74444.JPG',
        locality: 'Koramangala',
        areaName: 'Koramangala',
        costForTwo: '₹100 for two',
        cuisines: [
          'Fast Food',
          'Snacks',
          'Beverages',
          'Chaat',
          'North Indian',
          'Street Food',
          'Sweets',
          'Desserts',
          'Punjabi',
          'Bakery',
        ],
        avgRating: 4.4,
        sla: {
          deliveryTime: 17,
          lastMileTravel: 2.1,
          serviceability: 'SERVICEABLE',
          slaString: '15-20 mins',
          lastMileTravelString: '2.1 km',
          iconType: 'ICON_TYPE_EMPTY',
        },
      },
    },
    {
      info: {
        id: '74445',
        name: 'Chai Point',
        cloudinaryImageId:
          'RX_THUMBNAIL/IMAGES/VENDOR/2025/1/22/59f228f3-d214-4865-81fb-6e8b23734e02_676.jpg',
        locality: 'Koramangala',
        areaName: 'Koramangala',
        costForTwo: '₹120 for two',
        cuisines: [
          'Fast Food',
          'Snacks',
          'Beverages',
          'Chaat',
          'North Indian',
          'Street Food',
          'Sweets',
          'Desserts',
          'Punjabi',
          'Bakery',
        ],
        avgRating: 3.4,
        sla: {
          deliveryTime: 27,
          lastMileTravel: 2.1,
          serviceability: 'SERVICEABLE',
          slaString: '15-20 mins',
          lastMileTravelString: '2.1 km',
          iconType: 'ICON_TYPE_EMPTY',
        },
      },
    },
    {
      info: {
        id: '74446',
        name: 'Coffee Day',
        cloudinaryImageId:
          'RX_THUMBNAIL/IMAGES/VENDOR/2024/12/6/894b8a85-214e-470f-9e32-370e8177a29c_289167.jpg',
        locality: 'Koramangala',
        areaName: 'Koramangala',
        costForTwo: '₹150 for two',
        cuisines: [
          'Fast Food',
          'Snacks',
          'Beverages',
          'Chaat',
          'North Indian',
          'Street Food',
          'Sweets',
          'Desserts',
          'Punjabi',
          'Bakery',
        ],
        avgRating: 4.1,
        sla: {
          deliveryTime: 37,
          lastMileTravel: 2.1,
          serviceability: 'SERVICEABLE',
          slaString: '15-20 mins',
          lastMileTravelString: '2.1 km',
          iconType: 'ICON_TYPE_EMPTY',
        },
      },
    },
  ])
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4
            )
            setListOfRes(filteredList)
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          )
        })}
      </div>
    </div>
  )
}

export default Body
