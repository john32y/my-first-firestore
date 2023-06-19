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
// db.collection('clothing').get()
//     .then(collection => {
//         const Clothing = collection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         console.table(Clothing);
//     })
//     //         let item = doc.data()
//     //         item.id = doc.id
//     //         return item
//     //     })
//     //     console.table(clothing)
//     // })
//     .catch(console.error);

// Let's say I want to find all of the clothing items that are >=79.99
// db.collection('clothing') 
// .where('price', '>=', 29.99)   
// .get()
// .then(collection => {
//     const clothing = collection.docs.map(doc => ({...doc.data(), id: doc.id}));
//     console.table(clothing);
// })
// .catch(console.error);

// // now lets get a single document by id (we'll use await, just to show)
// const doc = await db.collection('clothing').doc('NPFYsu7VAeocs7HThPeF').get()
//             .catch(console.error);
// const clothingItem = {...doc.data(), id: doc.id };
// console.table(clothingItem);

// lets update a single doc
// db.collection('clothing').doc('NPFYsu7VAeocs7HThPeF')
// .update({ color: 'red', rating: 4.9 })
// .then(doc => console.log('Updated doc. ' ))
// .catch(console.error)

// Even though we Seldom delete, here's how:
db.collection('clothing').doc('NPFYsu7VAeocs7HThPeF')
.delete()