"use client"
import app from "./firebaseconfig";
import {getDatabase, set, ref} from "firebase/database"


const db = getDatabase(app);

export default function Home() {

const putdata = () => {
  set(ref(db, "users/harris"),{
    id: 1,
    name: "harris",
    age: 22,
  })
}

  return (
    <>
    <h1 >
      hello from home
    </h1>

    <button onClick={putdata()}>Put data</button>
    </>
  );
}
