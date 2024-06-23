import { type AppType } from "next/app";
import { useState } from "react";
import LeftBar from "~/components/LeftBar";
import Navbar from "~/components/Navbar";
import useSession from "~/hooks/useSession";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [shortMenu, setShortMenu] = useState(false);
  const session = useSession();

  return (
    <main>
      <Navbar setShortMenu={setShortMenu} session={session} />

      <div className="flex">
        <LeftBar shortMenu={shortMenu} session={session} />
        <Component {...pageProps} shortMenu={shortMenu} />
      </div>
    </main>
  );
};

export default MyApp;
