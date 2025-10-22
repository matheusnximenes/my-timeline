'use client'

import { useStateProvider } from '@/providers/StateProvider'
import styles from './details.module.scss'

const Details = () => {
	const { activeEvent } = useStateProvider()
	if (!activeEvent) {
		return null
	}
	const { title, description } = activeEvent
	return (
		<div className={`${styles.aside} ${activeEvent ? styles.active : ''}`}>
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	)
}

export default Details
