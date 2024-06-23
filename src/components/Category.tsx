import React from "react";

const categories = [
  "All",
  "Music",
  "Mixed",
  "Astronomy",
  "Gaming",
  "Media theories",
  "JavaScript",
  "Arabesque",
  "Live",
  "Comedy clubs",
  "Playlists",
  "Russian Pop",
  "Albums",
  "Pop Music",
  "Comedy",
  "Podcasts",
  "Role-Playing Games",
  "Mobile games",
  "Recently uploaded",
  "Watched",
];

const Category = ({ shortMenu }: { shortMenu: boolean }) => {
  return (
    <div
      className={`fixed top-14 z-20 flex gap-3 overflow-x-auto bg-[#0f0f0f] py-3 ${shortMenu ? "w-[91vw]" : "w-[78vw]"}`}
    >
      {categories.map((category, idx) => (
        <p
          key={idx}
          className={`cursor-pointer text-nowrap rounded-lg px-3.5 py-1.5 text-sm ${idx === 0 ? "bg-white text-black" : "bg-[#3f3f3f] text-white"}`}
        >
          {category}
        </p>
      ))}
    </div>
  );
};

export default Category;
