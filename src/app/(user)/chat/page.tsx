'use client'

import Header from '@/components/Header'
import React from 'react'
import SearchArea from '@/components/SearchArea'
import AvailChats from '@/components/AvailChats'

function ChatHomePage() {
	return (
		<div className="h-screen w-screen">
			<Header />
			<div className="flex flex-col lg:w-1/4 dark:bg-gray-900 bg-[#ffffff] border-r-2 border-[#5E5E5E33] dark:border-[#303030] w-full mt-2 rounded-md h-[89%] ml-2">
				<div className="flex h-[4%] w-full flex-col pt-5 pl-5 pr-2">
					{/* Seatch and app name*/}
					<SearchArea />
				</div>
				<div className="flex flex-1 h-[96%] w-full h-max-[96%] mt-10 flex-col">
					<AvailChats />
					<div className="w-full flex justify-center mt-6 mb-2">
						&#169; 2024 under Bikram Ghuku
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChatHomePage
