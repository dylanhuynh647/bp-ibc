import { Request, Response } from 'express';
import { getPageById } from '../services/pageService';

export async function getPage(req: Request, res: Response) {
  try {
    const pageId = req.params.id;
    const page = await getPageById(pageId);
    if (page) {
      return res.status(200).json(page);
    } else {
      return res.status(404).json({ message: "Page not found" });
    }
  } catch (e) {
    console.error("Error fetching page: ", e);
    return res.status(500).json({ error: "Failed to fetch page" });
  }
}
