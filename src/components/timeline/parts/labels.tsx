'use client'

import { data } from '@/data/data'
import { useStateProvider } from '@/providers/StateProvider'
import { capitalizeFirstLetter, getAllLabels } from '@/utils'
import styles from './labels.module.scss'

const Labels = () => {
	const labels = getAllLabels(data)
	const { activeLabel, handleLabel } = useStateProvider()

	return (
		<ul className={styles.labels}>
			{labels.map((label, index) => (
				<li key={index}>
					<button
						onClick={() => handleLabel(label)}
						className={activeLabel === label ? styles.active : ''}
					>
						{capitalizeFirstLetter(label)}
					</button>
				</li>
			))}
		</ul>
	)
}

export default Labels
