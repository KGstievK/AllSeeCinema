"use client"
import React from "react"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import scss from "./LayoutSide.module.scss"

interface ILayoutSide {
	children: React.ReactNode
}

const LayoutSide: React.FC<ILayoutSide> = ({ children }) => {
	return (
		<div className={scss.LayoutSide}>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	)
}

export default LayoutSide
