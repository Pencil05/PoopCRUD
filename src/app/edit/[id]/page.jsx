"use client";

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function EditPostPage({ params }) {
  const [postData, setpostData] = useState("");

  //new data of post
    const [newTitle, setNewTitle] = useState("");
    const [newImg, setNewImg] = useState("");
    const [newContent, setNewContent] = useState("");

  const router = useRouter();

  // Unwrap params เพื่อดึง id
  const { id } = React.use(params); // ใช้ React.use() เพื่อดึงข้อมูลจาก Promise

  const getPostByid = async (id) => {
    try {
      const res = await fetch(`https://poop-crud-izezliu8y-poohs-projects-2ecf307c.vercel.app/api/post/${id}`, {
        method: "GET",
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch post data");
      }
      const data = await res.json();
      setpostData(data.post);
    } catch (er) {
      console.error("Error fetching post:", er);
    }
  };

  useEffect(() => {
    if (id) {
      getPostByid(id);
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const res = await fetch(`https://poop-crud-gi93wdn8h-poohs-projects-2ecf307c.vercel.app/api/post/${id}`,{
            method: "PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({newTitle,newImg,newContent})
        })
        if(!res.ok){
            console.log("Failed update ;-;");
        }
        router.refresh();
        router.push("/")
    }catch(er){
        console.log("error is :" , er);
    }
  };

  return (
    <div className="container mx-auto py-10 px-10">
      <nav>
        <h1 className="text-black-300 text-6xl font-bold">Edit Post</h1>
      </nav>
      <div className="topbutton">
        <Link href="/" className="mx-auto mt-5">
          <button className="py-2 px-5 bg-gray-400 rounded-md text-white mt-6">
            Back Home
          </button>
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="mt-6 my-5">
        <input
          type="text"
          className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
          // defaultValue={postData.title}
          placeholder="Write Title"
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
          // defaultValue={postData.img}
          placeholder="Add Image"
          onChange={(e) => setNewImg(e.target.value)}
        />
        <textarea
          cols="30"
          rows="10"
          className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
          // defaultValue={postData.content}
          placeholder="Write Content"
          onChange={(e) => setNewContent(e.target.value)}
        />
        <button type="submit" className="bg-green-300 py-3 px-5 rounded-md mt-5">
          Confirm Edit
        </button>
      </form>
    </div>
  );
}

export default EditPostPage;
