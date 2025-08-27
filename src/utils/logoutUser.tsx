/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch } from "@/hooks/reduxHook";
import { authApi, useLogoutMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";

export const useLogutUser = () => {
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();
  const handleLogout = async () => {
    try {
      const res = await logout(undefined);
      dispatch(authApi.util.resetApiState()); //It use to clear case. Without it api case does not clean.
      return res;
    } catch (error: any) {
      toast.error("Something went wrong");
    }
  };
  return handleLogout;
};
