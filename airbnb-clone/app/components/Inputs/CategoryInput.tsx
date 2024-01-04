"use client"

import { IconType } from "react-icons"

const CategoryInput = ({onClick, label, selected, icon:Icon}: {icon: IconType, label: string, selected?: boolean, onClick: (value:string) => void }) => {
  return (
    <div className={`rounded-xl border-2 p-2  flex gap-3 items-center hover:border-black transition cursor-pointer hover:text-black ${selected ? "border-black text-black" : "border-neutral-200 text-neutral-600"}`} onClick={() => onClick(label)}>
      <Icon size={30} />
      <div className="font-semibold">
        {label}
      </div>
    </div>
  )
}

export default CategoryInput