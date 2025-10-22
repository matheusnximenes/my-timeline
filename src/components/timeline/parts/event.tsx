import { TimelineEvent } from '@/types/timelineEvents'
import styles from './event.module.scss'

interface IEventProps {
	distance: number
	width: number
	event: TimelineEvent
	activeEvent: TimelineEvent | null
	handleEvent: (event: TimelineEvent) => void
}

const Event = ({ distance, width, event, activeEvent, handleEvent }: IEventProps) => {
	const { isLandmark, title } = event
	const isActive = activeEvent?.id === event.id
	return (
		<>
			{isLandmark && <div className={styles.landmark} style={{ marginLeft: `${distance}px` }} />}
			<div className={styles.line}>
				<button
					className={styles.line_wrapper}
					onClick={() => handleEvent(isActive ? null : event)}
					style={{
						marginLeft: `${distance}px`,
						width: `${width}px`
					}}
				>
					<div className={`${styles.title_wrapper} ${isLandmark && styles.isLandmark}`}>
						<div className={styles.title}>
							{title} {isActive && `- Active`}
						</div>
						<div>
							{event.start.year}/{event.start.era} ({width}y)
						</div>
					</div>
					<div
						className={`${styles.element} ${isLandmark && styles.isLandmark}`}
						style={{
							borderColor: event.custom?.color ?? '',
							borderStyle: event.custom?.lineType ?? ''
						}}
					></div>
				</button>
			</div>
		</>
	)
}

export default Event
