import { Workload, WorkloadModel } from "#models/workload.js";
import {
  NonNegativeNumberValidation,
  hoursValidation,
} from "#utils/validation.js";
import { FilterQuery, SortOrder } from "mongoose";

export const createWorkload = async (input: Workload) => {
  hoursValidation(input.hours);
  NonNegativeNumberValidation(input.price);
  return await WorkloadModel.create(input);
};

export const getAllWorkloads = async (
  limit?: number,
  page?: number,
  filter: FilterQuery<Workload> = {},
  sort: Record<string, SortOrder> = { _id: -1 },
) => {
  let query = WorkloadModel.find(filter).sort(sort);

  if (typeof limit === "number" && typeof page === "number") {
    query = query.skip((page) * limit).limit(limit);
  }

  return await query
    .populate("teacher")
    .populate("group")
    .populate("subject")
    .populate("type");
};

export const getWorkloadById = async (id: string) => {
  return await WorkloadModel.findOne({ _id: id })
    .populate("teacher")
    .populate("group")
    .populate("subject")
    .populate("type");
};

export const updateWorkloadById = async (id: string, input: Workload) => {
  hoursValidation(input.hours);
  NonNegativeNumberValidation(input.price);
  return await WorkloadModel.findByIdAndUpdate(id, input, { new: true })
    .populate("teacher")
    .populate("group")
    .populate("subject")
    .populate("type");
};

export const deleteWorkloadById = async (id: string) => {
  return await WorkloadModel.findByIdAndDelete(id)
    .populate("teacher")
    .populate("group")
    .populate("subject")
    .populate("type");
};
