import Image from 'next/image'
import Container from './components/Container'
import EmptyState from './components/EmptyState'
import getListings from './actions/GetListings'
import ListingCard from './components/listings/ListingCard'
import getCurrentUser from './actions/GetCurrentUser'
import { SafeListing } from './types'
import getReservations from './actions/GetReservations'

export default async function Home() {
  
  const listings = await getListings()
  const currentUser = await getCurrentUser()

  if(listings.length === 0){
    return <EmptyState showReset />
  }

  return (
    <Container>
      <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 2xl:gap-8">
        {listings.map((listing) => {
          return (
            <div className="">
              <ListingCard currentUser={currentUser} key={listing.id} data={listing} />
            </div>
          )
        })}
      </div>
    </Container>  
  )
}
