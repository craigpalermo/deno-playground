import differenceInCalendarDays from "https://deno.land/x/date_fns/differenceInCalendarDays/index.js";
import { moment } from "https://deno.land/x/moment/moment.ts";

/**
 * Returns the number of days from today until a given future date
 * @param targetDate
 */
function until(targetDate: string): number {
  // TODO refactor to only use moment
  const targetDateObj = moment(targetDate, ["YYYYMMDD", "MMDDYYYY"], false);
  const today: Date = new Date();
  // TODO error handling for targetDate before today
  return -1 * differenceInCalendarDays(today, targetDateObj.toDate());
}

// Use first argument as input
const input: string = Deno.args[0];

if (input) {
  console.log(`${until(input)} days until ${input}`);
} else {
  console.log('You need to enter a date, e.g. "2025-03-12"');
}
