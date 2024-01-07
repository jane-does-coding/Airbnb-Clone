"use client"

import React from "react"

const Container = ({children}: {children:React.ReactNode}) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 sx:px-2">
      {children}
    </div>
  )
}

export default Container