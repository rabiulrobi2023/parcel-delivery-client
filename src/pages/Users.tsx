/* eslint-disable @typescript-eslint/no-explicit-any */
import { DeleteBlockConfirmModal } from "@/components/DeleteBlockConfirmModal";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Status, type IUser } from "@/interfaces/user.interface";
import {
  useAllUsersQuery,
  useBlockUserMutation,
  useDeleteUserMutation,
  useUnblockUserMutation,
} from "@/redux/features/user/user.api";
import { LineSpinner } from "ldrs/react";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

const Users = () => {
  const { data } = useAllUsersQuery(undefined);
  const users: Partial<IUser>[] = data;

  const [deleteUser, { isLoading: isDeleteLoading }] = useDeleteUserMutation();
  const [blockUser, { isLoading: isBlockLoading }] = useBlockUserMutation();
  const [unblockUser, { isLoading: isUnblockLoading }] =
    useUnblockUserMutation();

  const deleteDescription = "Are you sure delete the user ?";
  const blockDescription = "Are you sure block the user";
  const unblockDescription = "Are you sure unblock the user";

  const handleDeleteUser = async (id: string) => {
    try {
      const res = await deleteUser(id).unwrap();

      if (res.success) {
        toast.success("User deleted successfully");
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong");
    }
  };

  const handleBlockUser = async (id: string) => {
    const blockToastId = toast.loading("Blocking..");
    try {
      const res = await blockUser(id).unwrap();

      if (res.success) {
        toast.success("User blocked successfully", { id: blockToastId });
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong", {
        id: blockToastId,
      });
    }
  };
  const handleUnblockUser = async (id: string) => {
    const toastId = toast.loading("Unblocking..");
    try {
      const res = await unblockUser(id).unwrap();

      if (res.success) {
        toast.success("User unblock successfully", { id: toastId });
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong", {
        id: toastId,
      });
    }
  };

  return (
    <div className="px-0 ">
      <h1 className="text-xl font-bold">Users</h1>
      <Table className="border-[1px] border-gray-400">
        <TableHeader>
          <TableRow className="bg-gray-400 text-white hover:bg-gray-400">
            <TableHead className="w-[75px] text-center" >SL No</TableHead>
            <TableHead >Name</TableHead>
            <TableHead >Eamil</TableHead>
            <TableHead >Role</TableHead>
            <TableHead >Status</TableHead>
            <TableHead className="mx-auto flex items-center justify-center">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((user, index) => (
            <TableRow className="hover:bg-gray-300" key={user._id}>
              <TableCell className="text-center w-min">{index + 1}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell className="text-center space-x-5 flex items-center justify-between w-[120px] mx-auto ">
                <DeleteBlockConfirmModal
                  key={user?._id}
                  onConfirm={() => handleDeleteUser(user._id as string)}
                  description={deleteDescription}
                >
                  <Button className="bg-transparent w-min h-min p-0 hover:bg-transparent cursor-pointer border-none">
                    <Trash2 className="text-red-600 hover:text-blue-800"></Trash2>
                  </Button>
                </DeleteBlockConfirmModal>
                {user?.status === Status.active ? (
                  <DeleteBlockConfirmModal
                    key={user._id}
                    onConfirm={() => handleBlockUser(user?._id as string)}
                    description={blockDescription}
                  >
                    <Button
                      className="bg-transparent w-min h-min p-0 hover:bg-transparent cursor-pointer shadow-none text-first hover:text-yellow-700"
                      disabled={isBlockLoading}
                    >
                      Block
                    </Button>
                  </DeleteBlockConfirmModal>
                ) : (
                  <DeleteBlockConfirmModal
                    key={user._id}
                    onConfirm={() => handleUnblockUser(user?._id as string)}
                    description={unblockDescription}
                  >
                    <Button
                      className="bg-transparent  h-min p-0 hover:bg-transparent cursor-pointer shadow-none text-second hover:text-yellow-700"
                      disabled={isBlockLoading}
                    >
                      Unblock
                    </Button>
                  </DeleteBlockConfirmModal>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Users;
