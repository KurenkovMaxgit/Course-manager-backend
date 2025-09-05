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
  limit: number,
  page: number,
  filter: FilterQuery<Workload> = {},
  sort: Record<string, SortOrder>,
) => {
  return await WorkloadModel.find(filter)
    .limit(limit)
    .skip(page * limit)
    .sort(sort);
};

export const getWorkloadById = async (id: string) => {
  return await WorkloadModel.findOne({ _id: id });
};

export const updateWorkloadById = async (id: string, input: Workload) => {
  hoursValidation(input.hours);
  NonNegativeNumberValidation(input.price);
  return await WorkloadModel.findByIdAndUpdate(id, input, { new: true });
};

export const deleteWorkloadById = async (id: string) => {
  return await WorkloadModel.findByIdAndDelete(id);
};
