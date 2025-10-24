'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

const StateContext = createContext({})
interface IStateProvider {
	children: ReactNode
}

export const StateProvider = ({ children }: IStateProvider) => {
	const [selectedEventId, setSelectedEventId] = useState<number | null>(null)
	return (
		<StateContext.Provider value={{ selectedEventId, setSelectedEventId }}>
			{children}
		</StateContext.Provider>
	)
}

export const useStateProvider = () => {
	return useContext(StateContext)
}
