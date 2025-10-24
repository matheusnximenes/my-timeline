import { ITimelineEvent } from '@/db/db.model'
import styles from './events.module.scss'

interface EventsProps {
	event: ITimelineEvent
	deleteEvent: (id: number) => Promise<void>
	handleSelectEvent: (e: ITimelineEvent) => void
}

const Events = ({ event, deleteEvent, handleSelectEvent }: EventsProps) => {
	const { startYear, endYear, startType, endType, id } = event
	const distance = endYear - startYear
	return (
		<li className={styles.event}>
			<div className={styles.title_wrapper}>
				<span>{event.title}</span>
				<span>
					{startYear} {event.startEra} ({event.startType}){event.endYear} {event.endEra} (
					{event.endType})
				</span>
				<button onClick={() => deleteEvent(event.id!)}>delete</button>
				<button onClick={() => handleSelectEvent(event)}>edit</button>
			</div>
			<div className={styles.line} style={{ width: `${distance}px` }}>
				<div className={styles.line_inner_start} />
				<div className={styles.line_inner} />
				<div className={styles.line_inner_end} />
			</div>
		</li>
	)
}

export default Events
