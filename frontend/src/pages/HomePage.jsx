import React from "react";
import Note from "../components/Dashboard/Note";

const HomePage = () => {
  const notes = [
    {
      header: "Note1",
      text: "Lorem ipsum dolor sit",
      labels: ["label1", "label2"],
      starred: true,
    },
    {
      header: "Note2",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, unde! Harum dolores doloribus, provident nesciunt aliquid nisi aut amet esse dignissimos. Officia debitis quod quibusdam aliquid illum nulla, corporis veritatis?",
      labels: ["label1", "label2", "label3"],
      starred: false,
    },
    {
      header: "Note3",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, unde! Harum dolores doloribus, provident nesciunt aliquid nisi aut amet esse dignissimos. Officia debitis quod quibusdam aliquid illum nulla, corporis veritatis?",
      labels: [],
      starred: true,
    },
    {
      header: "Note4",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, unde! Harum dolores doloribus, provident nesciunt aliquid nisi aut amet esse dignissimos. Officia debitis quod quibusdam aliquid illum nulla, corporis veritatis?",
      labels: ["label1"],
      starred: false,
    },
  ];
  return (
    <div className="w-full min-h-screen bg-gray-800 flex flex-col px-12 pt-10 ">
      {/* Header? */}
      {/* Input Field */}
      <input
        type="text"
        placeholder="Take a note..."
        className="mx-auto p-6 py-4 h-fit w-[60%] bg-gray-900 rounded-md outline-none text-lg text-white shadow-lg "
      />

      {/* Notes */}
      <div className="grid grid-cols-auto md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 my-4 mt-10">
        {notes.map((note, index) => (
          <Note note={note} key={index} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
