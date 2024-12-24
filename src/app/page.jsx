"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import DeleteBtn from "./DeleteBtn";

export default function Home() {

  const [postData , setpostData] = useState([]);

  // console.log(postData);

  const getPosts = async () =>{
    try{
      const res = await fetch("https://poop-crud-gi93wdn8h-poohs-projects-2ecf307c.vercel.app/api/post",{
        method: "GET",
        cache: "no-store"
      })
      if(!res.ok){
        console.log("error to fetch post ;-;");
      }
      const data = await res.json();
      setpostData(data.posts);
    }catch(er){
      console.log("Error : ",er)
    }
  }

  useEffect(()=>{
    getPosts();
  },[]);


  return (
    <main className="container mx-auto my-3">
      <nav className="container mx-auto p-10">
        <h1 className="">เวียนหัว</h1>
      </nav>
      <div className="topbutton">
      <div className="ehe"></div>
        <Link href={'/create'}>
      <button className="bg-green-500 mx-10 p-3 text-white rounded-xl">
        Add Some Shit
      </button>
        </Link>
      </div>
      <div className="bigbox">
        
        {postData && postData.length > 0 ? (
          postData.map(val => (

          <div className="box" key={val._id}>
            {/* <h2>{val.img}</h2> */}
            <Image 
              src={val.img && val.img.startsWith("http") ? val.img : "/default-image.jpg"} 
              width={300} 
              height={200} 
              alt={val.img} 
            />
            <div className="text">
            <Link href={'#'}><h1>{val.title}</h1></Link>
            <p>{val.content}</p>
            </div>
            <div className="ud">
              <Link href={`/edit/${val._id}`}>
              <button className="bg-yellow-300 px-7 py-2 text-white rounded">Edit</button>
              </Link>
              <DeleteBtn id={val._id} />
            </div>
          </div>

          ))
        ) : (
          <h1>Not have any post here :)</h1>
        )}


      </div>
    </main>
  );
}
