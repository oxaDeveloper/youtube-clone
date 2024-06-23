import axios from "axios";
import { type AppType } from "next/app";
import { useEffect, useState } from "react";
import LeftBar from "~/components/LeftBar";
import Navbar from "~/components/Navbar";
import useSession from "~/hooks/useSession";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const session = useSession();
  const [shortMenu, setShortMenu] = useState(false);
  const [videos, setVideos] = useState<any>([]);

  const fetchVideos = async () => {
    await axios.get("/api/video").then((res) => {
      setVideos(res.data);
    });
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <main>
      <Navbar
        setShortMenu={setShortMenu}
        session={session}
        fetchVideos={fetchVideos}
      />

      <div className="flex justify-end">
        <LeftBar shortMenu={shortMenu} session={session} />
        <Component {...pageProps} shortMenu={shortMenu} videos={videos} />
      </div>
    </main>
  );
};

export default MyApp;
