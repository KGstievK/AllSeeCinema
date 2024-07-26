"use client"
import React from "react"
import scss from "./MovieRoom.module.scss"
import Player from "./Sections/Player"
import AboutMovie from "./Sections/AboutMovie"
import Chat from "./Sections/Chat"

const MovieRoom = () => {
	const [detail, setDetail] = React.useState(false)

	const dominateMovie = () => setDetail(true)
	const dominateChat = () => setDetail(false)

	const createRoom = () => {
		const formData = new FormData()
		formData.append("name", "room")
		formData.append("name_ru", "room")
		formData.append("name_ky", "room")
		formData.append("name_en", "room")
	}

	return (
		<div className={scss.movie_room}>
			<div className="container">
				<div className={scss.content}>
					<Player />
					<div className={detail ? `${scss.about} ${scss.about_movie}` : scss.about}>
						<div onClick={dominateMovie} className={scss.movie}>
							<AboutMovie />
						</div>
						<div onClick={dominateChat} className={scss.chat}>
							<Chat />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MovieRoom
