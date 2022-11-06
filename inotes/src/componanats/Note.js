import React from 'react'

export default function Note(props) {
    // console.log(Note._id)
    var Del = async (id) => {
        try {
            console.log("dELETE NOTE"+id);
          const res1 = await fetch("http://localhost:5000/deletenote", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id})
          });
          
          const json2 = await res1.json();
   
      window.location.reload();
          console.log(json2)
        } catch (error) {
          console.log(error);
        }
      };
      
  return (
    <>
       <div className='container'>
       <h3 className='m-3 border-bottom'>Your Notes</h3>
      <div className="card" >
      
      <div className="card-body">
       
       {props.Notes.map(Note => 
      <div>
      <h5 className="card-title p-3 mb-2 bg-secondary text-white">{Note.title} </h5>
     <p className="card-text bg-light p-4">{Note.body}  </p>
          <button className='btn btn-danger mb-4' onClick={() => { Del(Note._id); } }> Delete</button></div>
             )
        }
            </div>
          </div>
          </div>  
    </>
    
   
  );
}
