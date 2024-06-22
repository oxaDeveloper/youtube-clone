import React from "react";
// Icons
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import InviteToSign from "./LeftBar/InviteToSign";
import Explore from "./LeftBar/Explore";
import MoreFromCloneTube from "./LeftBar/MoreFromCloneTube";
import Others from "./LeftBar/Others";
import LegalPart from "./LeftBar/LegalPart";

const LeftBar = ({ shortMenu }: { shortMenu: boolean }) => {
  return (
    <div
      className={`flex max-h-[93vh] flex-col overflow-auto ${!shortMenu ? "p-1" : "items-start"}`}
    >
      <div
        className={`flex cursor-pointer items-center rounded-xl ${!shortMenu ? "w-16 flex-col justify-center py-4 hover:bg-[#3f3f3f]" : "mx-[15px] w-[14rem] justify-start gap-6 bg-[#3f3f3f] px-2 py-2 hover:bg-[#5a5a5a]"}`}
      >
        <HomeIcon sx={{ color: "white", fontSize: 30 }} />
        <span
          className={`text-white ${!shortMenu ? "text-[10px]" : "text-sm"}`}
        >
          Home
        </span>
      </div>

      <div
        className={`flex cursor-pointer items-center rounded-xl hover:bg-[#3f3f3f] ${!shortMenu ? "w-16 flex-col justify-center py-4" : "mx-[15px] w-[14rem] justify-start gap-6 px-2 py-2"}`}
      >
        <OndemandVideoOutlinedIcon sx={{ color: "white", fontSize: 30 }} />
        <span
          className={`text-white ${!shortMenu ? "text-[10px]" : "text-sm"}`}
        >
          Shorts
        </span>
      </div>

      <div
        className={`flex cursor-pointer items-center rounded-xl hover:bg-[#3f3f3f] ${!shortMenu ? "w-16 flex-col justify-center py-4" : "mx-[15px] w-[14rem] justify-start gap-6 px-2 py-2"}`}
      >
        <SubscriptionsOutlinedIcon sx={{ color: "white", fontSize: 30 }} />
        <span
          className={`text-white ${!shortMenu ? "text-[10px]" : "text-sm"}`}
        >
          Subscriptions
        </span>
      </div>

      {shortMenu && <div className="my-4 w-full border border-[#3d3d3d]" />}

      <div
        className={`flex cursor-pointer items-center rounded-xl hover:bg-[#3f3f3f] ${!shortMenu ? "w-16 flex-col justify-center py-4" : "mx-[15px] w-[14rem] justify-start gap-6 px-2 py-2"}`}
      >
        <VideoLibraryOutlinedIcon sx={{ color: "white", fontSize: 30 }} />
        <span
          className={`text-white ${!shortMenu ? "text-[10px]" : "text-sm"}`}
        >
          You
        </span>
      </div>

      <div
        className={`flex cursor-pointer items-center rounded-xl hover:bg-[#3f3f3f] ${!shortMenu ? "w-16 flex-col justify-center py-4" : "mx-[15px] w-[14rem] justify-start gap-6 px-2 py-2"}`}
      >
        <HistoryOutlinedIcon sx={{ color: "white", fontSize: 30 }} />
        <span
          className={`text-white ${!shortMenu ? "text-[10px]" : "text-sm"}`}
        >
          History
        </span>
      </div>

      {shortMenu && (
        <>
          <div className="my-4 w-full border border-[#3d3d3d]" />
          <InviteToSign />
          <div className="my-4 w-full border border-[#3d3d3d]" />
          <Explore />
          <div className="my-4 w-full border border-[#3d3d3d]" />
          <MoreFromCloneTube />
          <div className="my-4 w-full border border-[#3d3d3d]" />
          <Others />
          <div className="my-4 w-full border border-[#3d3d3d]" />
          <LegalPart />
        </>
      )}
    </div>
  );
};

export default LeftBar;
