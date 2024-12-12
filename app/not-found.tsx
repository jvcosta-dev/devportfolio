import { FunctionComponent } from "react";

import "./globals.css";
import Link from "next/link";
import Image from "next/image";

interface NotFoundProps {}

const NotFound: FunctionComponent<NotFoundProps> = () => {
  return (
    <div className="flex flex-col items-center gap-4 text-2xl mt-24">
      <Image
        src="/logo.png"
        alt="jm (joão matos) logo"
        className=""
        width={54}
        height={46}
      />
      <h1>404 - Page Not Found</h1>
    </div>
  );
};

export default NotFound;
