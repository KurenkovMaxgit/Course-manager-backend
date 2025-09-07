import { User, UserModel } from "#models/user.js";
import { FilterQuery, SortOrder } from "mongoose";
// Some plain CRUD funcs

export const createUser = async (input: User) => {
  const user = await getUserByEmail(input.email);
  if (user) {
    throw new Error(`User with email: ${input.email} already exists`);
  }
  return await UserModel.create(input);
};

export const getAllUsers = async (
  limit?: number,
  page?: number,
  filter: FilterQuery<User> = {},
  sort: Record<string, SortOrder> = { _id: -1 },
) => {
  let query = UserModel.find(filter).sort(sort);

  if (typeof limit === "number" && typeof page === "number") {
    query = query.skip((page) * limit).limit(limit);
  }

  return await query;
};

export const getUserById = async (id: string) => {
  return await UserModel.findOne({ _id: id });
};

export const getUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email: email });
  return user;
};

export const updateUserById = async (id: string, input: User) => {
  return UserModel.findByIdAndUpdate(id, input, { new: true });
};

export const deleteUserById = async (id: string) => {
  return await UserModel.findByIdAndDelete(id);
};
