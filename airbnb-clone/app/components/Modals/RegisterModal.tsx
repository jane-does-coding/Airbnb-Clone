"use client"
import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import { AiFillGithub } from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import {FieldValues, SubmitHandler, useForm} from "react-hook-form"
import useRegisterModal from "@/app/hooks/useRegisterModal" 
import Modal from "./Modal"
import Heading from "../Heading"
import Input from "../Inputs/Input"
import toast from "react-hot-toast"
import Button from "../Button"
import { Noto_Sans_Tamil_Supplement } from "next/font/google"
import { signIn } from "next-auth/react"
import LoginModal from "./LoginModal"
import useLoginModal from "@/app/hooks/useLoginModal"

const RegisterModal = () => {
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const [isLoading, setIsLoading] = useState(false)


  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    axios.post("/api/register", data).then(() => {
      registerModal.onClose()
      loginModal.onOpen()
    }).catch((error) => {
      console.log(error)
      toast.error("Something went wrong")
    }).finally(() => {
      setIsLoading(false)
    })
  }

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an account!" />
      <div className="flex flex-row gap-4">
        <Input id="email" label="Email" disabled={isLoading} errors={errors} register={register} required />
        <Input id="name" label="Full Name" disabled={isLoading} errors={errors} register={register} required />
      </div>
      <Input id="password" label="Password" type="password" disabled={isLoading} errors={errors} register={register} required />
    </div>
  )

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <div className="flex flex-col gap-4">
        <Button outline label="Continue with Google" icon={FcGoogle} onClick={() => signIn("google")} />
        <Button outline label="Continue with Github" icon={AiFillGithub} onClick={() => signIn("github")} />
      </div>
      <div className="text-neutral-500 text-center mt-2 font-light">
        <div className="flex flex-row items-center gap-2 justify-center">
          <p>Already have an account?</p>
          <p onClick={registerModal.onClose} className="text-neutral-800 cursor-pointer hover:underline">Login</p>
        </div>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading} 
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default RegisterModal