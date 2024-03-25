function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
}

export function getMonthDays(month: number, year: number): number {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const monthIndex = month + 1;

    if (monthIndex == 2 && isLeapYear(year)) {
        return 29
    }

    return daysInMonth[month]
}

export function getMonthWeekDays(month: number, year: number): number[] {
    const firstDay = new Date(year, month - 1, 1).getDay()
    const lastday = new Date(year, month, 0).getDay()
    
    return [firstDay, lastday]
}

export function getMonthName(month: number): string {
    const date = new Date(Date.UTC(2000, month + 1, 1));    
    const monthName = date.toLocaleString('en-US', { month: 'long' });
  
    return monthName;
}

export function generateDays(firstDay: number, amountDays: number): string[] {
    let days = [];
    let amountIndex = 1;

    for (let x = 0; x < 5; x++) {
        for (let y = 1; y < 8; y++) {
            if (x === 0 && y < firstDay) {
                days.push("-");
            } else if (amountIndex <= amountDays) {
                days.push(`${amountIndex}`);
                amountIndex++;
            } else {
                break;
            }
        }
    }

    return days;
}