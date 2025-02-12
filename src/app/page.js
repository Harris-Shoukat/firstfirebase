"use client";
import app from "./firebaseconfig";
import Login from "./login/page";
// import {getDatabase, set, ref} from "firebase/database"
import SignUp from "./signup/page";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const auth = getAuth(app);

// const db = getDatabase(app);

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("logged in", user);
        setUser(user);
      } else {
        console.log("logged out");
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return <Login />;
  }

  // const putdata = () => {
  //   set(ref(db, "users/harris"),{
  //     id: 1,
  //     name: "harris",
  //     age: 22,
  //   })
  // }

  return (
    <>
      <h1 className=" text-center mt-5 text-3xl">hello {user.email}</h1>
      <button onClick={() => signOut(auth)}>logout</button>

      {/* <button onClick={putdata()}>Put data</button> */}
    </>
  );
}
