import EmptyState from "../components/EmptyState"

import getCurrentUser from "../actions/GetCurrentUser"
import PropertiesClient from "./PropertiesClient"
import getListings from "../actions/GetListings"

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser()

  if(!currentUser) return <EmptyState title="Unauthorized" />

  const listings = await getListings({userId: currentUser.id})

  if(listings.length === 0){
    return <EmptyState title="No properties found" subtitle="Looks like you haven't posted any properties" />
  }

  return (
    <PropertiesClient listings={listings} currentUser={currentUser} />
  )

}

export default PropertiesPage