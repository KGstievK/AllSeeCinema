"use client"
import { useGetMeQuery } from "@/redux/api/auth"
import scss from "./Footer.module.scss"
import { usePathname } from "next/navigation"

const Footer = () => {
	const { status } = useGetMeQuery()
	const pathname = usePathname()

	if (status === "rejected" || pathname === "/movie/room") {
		return <></>
	}

	return (
		<footer className={scss.Footer}>
			<div className="container">
				<div className={scss.content}></div>
			</div>
		</footer>
	)
}

export default Footer
