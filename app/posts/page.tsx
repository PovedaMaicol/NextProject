import PostCard from '@/components/PostCard';
import React, { JSX } from 'react'
import { Post } from "../../types/postTypes"

const loadPosts = async (): Promise<Post[]>=> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return data;
}



const page = async (): Promise<JSX.Element> => {

    const posts = await loadPosts()
    console.log(posts)

  return (
    <div>
        <h1>posts page</h1>
        {
            posts.map(post => (
             <PostCard 
             key={post.id}
             post={post}
             />
            ))
        }
    </div>
  )
}

export default page