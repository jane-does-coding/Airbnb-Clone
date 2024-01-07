"use client"

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { SafeUser } from "../types"
import useFavorite from "../hooks/useFavorite"

const HeartButton = ({listingId, currentUser}: {listingId: string, currentUser: SafeUser | null | undefined}) => {
  const {hasFavorited, toggleFavorite} = useFavorite({
    listingId, currentUser
  })
  
  return (
    <div className="relative hover:opacity-80 transition cursor-pointer" onClick={toggleFavorite}>
      <AiOutlineHeart size={28} className={"fill-white absolute -top-[2px] -right-[2px]"} />
      <AiFillHeart size={24} className={`${hasFavorited ? "fill-rose-500" : "fill-neutral-500/70"}`} />
    </div>
  )
}

export default HeartButton