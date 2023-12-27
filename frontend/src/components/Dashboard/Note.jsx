import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Note = ({ note, listView }) => {
  return (
    <Link to={`/`} className="w-full bg-gray-900 rounded-md p-4 relative">
      <h3 className="text-slate-300 mb-2 relative">
        {note.header}{" "}
        {note.starred && (
          <span className="absolute right-0 top-0">
            <FaStar size={18} />
          </span>
        )}
      </h3>
      <p className="text-slate-600 leading-5 text-sm">
        {note.text.slice(0, 100)}
        {note.text.length > 100 && "..."}
      </p>
      {/* labels */}
      <div
        className={`flex pt-2 gap-2 ${listView && "absolute right-4 bottom-4"}`}
      >
        {/* label */}
        {note.labels.length >= 1 ? (
          note.labels.map((label, index) => (
            <div
              key={index}
              className={`text-xs px-2 py-[0.5px] bg-yellow-200/75 rounded-full mt-2`}
            >
              {label}
            </div>
          ))
        ) : (
          <p
            className={`text-sm text-slate-600 w-full border-t-[1px] pt-2 border-slate-600 ${
              listView && "border-t-0"
            }`}
          >
            No labels were added
          </p>
        )}
      </div>
    </Link>
  );
};

export default Note;
