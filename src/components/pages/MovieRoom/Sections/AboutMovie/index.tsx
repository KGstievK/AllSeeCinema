import React from "react"
import scss from "./AboutMovie.module.scss"

const AboutMovie: React.FC = () => {
	return (
		<section className={scss.about_movie}>
			<div className={scss.content}>
				<h3>Movie name</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quod recusandae qui nesciunt numquam quia perferendis repellat molestiae laborum fuga?</p>
			</div>
		</section>
	)
}

export default AboutMovie
