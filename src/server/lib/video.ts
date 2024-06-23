import { db } from "~/server/db";

export const createVideo = async ({
  photo,
  time,
  title,
  view,
}: {
  photo: string;
  time: string;
  title: string;
  view: string;
}) => {
  const video = await db.video.create({
    data: {
      photo,
      time,
      title,
      view,
    },
  });

  return video;
};

export const getAllVideos = async () => {
  const videos = await db.video.findMany();
  return videos;
};
