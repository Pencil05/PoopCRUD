'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter(); // แก้ไขชื่อ router

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !img || !content) {
      alert('Bro, Go Back complete all fields before submitting.');
      return;
    }

    try {
        const res = await fetch(`https://poop-crud-izezliu8y-poohs-projects-2ecf307c.vercel.app/api/post`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, img, content }),
          });
          console.log('Request Body:', { title, img, content });
          

      if (res.ok) {
        router.push('/');
      } else {
        console.log("hey, error!");
        // throw new Error('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="container mx-auto py-10 px-10">
      <nav>
        <h1 className="text-black-300 text-6xl font-bold">Create Post</h1>
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
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
          placeholder="Write Title"
        />
        <input
          onChange={(e) => setImg(e.target.value)}
          type="text"
          className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
          placeholder="Add Image Url(ติดลิขสิทธิ์ภาพนะ;-;)"
        />
        <textarea
          onChange={(e) => setContent(e.target.value)}
          cols="30"
          rows="10"
          className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
          placeholder="Write Content"
        />
        <button type="submit" className="bg-green-300 py-3 px-5 rounded-md mt-5">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatePostPage;
