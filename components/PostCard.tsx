"use client";
import React from 'react'
import { Post } from "../types/postTypes"
import Link from 'next/link';

interface PostCardProps {
  post: Post
}

const PostCard: React.FC<PostCardProps> = ({post}) => {
  return (
    <div>
      <Link href={`/posts/${post.id}`}>
      <h3>
        {post.id}. {post.title}
      </h3>
      </Link>

    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <button onClick={() => {alert('click activo')}}>click</button>
    </div>
  )
}

export default PostCard