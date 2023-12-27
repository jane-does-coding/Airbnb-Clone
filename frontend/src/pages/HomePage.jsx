import React, { useState } from "react";
import Note from "../components/Dashboard/Note";
import Filters from "../components/Dashboard/Filters";

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

  const [filter, setFilter] = useState(null);
  const [listView, setListView] = useState(false);

  const filterNotes = (label) => {
    console.log(label);
    setFilter(label);
  };

  const switchView = () => {
    setListView(!listView);
    console.log(listView);
  };
  return (
    <div className="w-full min-h-screen bg-gray-800 flex flex-col px-12 pt-10 ">
      {/* Input Field */}
      <input
        type="text"
        placeholder="Take a note..."
        className="mx-auto p-6 py-4 h-fit w-[60%] bg-gray-900 rounded-md outline-none text-lg text-white shadow-lg "
      />

      {/* Header? */}
      <Filters
        filter={filterNotes}
        switchView={switchView}
        listView={listView}
      />

      {/* Notes */}
      <div
        className={`${
          listView
            ? "flex flex-col"
            : "grid grid-cols-auto md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
        } gap-4 my-4 mt-10`}
      >
        {notes.map((note, index) =>
          filter && filter != "label" ? (
            note.labels.includes(filter) && <Note note={note} key={index} />
          ) : (
            <Note note={note} key={index} />
          )
        )}
      </div>
    </div>
  );
};

export default HomePage;
