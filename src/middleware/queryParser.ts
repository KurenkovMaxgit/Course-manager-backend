import { Request, Response, NextFunction } from "express";

export interface ParsedQuery {
  limit: number;
  page: number;
  filter: Record<string, unknown>;
  sort: Record<string, 1 | -1>;
}

export const queryParser = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { limit, page, filter, sort } = req.query;

  const parsedLimit = limit ? parseInt(limit as string) : 10;
  const parsedPage = page ? parseInt(page as string) : 1;
  let parsedFilter: Record<string, unknown> = {};
  if (filter) {
    try {
      parsedFilter = JSON.parse(filter.toString());
    } catch {
      return res.status(400).json({ message: "Invalid filter JSON" });
    }
  }

  let parsedSort: Record<string, 1 | -1> = { _id: -1 };
  if (sort) {
    try {
      parsedSort = JSON.parse(sort.toString());
    } catch {
      return res.status(400).json({ message: "Invalid sort JSON" });
    }
  }

  (req as any).parsedQuery = {
    limit: parsedLimit,
    page: parsedPage,
    filter: parsedFilter,
    sort: parsedSort,
  } as ParsedQuery;

  next();
};
