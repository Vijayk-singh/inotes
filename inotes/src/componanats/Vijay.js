import React, { useState } from "react";
import Displaynote from "./Displaynote"

export default function Vijay() {
 // const a = localStorage.getItem("token");
  const Logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  //fetch notedata from form
  const [Note, setNote] = useState({
    title: "",
    body: "",
  });
  let note, value;
  const handleInput = (e) => {
    note = e.target.name;
    value = e.target.value;
    setNote({ ...Note, [note]: value });
  };
  const { title, body } = Note;
  const User = localStorage.getItem("userid");

  const addNote = async (e) => {
    e.preventDefault();
    //addnote

    const res = await fetch("http://localhost:5000/addnote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ title, body, User }),
    });
    const json = await res.json();

    console.log(json);
    if (json) {
     window.location.reload ()
      console.log("noteadded")
    } else {
      alert("Invalid credentials");
    }
  };


  return (
    <div className="container info mb-2 ">
      <button className="btn btn-danger m-3 " onClick={Logout}>LOGOUT</button>
     
      {/* Vijay{a} */}
      <div className="container  ">
      <form><div className="container bg-info">
        <label className="shadow-lg p-2 m-2 bg-warning ">ADD NOTE</label>
        <br/>
        <input className="m-2"
          type="text"
          name="title"
          value={Note.title}
          onChange={handleInput}
        /><br/>
        <textarea className="m-2"
          type="textarea"
          name="body"
          value={Note.body}
          onChange={handleInput}
        /><br/>
        <input className="btn btn-success m-2" type="submit" name="submit" onClick={addNote} />
        </div>
      </form>
      </div>
      <Displaynote/>
      <br></br>
      
    </div>
  );
}
