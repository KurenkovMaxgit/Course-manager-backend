import { Workload, WorkloadModel } from "#models/workload.js";

//TODO: Add validation where it`s needed

export const createWorkload = async (input: Workload) => {
  return await WorkloadModel.create(input);
};

export const getAllWorkloads = async () => {
  return await WorkloadModel.find();
};

export const getWorkloadById = async (id: string) => {
  return await WorkloadModel.findOne({ _id: id });
};

export const updateWorkloadById = async (id: string) => {
  return await WorkloadModel.findByIdAndUpdate(id);
};

export const deleteWorkloadById = async (id: string) => {
  return await WorkloadModel.findByIdAndDelete(id);
};
