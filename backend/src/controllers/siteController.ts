import { Request, Response } from 'express'
import { getSiteById } from '../services/siteService'
import { SiteGetModel } from '../models/siteModel'

// GET /sites/:site_id
export async function getSite(req: Request, res: Response) {
    try {
        const siteId = req.params.site_id;
        const site = await getSiteById(siteId);
        if (site) {
            return res.status(200).json(site);
        } else {
            return res.status(404).json({ message: "Site not found" });
        } 
    } catch (e) {
        console.error("Error fetching site:", e);
        return res.status(500).json({ error: "Failed to fetch site" });
    }
}