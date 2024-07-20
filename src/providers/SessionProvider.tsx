"use client"
import React from "react"
import { usePathname, useRouter } from "next/navigation"

import { useGetMeQuery, usePostRefreshTokenMutation } from "../redux/api/auth"

interface SessionProviderProps {
	children: React.ReactNode
}

export const SessionProvider: React.FC<SessionProviderProps> = ({ children }) => {
	const { status } = useGetMeQuery()
	const pathname = usePathname()
	const router = useRouter()
	const [refreshToken] = usePostRefreshTokenMutation()

	const access = JSON.parse(String(localStorage.getItem("access")))
	const refresh = JSON.parse(String(localStorage.getItem("refresh")))

	const handleNavigation = async () => {
		if (status === "rejected" && access && refresh) {
			const formData = new FormData()
			formData.append("refresh", refresh)
			const { data } = await refreshToken(formData)
			if (data) {
				localStorage.setItem("access", JSON.stringify(data.access))
			}
		}

		switch (pathname) {
			case "/auth/sign-in":
			case "/auth/sign-up":
			case "/auth/reset-password":
			case "/auth/forgot":
				if (status === "fulfilled") {
					router.push("/")
					// window.location.pathname
				}
				break
			case "/":
			case "/movie":
			case "/notifications":
			case "/settings":
			case "/my-profile":
			case "/my-public":
				if (status === "rejected") {
					router.push("/auth/sign-in")
				}
				break
			default:
				break
		}
	}

	React.useEffect(() => {
		handleNavigation()
	}, [status, pathname, router])

	return children
}
