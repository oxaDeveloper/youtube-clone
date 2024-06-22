import React from "react";
// Icons
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";

const Others = () => {
  return (
    <div className={`flex flex-col items-start`}>
      <div
        className={`mx-[15px] flex w-[14rem] cursor-pointer items-center justify-start gap-6 rounded-xl px-2 py-2 hover:bg-[#3f3f3f]`}
      >
        <SettingsOutlinedIcon sx={{ color: "white", fontSize: 30 }} />
        <span className={`text-sm text-white`}>Settings</span>
      </div>

      <div
        className={`mx-[15px] flex w-[14rem] cursor-pointer items-center justify-start gap-6 rounded-xl px-2 py-2 hover:bg-[#3f3f3f]`}
      >
        <FlagOutlinedIcon sx={{ color: "white", fontSize: 30 }} />
        <span className={`text-sm text-white`}>Report history</span>
      </div>

      <div
        className={`mx-[15px] flex w-[14rem] cursor-pointer items-center justify-start gap-6 rounded-xl px-2 py-2 hover:bg-[#3f3f3f]`}
      >
        <HelpOutlineOutlinedIcon sx={{ color: "white", fontSize: 30 }} />
        <span className={`text-sm text-white`}>Help</span>
      </div>

      <div
        className={`mx-[15px] flex w-[14rem] cursor-pointer items-center justify-start gap-6 rounded-xl px-2 py-2 hover:bg-[#3f3f3f]`}
      >
        <FeedbackOutlinedIcon sx={{ color: "white", fontSize: 30 }} />
        <span className={`text-sm text-white`}>Send feedback</span>
      </div>
    </div>
  );
};

export default Others;
