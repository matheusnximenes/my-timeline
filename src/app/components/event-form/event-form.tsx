'use client'

import { db, Era, ITimelineEvent, Type } from '@/db/db.model'
import { useState } from 'react'
import styles from './event-form.module.scss'

interface IFormProps {
	onClose: () => void
	selectedEvent: ITimelineEvent | null
	labelsOptions: string[]
}

const initialFormData = {
	order: 0,
	title: '',
	description: '',
	startYear: 0,
	startType: Type.ACCURATE as Type,
	startEra: Era.BC as Era,
	endYear: 0,
	endType: Type.ACCURATE as Type,
	endEra: Era.BC as Era,
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

const Form = ({ onClose, selectedEvent, labelsOptions }: IFormProps) => {
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

	const handleValidForm = () => {
		if (startEra === Era.BC) {
			return startYear > endYear
		}

		if (startEra === Era.EC) {
			return startYear < endYear
		}
	}

	return (
		<div className={styles.formContainer}>
			<h2>Add Event</h2>
			<form onSubmit={handleForm}>
				<div className={styles.row}>
					<label htmlFor='title'>
						Title:
						<input type='text' id='title' name='title' value={title} onChange={handleInputChange} />
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
							onChange={handleInputChange}
						/>
					</label>
				</div>
				<div className={styles.row}>
					<label htmlFor='isLandMark'>
						Is Landmark:
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
						Main Image Name:
						<input
							type='text'
							id='mainImgName'
							name='mainImgName'
							value={mainImgName}
							onChange={handleInputChange}
						/>
					</label>
					<label htmlFor='mainImgUrl'>
						Main Image URL:
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
						Order:
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
						Start era:
						<select
							id='startEra'
							name='startEra'
							value={startEra ?? ''}
							onChange={handleInputChange}
						>
							<option value={Era.BC}>{Era.BC}</option>
							<option value={Era.EC}>{Era.EC}</option>
						</select>
					</label>
					<label htmlFor='startYear'>
						Start year:
						<input
							type='number'
							id='startYear'
							name='startYear'
							value={startYear ?? ''}
							onChange={handleInputChange}
						/>
					</label>
					<label htmlFor='startType'>
						Start type:
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
						End era:
						<select id='endEra' name='endEra' value={endEra ?? ''} onChange={handleInputChange}>
							<option value={Era.BC}>{Era.BC}</option>
							<option value={Era.EC}>{Era.EC}</option>
						</select>
					</label>
					<label htmlFor='endYear'>
						End year:
						<input
							type='number'
							id='endYear'
							name='endYear'
							value={endYear ?? ''}
							onChange={handleInputChange}
						/>
					</label>
					<label htmlFor='endType'>
						End type:
						<select id='endType' name='endType' value={endType ?? ''} onChange={handleInputChange}>
							<option value={Type.ACCURATE}>{Type.ACCURATE}</option>
							<option value={Type.INACCURATE}>{Type.INACCURATE}</option>
						</select>
					</label>
				</div>
				<div className={styles.row}>
					<label htmlFor='mainLinkName'>
						Main Link Name:
						<input
							type='text'
							id='mainLinkName'
							name='mainLinkName'
							value={mainLinkName}
							onChange={handleInputChange}
						/>
					</label>
					<label htmlFor='mainLinkUrl'>
						Main Link URL:
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
						Labels:
						<select
							multiple
							id='labels'
							name='labels'
							value={labels ?? []}
							onChange={handleMultipleSelectChange}
						>
							{labelsOptions.map((label) => (
								<option key={label} value={label}>
									{label}
								</option>
							))}
						</select>
					</label>
				</div>
				<div className={styles.row}>
					<label htmlFor='customBgColor'>
						Background color:
						<input
							type='text'
							id='customBgColor'
							name='customBgColor'
							value={customBgColor}
							onChange={handleInputChange}
						/>
					</label>
					<label htmlFor='customColor'>
						Font color:
						<input
							type='text'
							id='customColor'
							name='customColor'
							value={customColor}
							onChange={handleInputChange}
						/>
					</label>
				</div>
				<div className={styles.row}>
					<label htmlFor='customLineColor'>
						Outline Color:
						<input
							type='text'
							id='customLineColor'
							name='customLineColor'
							value={customLineColor}
							onChange={handleInputChange}
						/>
					</label>
					<label htmlFor='customLineType'>
						Line Type:
						<input
							type='text'
							id='customLineType'
							name='customLineType'
							value={customLineType}
							onChange={handleInputChange}
						/>
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
