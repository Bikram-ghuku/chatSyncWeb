'use client'
import React from 'react'
import MessageElement from '@/components/MessageElement'

function Messages({ chatId }: { chatId: string }) {
	const message = [
		{
			id: '01',
			message: 'hello there',
			self: false,
			timeStamp: '01/02/2024 13:15',
		},
		{
			id: '02',
			message: 'How its going',
			self: true,
			timeStamp: '01/02/2024 13:15',
		},
	]
	return (
		<div className="w-full h-full">
			{message?.map((value, index) => (
				<div className="max-h-10 mb-10">
					<MessageElement messageInfo={value} />
				</div>
			))}
		</div>
	)
}

export default Messages
