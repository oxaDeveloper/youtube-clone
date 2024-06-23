import { db } from "~/server/db";

export const createVideo = async ({
  image,
  time,
  title,
  userId,
}: {
  image: string;
  time: string;
  title: string;
  userId: string;
}) => {
  const video = await db.video.create({
    data: {
      image,
      time,
      title,
      userId,
    },
  });

  return video;
};

export const deleteVideo = async (id: string) => {
  const video = await db.video.delete({
    where: {
      id,
    },
  });
  return video;
};

export const getAllVideos = async () => {
  const videos = await db.video.findMany({
    orderBy: {
      createdAt: "desc",
    },

    include: {
      user: true,
    },
  });
  return videos;
};
