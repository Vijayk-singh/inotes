import React, { useEffect, useState } from "react";
import Note from "./Note";

var User = localStorage.getItem("userid");


const Displaynote = () => {
  const notesInitial = [];
  const [Notes, setNotes] = useState(notesInitial);

  useEffect(() => {
    var User = localStorage.getItem("userid");
    async function fdata() {
      try {
        const res1 = await fetch("http://localhost:5000/note", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ User }),
        });
        const json1 = await res1.json();
        setNotes(json1);
      } catch (error) {
        console.log(error);
      }
      //const json1 = await Notes.json();
      //console.log(json1);
    }
    fdata();
  }, []);
  console.log({ Notes });
  //const n= Notes._id
  return (
    <>
      <Note Notes={Notes} id={Notes._id} />
    </>
  );
};

export default Displaynote;
