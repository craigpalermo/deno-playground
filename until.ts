import differenceInCalendarDays from 'https://deno.land/x/date_fns/differenceInCalendarDays/index.js'
import { parseDate } from 'https://deno.land/std/datetime/mod.ts'

// TODO get input from terminal
const input: string = '2020-11-03'

/**
 * Returns
 * @param targetDate
 */
function until(targetDate: string): number {
    // TODO support more date formats
    const targetDateObj = parseDate(targetDate, "yyyy-mm-dd")
    const today: Date = new Date()
    // TODO error handling for targetDate before today
    return -1 * differenceInCalendarDays(today, targetDateObj)
}

console.log(() => {
    return `${until(input)} days until ${input}`
})
