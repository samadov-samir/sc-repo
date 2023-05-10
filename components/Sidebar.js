import React from 'react'
import Image from 'next/image'
import SidebarMenuItem from './SidebarMenuItem'
import {HomeIcon,HashtagIcon,UserIcon} from '@heroicons/react/20/solid'
export default function Sidebar() {
  return (
    <div className='hidden sm:flex flex-col p-2 xl:items-start fixed h-full'>
        <div className="hoverEffect">
          <Image width={50} height={50} src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/twitter_logo_blue.png.twimg.768.png"/>
        </div>
        <div className="h-80 mt-4 mb-2.5 xl:items-start">
          <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
          <SidebarMenuItem text="Explore" Icon={HashtagIcon}/>
          <SidebarMenuItem text="Profile" Icon={UserIcon}/>
        </div>
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 mt-3 mb-3 text-lg hidden xl:inline">Tweet</button>
        <div className='hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto'>
          <img className='h-10 w-10 rounded-full xl:mr-2' width={70} height={70} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/800px-Elon_Musk_2015.jpg" alt="profile"/>
          <div className="leading-5 hidden xl:inline">
            <h4 className='font-bold'>Elon Musk</h4>
            <p className='text-gray-500'>Twitter Ceo</p>
          </div>
        </div>
    </div>
  )
}
