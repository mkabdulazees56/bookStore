import React from "react";

function Cards({ item }) {
  // Function to truncate text with dots
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  };

  return (
    <div className="mt-4 my-3 p-6 w-80 mx-auto md:mx-0"> {/* Centering on mobile screens */}
      <div className="card h-full bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border rounded-lg">
        <figure className="h-48 overflow-hidden rounded-t-lg">
          <img src={item.image} alt="books" className="object-cover w-full h-full" />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg font-medium truncate">
            {truncateText(item.title, 20)}
          </h2>
          <div className="badge bg-blue-500 text-white px-2 py-1 rounded-md mt-2">
            {item.category}
          </div>
          <p className="text-sm mt-2">{item.name}</p>
          <div className="card-actions flex justify-between items-center mt-4">
            <div className="badge badge-outline">${item.price}</div>
            <div className="cursor-pointer px-3 py-1 rounded-full border-[2px] hover:bg-blue-500 hover:text-white duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
