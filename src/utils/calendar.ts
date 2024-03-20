export function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
}

export function getMonthDays(month: number, year: number): number {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (month == 2 && isLeapYear(year)) {
        return 29
    }

    return daysInMonth[month - 1]
}

export function getMonthWeekDays(month: number, year: number): number[] {
    const firstDay = new Date(year, month - 1, 1).getDay()
    const lastday = new Date(year, month, 0).getDay()
    
    return [firstDay, lastday]
}