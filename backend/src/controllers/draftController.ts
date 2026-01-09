import { Request, Response } from 'express'
import { createDraft, getDraftById } from '../services/draftService'
import { DraftPostModel } from '../models/draftModel';

// GET /sites/:site_id
export async function getDraft(req: Request, res: Response) {
    try {
        const draftId = req.params.id;
        const draft = await getDraftById(draftId);
        if (draft) {
            return res.status(200).json(draft);
        } else {
            return res.status(404).json({ message: "Draft not found" });
        } 
    } catch (e) {
        console.error("Error fetching draft:", e);
        return res.status(500).json({ error: "Failed to fetch draft" });
    }
}

// POST /drafts
export async function postDraft(req: Request, res: Response) {
    try {
        const draftData = req.body as DraftPostModel;
        const newDraft = await createDraft(draftData);
        res.status(201).json(newDraft);
    } catch (e) {
        res.status(500).json({ message: "Error creating draft, ", e});
    }
}