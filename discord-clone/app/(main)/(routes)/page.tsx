import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div className=''>
     <UserButton afterSignOutUrl="/sign-in" />
     <ModeToggle />
    </div>

  )
}
