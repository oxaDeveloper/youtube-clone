import React from "react";
// Icons
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import GraphicEqOutlinedIcon from "@mui/icons-material/GraphicEqOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import SportsCricketOutlinedIcon from "@mui/icons-material/SportsCricketOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";

const Explore = () => {
  return (
    <div className="grid gap-2">
      <h1 className="mx-6 font-medium text-white">Explore</h1>

      <div className={`flex flex-col items-start`}>
        <div
          className={`mx-[15px] flex w-[14rem] cursor-pointer items-center justify-start gap-6 rounded-xl px-2 py-2 hover:bg-[#3f3f3f]`}
        >
          <WhatshotOutlinedIcon sx={{ color: "white", fontSize: 30 }} />
          <span className={`text-sm text-white`}>Trending</span>
        </div>

        <div
          className={`mx-[15px] flex w-[14rem] cursor-pointer items-center justify-start gap-6 rounded-xl px-2 py-2 hover:bg-[#3f3f3f]`}
        >
          <MusicNoteOutlinedIcon sx={{ color: "white", fontSize: 30 }} />
          <span className={`text-sm text-white`}>Music</span>
        </div>

        <div
          className={`mx-[15px] flex w-[14rem] cursor-pointer items-center justify-start gap-6 rounded-xl px-2 py-2 hover:bg-[#3f3f3f]`}
        >
          <GraphicEqOutlinedIcon sx={{ color: "white", fontSize: 30 }} />
          <span className={`text-sm text-white`}>Live</span>
        </div>

        <div
          className={`mx-[15px] flex w-[14rem] cursor-pointer items-center justify-start gap-6 rounded-xl px-2 py-2 hover:bg-[#3f3f3f]`}
        >
          <SportsEsportsOutlinedIcon sx={{ color: "white", fontSize: 30 }} />
          <span className={`text-sm text-white`}>Gaming</span>
        </div>

        <div
          className={`mx-[15px] flex w-[14rem] cursor-pointer items-center justify-start gap-6 rounded-xl px-2 py-2 hover:bg-[#3f3f3f]`}
        >
          <FeedOutlinedIcon sx={{ color: "white", fontSize: 30 }} />
          <span className={`text-sm text-white`}>News</span>
        </div>

        <div
          className={`mx-[15px] flex w-[14rem] cursor-pointer items-center justify-start gap-6 rounded-xl px-2 py-2 hover:bg-[#3f3f3f]`}
        >
          <SportsCricketOutlinedIcon sx={{ color: "white", fontSize: 30 }} />
          <span className={`text-sm text-white`}>Sports</span>
        </div>

        <div
          className={`mx-[15px] flex w-[14rem] cursor-pointer items-center justify-start gap-6 rounded-xl px-2 py-2 hover:bg-[#3f3f3f]`}
        >
          <LightbulbOutlinedIcon sx={{ color: "white", fontSize: 30 }} />
          <span className={`text-sm text-white`}>Learning</span>
        </div>

        <div
          className={`mx-[15px] flex w-[14rem] cursor-pointer items-center justify-start gap-6 rounded-xl px-2 py-2 hover:bg-[#3f3f3f]`}
        >
          <DiamondOutlinedIcon sx={{ color: "white", fontSize: 30 }} />
          <span className={`text-sm text-white`}>Fashion & Beauty</span>
        </div>
      </div>
    </div>
  );
};

export default Explore;
