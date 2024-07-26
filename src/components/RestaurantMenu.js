import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;
  console.log(params);
  const restuMenu = useRestaurantMenu(resId);
  if (restuMenu === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    restuMenu?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restuMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  // console.log(restuMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    restuMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (res) =>
        res.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>
        {cuisines.join(",")} - {costForTwoMessage}
      </h2>
      <h2>Menu</h2>
      {/* <div className="col-md-6 col-sm-6">
        <div
          className="panel-group wrap"
          id="accordion"
          role="tablist"
          aria-multiselectable="true"
        >
          {itemCards.map((item) => (
            <div className="panel" key={item.card.info.id}>
              <div className="panel-heading" role="tab" id="headingOne">
                <h4 className="panel-title">
                  <a
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href={"#collapse" + item.card.info.id}
                    aria-expanded="true"
                    aria-controls={"collapse" + item.card.info.id}
                  >
                    {item.card.info.name}
                  </a>
                  <span>
                    {" "}
                    Rs{" "}
                    {item.card.info.price / 100 || item.card.info.defaultPrice}
                    /-
                  </span>
                </h4>
              </div>
              <div
                id={"collapse" + item.card.info.id}
                className="panel-collapse collapse in"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div className="panel-body">{item.card.info.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <ul>
        {itemCards.map((res) => (
          <li>
            {res.card.info.name} -{"  Rs."}
            {res.card.info.price / 100 || res.card.info.defaultPrice / 100}/-
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
