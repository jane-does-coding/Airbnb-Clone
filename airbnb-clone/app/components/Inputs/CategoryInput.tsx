"use client"

import { IconType } from "react-icons"

const CategoryInput = ({onClick, label, selected, icon:Icon}: {icon: IconType, label: string, selected?: boolean, onClick: (value:string) => void }) => {
  return (
    <div className={`rounded-xl border-2 p-2  flex gap-3 items-center hover:border-black transition cursor-pointer text-neutral-600 hover:text-black ${selected ? "border-black" : "border-neutral-200"}`} onClick={() => onClick(label)}>
      <Icon size={30} />
      <div className="font-semibold">
        {label}
      </div>
    </div>
  )
}

export default CategoryInput