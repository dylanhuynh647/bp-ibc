import { Request, Response } from "express";
import {
    createSection,
    getSectionById,
    getSections,
} from "../services/sectionService";
import { SectionPostModel } from "../models/sectionModel";

//Post /sections
export async function postSection(req: Request, res: Response) {
    try {
        const sectionData = req.body as SectionPostModel;
        const newSection = await createSection(sectionData);
        res.status(201).json(newSection);
    } catch (error) {
        res.status(500).json({ message: "Error creating section", error });
    }
}

//Get /sections/:id
export async function getSection(req: Request, res: Response) {
    try{
        const sectionId = req.params.id;
        const section = await getSectionById(sectionId);
        if (section) {
            return res.status(200).json(section);
        } else {
            return res.status(404).json({ message: "Section not found" });
        } 
    }   catch (error) {
            console.error("Error fetching section:", error);
            return res.status(500).json({ error: "Failed to fetch section" });
  }
}

//Get /sections
export async function getAllSections(req: Request, res: Response) {
    try {
        const sections = await getSections();
        return res.status(200).json(sections);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching sections", error });
    }
}