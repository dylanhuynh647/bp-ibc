import { db } from '../firebaseAdmin.js';
import { page } from '../models/pageModels.js';

export const fetchLatestPage = async (siteId:string,pageId:string):Promise<page | null> => {
    const docSnap=await db
    .collection('sites')
    .doc(siteId)
    .collection('pages')
    .doc(pageId)
    .get();


    if (!docSnap.exists){
        return null;
    }




const data = docSnap.data();

return {
    id:docSnap.id,
    siteID:data?.siteId,
    title:data?.title || 'Untitled',
    content:data?.content || '',
    version:data?.version || 1,
    lastUpdated: data?.lastUpdated ? data.lastUpdated.toDate() : new Date()
} as page;
}
