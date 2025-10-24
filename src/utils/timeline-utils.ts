import { Era, ITimelineEvent } from '@/db/db.model'

export interface TimelineBounds {
	minYear: number
	minEra: Era
	maxYear: number
	maxEra: Era
}

/**
 * Converts a year and era to a numerical value for comparison
 * BCE years are negative, CE years are positive
 * @param year The year number
 * @param era The era (BCE or CE)
 * @returns A number representing the year in a continuous timeline
 */
function yearToNumber(year: number, era: Era): number {
	return era === Era.BCE ? -year : year
}

/**
 * Converts a numerical year back to year and era
 * @param numericYear The numeric year (negative for BCE, positive for CE)
 * @returns An object with year and era
 */
function numberToYearEra(numericYear: number): { year: number; era: Era } {
	if (numericYear < 0) {
		return { year: Math.abs(numericYear), era: Era.BCE }
	}
	return { year: numericYear, era: Era.CE }
}

/**
 * Calculates the minimum and maximum dates from a list of timeline events
 * Considers both start and end years/eras of each event
 * @param events Array of timeline events
 * @returns An object containing the min and max years with their eras, or null if no events
 */
export function getTimelineBounds(events: ITimelineEvent[]): TimelineBounds | null {
	if (!events || events.length === 0) {
		return null
	}

	// Convert all start and end dates to numeric values for comparison
	const allDates: number[] = []

	events.forEach((event) => {
		allDates.push(yearToNumber(event.startYear, event.startEra))
		allDates.push(yearToNumber(event.endYear, event.endEra))
	})

	// Find min and max numeric dates
	const minNumericDate = Math.min(...allDates)
	const maxNumericDate = Math.max(...allDates)

	// Convert back to year and era format
	const minDate = numberToYearEra(minNumericDate)
	const maxDate = numberToYearEra(maxNumericDate)

	return {
		minYear: minDate.year,
		minEra: minDate.era,
		maxYear: maxDate.year,
		maxEra: maxDate.era
	}
}
