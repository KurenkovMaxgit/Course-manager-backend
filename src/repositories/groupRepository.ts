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
  sort: Record<string, SortOrder> = { _id: -1 },
) => {
  let query = GroupModel.find(filter).sort(sort);

  if (typeof limit === "number" && typeof page === "number") {
    query = query.skip((page) * limit).limit(limit);
  }

  return await query;
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
