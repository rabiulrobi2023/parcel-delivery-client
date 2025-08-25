import { BoltIcon, LogOutIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authApi, useLogoutMutation } from "@/redux/features/auth/auth.api";
import type { IUser } from "@/interfaces/user.interface";
import { useAppDispatch } from "@/hooks/reduxHook";

export default function UserMenu({ user }: { user: IUser }) {
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();
  const handleLogout = async () => {
    await logout(undefined);
    dispatch(authApi.util.resetApiState()); //It use to clear case. Without it api case does not clean.
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
          <Avatar>
            <AvatarImage src="./avatar.jpg" alt="Profile image" />
            <AvatarFallback>KK</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64" align="end">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="text-foreground truncate text-sm font-medium">
            {user.name}
          </span>
          <span className="text-muted-foreground truncate text-xs font-normal">
            {user.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <BoltIcon size={16} className="opacity-60" aria-hidden="true" />
            <span>{user.role}</span>
          </DropdownMenuItem>
          {/* <DropdownMenuItem>
            <Layers2Icon size={16} className="opacity-60" aria-hidden="true" />
            <span>Option 2</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BookOpenIcon size={16} className="opacity-60" aria-hidden="true" />
            <span>Option 3</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <PinIcon size={16} className="opacity-60" aria-hidden="true" />
            <span>Option 4</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <UserPenIcon size={16} className="opacity-60" aria-hidden="true" />
            <span>Option 5</span>
          </DropdownMenuItem> */}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutIcon size={16} className="opacity-60" aria-hidden="true" />
          <span onClick={handleLogout}>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
