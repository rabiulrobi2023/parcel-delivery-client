import type { Role } from "../constants/role";

export enum Status {
  active = "active",
  blocked = "blocked",
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: Role;
  status: Status;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  password: "";
  __v: 0;
}
