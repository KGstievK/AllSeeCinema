import React from "react"
import scss from "./Chat.module.scss"

const Chat: React.FC = () => {
	const [inputValue, setInputValue] = React.useState<string>("")
	const [item, setItem] = React.useState<string[]>([])

	const saveInputValue = () => {
		setItem((prev) => [...prev, inputValue])
		setInputValue("")
	}

	const saveMessage = (event: React.KeyboardEvent) => event.key === "Enter" && saveInputValue()

	const changeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)

	return (
		<section className={scss.chat}>
			<div className={scss.content}>
				<div className={scss.message}>
					{item.map((el, i) => (
						<p key={i}>{el}</p>
					))}
				</div>
				<div className={scss.send}>
					<input onKeyUp={saveMessage} onChange={changeInputValue} type="text" value={inputValue} />
					<button onClick={saveInputValue}>Send</button>
				</div>
			</div>
		</section>
	)
}

export default Chat
