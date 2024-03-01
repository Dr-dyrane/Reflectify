// src/components/Home/EntryCard.jsx

import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

// Function to format date to "DD MMM" format
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  return `${day} ${month}`;
};

const EntryCard = ({ entry, onEdit, onDelete }) => {
  return (
    <div className="flex text-golden max-w-sm rounded-[32px] overflow-hidden bg-white-coco dark:bg-metal shadow-3xl w-full p-4 font-thin">
      <img src={entry.image} alt={entry.title} className="h-32 object-cover rounded-3xl" />
      <div className="flex flex-col p-4 justify-center items-start w-full">
        <h3 className="text-lg font-medium capitalize line-clamp-1">{entry.title || entry.name}</h3>
        <p className="line-clamp-2">{entry.content}</p>
        <p className="text-gray-600 dark:text-gray-300 font-thin text-xs">{formatDate(entry.date)}</p>
        <div className="flex mt-2 justify-end w-full space-x-3">
          <button onClick={() => onEdit(entry.id)} className="edit-btn">
            edit
          </button>
          <button onClick={() => onDelete(entry.id)} className="delete-btn">
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntryCard;
