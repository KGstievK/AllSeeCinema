import { useGetMeQuery } from "@/redux/api/auth"
import scss from "./Footer.module.scss"

const Footer = () => {
	const { status } = useGetMeQuery()

	if (status === "rejected") {
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
