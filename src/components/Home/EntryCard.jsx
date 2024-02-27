// src/components/Home/EntryCard.jsx

import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const EntryCard = ({ entry, onEdit, onDelete }) => {
  return (
    <div className="flex max-w-sm rounded-[32px] overflow-hidden bg-white-coco dark:bg-metal shadow-3xl w-full">
      <img src={entry.image} alt={entry.title} className="h-32 object-cover" />
      <div className="flex flex-col p-4 justify-center items-start">
        <h3 className="text-lg font-semibold">{entry.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 font-thin">{entry.date}</p>
        <div className="flex mt-4">
          <button onClick={() => onEdit(entry.id)} className="mr-2 text-blue-500">
            <FaEdit />
          </button>
          <button onClick={() => onDelete(entry.id)} className="text-red-500">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntryCard;
