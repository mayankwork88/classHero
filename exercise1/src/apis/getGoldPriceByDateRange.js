import { format } from "date-fns";

const formatedDate = (date) => format(date, "yyyy-MM-dd");

const BASE_URL = "http://api.nbp.pl/api/cenyzlota";

export const getGoldPriceByDateRange = async (start, end) => {
  try {
    const API_URL = `${BASE_URL}/${formatedDate(start)}/${formatedDate(end)}`;
    const res = await fetch(API_URL);
    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
};
