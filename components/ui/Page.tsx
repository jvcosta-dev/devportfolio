import { FunctionComponent, ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

const Page: FunctionComponent<PageProps> = ({ children }) => {
  return (
    <main className="max-w-7xl mx-auto flex flex-col flex-grow px-6 gap-10 xl:gap-20 mt-10 xl:mt-20 pb-10 xl:pb-20">
      {children}
    </main>
  );
};

export default Page;
