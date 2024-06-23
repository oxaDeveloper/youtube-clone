import Image from "next/image";
import React from "react";

const MoreFromCloneTube = ({ session }: { session: any }) => {
  return (
    <div className="grid gap-2">
      <h1 className="mx-6 font-medium text-white">More from CloneTube</h1>

      <div className={`flex flex-col items-start`}>
        {session && (
          <div
            className={`mx-[15px] flex w-[14rem] cursor-pointer items-center justify-start gap-6 rounded-xl px-3 py-3 hover:bg-[#3f3f3f]`}
          >
            <Image
              src="https://cdn.pixabay.com/photo/2021/05/22/10/22/youtube-6273167_960_720.png"
              alt=""
              width={25}
              height={25}
            />
            <span className={`text-sm text-white`}>CloneTube Studio</span>
          </div>
        )}

        <div
          className={`mx-[15px] flex w-[14rem] cursor-pointer items-center justify-start gap-6 rounded-xl px-3 py-3 hover:bg-[#3f3f3f]`}
        >
          <Image
            src="https://seeklogo.com/images/Y/youtube-kids-logo-40C22D4579-seeklogo.com.png"
            alt=""
            width={25}
            height={25}
          />
          <span className={`text-sm text-white`}>CloneTube Kids</span>
        </div>
      </div>
    </div>
  );
};

export default MoreFromCloneTube;
