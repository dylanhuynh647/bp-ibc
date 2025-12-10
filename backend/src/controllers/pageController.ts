import { Request, Response, NextFunction } from 'express';
import { fetchLatestPage } from '../services/pageServices.js';
import { page } from '../models/pageModels.js';

interface PageParams {
  site_id: string;
  page_id: string;
}

export const getPage = async (
  req: Request<PageParams, page | { error: string }>,
  res: Response<page | { error: string }>,
  next: NextFunction
): Promise<void> => {
  try {
    const { site_id, page_id } = req.params;

    if (!site_id || !page_id) {
      res.status(400).json({ error: "Missing site_id or page_id" });
      return;
    }

    const page = await fetchLatestPage(site_id, page_id);

    if (!page) {
      res.status(404).json({ error: "Page not found" });
      return;
    }

    res.status(200).json(page);
  } catch (error) {
    next(error);
  }
};


