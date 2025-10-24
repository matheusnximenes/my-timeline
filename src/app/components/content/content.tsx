'use client'

import { db, ITimelineEvent, Labels } from '@/db/db.model'
import { useLiveQuery } from 'dexie-react-hooks'
import { useState } from 'react'
import Events from '../event-element/event-element'
import Form from '../event-form/event-form'
import styles from './content.module.scss'

const labelsOptions = [
	Labels.GENESIS,
	Labels.CHARACTERS,
	Labels.JW_EVENTS,
	Labels.BIBLES,
	Labels.PROPHESIES,
	Labels.CHRIST_PROPHESIES,
	Labels.JESUS,
	Labels.BIBLE_EVENTS
]

const Content = () => {
	const [selectedEventId, setSelectedEventId] = useState<number | null>(null)
	const [showContainer, setShowContainer] = useState(selectedEventId ? true : false)
	const events = useLiveQuery(() => db.timeline.toArray())

	if (!events) {
		return null
	}

	const selectedEvent = events.find((e) => e.id === selectedEventId) || null

	const deleteEvent = async (id: number) => {
		await db.timeline.delete(id)
	}

	const onCloseForm = () => {
		setSelectedEventId(null)
		setShowContainer(false)
	}

	const handleSelectEvent = (event: ITimelineEvent) => {
		setSelectedEventId(event.id ?? null)
		setShowContainer(true)
	}

	return (
		<>
			<header className={styles.header}>
				<h1>My Timeline</h1>
				<button className={styles.floatContainer} onClick={() => console.log('click')}>
					Manage Labels
				</button>
				<button className={styles.floatContainer} onClick={() => setShowContainer(!showContainer)}>
					{showContainer ? 'Close' : 'Create'}
				</button>
			</header>
			{showContainer && (
				<div className={styles.container}>
					<button className={styles.closeButton} onClick={() => setShowContainer(false)}>
						X
					</button>
					<Form selectedEvent={selectedEvent} onClose={onCloseForm} labelsOptions={labelsOptions} />
				</div>
			)}
			<ul className={styles.eventList}>
				{events?.map((e) => (
					<Events
						event={e}
						key={e.id}
						deleteEvent={deleteEvent}
						handleSelectEvent={handleSelectEvent}
					/>
				))}
			</ul>
		</>
	)
}

export default Content
