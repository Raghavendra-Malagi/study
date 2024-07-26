import { CDN_URL } from "../utils/constants";
// const bgStyle = {
//   backgroundColor: "#261e1e08",
// };

const ResturantCard = (props) => {
  // console.log(props);
  const { resData, id } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
  const { deliveryTime } = resData?.info.sla;
  return (
    <div className="restaurantCards" id={id}>
      <div className="card">
        <div className="card-img">
          <img src={CDN_URL + cloudinaryImageId} alt="Meghana Foods" />
        </div>
        <div className="card-body">
          <h1>{name}</h1>
          <h2>{cuisines.join(",")}</h2>
          <h3>{avgRating}⭐</h3>
          <h4>Delivery in {deliveryTime} min 🚴‍♂️ </h4>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label htmlFor="">Promoted</label>
        <ResturantCard {...props} />
      </div>
    );
  };
};
export default ResturantCard;
