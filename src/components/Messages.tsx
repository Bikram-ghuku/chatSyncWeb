'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import MessageElement from '@/components/MessageElement'
import { socketContext } from '@/provider/socketProvider'
import { decryptSymmetric } from '@/encryption/Controller'

type userData = { name: string; url: string }
type msgData = {
	id: string
	message: string
	self: boolean
	timeStamp: string
	user: string
	url: string
}
function Messages({
	chatId,
	userDetails,
}: {
	chatId: string
	userDetails: userData
}) {
	const socket = useContext(socketContext)
	const messaChaRef = useRef<null | HTMLDivElement>(null)
	var initMsg: msgData[] = []
	const [message, setMessage] = useState<msgData[]>(initMsg)

	socket.on('message', data => {
		if (chatId == data.chatId) {
			decryptSymmetric(data.msg).then((decMsg) => {
				var newMsg: msgData = {
					id: data.chatId,
					message: decMsg,
					self: data.jwt == localStorage.getItem('jwt'),
					url: userDetails?.url || '',
					user: data.name,
					timeStamp: data.timeStamp,
				}
				setMessage([...message, newMsg])
			})
		}
	})
	useEffect(() => {
		messaChaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
	}, [message])

	return (
		<div className="flex flex-col w-full overflow-x-hidden overflow-y-scroll lg:h-[75vh] h-[70vh] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
			{message?.map((value, index) => (
				<div className="max-h-10 mb-10" key={index}>
					<MessageElement messageInfo={value} />
					<div ref={messaChaRef} />
				</div>
			))}
		</div>
	)
}

export default Messages
