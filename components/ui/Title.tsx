import { FunctionComponent, ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

const Title: FunctionComponent<TitleProps> = ({ children }) => {
  return (
    <h1 className="text-4xl xl:text-5xl text-primary font-black">{children}</h1>
  );
};

export default Title;
