"use client"
import axios from "axios"
import { useState } from "react"
import { AiFillGithub } from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import {FieldValues, SubmitHandler, useForm} from "react-hook-form"
import useRegisterModal from "@/app/hooks/useRegisterModal" 
import Modal from "./Modal"
import Heading from "../Heading"
import Input from "../Inputs/Input"
import toast from "react-hot-toast"
import Button from "../Button"
import useLoginModal from "@/app/hooks/useLoginModal"
import {signIn} from "next-auth/react"
import { useRouter } from "next/navigation"

const LoginModal = () => {
  const router = useRouter()
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
      email: "",
      password: ""
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    signIn("credentials", {
      ...data,
      redirect: false
    }).then((callback) => {
      setIsLoading(false)

      if(callback?.ok){
        toast.success("Logged in")
        router.refresh()
        loginModal.onClose()
      }

      if(callback?.error){
        toast.error(callback.error)
      }
    })
  }

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome back" subtitle="Login to your account!" />
      <Input id="email" label="Email" disabled={isLoading} errors={errors} register={register} required />
      <Input id="password" label="Password" type="password" disabled={isLoading} errors={errors} register={register} required />
    </div>
  )

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <div className="flex flex-col gap-4">
        <Button outline label="Continue with Google" icon={FcGoogle} onClick={() => {}} />
        <Button outline label="Continue with Github" icon={AiFillGithub} onClick={() => {}} />
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
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default LoginModal