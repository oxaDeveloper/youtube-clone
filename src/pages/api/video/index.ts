import { NextApiRequest, NextApiResponse } from "next";
import { createVideo, deleteVideo, getAllVideos } from "~/server/lib/video";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { image, time, title, userId } = req.body;
    const video = await createVideo({ image, time, title, userId });
    res.status(201).json(video);
  } else if (req.method === "GET") {
    const getVideos = await getAllVideos();
    return res.status(200).json(getVideos);
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    await deleteVideo(id as string);
    return res.status(200).json({ message: "Message deleted!" });
  }
};
