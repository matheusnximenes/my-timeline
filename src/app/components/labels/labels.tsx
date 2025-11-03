import { ILabels } from '@/db/db.model'
import styles from './labels.module.scss'

interface LabelsProps {
	labels?: ILabels[]
	inactiveLabels: ILabels[]
	handleInactiveLabels: (l: ILabels) => void
}

const Labels = ({ labels, handleInactiveLabels, inactiveLabels }: LabelsProps) => {
	return (
		<ul className={styles.container}>
			{labels?.map((l) => {
				const isInactive = inactiveLabels.find((lb) => lb === l)
				return (
					<li key={l.id}>
						<button
							className={isInactive ? styles.inactive : ''}
							onClick={() => handleInactiveLabels(l)}
						>
							{l.name}
						</button>
					</li>
				)
			})}
		</ul>
	)
}

export default Labels
