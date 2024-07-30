import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
// const bgStyle = {
//   backgroundColor: "#261e1e08",
// };

const ResturantCard = (props) => {
  const { loggedInUser } = useContext(UserContext);
  // console.log(props);
  const { resData, id } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
  const { deliveryTime } = resData?.info.sla;
  return (
    <div className="restaurantCards" id={id}>
      <div className="card w-[200px] mx-4 my-6  h-[400px] transition-all hover:bg-green-300/30">
        <div className="card-img">
          <img
            src={CDN_URL + cloudinaryImageId}
            alt="Meghana Foods"
            className="w-[100%] h-[130px] object-cover rounded-lg"
          />
        </div>
        <div className="card-body overflow-hidden px-6">
          <h1 className="text-4xl my-4 text-green-600 font-bold">{name}</h1>
          <h2 className="text-xl break-words text-black ">
            {cuisines.join(",")}
          </h2>
          <h3 className="text-2xl text-black ">{avgRating}⭐</h3>
          <h4 className="text-black text-xl">
            Delivery in {deliveryTime} min 🚴‍♂️{" "}
          </h4>
          <h4 className="text-xl">User: {loggedInUser}</h4>
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
