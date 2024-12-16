import { FunctionComponent, ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

const Page: FunctionComponent<PageProps> = ({ children }) => {
  return (
    <main className="flex flex-col flex-grow gap-10 xl:gap-20 px-6 xl:px-24 mt-10 xl:mt-20 pb-10 xl:pb-20">
      {children}
    </main>
  );
};

export default Page;
