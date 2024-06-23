import Image from "next/image";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Video = ({ shortMenu }: { shortMenu: boolean }) => {
  return (
    <div className="flex cursor-pointer flex-col gap-3">
      <div className="relative">
        <div
          className={shortMenu ? "h-[172px] w-[312px]" : "h-[200px] w-[360px]"}
        >
          <Image
            src="https://media.timeout.com/images/105992807/750/422/image.jpg"
            alt=""
            width={1080}
            height={1080}
            className="h-full w-full rounded-xl object-cover"
          />
        </div>

        <div className="absolute bottom-2 right-2 rounded-md bg-black bg-opacity-80 px-1.5 py-[1px]">
          <p className="text-sm font-medium text-white">01:32:20</p>
        </div>
      </div>

      <div className="flex items-start justify-between">
        <Image
          src={
            "https://st2.depositphotos.com/2493575/5398/i/450/depositphotos_53989081-stock-photo-black-texture.jpg"
          }
          alt=""
          width={35}
          height={35}
          className="cursor-pointer rounded-full"
        />

        <div className={`grid gap-2 ${shortMenu ? "w-[225px]" : "w-[280px]"}`}>
          <h1 className="text-base font-semibold leading-5 text-white">
            Lorem ipsum dolor sit amet elit ddw fb2efkvf efyveyfv2.
          </h1>

          <div>
            <p className="text-base leading-5 text-[#828282]">Channel</p>
            <span className="text-sm text-[#828282]">
              204 views • 11 hours ago
            </span>
          </div>
        </div>

        <div className="cursor-pointer">
          <MoreVertIcon sx={{ color: "white" }} />
        </div>
      </div>
    </div>
  );
};

export default Video;
