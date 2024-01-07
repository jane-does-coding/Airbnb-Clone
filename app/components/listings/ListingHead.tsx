"use client"

import useCountries from "@/app/hooks/useCountries"
import { SafeUser } from "@/app/types"
import Heading from "../Heading"
import Image from "next/image"
import HeartButton from "../HeartButton"

interface ListingHeadProps{
  title: string,
  imageSrc: string,
  locationValue: string,
  id: string,
  currentUser?: SafeUser | null
}

const ListingHead = ({title, imageSrc, locationValue, id, currentUser}: ListingHeadProps) => {
  const {getByValue} = useCountries()

  const location = getByValue(locationValue)

  return (
    <>
      <Heading title={title} subtitle={`${location?.region}, ${location?.label}`} />
      <div className="w-full rounded-xl relative h-[40rem]">
        <Image src={imageSrc} alt="image" fill className="object-cover w-full rounded-xl h-[40rem]" />
        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  )
}

export default ListingHead