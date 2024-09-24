import React from "react";
import { useEffect, useState, useContext } from "react";
import resList from "../utils/mockdata";
import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import Shimmer from "./Shimmer";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resList1, setResList1] = useState([]);
  const RestaurantPromoted = withPromotedLabel(ResturantCard);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    // console.log(jsonData);
    setResList1(
      jsonData?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredList(
      jsonData?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);
  if (onlineStatus === false)
    return (
      <div className="container">
        <h1>
          Looks like you are offline!!! please check your internet connection
        </h1>
      </div>
    );
  // if (resList1.length === 0) return <Shimmer />;
  return resList1.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container body mt-8">
      <div className="search-field flex justify-start mb-10">
        <div className="search-filter">
          <input
            type="text"
            data-testid="searchInput"
            className="border-solid border-2 border-green-700 focus-visible:outline-none mr-4"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn bg-green-700 text-white px-4 py-2"
            onClick={() => {
              const filteredSearchText = filteredList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              filteredSearchText == ""
                ? Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "We are not taking any orders for this",
                    footer: "Apology for the inconvinience caused",
                  })
                : setFilteredList(filteredSearchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="sortBtn mx-4 bg-green-700 text-white px-4 py-2"
          name="Filter by rating"
          onClick={() => {
            const restList = filteredList.filter(
              (res) => res.info.avgRating > 4.4
            );
            setFilteredList(restList);
          }}
        >
          Filter by rating
        </button>
        <button
          className="Reset-btn bg-green-700 text-white px-4 py-2"
          onClick={() => {
            setFilteredList(resList1);
          }}
        >
          Reset filter
        </button>
        <input
          type="text"
          className="ml-2 border-2 border-green-500 focus-visible:outline-none"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="cards-div  flex flex-wrap">
        {filteredList.map((res) => (
          <Link
            key={res.info.id}
            to={"/restaurants/" + res.info.id}
            style={{ textDecoration: "none" }}
            className="cursor-pointer"
          >
            {res.info.promoted ? (
              <RestaurantPromoted id={res.info.id} resData={res} />
            ) : (
              <ResturantCard id={res.info.id} key={res.info.id} resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
