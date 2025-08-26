import type { TRole } from "@/interfaces/role.interface";
import type { IUser } from "@/interfaces/user.interface";

import { useGetMeQuery } from "@/redux/features/auth/auth.api";
import { LineSpinner } from "ldrs/react";
import type { ComponentType } from "react";
import { Navigate } from "react-router";

const checkAuth = (Component: ComponentType, requirdRole: TRole) => {
  return () => {
    const { data, isLoading } = useGetMeQuery(undefined);
    const user: IUser = data?.data;

    if (isLoading) {
      return (
        <div className="fixed inset-0 z-80 flex items-center justify-center ">
          <LineSpinner size="60" stroke="3" speed="1" color="gray" />
        </div>
      );
    }
    if (!user?.email) {
      return <Navigate to={"/login"}></Navigate>;
    }

    if (requirdRole && requirdRole != user.role) {
      return <Navigate to={"/unauthorized"} />;
    }

    return <Component />;
  };
};

export default checkAuth;
