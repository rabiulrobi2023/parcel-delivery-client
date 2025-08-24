import type { ILayout } from "@/interfaces/layout.interface";
import Navbar from "@/modules/Navbar";

const AccountLayout = ({ children }: ILayout) => {
  return (
    <div>
      <Navbar></Navbar>
      <div>{children}</div>
    </div>
  );
};

export default AccountLayout;
