"use client"
import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import scss from "../Auth.module.scss"
import { usePostRegistrationMutation } from "@/redux/api/auth"
import { useRouter } from "next/navigation"

const Registration: React.FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = useForm<Auth.PostRegistrationRequest>()
	const router = useRouter()
	const [registration] = usePostRegistrationMutation()

	const onSubmit: SubmitHandler<Auth.PostRegistrationRequest> = async (data) => {
		const formData = new FormData()
		for (let i in data) {
			formData.append(i, data[i])
		}
		const { data: response } = await registration(formData)
		if (response) {
			router.push("/auth/sign-in")
		} else {
			alert("Не удалось зарегистрироваться, попробуйте снова!")
		}
		reset()
	}
	return (
		<div className={scss.auth}>
			<div className="container">
				<div className={scss.content}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<h2>Registration</h2>
						<input placeholder="First name" type="text" {...register("first_name", { required: true })} />
						<input placeholder="Last name" type="text" {...register("last_name", { required: true })} />
						<input placeholder="Username" type="text" {...register("username", { required: true })} />
						<input placeholder="Email" type="text" {...register("email", { required: true })} />
						<input placeholder="Password" type="text" {...register("password", { required: true })} />
						{isSubmitting ? <button type="button">Submitting</button> : <button type="submit">Sign-up</button>}
					</form>
				</div>
			</div>
		</div>
	)
}

export default Registration
