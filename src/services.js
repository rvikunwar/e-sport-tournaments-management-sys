import {
    collection,
    getDocs,
    doc,
    getDoc,
    updateDoc,
    query,
    limit,
    arrayUnion,
    where,
    arrayRemove,
} from "firebase/firestore";
import { firestore } from './firebase';


//for all tournaments
export const getTournaments = async () => {
    try {
        const q = query(collection(firestore, "tournament"));
        const querySnapshot = await getDocs(q);
        let data  = []
        querySnapshot.forEach((doc) => {
            data = [ ...data, { ...doc.data(), id: doc.id } ]
        });
        return data

    } catch (e) {
        throw (e);
    }
}


export const getTournamentDetails = async ({ id }) => {
    try {
        let data = {};
        const ref = doc(firestore, "tournament", id)
        const snapshot = await getDoc(ref);
        if (snapshot.exists()) {
            data = snapshot.data()
            return { ...data, id: id }
        } else return {};

    } catch (e) {
        throw e;
    }
}
