import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import app from "./init";
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

export async function register(data: {
  username: string;
  email: string;
  password: string;
  role?: string;
}) {
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
    return { status: false, statusCode: 400, message: "Email Alredy Exists" };
  } else {
    data.role = "member";
    data.password = await bcrypt.hash(data.password, 10);
    try {
      await addDoc(collection(firestore, "users"), data);
      return { status: true, statusCode: 200, message: "Success" };
    } catch (error) {
      return { status: false, statusCode: 400, message: "Register filed!" };
    }
  }
}

export async function login(data: { username: string }) {
  const q = query(
    collection(firestore, "users"),
    where("username", "==", data.username)
  );
  const snapshot = await getDocs(q);

  const user = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (user) {
    return user[0];
  } else {
    return null;
  }
}

export async function loginWithGoogle(
  data: { email: string; role: string },
  callbacks: any
) {
  const q = query(
    collection(firestore, "users"),
    where("username", "==", data.email)
  );
  const snapshot = await getDocs(q);

  const user:any = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (user.length > 0) {
    data.role = user[0].role;
    await updateDoc(doc(firestore, "users", user[0].id), data).then(() => {
      callbacks({ status: true, data: data });
    });
  } else {
    data.role = "member";
    await addDoc(collection(firestore, "users"), data).then(() => {
      callbacks({ status: true, data: data });
    });
  }
}
