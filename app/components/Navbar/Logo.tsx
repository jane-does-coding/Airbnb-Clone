"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

const Logo = () => {
  const router = useRouter()

  return (
    <Image onClick={() => router.push("/")} className="hidden md:block cursor-pointer" alt="logo" src={"/images/logo.png"} width={100} height={50} />
  )
}

export default Logo