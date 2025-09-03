import { Group, GroupModel } from "#models/group.js";
import { NonNegativeNumberValidation } from "#utils/validation.js";
import { FilterQuery, SortOrder } from "mongoose";

export const createGroup = async (input: Group) => {
  NonNegativeNumberValidation(input.studentCount);
  return await GroupModel.create(input);
};

export const getAllGroups = async (
  limit: number,
  page: number,
  filter: FilterQuery<Group> = {},
  sort: Record<string, SortOrder> = { createdAt: -1 },
) => {
  return await GroupModel.find(filter)
    .limit(limit)
    .skip((page - 1) * limit)
    .sort(sort);
};

export const getGroupById = async (id: string) => {
  return await GroupModel.findOne({ _id: id });
};

export const updateGroupById = async (id: string, input: Group) => {
  NonNegativeNumberValidation(input.studentCount);
  return await GroupModel.findByIdAndUpdate(id, input, { new: true });
};

export const deleteGroupById = async (id: string) => {
  return await GroupModel.findByIdAndDelete({ _id: id });
};
