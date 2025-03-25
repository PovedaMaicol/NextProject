import  React, { JSX, Suspense } from 'react'
import PostsPage from '../page'


const loadPost = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store', // para que los datos se actualicen en cada solicitud
  })
  if (!res.ok) {
    throw new Error('Failed to load post')
  }

  return res.json();

}

interface PostIdParams {
    params: {
      id: string; // Adjust the type if `id` is a number or another type
    };
  }

const postId = async ({ params }: PostIdParams): Promise<JSX.Element> => {

const post = await loadPost(params.id)
   
  return (

    <div>
   
        <h1>{post.id} - {post.title}</h1>
        <p>{post.body}</p>

        <h3>Otras Publicaciones</h3>

        <Suspense fallback={<div>Loading posts...</div>}>
        <PostsPage />
        </Suspense>
        
    </div>
  )
}




export default postId