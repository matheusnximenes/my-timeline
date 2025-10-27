import { Era } from '@/db/db.model'
import { ITimelineBounds } from './event-element'

export const getDistance = (
	startYear: number,
	endYear: number,
	startEra: string,
	endEra: string
) => {
	const adjustedStartYear = startEra === Era.BCE ? -startYear : startYear
	const adjustedEndYear = endEra === Era.BCE ? -endYear : endYear
	return Math.abs(adjustedEndYear - adjustedStartYear)
}

export const getDistanceFromStart = (
	years: {
		year: number
		era: Era
	}[],
	startEra: Era,
	startYear: number
) => {
	const initialYear = years[0] || {}
	const timelineStartYear = initialYear.year
	const timelineStartEra = initialYear.era

	// Convert years to a comparable format (BC years are negative)
	const timelineStart = timelineStartEra === Era.BCE ? -timelineStartYear : timelineStartYear
	const eventStart = startEra === Era.BCE ? -startYear : startYear

	return Math.abs(eventStart - timelineStart)
}
