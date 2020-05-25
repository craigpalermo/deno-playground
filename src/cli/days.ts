import differenceInCalendarDays from "https://deno.land/x/date_fns/differenceInCalendarDays/index.js";
import { moment } from "https://deno.land/x/moment/moment.ts";

/**
 * Returns the number of days from today days a given future date
 *
 * Usage:
 *   # To get the days until Christmas 2026
 *   days "2026.12.25"
 *
 * @param targetDate
 */
function until(targetDate: string): number {
  const targetDateObj = moment(targetDate, ["YYYYMMDD", "MMDDYYYY"], false);
  const today: Date = new Date();
  // TODO error handling for targetDate before today
  return -1 * differenceInCalendarDays(today, targetDateObj.toDate());
}

// TODO add help command to list out available commands

// Use first argument as input
const command: string = Deno.args[0];
const dateInput: string = Deno.args[1];

if (dateInput && command) {
  let processor;

  if (command === "until") {
    processor = until;
  }

  if (typeof processor === "function") {
    console.log(`${processor(dateInput)} days until ${dateInput}`);
  } else {
    console.log(`You need to enter a command, e.g. "until 2025-03-12"`);
  }
} else {
  console.log('You need to enter a date, e.g. "until 2025-03-12"');
}
