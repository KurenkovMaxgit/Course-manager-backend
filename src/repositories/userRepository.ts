import { User, UserModel } from "#models/user.js";
// Some plain CRUD funcs

export const createUser = async (input: User) => {
  const user = await getUserByEmail(input.email);
  if (user) {
    throw new Error(`User with email: ${input.email} already exists`);
  }
  return await UserModel.create(input);
};

export const getAllUsers = async () => {
  return await UserModel.find();
};

export const getUserById = async (id: string) => {
  return await UserModel.findOne({ _id: id });
};

export const getUserByEmail = async (email: string) => {
  const user =  await UserModel.findOne({ email: email });
  console.log("troObj", user?.toObject())
  console.log("to obj + json", JSON.stringify(user?.toObject()))
  console.log("to json", user?.toJSON())
  return user;
};

export const updateUserById = async (id: string, input: User) => {
  return UserModel.findByIdAndUpdate(id, input, { new: true });
};

export const deleteUserById = async (id: string) => {
  return await UserModel.findByIdAndDelete(id);
};
