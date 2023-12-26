import React from "react";

const Note = () => {
  return (
    <div className="w-full bg-gray-900 rounded-md p-4">
      <h3 className="text-slate-300 mb-2">Note Header</h3>
      <p className="text-slate-600 leading-5 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, aut...
      </p>
      {/* labels */}
      <div className="flex mt-4">
        {/* label */}
        <div className="text-xs px-2 py-[0.5px] bg-yellow-200/75 rounded-full">
          label1
        </div>
      </div>
    </div>
  );
};

export default Note;
