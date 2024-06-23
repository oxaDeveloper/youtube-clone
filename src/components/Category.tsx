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
      className={`flex gap-3 overflow-x-auto pb-5 ${shortMenu ? "w-[91vw]" : "w-[78vw]"}`}
    >
      {categories.map((category, idx) => (
        <p
          key={idx}
          className="cursor-pointer text-nowrap rounded-lg bg-[#3f3f3f] px-4 py-2 text-sm text-white"
        >
          {category}
        </p>
      ))}
    </div>
  );
};

export default Category;
