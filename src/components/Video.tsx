import Image from "next/image";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { formatDistanceToNow } from "date-fns";

const Video = ({
  shortMenu,
  user,
  image,
  time,
  title,
  createdAt,
}: {
  shortMenu: boolean;
  user: any;
  image: string;
  time: string;
  title: string;
  createdAt: string;
}) => {
  const timeElapsed = formatDistanceToNow(new Date(createdAt));

  return (
    <div className="flex cursor-pointer flex-col gap-3">
      <div className="relative">
        <div
          className={shortMenu ? "h-[172px] w-[312px]" : "h-[200px] w-[360px]"}
        >
          <Image
            src={image}
            alt=""
            width={1080}
            height={1080}
            className="h-full w-full rounded-xl object-cover"
          />
        </div>

        <div className="absolute bottom-2 right-2 rounded-md bg-black bg-opacity-80 px-1.5 py-[1px]">
          <p className="text-sm font-medium text-white">{time}</p>
        </div>
      </div>

      <div className="flex items-start justify-between">
        <Image
          src={user.image}
          alt=""
          width={35}
          height={35}
          className="cursor-pointer rounded-full"
        />

        <div
          className={`mt-0.5 grid gap-2 ${shortMenu ? "w-[225px]" : "w-[280px]"}`}
        >
          <h1 className="text-base font-semibold leading-5 text-white">
            {title}
          </h1>

          <div>
            <p className="text-base leading-5 text-[#828282]">
              {user.name} • {timeElapsed}{" "}
              {timeElapsed !== "less than a minute" && "ago"}
            </p>
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
