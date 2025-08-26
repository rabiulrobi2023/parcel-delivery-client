import { useAllUsersQuery } from "@/redux/features/user/user.api";

const Users = () => {
  const { data } = useAllUsersQuery(undefined);
  console.log(data)
  return <div></div>;
};

export default Users;
