import { db } from "../firebaseAdmin";
import { SiteGetModel } from "../models/siteModel";

const sitesCollection = db.collection('sites');

//Get one site
export async function getSiteById(site_id: string): Promise<SiteGetModel | null> {
    const documentRef = sitesCollection.doc(site_id);
    const documentSnapshot = await documentRef.get();

    if (!documentSnapshot.exists) {
        return null;
    }

    return {
        site_id: documentRef.id,
        domain: documentSnapshot.data()!.domain,
        published_at: documentSnapshot.data()!.published_at.toDate(),
    };
}
