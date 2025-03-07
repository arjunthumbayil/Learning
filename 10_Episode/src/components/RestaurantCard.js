import { CDN_URL } from '../utils/constants';

const RestrauntCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    locality,
    areaName,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;
  return (
    <div
      className="m-4 p-4 w-[220px] rounded-sm"
      style={{ backgroundColor: '#f0f0f0' }}
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-lg py-4">{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>Area: {locality}</h4>
      <h4>Location: {areaName}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestrauntCard;
