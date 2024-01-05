import getCurrentUser from "@/app/actions/GetCurrentUser"
import getListingById from "@/app/actions/GetListingById"
import EmptyState from "@/app/components/EmptyState"
import ListingClient from "./ListingClient"

interface IParams{
  listingId?: string
}

const ListingPage = async({params}: {params: IParams}) => {
  const listing = await getListingById(params)
  const currentUser = await getCurrentUser()

  if(!listing){
    return (
      <EmptyState />
    )
  }

  return (
    <div>
      <ListingClient listing={listing} currentUser={currentUser} />
    </div>
  )
}

export default ListingPage