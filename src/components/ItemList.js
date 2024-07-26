import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  //   console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left"
        >
          <div className="flex justify-between">
            <div>
              <span className="font-bold block text-2xl mb-2">
                {item.card.info.name}
              </span>
              <span className="mt-2 text-red-800 font-bold">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
                /-
              </span>
              <p className="text-md text-gray-400 mt-4 w-[400px]">
                {item.card.info.description}
              </p>
            </div>

            <div className="relative w-[150px] h-[150px]">
              {item.card.info.imageId && (
                <img
                  className="w-full h-full object-cover rounded-lg bg-green-200"
                  src={CDN_URL + item.card.info.imageId}
                  alt=""
                />
              )}
              <button className="border-2 font-bold rounded-xl absolute bottom-2 left-7 p-3 bg-white text-green-800">
                {" "}
                - Add to cart +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
