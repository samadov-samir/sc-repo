import React from 'react'
import Input from './Input'
import Post from './Post'

export default function Feed() {
    const posts = [
    {
        id: "1",
        name: "Samir Samadov",
        username: "samir-samadov",
        userImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/800px-Elon_Musk_2015.jpg",
        img: "https://plus.unsplash.com/premium_photo-1669688398761-ba11b9402b6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        text: "nice wiew",
        time: "2 hours ago"
    },
    {
        id: "2",
        name: "Samir Samadov",
        username: "samir-samadov",
        userImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/800px-Elon_Musk_2015.jpg",
        img: "https://images.unsplash.com/photo-1682685797828-d3b2561deef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        text: "nice wiew",
        time: "2 hours ago"
    }
]

  return (
    <div className='xl:ml-[370px] border-l border-r xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl'>
        <div className='flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray'>
            <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
        </div>
        <Input/>
        
        {posts.map((post)=>(
                <Post key={post.id} post={post} />
            ))}
    </div>
  )
}
