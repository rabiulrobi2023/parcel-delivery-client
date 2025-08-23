import type { ReactNode } from "react";
import Navbar from "./Navbar";

interface ICommonLayout {
  children: ReactNode;
}

const CommonLayout = ({ children }: ICommonLayout) => {
  return (
    <div>
      <Navbar></Navbar>
      <div>{children}</div>
    </div>
  );
};

export default CommonLayout;
