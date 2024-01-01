"use client"
import { User } from "@prisma/client"
import Container from "../Container"
import Logo from "./Logo"
import Search from "./Search"
import UserMenu from "./UserMenu"


const Navbar = ({currentUser}: {currentUser?: User | null}) => {

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px] ">
        {/* Container */}
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Logo />
            {/* Search */}
            <Search />
            {/* User Menu */}
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar