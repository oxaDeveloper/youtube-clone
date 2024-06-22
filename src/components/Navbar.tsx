import React from "react";
import Image from "next/image";
import SignInButton from "./SignInButton";
// Icons
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Navbar = ({ setShortMenu }: { setShortMenu: Function }) => {
  return (
    <div className="flex w-full items-center justify-between px-6 py-2">
      <div className="flex items-center gap-6">
        <MenuIcon
          sx={{ color: "white", cursor: "pointer" }}
          onClick={() => setShortMenu((shortMenu: boolean) => !shortMenu)}
        />

        <div className="flex cursor-pointer items-center gap-1">
          <Image
            src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png"
            alt=""
            width={30}
            height={30}
          />
          <span className="oswald text-xl font-semibold text-white">
            CloneTube
          </span>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex rounded-full border border-[#3d3d3d]">
          <div className="flex w-[30rem] items-center px-5">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-inherit text-white outline-none placeholder:text-[#3d3d3d]"
            />
          </div>

          <div className="cursor-pointer rounded-r-full border-l border-[#3d3d3d] bg-[#222222] px-5 py-1.5">
            <SearchIcon sx={{ color: "#b5b5b5" }} />
          </div>
        </div>

        <div className="cursor-pointer rounded-full bg-[#222222] px-2.5 py-2 hover:bg-[#3f3f3f]">
          <KeyboardVoiceIcon sx={{ color: "white" }} />
        </div>
      </div>

      <div className="flex gap-2">
        <div className="cursor-pointer rounded-full px-2.5 py-2 hover:bg-[#222222]">
          <MoreVertIcon sx={{ color: "white" }} />
        </div>

        <SignInButton />
      </div>
    </div>
  );
};

export default Navbar;
