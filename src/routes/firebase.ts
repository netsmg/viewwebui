import { initializeApp } from "firebase/app";
import {
  connectFirestoreEmulator,
  doc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import {
  connectDatabaseEmulator,
  getDatabase,
  ref as dbRef,
  set,
} from "firebase/database";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { dev } from "$app/environment";
import {
  connectStorageEmulator,
  getStorage,
  ref as storageRef,
  uploadString,
} from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBzzaSTr42firr3fx5YcdXhDzB4iBLVBOM",
  authDomain: "contact-database-9c47b.firebaseapp.com",
  databaseURL: "https://contact-database-9c47b-default-rtdb.firebaseio.com",
  projectId: "contact-database-9c47b",
  storageBucket: "contact-database-9c47b.appspot.com",
  messagingSenderId: "118822537955",
  appId: "1:118822537955:web:3ef795baeadbe37b7293d6",
  measurementId: "G-0WY0798WFC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

if (dev || import.meta.env.MODE === "ci") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
  connectDatabaseEmulator(rtdb, "localhost", 9000);
  connectStorageEmulator(storage, "localhost", 9199);

  // Seed Firestore
  setDoc(doc(db, "posts", "test"), {
    title: "Hi Mom",
    content: "this is a test",
  });

  // Seed Realtime Database
  set(dbRef(rtdb, "posts/test"), {
    title: "Hi Mom",
    content: "this is a test",
  });

  // Create a reference to the file to create
  const fileRef = storageRef(storage, "test.txt");

  // Upload a string to the file
  uploadString(fileRef, "Hello, world!", "raw")
    .then(() => {
      console.log("File created successfully!");
    })
    .catch((error) => {
      console.error("Error creating file:", error);
    });
}
