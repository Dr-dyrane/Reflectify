import React from "react";

const EntryCard = ({ entry }) => {
  return (
    <div className="flex max-w-sm rounded-[32px] overflow-hidden bg-white-coco dark:bg-metal shadow-3xl w-full">
      <img src={entry.image} alt={entry.title} className="h-32 object-cover" />
      <div className="flex flex-col p-4 justify-center items-start">
        <h3 className="text-lg font-semibold">{entry.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 font-thin">{entry.date}</p>
      </div>
    </div>
  );
};

export default EntryCard;
