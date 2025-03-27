import PostCard from '@/components/PostCard';
import React, { JSX } from 'react'
import { Post } from "@/types/postTypes"
import "./Posts.css";

const loadPosts = async (): Promise<Post[]>=> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  // await new Promise(resolve => setTimeout(resolve, 3000))
  return data;
}



const postsPage = async (): Promise<JSX.Element> => {

    const posts = await loadPosts()
    console.log(posts)

  return (
    <div className='grid'>
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

export default postsPage