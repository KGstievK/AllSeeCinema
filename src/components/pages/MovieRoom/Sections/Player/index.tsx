import React from "react"
import scss from "./Player.module.scss"

const Player: React.FC = () => {
	const link = "http://16.170.243.18:8000/media/video/%D0%9A%D0%BE%D0%BD%D1%86%D0%BE%D0%B2%D0%BA%D0%B0_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%D0%9F%D0%BE%D0%B1%D0%B5%D0%B3_%D0%B8%D0%B7_%D0%A8%D0%BE%D1%83%D1%88%D0%B5%D0%BD%D0%BA%D0%B0%D0%A4%D1%80%D1%8D%D0%BD%D0%BA_%D0%94%D0%B0%D1%80%D0%B0%D0%B1%D0%BE%D0%BD%D1%821994_%D0%B3%D0%BE%D0%B4.mp4"

	return (
		<div className={scss.player}>
			<div className={scss.content}>
				<video src={link} controls />
			</div>
		</div>
	)
}
;``
export default Player
