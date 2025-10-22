import { DateInfo, Era, TimelineEvent } from "@/types/timelineEvents";

export const getIntermediaryYearsEC = (
  currentYear: number,
  intermediaryYear: number
): number[] => {
  const years: number[] = [];

  // Start from 0 and add every 100 years up to currentYear
  for (
    let year = intermediaryYear;
    year <= currentYear;
    year += intermediaryYear
  ) {
    years.push(year);
  }

  // Add current year if it's not already included (when currentYear % 100 !== 0)
  if (currentYear % intermediaryYear !== 0) {
    years.push(currentYear);
  }

  return years;
};

export const getIntermediaryYearsBC = (
  latestYear: number,
  intermediaryYear: number
): number[] => {
  const years: number[] = [];

  // Start from 0 and add every 100 years up to currentYear
  for (let year = latestYear; year >= 0; year -= intermediaryYear) {
    years.push(year);
  }

  // Add current year if it's not already included (when currentYear % 100 !== 0)
  if (latestYear % intermediaryYear !== 0) {
    years.push(latestYear);
  }

  return years;
};

export const getHighestBCOrLowestEC = (events: TimelineEvent[]): DateInfo => {
  // Find all BC and EC DateInfo objects
  const bcDates: DateInfo[] = [];
  const ecDates: DateInfo[] = [];

  events.forEach((event) => {
    if (event.start.era === Era.BC) {
      bcDates.push(event.start);
    }
    if (event.end && event.end.era === Era.BC) {
      bcDates.push(event.end);
    }
    if (event.start.era === Era.EC) {
      ecDates.push(event.start);
    }
    if (event.end && event.end.era === Era.EC) {
      ecDates.push(event.end);
    }
  });

  // If there are BC dates, return the one with highest year (closest to 0)
  if (bcDates.length > 0) {
    return bcDates.reduce((highest, current) =>
      current.year > highest.year ? current : highest
    );
  }

  // If no BC dates, return the EC date with lowest year
  if (ecDates.length > 0) {
    return ecDates.reduce((lowest, current) =>
      current.year < lowest.year ? current : lowest
    );
  }

  // Fallback if no events found - return year 0 EC with accurate type
  return {
    year: 0,
    era: Era.EC,
    type: events[0]?.start?.type || Era.BC,
  };
};

export const getAllLabels = (data: TimelineEvent[]) => {
  const labels = new Set<string>();

  data.forEach((item) => {
    if (item.labels && Array.isArray(item.labels)) {
      item.labels.forEach((label) => labels.add(label));
    }
  });

  return Array.from(labels) as string[];
};

export const capitalizeFirstLetter = (val: string) => {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
};
