'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import MessageElement from '@/components/MessageElement'
import { socketContext } from '@/provider/socketProvider'

type userData = { name: string; url: string }
type msgData = {
	id: string
	message: string
	self: boolean
	timeStamp: string
	user: string
	url: string
}
function Messages({ chatId }: { chatId: userData }) {
	const socket = useContext(socketContext)
	const messaChaRef = useRef<null | HTMLDivElement>(null)
	var initMsg: msgData[] = []
	const [message, setMessage] = useState<msgData[]>(initMsg)

	socket.on('message', data => {
		var newMsg: msgData = {
			id: '03',
			message: data.msg,
			self: data.jwt == localStorage.getItem('jwt'),
			url: chatId.url,
			user: chatId.name,
			timeStamp: data.timeStamp,
		}
		setMessage([...message, newMsg])
	})
	useEffect(() => {
		messaChaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
	}, [])

	return (
		<div className="w-full overflow-x-hidden overflow-y-scroll h-[72vh] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
			{message?.map((value, index) => (
				<div className="max-h-10 mb-10">
					<MessageElement messageInfo={value} />
					<div ref={messaChaRef} />
				</div>
			))}
		</div>
	)
}

export default Messages
