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
	timelineBounds: ITimelineBounds,
	startEra: Era,
	startYear: number,
	step: number
) => {
	const timelineStartYear = timelineBounds.minYear
	const timelineStartEra = timelineBounds.minEra

	// Convert years to a comparable format (BC years are negative)
	const timelineStart = timelineStartEra === Era.BCE ? -timelineStartYear : timelineStartYear
	const eventStart = startEra === Era.BCE ? -startYear : startYear

	return Math.abs(eventStart - timelineStart) + step
}
