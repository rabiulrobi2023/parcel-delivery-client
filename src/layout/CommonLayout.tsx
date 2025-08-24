import type { ReactNode } from "react";
import Navbar from "../modules/Navbar";
import Footer from "../modules/Footer";


interface ICommonLayout {
  children: ReactNode;
}

const CommonLayout = ({ children }: ICommonLayout) => {
  return (
    <div className="flex flex-col min-h-screen  mx-auto">
      <Navbar></Navbar>
      <div className="grow-1">{children}</div>
      <Footer></Footer>
    </div>

  );
};

export default CommonLayout;
