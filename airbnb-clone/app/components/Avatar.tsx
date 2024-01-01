"use client"

import Image from "next/image"

const Avatar = ({src}: {src: string | null | undefined}) => {
  return (
    <Image className="rounded-full" src={src ? src : "/images/placeholder.jpg"} width={30} height={30} alt="profile image" />
  )
}

export default Avatar