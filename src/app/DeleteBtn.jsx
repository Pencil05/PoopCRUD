"use client";

import React from 'react'


function DeleteBtn({id}) {

    const handleDelete = async() =>{
        const confirmed = confirm("จะลบจริงหรอ? :(");
        if (confirmed) {
            const res = await fetch(`https://poop-crud-gi93wdn8h-poohs-projects-2ecf307c.vercel.app/api/post?id=${id}`,{
                method: "DELETE"
            })
            if(res.ok){
                window.location.reload();
            }
        } 
    }

  return (
    <button onClick={handleDelete} className="bg-red-300 px-5 py-2 text-white rounded">Delete</button>

  )
}

export default DeleteBtn