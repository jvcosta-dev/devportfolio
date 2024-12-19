import { FunctionComponent, ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  primary?: boolean;
}

const Title: FunctionComponent<TitleProps> = ({ children, primary }) => {
  return (
    <h1
      className={`text-4xl xl:text-5xl font-black ${primary && "text-primary"}`}
    >
      {children}
    </h1>
  );
};

export default Title;
