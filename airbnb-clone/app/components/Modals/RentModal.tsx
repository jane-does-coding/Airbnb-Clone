"use client"

import useRentModal from "@/app/hooks/useRentModal"
import Modal from "./Modal"
import { useMemo, useState } from "react"
import Heading from "../Heading"
import { categories } from "../Navbar/Categories"
import CategoryInput from "../Inputs/CategoryInput"
import { FieldValues, useForm } from "react-hook-form"

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5
}

const RentModal = () => {
  const rentModal = useRentModal()

  const [step, setStep] = useState(STEPS.CATEGORY)

  const {register, handleSubmit, setValue, watch, formState: {errors}, reset} = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      guestCount: 1,
      roomCount: 1,
      imgSrc: "",
      price: 1,
      title: "",
      description: ""
    }
  })

  const category = watch("category")
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value), {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    }
  }

  const onBack = () => {
    setStep((value) => value - 1)
  }

  const onNext = () => {
    setStep((value) => value + 1)
  }

  const actionLabel = useMemo(() => {
    if(step === STEPS.PRICE){
      return "Create"
    }

    return "Next"
  }, [step])

  const secondaryActionLabel = useMemo(() => {
    if(step === STEPS.CATEGORY){
      return undefined
    }

    return "Back"
  }, [step])

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading title="Which of these best describes your place?" subtitle="Pick a category" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[45vh] overflow-y-auto">
        {categories.map((item) => (
          <div className="col-span-1" key={item.label}>
            <CategoryInput onClick={(category) => setCustomValue("category", category)} selected={category === item.label} label={item.label} icon={item.icon} />
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <Modal
      isOpen={rentModal.isOpen} 
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step===STEPS.CATEGORY ? undefined : onBack}
      title="Airnb your home!" 
      body={bodyContent}
    />
  )
}

export default RentModal