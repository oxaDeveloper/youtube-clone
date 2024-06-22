import { type AppType } from "next/app";
import { useState } from "react";
import LeftBar from "~/components/LeftBar";
import Navbar from "~/components/Navbar";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [shortMenu, setShortMenu] = useState(true);

  return (
    <main>
      <Navbar setShortMenu={setShortMenu} />

      <div className="flex">
        <LeftBar shortMenu={shortMenu} />
        <Component {...pageProps} />
      </div>
    </main>
  );
};

export default MyApp;
