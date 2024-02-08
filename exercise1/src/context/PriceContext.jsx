import { useState, createContext, useContext, useEffect } from "react";
import { subBusinessDays } from "date-fns";
import { getGoldPriceByDateRange } from "../apis/getGoldPriceByDateRange";
import { useTheme } from "@emotion/react";
import { chartData } from "../Utils/chartData";
import { toast } from "react-hot-toast";

const PriceContext = createContext(null);

export const PriceContextProvider = ({ children }) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(chartData(theme));
  const [selectedDate, setSelectedDate] = useState([
    {
      startDate: subBusinessDays(new Date(), 7),
      endDate: subBusinessDays(new Date(), 2),
      key: "selection",
    },
  ]);

  useEffect(() => {
    setLoading(true);
    const { startDate, endDate } = selectedDate[0];

    getGoldPriceByDateRange(startDate, endDate)
      .then((data) => {
        setUserData((prev) => ({
          ...prev,
          labels: data?.map((ele) => ele?.data),
          datasets: [
            { ...prev.datasets[0], data: data?.map((ele) => ele?.cena) },
          ],
        }));
      })
      .catch((err) => {
        toast.error("Failed to fetch Gold prices : " + err.message);
      })
      .finally(() => setLoading(false));
  }, [selectedDate]);

  return (
    <PriceContext.Provider
      value={{ loading, selectedDate, setSelectedDate, userData }}
    >
      {children}
    </PriceContext.Provider>
  );
};

export const usePriceContext = () => useContext(PriceContext);
