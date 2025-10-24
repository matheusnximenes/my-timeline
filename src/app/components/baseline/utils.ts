import { Era } from '@/db/db.model'

export const generateGapYears = (
	minYear: number,
	maxYear: number,
	minEra: Era,
	maxEra: Era,
	step: number = 30
): Array<{ year: number; era: Era }> => {
	const years: Array<{ year: number; era: Era }> = []

	// Extend the range by one step on both ends
	const extendedMinYear = minYear + step
	const extendedMaxYear = maxYear + step

	// Always start with year 0 CE as the baseline
	years.push({ year: 0, era: Era.CE })

	// Handle BCE to CE transition or spans both eras
	if (minEra === Era.BCE && maxEra === Era.CE) {
		// Generate BCE years (counting backward from 0 with steps)
		for (let year = step; year <= extendedMinYear; year += step) {
			years.unshift({ year, era: Era.BCE })
		}
		// Generate CE years (counting forward from 0 with steps)
		for (let year = step; year <= extendedMaxYear; year += step) {
			years.push({ year, era: Era.CE })
		}
	} else if (minEra === Era.BCE && maxEra === Era.BCE) {
		// Only BCE years - generate backward from 0
		for (let year = step; year <= extendedMaxYear; year += step) {
			years.unshift({ year, era: Era.BCE })
		}
	} else if (minEra === Era.CE && maxEra === Era.CE) {
		// Only CE years - generate forward from 0
		for (let year = step; year <= extendedMaxYear; year += step) {
			years.push({ year, era: Era.CE })
		}
	}

	// Sort the years by era and year chronologically
	years.sort((a, b) => {
		// BCE comes before CE chronologically
		if (a.era !== b.era) {
			return a.era === Era.BCE ? -1 : 1
		}

		// Within the same era
		if (a.era === Era.BCE) {
			// BCE: higher numbers come first (e.g., 100 BCE before 50 BCE)
			return b.year - a.year
		} else {
			// CE: lower numbers come first (e.g., 50 CE before 100 CE)
			return a.year - b.year
		}
	})

	return years
}
