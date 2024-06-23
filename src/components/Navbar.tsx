import React, { useState } from "react";
import Image from "next/image";
import SignInButton from "./SignInButton";
import VideoUpload from "./VideoUpload";
import { signOut } from "next-auth/react";
// Icons
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

const Navbar = ({
  setShortMenu,
  session,
  fetchVideos,
}: {
  setShortMenu: Function;
  session: any;
  fetchVideos: Function;
}) => {
  const [profileBar, setProfileBar] = useState(false);
  const [isVideoUpload, setIsVideoUpload] = useState(false);

  return (
    <div className="fixed z-30 flex w-full items-center justify-between bg-[#0f0f0f] px-6 py-2">
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

      <div className={`flex items-center ${session ? "gap-5" : "gap-2"}`}>
        {session ? (
          <>
            <div className="flex items-center gap-3">
              <div className="cursor-pointer rounded-full p-2 hover:bg-[#222222]">
                <VideocamOutlinedIcon sx={{ color: "white" }} />
              </div>

              <div className="cursor-pointer rounded-full p-2 hover:bg-[#222222]">
                <NotificationsOutlinedIcon sx={{ color: "white" }} />
              </div>
            </div>

            <Image
              src={session.user.image}
              alt=""
              width={35}
              height={35}
              className="cursor-pointer rounded-full"
              onClick={() => setProfileBar((profileBar) => !profileBar)}
            />

            {profileBar && (
              <div className="absolute right-4 top-12 z-30 rounded-xl bg-[#3f3f3f]">
                <div className="flex items-start gap-4 p-4">
                  <Image
                    src={session.user.image}
                    alt=""
                    width={45}
                    height={45}
                    className="cursor-pointer rounded-full"
                  />

                  <div className="grid gap-3">
                    <div>
                      <h1 className="text-base font-medium text-white">
                        {session.user.name}
                      </h1>
                      <p className="text-sm font-medium text-white">
                        {session.user.email}
                      </p>
                    </div>

                    <span className="cursor-pointer text-sm text-[#147aff] hover:text-[#4093ff]">
                      View your channel
                    </span>
                  </div>
                </div>

                <div className="w-full border border-[#787878]" />

                <div className="my-2">
                  <div
                    className={`flex cursor-pointer items-center justify-start gap-4 bg-[#3f3f3f] px-5 py-2 hover:bg-[#5a5a5a]`}
                    onClick={() => setIsVideoUpload(true)}
                  >
                    <CloudUploadOutlinedIcon
                      sx={{ color: "white", fontSize: 30 }}
                    />
                    <span className={`text-sm text-white`}>Upload video</span>
                  </div>

                  <div
                    className={`flex cursor-pointer items-center justify-start gap-4 bg-[#3f3f3f] px-5 py-2 hover:bg-[#5a5a5a]`}
                    onClick={() => signOut()}
                  >
                    <ExitToAppOutlinedIcon
                      sx={{ color: "white", fontSize: 30 }}
                    />
                    <span className={`text-sm text-white`}>Sign out</span>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="cursor-pointer rounded-full px-2.5 py-2 hover:bg-[#222222]">
              <MoreVertIcon sx={{ color: "white" }} />
            </div>

            <SignInButton />
          </>
        )}
      </div>

      <VideoUpload
        isVideoUpload={isVideoUpload}
        setIsVideoUpload={setIsVideoUpload}
        session={session}
        fetchVideos={fetchVideos}
        setProfileBar={setProfileBar}
      />
    </div>
  );
};

export default Navbar;
