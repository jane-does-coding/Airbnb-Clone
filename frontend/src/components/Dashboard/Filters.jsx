import React from "react";

const Filters = ({ filter }) => {
  return (
    <div className="mt-6 py-2 border-y-[1px] border-slate-600">
      <select
        onChange={(e) => filter(e.target.value)}
        id="label"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-fit p-2.5 rounded-full bg-gray-900 border-gray-600 placeholder-gray-400 text-slate-200 outline-none min-w-[7.5rem]"
      >
        <option defaultValue>label</option>
        <option value="label1">label1</option>
        <option value="label2">label2</option>
        <option value="label3">label3</option>
      </select>
    </div>
  );
};

export default Filters;
