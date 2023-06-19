// import tools we need from firebase-admin libary
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// import our credentials from secrets.js
import { creds } from "./secrets.js";

// connect to our Firebase project(need credentials)
initializeApp({
    credential: cert(creds),
});

// connect to the Firestore database(just ask)
const db = getFirestore();

// CRUD

// const shorts = {
//     brand: 'Crook & Castle',
//     style: 'shorts',
//     color: 'white',
//     size: "XL",
//     price: 9.99
// }

// // let's add a shirt to our clothing collection

// db.collection('clothing').add(shorts)
//     .then( doc => {
//         console.log("Clothing added: " +doc.id);
//     })
//     .catch(console.error);

// now we have data, let's READ (get) them
db.collection('Clothing').get()
    .then(collection => {
        const Clothing = collection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.table(Clothing);
    })
    //         let item = doc.data()
    //         item.id = doc.id
    //         return item
    //     })
    //     console.table(clothing)
    // })
    .catch(console.error);
