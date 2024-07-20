"use client"
import React from "react"

import scss from "./Header.module.scss"
import Link from "next/link"
import { useGetMeQuery } from "@/redux/api/auth"

const Header: React.FC = () => {
	const { status } = useGetMeQuery()

	const onLogout = () => {
		localStorage.removeItem("access")
		localStorage.removeItem("refresh")
		localStorage.removeItem("id")
		window.location.reload()
	}

	return (
		<header className={scss.Header}>
			<div className="container">
				<div className={scss.content}>
					{status === "rejected" ? (
						<>
							<div className={scss.logo}>
								<h1>Cinema</h1>
							</div>
							<nav className={scss.nav}>
								<Link href="/auth/sign-in">Sign-in</Link>
								<Link href="/auth/sign-up">Sign-up</Link>
							</nav>
						</>
					) : (
						<>
							<div className={scss.logo}>
								<Link href="/">
									<h1>Cinema</h1>
								</Link>
							</div>
							<nav className={scss.nav}>
								<Link href="/movie">Movies</Link>
								<Link href="/my-profile">Profile</Link>
								<button onClick={onLogout}>Logout</button>
							</nav>
						</>
					)}
				</div>
			</div>
		</header>
	)
}

export default Header
