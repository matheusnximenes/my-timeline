import { Era, ITimelineEvent } from "@/db/db.model"

export const handleFormValidation = (formData: ITimelineEvent | null) => {
        if(!formData) {
            return false
        }
        const { startEra, endEra, startYear, endYear } = formData || {}

        // Both dates are BCE
        if (startEra === Era.BCE && endEra === Era.BCE) {
            // In BCE, larger numbers are earlier in time
            if (startYear < endYear) return false
        }

        // Both dates are CE
        if (startEra === Era.CE && endEra === Era.CE) {
            // In CE, smaller numbers are earlier in time
            if (startYear > endYear) return false
        }

        // Mixed eras (BCE to CE)
        if (startEra === Era.BCE && endEra === Era.CE) {
            // Any BCE to CE combination is valid
            return true
        }

        // Invalid era combination (CE to BCE)
        if (startEra === Era.CE && endEra === Era.BCE) {
            return false
        }

        // Validate that years are not 0
        if (startYear === 0 || endYear === 0) return false

        // Validate that required fields are filled
        if (!startYear || !endYear || !startEra || !endEra) return false

        return true
    }