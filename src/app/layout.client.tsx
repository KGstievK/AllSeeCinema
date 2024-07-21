"use client"
import React from "react"

import ReduxProvider from "@/providers/ReduxProvider"
import { SessionProvider } from "@/providers/SessionProvider"
import LayoutSide from "@/components/Layout/LayoutSide"

interface ILayoutClient {
	children: React.ReactNode
}

const LayoutClient: React.FC<ILayoutClient> = ({ children }) => {
	return (
		<>
			<ReduxProvider>
				<SessionProvider>
					<LayoutSide>{children}</LayoutSide>
				</SessionProvider>
			</ReduxProvider>
		</>
	)
}

export default LayoutClient
