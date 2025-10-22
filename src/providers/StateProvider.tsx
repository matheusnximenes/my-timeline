'use client'

import { TimelineEvent } from '@/types/timelineEvents'
import { createContext, ReactNode, useContext, useState } from 'react'

const StateContext = createContext({})
interface IStateProvider {
	children: ReactNode
}

export const StateProvider = ({ children }: IStateProvider) => {
	const [theme, setTheme] = useState('light')
	const [activeLabel, setLabel] = useState<string | null>(null)
	const [activeEvent, setActiveEvent] = useState<TimelineEvent | null>(null)

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
	}

	const handleLabel = (label: string) => {
		setLabel(label)
	}

	const handleEvent = (event: TimelineEvent | null) => {
		setActiveEvent(event)
	}

	return (
		<StateContext.Provider
			value={{
				theme,
				toggleTheme,
				activeLabel,
				handleLabel,
				activeEvent,
				handleEvent
			}}
		>
			{children}
		</StateContext.Provider>
	)
}

export const useStateProvider = () => {
	return useContext(StateContext)
}
