import { format } from "date-fns";

export const roundOff = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

export const formattedDate = (date) => format(date, "yyyy-MM-dd");
