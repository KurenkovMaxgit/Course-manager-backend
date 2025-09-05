import { Request, Response } from "express";
import * as workloadRepository from "#repositories/workloadRepository.js";
import { Workload, WorkloadModel } from "#models/workload.js";
import { FilterQuery, SortOrder } from "mongoose";
import { Teacher } from "#models/teacher.js";
import { ParsedQuery } from "#middleware/queryParser.js";

export const createWorkload = async (
  req: Request<{}, {}, Workload>,
  res: Response,
) => {
  try {
    const newWorkload = await workloadRepository.createWorkload(req.body);
    res.status(201).json(newWorkload);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error instanceof Error ? error.message : "Bad request",
    });
  }
};

export const getAllWorkloads = async (req: Request, res: Response) => {
  try {
    const { limit, page, filter, sort } = (req as any)
      .parsedQuery as ParsedQuery;
    const workloads = await workloadRepository.getAllWorkloads(
      limit,
      page,
      filter,
      sort,
    );
    const totalCount = await WorkloadModel.countDocuments(filter);
    res.status(200).json({ items: workloads, total_count: totalCount });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:
        error instanceof Error ? error.message : "Error retrieving workloads",
    });
  }
};

export const getWorkloadById = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const workload = await workloadRepository.getWorkloadById(req.params.id);
    if (!workload) {
      return res.status(404).json({ message: "Workload not found" });
    }
    res.status(200).json(workload);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:
        error instanceof Error ? error.message : "Error retrieving Workload",
    });
  }
};

export const updateWorkloadById = async (
  req: Request<{ id: string }, {}, Workload>,
  res: Response,
) => {
  try {
    const updatedWorkload = await workloadRepository.updateWorkloadById(
      req.params.id,
      req.body,
    );
    res.status(200).json(updatedWorkload);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error instanceof Error ? error.message : "Bad request",
    });
  }
};

export const deleteWorkloadById = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const workload = await workloadRepository.deleteWorkloadById(req.params.id);
    res.status(200).json(workload);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:
        error instanceof Error ? error.message : "Error deleting Workload",
    });
  }
};
