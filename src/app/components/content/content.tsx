'use client'

import { db, Era, ILabels, ITimelineEvent, Type } from '@/db/db.model'
import { getTimelineBounds } from '@/utils/timeline-utils'
import { useLiveQuery } from 'dexie-react-hooks'
import { useState } from 'react'
import Baseline from '../baseline/baseline'
import { generateGapYears } from '../baseline/utils'
import Events from '../event-element/event-element'
import EventForm from '../forms/event-details/event-form.tsx'
import LabelsForm from '../forms/labels-form/labels-form'
import Grid from '../grid/grid'
import Labels from '../labels/labels'
import styles from './content.module.scss'

const initialFormData = {
	id: undefined,
	order: 0,
	title: '',
	description: '',
	startYear: 0,
	startType: Type.ACCURATE as Type,
	startEra: Era.BCE as Era,
	endYear: 0,
	endType: Type.ACCURATE as Type,
	endEra: Era.BCE as Era,
	isLandmark: false,
	mainImgName: '',
	mainImgUrl: '',
	mainLinkName: '',
	mainLinkUrl: '',
	labels: [] as string[],
	customBgColor: '',
	customColor: '',
	customLineColor: '',
	customLineType: ''
}

const borderStyles = [
	'none',
	'solid',
	'dashed',
	'dotted',
	'double',
	'groove',
	'ridge',
	'inset',
	'outset'
]

const Content = () => {
	const step = 50
	const [selectedEvent, setSelectedEvent] = useState<ITimelineEvent | null>(null)
	const [shownManageLabels, setShownManageLabels] = useState(false)
	const [inactiveLabels, setInactiveLabels] = useState<ILabels[]>([])
	const allEvents = useLiveQuery(() => db.timeline.toArray())
	const labels = useLiveQuery(() => db.labels.toArray())

	if (!allEvents) {
		return null
	}

	const events = allEvents.filter((event) =>
		inactiveLabels?.every((l) => event.labels?.includes(l.name))
	)

	const deleteEvent = async (id: number) => {
		if (confirm('Are you sure you want to delete this event?')) {
			console.log('deleteEvent', id)
			await db.timeline.delete(id)
			setSelectedEvent(null)
		}
	}

	const handleSelectEvent = (event: ITimelineEvent) => {
		setSelectedEvent(event)
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target
		setSelectedEvent({ ...selectedEvent, [name]: value } as ITimelineEvent)
	}

	const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = e.target
		setSelectedEvent({ ...selectedEvent, [name]: Boolean(checked) } as ITimelineEvent)
	}

	const handleMultipleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedOptions = Array.from(e.target.selectedOptions)
		const values = selectedOptions.map((option) => option.value)
		setSelectedEvent({ ...selectedEvent, labels: values } as ITimelineEvent)
	}

	const handleInactiveLabels = (label: ILabels) => {
		setInactiveLabels((prev) => {
			const exists = prev.some((l) => l.id === label.id)
			return exists ? prev.filter((l) => l.id !== label.id) : [...prev, label]
		})
	}

	const onClear = () => {
		setSelectedEvent(
			(selectedEvent?.id
				? events.find((e) => e.id === selectedEvent.id) ?? null
				: initialFormData) as ITimelineEvent
		)
	}

	const onClose = () => {
		setSelectedEvent(null)
	}

	const onSave = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		e.stopPropagation()

		if (selectedEvent?.id) {
			await db.timeline.put({
				id: selectedEvent.id,
				...selectedEvent
			})
		} else {
			await db.timeline.add({
				...selectedEvent
			} as ITimelineEvent)
		}

		onClose()
	}

	const timelineBounds = getTimelineBounds(events || [])
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
						setSelectedEvent(null)
						setShownManageLabels(true)
					}}
				>
					Manage Labels
				</button>
				<button
					onClick={() => {
						setShownManageLabels(false)
						setSelectedEvent(initialFormData as ITimelineEvent)
					}}
				>
					Create
				</button>
			</header>
			<Labels
				labels={labels}
				inactiveLabels={inactiveLabels}
				handleInactiveLabels={handleInactiveLabels}
			/>
			{selectedEvent && (
				<div className={styles.container}>
					<button className={styles.closeButton} onClick={() => setSelectedEvent(null)}>
						X
					</button>
					<div className={styles.formContainer}>
						<EventForm
							labelsList={labels}
							activeEvent={selectedEvent}
							onChange={handleInputChange}
							onSelect={handleMultipleSelectChange}
							onCheck={handleCheckChange}
							onClear={onClear}
							onClose={onClose}
							onSave={onSave}
							deleteEvent={deleteEvent}
						/>
					</div>
				</div>
			)}
			{shownManageLabels && labels && (
				<div className={styles.container}>
					<button className={styles.closeButton} onClick={() => setShownManageLabels(false)}>
						X
					</button>
					<div className={styles.formContainer}>
						<LabelsForm labels={labels} onClose={() => setShownManageLabels(false)} />
					</div>
				</div>
			)}

			{years.length > 0 && (
				<>
					<ul className={styles.eventList} style={{ width: `${years[0].year}px` }}>
						<Grid yearsNumber={years.length + 1} step={step} />
						{timelineBounds &&
							events
								.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
								.map((e) => (
									<Events
										selectedEvent={selectedEvent}
										event={e}
										key={e.id}
										deleteEvent={deleteEvent}
										handleSelectEvent={handleSelectEvent}
										years={years}
									/>
								))}
					</ul>

					{timelineBounds && <Baseline years={years} step={step} />}
				</>
			)}
		</main>
	)
}

export default Content
