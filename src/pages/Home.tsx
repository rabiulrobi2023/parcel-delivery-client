import CommonLayout from "@/layout/CommonLayout";
import { Outlet } from "react-router";

function Home() {
  return (
    <CommonLayout>
      <Outlet></Outlet>
    </CommonLayout>
  );
}

export default Home;
