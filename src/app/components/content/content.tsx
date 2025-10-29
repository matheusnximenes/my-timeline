'use client'

import { db, ITimelineEvent } from '@/db/db.model'
import { getTimelineBounds } from '@/utils/timeline-utils'
import { useLiveQuery } from 'dexie-react-hooks'
import { useState } from 'react'
import Baseline from '../baseline/baseline'
import { generateGapYears } from '../baseline/utils'
import Events from '../event-element/event-element'
import EventForm from '../forms/event-form/event-form'
import LabelsForm from '../forms/labels-form/labels-form'
import Grid from '../grid/grid'
import styles from './content.module.scss'

const Content = () => {
	const step = 50
	const [selectedEventId, setSelectedEventId] = useState<number | null>(null)
	const [shownManageLabels, setShownManageLabels] = useState(false)
	const [showContainer, setShowContainer] = useState(selectedEventId ? true : false)
	const events = useLiveQuery(() => db.timeline.toArray())
	const labels = useLiveQuery(() => db.labels.toArray())

	if (!events) {
		return null
	}

	const selectedEvent = events.find((e) => e.id === selectedEventId) || null

	const deleteEvent = async (id: number) => {
		if (confirm('Are you sure you want to delete this event?')) {
			await db.timeline.delete(id)
			// Add your logic for deleting the item here
		}
	}

	const onCloseForm = () => {
		setSelectedEventId(null)
		setShowContainer(false)
	}

	const handleSelectEvent = (event: ITimelineEvent) => {
		setSelectedEventId(event.id ?? null)
		setShowContainer(true)
	}

	const timelineBounds = getTimelineBounds(events)
	const years = timelineBounds
		? generateGapYears(
				timelineBounds.minYear,
				timelineBounds.maxYear,
				timelineBounds.minEra,
				timelineBounds.maxEra,
				step
		  )
		: []

	return (
		<main className={styles.main}>
			<header className={styles.header}>
				<h1>My Timeline</h1>
				<button
					className={styles.manageButton}
					onClick={() => {
						setShowContainer(false)
						setShownManageLabels(true)
					}}
				>
					Manage Labels
				</button>
				<button
					onClick={() => {
						setShowContainer(true)
						setShownManageLabels(false)
						setSelectedEventId(null)
					}}
				>
					Create
				</button>
			</header>
			{showContainer && (
				<div className={styles.container}>
					<button className={styles.closeButton} onClick={() => setShowContainer(false)}>
						X
					</button>
					<div className={styles.formContainer}>
						<EventForm labelsList={labels} selectedEvent={selectedEvent} onClose={onCloseForm} />
					</div>
				</div>
			)}
			{shownManageLabels && labels && (
				<div className={styles.container}>
					<button className={styles.closeButton} onClick={() => setShownManageLabels(false)}>
						X
					</button>
					<div className={styles.formContainer}>
						<LabelsForm labels={labels} onClose={onCloseForm} />
					</div>
				</div>
			)}

			<ul className={styles.eventList} style={{ width: `${years[0].year}px` }}>
				<Grid yearsNumber={years.length + 1} step={step} />
				{timelineBounds &&
					events?.map((e) => (
						<Events
							event={e}
							key={e.id}
							deleteEvent={deleteEvent}
							handleSelectEvent={handleSelectEvent}
							years={years}
						/>
					))}
			</ul>

			{timelineBounds && <Baseline years={years} step={step} />}
		</main>
	)
}

export default Content
