import React, { useState, useEffect, useRef } from "react";
import { FaRegSmile, FaRegBookmark, FaRegStar } from "react-icons/fa";

const Dropdown = ({ dropdownData, setEntryData }) => {
    const [dropdowns, setDropdowns] = useState({});
    const dropdownRefs = useRef([]);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!dropdownRefs.current.some(ref => ref && ref.contains(e.target))) {
                setDropdowns({});
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const toggleDropdown = (dropdown) => {
        setDropdowns((prevDropdowns) => ({
            ...prevDropdowns,
            [dropdown]: !prevDropdowns[dropdown],
        }));
    };

    const handleSelect = (option, dropdown) => {
        setEntryData((prevData) => ({
            ...prevData,
            [dropdown]: option,
        }));
        toggleDropdown(dropdown);
    };

    return (
        <div className="flex flex-row space-x-2 z-20 justify-end">
            {dropdownData.map((dropdown, index) => {
                // Convert icon string to React component
                const IconComponent = {
                    FaRegSmile: <FaRegSmile className="text-xl" />,
                    FaRegBookmark: <FaRegBookmark className="text-xl" />,
                    FaStarEmpty: <FaRegStar className="text-xl" />
                }[dropdown.icon];
                return (
                    <div key={index} className="relative dropdown" ref={el => dropdownRefs.current[index] = el}>
                        <button
                            onClick={() => toggleDropdown(dropdown.name)}
                            className="text-golden rounded-md p-2 focus:outline-none"
                        >
                            {IconComponent}
                        </button>
                        {dropdowns[dropdown.name] && (
                            <div className="add-feature-icon">
                                <ul>
                                    {dropdown.options.map((option, idx) => (
                                        <li
                                            key={idx}
                                            onClick={() => handleSelect(option, dropdown.name)}
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Dropdown;
