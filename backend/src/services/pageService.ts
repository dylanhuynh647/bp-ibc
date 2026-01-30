import { db } from '../firebaseAdmin';
import { PageGetModel } from '../models/pageModel';

const pagesCollection = db.collection('pages');

// get one page
export async function getPageById(id: string): Promise<PageGetModel | null> {

    const documentRef = pagesCollection.doc(id);
    const documentSnapshot = await documentRef.get();

    if (!documentSnapshot.exists) {
        return null;
    }

    return {
        id: documentRef.id,
        page_num: documentSnapshot.data()!.page_num,
        page_name: documentSnapshot.data()!.page_name,
    };
}