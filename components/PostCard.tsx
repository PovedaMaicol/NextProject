"use client";
import React from 'react'
import { Post } from "../types/postTypes"

interface PostCardProps {
  post: Post
}

const PostCard: React.FC<PostCardProps> = ({post}) => {
  return (
    <div>

    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <button onClick={() => {}}>click</button>
    </div>
  )
}

export default PostCard