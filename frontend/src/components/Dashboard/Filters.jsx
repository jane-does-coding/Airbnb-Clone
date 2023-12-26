import React from "react";
import { ImMenu } from "react-icons/im";
import { CgMenuGridR } from "react-icons/cg";

const Filters = ({ filter, switchView, listView }) => {
  return (
    <div className="mt-6 py-2 border-y-[1px] border-slate-600 flex items-center justify-between px-4">
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
      {!listView ? (
        <ImMenu onClick={switchView} className="text-slate-300" size={24} />
      ) : (
        <CgMenuGridR
          onClick={switchView}
          className="text-slate-300"
          size={24}
        />
      )}
    </div>
  );
};

export default Filters;
