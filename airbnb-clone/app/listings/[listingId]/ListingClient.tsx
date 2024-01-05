"use client"

import Container from "@/app/components/Container"
import { categories } from "@/app/components/Navbar/Categories"
import ListingHead from "@/app/components/listings/ListingHead"
import { SafeListing, SafeUser } from "@/app/types"
import { Reservation } from "@prisma/client"
import { useMemo } from "react"


const ListingClient = ({listing, currentUser}: {reservations?: Reservation[], listing: SafeListing & {user: SafeUser}, currentUser?: SafeUser | null}) => {
  
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category)
  }, [listing.category])
  
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead title={listing.title} imageSrc={listing.imageSrc} locationValue={listing.locationValue} id={listing.id} currentUser={currentUser} />
        </div>
      </div>
    </Container>
  )
}

export default ListingClient