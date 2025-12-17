import { db } from "../firebaseAdmin";
import { DraftGetModel } from "../models/draftModel";

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
