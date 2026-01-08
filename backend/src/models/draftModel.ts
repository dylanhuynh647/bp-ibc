export interface DraftSection {
    section_id: string;
    section_num: number;
}

export interface DraftGetModel {
    id: string;
    created_at: Date;
    sections: DraftSection[];
    version: number;
}

export interface DraftPostModel {
    sections: DraftSection[];
    version: number;
}