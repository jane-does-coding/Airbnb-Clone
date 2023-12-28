import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const TextField = () => {
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({
    title: "",
    text: "",
  });

  const onSubmit = async () => {
    try {
      console.log(inputs);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Take a note..."
        onClick={() => setOpen(true)}
        className=" p-6 py-4 h-fit w-[60%] mx-[20%] bg-gray-900 rounded-md outline-none text-lg text-white shadow-lg "
      />

      {/* Modal */}
      {open && (
        <div>
          <div
            className="fixed top-10 right-20 z-20 text-white cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <AiOutlineClose size={26} />
          </div>
          <div className="w-full h-screen bg-black/50 fixed top-0 left-0 backdrop-blur-sm z-10" />
          <div className="bg-gray-900 z-20 fixed w-[60vw] left-[20vw] top-[50%] translate-y-[-50%] pt-4 rounded-md ">
            <input
              value={inputs.title}
              onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
              type="text"
              placeholder="Note Title"
              className=" p-6 py-4 h-fit w-[100%] bg-gray-900 rounded-t-md outline-none text-xl text-white border-b-[1px]"
            />
            <textarea
              value={inputs.text}
              onChange={(e) => setInputs({ ...inputs, text: e.target.value })}
              name=""
              id=""
              placeholder="Take a note..."
              className="resize-none p-6 py-4 h-[60vh] w-[100%] bg-transparent rounded-md outline-none text-md text-white text-slate-400"
            ></textarea>
            <button
              className="text-gray-900 p-4 w-full bg-yellow-200/75 font-bold rounded-b-md"
              onClick={onSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TextField;
