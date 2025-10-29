import { Era, ITimelineEvent } from '@/db/db.model'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import styles from './event-element.module.scss'
import { getDistance, getDistanceFromStart } from './utils'

export interface ITimelineBounds {
	minYear: number
	minEra: Era
	maxYear: number
	maxEra: Era
}

interface EventsProps {
	event: ITimelineEvent
	deleteEvent: (id: number) => Promise<void>
	handleSelectEvent: (e: ITimelineEvent) => void
	years: {
		year: number
		era: Era
	}[]
}

const Events = ({ event, deleteEvent, handleSelectEvent, years }: EventsProps) => {
	const { startYear, endYear, startType, endType, startEra, endEra, id } = event
	const distance = getDistance(startYear, endYear, startEra, endEra)
	const distanceFromStart = getDistanceFromStart(years, startEra, startYear)

	return (
		<li
			className={styles.event}
			style={{ marginLeft: `${distanceFromStart}px`, width: `${distance}px` }}
		>
			{event.isLandmark && <div className={styles.isLandmark} />}
			<div className={styles.header}>
				<div className={styles.title}>
					{event.mainImgUrl && (
						<img
							src={event.mainImgUrl}
							alt={event.title}
							width={50}
							height={50}
							className={styles.mainImage}
						/>
					)}
					<span>
						{event.title} - {event.description}
					</span>
				</div>
				<div>
					{startYear}
					<span className={styles.era}>{startEra}</span> - {endYear}
					<span className={styles.era}>{endEra}</span>
				</div>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.line} style={{ width: `${distance}px` }}>
					<div className={styles.line_inner_start} />
					<div className={styles.line_inner}></div>
					<div className={styles.line_inner_end} />
				</div>
				<button onClick={() => deleteEvent(event.id!)}>
					<DeleteIcon fontSize='small' />
				</button>
				<button onClick={() => handleSelectEvent(event)}>
					<EditIcon fontSize='small' />
				</button>
			</div>
		</li>
	)
}

export default Events
