import { db } from "../firebaseAdmin";
import { DraftGetModel, DraftPostModel } from "../models/draftModel";

const draftsCollection = db.collection('drafts');

//Get one draft
export async function getDraftById(id: string): Promise<DraftGetModel | null> {
    const documentRef = draftsCollection.doc(id);
    const documentSnapshot = await documentRef.get();

    if (!documentSnapshot.exists) {
        return null;
    }

    return {
        id: documentRef.id,
        created_at: documentSnapshot.data()!.created_at.toDate(),
        sections: documentSnapshot.data()!.sections || [],
        version: documentSnapshot.data()!.version,
    };
}

//Post draft
export async function createDraft(draftData: DraftPostModel): Promise<DraftGetModel> {

    const date = new Date();

    const documentRef = await draftsCollection.add({
        created_at: date,
        ...draftData
    });

    const documentSnapshot = await documentRef.get();

    return {
        id: documentRef.id,
        created_at: documentSnapshot.data()!.created_at.toDate(),
        sections: documentSnapshot.data()!.sections || [],
        version: documentSnapshot.data()!.version,
    };
}