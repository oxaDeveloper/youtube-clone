import axios from "axios";
import React, { useState } from "react";

const VideoUpload = ({
  isVideoUpload,
  setIsVideoUpload,
  session,
  fetchVideos,
  setProfileBar,
}: {
  isVideoUpload: boolean;
  setIsVideoUpload: Function;
  session: any;
  fetchVideos: Function;
  setProfileBar: Function;
}) => {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  if (!isVideoUpload) return null;

  const uploadVideo = async () => {
    if (imageUrl !== "" && title !== "" && time !== "") {
      await axios
        .post("/api/video", {
          image: imageUrl,
          title: title,
          time: time,
          userId: session.user.id,
        })
        .then(() => {
          setIsVideoUpload(false);
          setProfileBar(false);
          fetchVideos();
          setImageUrl("");
          setTitle("");
          setTime("");
        });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded border bg-[#0f0f0f] p-8 shadow-md">
        <h2 className="mb-4 text-xl font-bold text-white">Video Upload</h2>

        <div>
          <div className="mb-4">
            <label className="mb-2 block text-white" htmlFor="imageUrl">
              Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              className="w-full rounded border bg-inherit px-3 py-2 text-white outline-none"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-white" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full rounded border bg-inherit px-3 py-2 text-white outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-white" htmlFor="time">
              Time
            </label>
            <input
              type="text"
              id="time"
              className="w-full rounded border bg-inherit px-3 py-2 text-white outline-none"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <div className="flex justify-end">
            <button
              className="mr-2 rounded bg-red-500 px-4 py-2 text-white"
              onClick={() => setIsVideoUpload(false)}
            >
              Cancel
            </button>
            <button
              className="rounded bg-blue-500 px-4 py-2 text-white"
              onClick={uploadVideo}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoUpload;
