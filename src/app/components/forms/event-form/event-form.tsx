'use client'

import { db, Era, ILabels, ITimelineEvent, Type } from '@/db/db.model'
import { useState } from 'react'
import styles from './event-form.module.scss'
import { handleFormValidation } from './utils'

interface IFormProps {
	onClose: () => void
	selectedEvent: ITimelineEvent | null
	labelsList: ILabels[] | undefined
}

const initialFormData = {
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

const EventForm = ({ onClose, selectedEvent, labelsList }: IFormProps) => {
	const [formData, setFormData] = useState(selectedEvent ?? initialFormData)

	const {
		order,
		title,
		description,
		startYear,
		startType,
		startEra,
		endYear,
		endType,
		endEra,
		isLandmark,
		mainImgName,
		mainImgUrl,
		mainLinkName,
		mainLinkUrl,
		labels,
		customBgColor,
		customColor,
		customLineColor,
		customLineType
	} = formData

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleIsLandmarkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { checked } = e.target
		setFormData({ ...formData, isLandmark: Boolean(checked) })
	}

	const handleMultipleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedOptions = Array.from(e.target.selectedOptions)
		const values = selectedOptions.map((option) => option.value)
		setFormData({ ...formData, labels: values })
	}

	const clearForm = (isEditModel = false) => {
		if (isEditModel && selectedEvent) {
			setFormData(selectedEvent)
		} else {
			setFormData(initialFormData)
		}
	}

	const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		e.stopPropagation()

		if (selectedEvent) {
			await db.timeline.put({
				id: selectedEvent.id,
				...formData
			})
		} else {
			await db.timeline.add({
				...formData
			})
		}

		clearForm()
		onClose()
	}

	return (
		<div className={styles.formContainer}>
			<h2>Event</h2>
			<form onSubmit={handleForm}>
				<div className={styles.row}>
					<label htmlFor='title'>
						Title
						<input type='text' id='title' name='title' value={title} onChange={handleInputChange} />
					</label>
				</div>
				<div className={styles.row}>
					<label htmlFor='description'>
						Description
						<input
							type='text'
							id='description'
							name='description'
							value={description}
							onChange={handleInputChange}
						/>
					</label>
				</div>
				<div className={styles.row}>
					<label htmlFor='isLandMark'>
						Is Landmark
						<input
							type='checkbox'
							id='isLandmark'
							name='isLandmark'
							checked={isLandmark}
							onChange={handleIsLandmarkChange}
						/>
					</label>
				</div>
				<div className={styles.row}>
					<label htmlFor='mainImgName'>
						Main Image Name
						<input
							type='text'
							id='mainImgName'
							name='mainImgName'
							value={mainImgName}
							onChange={handleInputChange}
						/>
					</label>
					<label htmlFor='mainImgUrl'>
						Main Image URL
						<input
							type='text'
							id='mainImgUrl'
							name='mainImgUrl'
							value={mainImgUrl}
							onChange={handleInputChange}
						/>
					</label>
				</div>
				<div className={styles.row}>
					<label htmlFor='order'>
						Order
						<input
							type='number'
							id='order'
							name='order'
							value={order}
							onChange={handleInputChange}
						/>
					</label>
				</div>
				<div className={styles.row}>
					<label htmlFor='startEra'>
						Start era
						<select
							id='startEra'
							name='startEra'
							value={startEra ?? ''}
							onChange={handleInputChange}
						>
							<option value={Era.BCE}>{Era.BCE}</option>
							<option value={Era.CE}>{Era.CE}</option>
						</select>
					</label>
					<label htmlFor='startYear'>
						Start year
						<input
							type='number'
							id='startYear'
							name='startYear'
							value={startYear ?? ''}
							onChange={handleInputChange}
						/>
					</label>
					<label htmlFor='startType'>
						Start type
						<select
							id='startType'
							name='startType'
							value={startType ?? ''}
							onChange={handleInputChange}
						>
							<option value={Type.ACCURATE}>{Type.ACCURATE}</option>
							<option value={Type.INACCURATE}>{Type.INACCURATE}</option>
						</select>
					</label>
				</div>
				<div className={styles.row}>
					<label htmlFor='endEra'>
						End era
						<select id='endEra' name='endEra' value={endEra ?? ''} onChange={handleInputChange}>
							<option value={Era.BCE}>{Era.BCE}</option>
							<option value={Era.CE}>{Era.CE}</option>
						</select>
					</label>
					<label htmlFor='endYear'>
						End year
						<input
							type='number'
							id='endYear'
							name='endYear'
							value={endYear ?? ''}
							onChange={handleInputChange}
						/>
					</label>
					<label htmlFor='endType'>
						End type
						<select id='endType' name='endType' value={endType ?? ''} onChange={handleInputChange}>
							<option value={Type.ACCURATE}>{Type.ACCURATE}</option>
							<option value={Type.INACCURATE}>{Type.INACCURATE}</option>
						</select>
					</label>
				</div>
				<div className={styles.row}>
					<label htmlFor='mainLinkName'>
						Main Link Name
						<input
							type='text'
							id='mainLinkName'
							name='mainLinkName'
							value={mainLinkName}
							onChange={handleInputChange}
						/>
					</label>
					<label htmlFor='mainLinkUrl'>
						Main Link URL
						<input
							type='text'
							id='mainLinkUrl'
							name='mainLinkUrl'
							value={mainLinkUrl}
							onChange={handleInputChange}
						/>
					</label>
				</div>
				<div className={styles.row}>
					<label htmlFor='labels'>
						Labels
						<select
							multiple
							id='labels'
							name='labels'
							value={labels ?? []}
							onChange={handleMultipleSelectChange}
						>
							{labelsList?.map((label) => (
								<option key={label.id} value={label.id}>
									{label.name}
								</option>
							))}
						</select>
					</label>
				</div>
				<div className={styles.row}>
					<label htmlFor='customBgColor'>
						Background color
						<input
							type='color'
							id='customBgColor'
							name='customBgColor'
							value={customBgColor}
							onChange={handleInputChange}
						/>
					</label>
					<label htmlFor='customColor'>
						Font color
						<input
							type='color'
							id='customColor'
							name='customColor'
							value={customColor}
							onChange={handleInputChange}
						/>
					</label>
				</div>
				<div className={styles.row}>
					<label htmlFor='customLineColor'>
						Outline Color
						<input
							type='color'
							id='customLineColor'
							name='customLineColor'
							value={customLineColor}
							onChange={handleInputChange}
						/>
					</label>
					<label htmlFor='customLineType'>
						Line Type
						<select
							id='customLineType'
							name='customLineType'
							value={customLineType}
							onChange={handleInputChange}
						>
							{borderStyles.map((style) => (
								<option key={style} value={style}>
									{style.charAt(0).toUpperCase() + style.slice(1)}
								</option>
							))}
						</select>
					</label>
				</div>
				<div className={styles.row}>
					<button type='button' onClick={() => clearForm(selectedEvent ? true : false)}>
						Clear
					</button>
					<button type='submit' disabled={!handleFormValidation(formData)}>
						Save
					</button>
				</div>
			</form>
		</div>
	)
}

export default EventForm
