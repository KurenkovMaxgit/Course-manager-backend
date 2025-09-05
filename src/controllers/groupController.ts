import { Request, Response } from "express";
import * as groupRepository from "#repositories/groupRepository.js";
import { Group, GroupModel } from "#models/group.js";
import { ParsedQuery } from "#middleware/queryParser.js";

export const createGroup = async (
  req: Request<{}, {}, Group>,
  res: Response,
) => {
  try {
    const newGroup = await groupRepository.createGroup(req.body);
    res.status(201).json(newGroup);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error instanceof Error ? error.message : "Bad request",
    });
  }
};

export const getAllGroups = async (req: Request, res: Response) => {
  try {
    const { limit, page, filter, sort } = (req as any)
      .parsedQuery as ParsedQuery;
    const groups = await groupRepository.getAllGroups(
      limit,
      page,
      filter,
      sort,
    );
    const totalCount = await GroupModel.countDocuments(filter);
    res.status(200).json({ items: groups, total_count: totalCount });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:
        error instanceof Error ? error.message : "Error retrieving groups",
    });
  }
};

export const getGroupById = async (
  req: Request<{ id: string }, {}, Group>,
  res: Response,
) => {
  try {
    const group = await groupRepository.getGroupById(req.params.id);
    if (!group) {
      return res.status(404).json({ message: "Group not found" });
    }
    res.status(200).json(group);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:
        error instanceof Error ? error.message : "Error retrieving group",
    });
  }
};

export const updateGroupById = async (
  req: Request<{ id: string }, {}, Group>,
  res: Response,
) => {
  try {
    const updatedGroup = await groupRepository.updateGroupById(
      req.params.id,
      req.body,
    );
    res.status(200).json(updatedGroup);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error instanceof Error ? error.message : "Bad request",
    });
  }
};

export const deleteGroupById = async (
  req: Request<{ id: string }, {}, Group>,
  res: Response,
) => {
  try {
    const group = await groupRepository.deleteGroupById(req.params.id);
    res.status(200).json(group);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error instanceof Error ? error.message : "Error deleting group",
    });
  }
};
