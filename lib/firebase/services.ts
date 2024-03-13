import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import app from "./init";
import { Import } from "lucide-react";
import bcrypt from "bcrypt";

const firestore = getFirestore(app);

export async function retrieveData(projects: string) {
  const snapshot = await getDocs(collection(firestore, projects));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function retrieveDataById(projects: string, id: string) {
  const snapshot = await getDoc(doc(firestore, projects, id));
  const data = snapshot.data();
  return data;
}

export async function register(
  data: {
    username: string;
    email: string;
    password: string;
    role?: string;
  },
  callback: Function
) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );
  const snapshot = await getDocs(q);
  const users = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (users.length > 0) {
    callback({ status: false, message: "Email Alredy Exists" });
  } else {
    data.role = "member";
    data.password = await bcrypt.hash(data.password, 10);

    await addDoc(collection(firestore, "users"), data)
      .then(() => {
        callback({ status: true, message: "Success" });
      })
      .catch((err) => {
        callback({ status: false, message: err.message });
      });
  }
}
