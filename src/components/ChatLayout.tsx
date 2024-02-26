'use client'

import React from 'react'
import SearchArea from '@/components/SearchArea'
import InputArea from '@/components/InputArea'
import UserAvatar from '@/components/UserAvatar'
import CallOptions from '@/components/CallOptions'
import AvailChats from '@/components/AvailChats'

function ChatLayout() {
	return (
		<div className="flex flex-1">
			<div className="flex flex-col w-1/4 dark:bg-gray-900 bg-[#ffffff] border-r-2 border-[#5E5E5E33] dark:border-[#303030]">
				<div className="flex h-1/6 w-full flex-col pt-5 pl-5 pr-2">
					{/* Seatch and app name*/}
					<SearchArea />
				</div>
				<div className="flex h-4/5 w-full">
					<AvailChats />
				</div>
			</div>
			<div className="flex w-3/4 flex-col">
				<div className="flex dark:bg-gray-900 w-full bg-[#ffffff] h-16 border-b-2 border-[#5E5E5E33] dark:border-[#303030]">
					<div className="flex justify-start pl-10 items-center h-full">
						<UserAvatar url="" />
					</div>
					<div className="flex justify-end pl-10 items-center h-full w-full pr-20">
						<CallOptions />
					</div>
				</div>
				<div className="flex h-full w-full"></div>
				<div className="flex dark:bg-gray-900 w-full bg-[#ffffff] h-16 border-t-2 border-[#5E5E5E33] dark:border-[#303030]">
					<InputArea />
				</div>
			</div>
		</div>
	)
}

export default ChatLayout
