import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAQ0TN9BpKPo-W0n4jSWnG96M_Ei6pI-3Q",
    authDomain: "crwn-db-chz.firebaseapp.com",
    projectId: "crwn-db-chz",
    storageBucket: "crwn-db-chz.appspot.com",
    messagingSenderId: "142001655838",
    appId: "1:142001655838:web:366d489c52ba064c0e5e0f",
    measurementId: "G-NVY7J6HM18"
}

// const config = {
//   apiKey: "AIzaSyANdlzfCWPC72BkO_ND-2NdEWO7FjopCVI",
//   authDomain: "crwn-db-4453e.firebaseapp.com",
//   databaseURL: "https://crwn-db-4453e-default-rtdb.firebaseio.com",
//   projectId: "crwn-db-4453e",
//   storageBucket: "crwn-db-4453e.appspot.com",
//   messagingSenderId: "87174367436",
//   appId: "1:87174367436:web:95eddf9227a44499dd1a69",
//   measurementId: "G-KLP9YVE2FF"
// };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach((obj) => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map((doc) => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
        };
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;