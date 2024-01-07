import getCurrentUser from "@/app/actions/GetCurrentUser"
import getListingById from "@/app/actions/GetListingById"
import EmptyState from "@/app/components/EmptyState"
import ListingClient from "./ListingClient"
import getReservations from "@/app/actions/GetReservations"

interface IParams{
  listingId?: string
}

const ListingPage = async({params}: {params: IParams}) => {
  const listing = await getListingById(params)
  const currentUser = await getCurrentUser()
  const reservations = await getReservations(params)


  if(!listing){
    return (
      <EmptyState />
    )
  }

  return (
    <div>
      <ListingClient listing={listing} currentUser={currentUser} reservations={reservations} />
    </div>
  )
}

export default ListingPage