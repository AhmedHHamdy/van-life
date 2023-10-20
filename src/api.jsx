// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore/lite"

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6iZ5ISlOveo0VlcZA4cp14sPtslWTEM4",
  authDomain: "vanlife-72428.firebaseapp.com",
  projectId: "vanlife-72428",
  storageBucket: "vanlife-72428.appspot.com",
  messagingSenderId: "631838561494",
  appId: "1:631838561494:web:3f724ab01ed777c83ce577"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// This tells which app i want the database from
const db = getFirestore(app)

// Refactoring the fetching functions below
const vansCollectionsRef = collection(db, "vans")




export async function getVans() {
  const snapshot = await getDocs(vansCollectionsRef)
  const vans = snapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return vans
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id)
  const snapshot = await getDoc(docRef)
  const van = {...snapshot.data(), id: snapshot.id}
  return van
}

export async function getHostVans() {
 const q = query(vansCollectionsRef, where("hostId", "==", "123"))
 const snapshot = await getDocs(q)
 const vans = snapshot.docs.map(doc => ({
  ...doc.data(),
  id: doc.id
 }))
 return vans
}



export async function loginUser(creds) {
  const res = await fetch("/api/login", { method: "post", body: JSON.stringify(creds)})
  const data = await res.json()

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status
    }
  }
  return data
}


// Mirage fake backend Database

// export async function getVans(id) {
//   const url = id ? `/api/vans/${id}` : "/api/vans"
//   const res = await fetch(url)
//   if (!res.ok) {
//     throw {
//       message: "Failed to fetch vans",
//       statusText: res.statusText,
//       status: res.status
//     }
//   }
//   const data = await res.json()
//   return data.vans
// }

// export async function getHostVans(id) {
//   const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
//   const res = await fetch(url)
//   if (!res.ok) {
//     throw {
//       message: "Failed to fetch vans",
//       statusText: res.statusText,
//       status: res.status
//     }
//   }
//   const data = await res.json()
//   return data.vans
// }

// export async function loginUser(creds) {
//   const res = await fetch("/api/login", { method: "post", body: JSON.stringify(creds)})
//   const data = await res.json()

//   if (!res.ok) {
//     throw {
//       message: data.message,
//       statusText: res.statusText,
//       status: res.status
//     }
//   }
//   return data
// }


