'use client'

import { db, Era, ITimelineEvent, Type } from '@/db/db.model'
import { useEffect, useState } from 'react'
import styles from './form.module.scss'

interface IFormProps {
	onClose: () => void
	selectedEvent: ITimelineEvent | null
}

const Form = ({ onClose, selectedEvent }: IFormProps) => {
	console.log('Selected event:', selectedEvent)

	const [order, setOrder] = useState(0)
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [startYear, setStartYear] = useState<null | number>(null)
	const [startType, setStartType] = useState<Type | null>(null)
	const [startEra, setStartEra] = useState<Era | null>(Era.BC)
	const [endYear, setEndYear] = useState<null | number>(null)
	const [endType, setEndType] = useState<Type | null>(null)
	const [endEra, setEndEra] = useState<Era | null>(Era.BC)

	const setSelectedEvent = () => {
		if (selectedEvent) {
			setOrder(selectedEvent.order)
			setTitle(selectedEvent.title)
			setDescription(selectedEvent.description)
			setStartYear(selectedEvent.startYear)
			setStartType(selectedEvent.startType)
			setStartEra(selectedEvent.startEra)
			setEndYear(selectedEvent.endYear)
			setEndType(selectedEvent.endType)
			setEndEra(selectedEvent.endEra)
		}
	}

	useEffect(() => {
		setSelectedEvent()
	}, [selectedEvent])

	const clearForm = (clicked = false) => {
		if (!clicked) {
			setSelectedEvent()
		} else {
			setOrder(0)
			setTitle('')
			setDescription('')
			setStartYear(null)
			setStartType(null)
			setStartEra(null)
			setEndYear(null)
			setEndType(null)
			setEndEra(null)
		}
	}

	const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!startYear || !startType || !startEra || !endYear || !endType || !endEra) {
			return
		}

		selectedEvent
			? await db.timeline.put({
					id: selectedEvent.id,
					order,
					title,
					description,
					startYear,
					startType,
					startEra,
					endYear,
					endType,
					endEra
			  })
			: await db.timeline.add({
					order,
					title,
					description,
					startYear,
					startType,
					startEra,
					endYear,
					endType,
					endEra
			  })
		clearForm(true)
		onClose()
	}

	const handleValidForm = () => {
		if (
			!title ||
			startYear === null ||
			endYear === null ||
			!startType ||
			!endType ||
			!startEra ||
			!endEra
		) {
			return false
		}

		if (startEra === Era.BC) {
			return startYear >= endYear
		}

		if (startEra === Era.EC) {
			return startYear <= endYear
		}
	}

	return (
		<div className={styles.formContainer}>
			<h2>Add Event</h2>
			<form onSubmit={handleForm}>
				<div className={styles.row}>
					<label htmlFor='title'>
						Title:
						<input
							type='text'
							id='title'
							name='title'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</label>
				</div>
				<div className={styles.row}>
					<label htmlFor='description'>
						Description:
						<input
							type='text'
							id='description'
							name='description'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</label>
				</div>
				<div className={styles.row}>
					<label htmlFor='order'>
						Order:
						<input
							type='number'
							id='order'
							name='order'
							value={order}
							onChange={(e) => setOrder(Number(e.target.value))}
						/>
					</label>
				</div>
				<div className={styles.row}>
					<label htmlFor='startYear'>
						Start year:
						<input
							type='number'
							id='startYear'
							name='startYear'
							value={startYear ?? ''}
							onChange={(e) => setStartYear(Number(e.target.value))}
						/>
					</label>
					<label htmlFor='startType'>
						Start type:
						<select
							id='startType'
							name='startType'
							value={startType ?? ''}
							onChange={(e) => setStartType(e.target.value as Type)}
						>
							<option value=''>Select Type</option>
							<option value='accurate'>accurate</option>
							<option value='inaccurate'>inaccurate</option>
						</select>
					</label>
					<label htmlFor='startEra'>
						Start era:
						<select
							id='startEra'
							name='startEra'
							value={startEra ?? ''}
							onChange={(e) => setStartEra(e.target.value as Era)}
						>
							<option value=''>Select Era</option>
							<option value={Era.BC}>{Era.BC}</option>
							<option value={Era.EC}>{Era.EC}</option>
						</select>
					</label>
				</div>
				<div className={styles.row}>
					<label htmlFor='endYear'>
						End year:
						<input
							type='number'
							id='endYear'
							name='endYear'
							value={endYear ?? ''}
							onChange={(e) => setEndYear(Number(e.target.value))}
						/>
					</label>
					<label htmlFor='endType'>
						End type:
						<select
							id='endType'
							name='endType'
							value={endType ?? ''}
							onChange={(e) => setEndType(e.target.value as Type)}
						>
							<option value=''>Select Type</option>
							<option value='accurate'>accurate</option>
							<option value='inaccurate'>inaccurate</option>
						</select>
					</label>
					<label htmlFor='endEra'>
						End era:
						<select
							id='endEra'
							name='endEra'
							value={endEra ?? ''}
							onChange={(e) => setEndEra(e.target.value as Era)}
						>
							<option value=''>Select Era</option>
							<option value={Era.BC}>{Era.BC}</option>
							<option value={Era.EC}>{Era.EC}</option>
						</select>
					</label>
				</div>
				<div className={styles.row}>
					<button type='button' onClick={() => clearForm(selectedEvent ? true : false)}>
						Clear
					</button>
					<button type='submit' disabled={!handleValidForm()}>
						Save
					</button>
				</div>
			</form>
		</div>
	)
}

export default Form
