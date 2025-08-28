import { Group, GroupModel } from "#models/group.js";

//TODO: Add validation where it`s needed

export const createGroup = async (input: Group) => {
  return await GroupModel.create(input);
};

export const getAllGroups = async () => {
  return await GroupModel.find();
};

export const getGroupById = async (id: string) => {
  return await GroupModel.findOne({ _id: id });
};

export const updateGroupById = async (id: string, input: Group) => {
  return await GroupModel.findByIdAndUpdate(id, input, { new: true });
};

export const deleteGroupById = async (id: string) => {
  return await GroupModel.deleteOne({ _id: id });
};
