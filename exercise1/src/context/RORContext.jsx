import { subBusinessDays } from "date-fns";
import { createContext, useContext, useState } from "react";
import useGetROR from "../hooks/getROR";
import { getGoldPriceByDateRange } from "../apis/getGoldPriceByDateRange";
import { toast } from "react-hot-toast";

const RORContext = createContext();

const dateInitialState = [
  {
    startDate: subBusinessDays(new Date(), 7),
    endDate: subBusinessDays(new Date(), 2),
    key: "selection",
  },
];

export const RORContextProvider = ({ children }) => {
  const [investment, setInvestment] = useState(0);
  const [loading, setLoading] = useState(false);
  const [ror, setRor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(dateInitialState);
  const { calculateRoR } = useGetROR();

  const fetchData = async (startDate, endDate) => {
    try {
      const data = await getGoldPriceByDateRange(startDate, endDate);
      return data;
    } catch (err) {
      toast.error("Failed to fetch Gold Data : " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCalculateROR = async () => {
    if (investment) {
      setLoading(true);
      const { startDate, endDate } = selectedDate[0];
      const data = await fetchData(startDate, endDate);
      const ror = calculateRoR(data, investment);
      setRor({ ...ror, investment, startDate, endDate });
    } else {
      toast.error("Please enter the investment value");
    }
  };

  const handleResetROR = () => {
    setRor(null);
    setInvestment(0);
    setSelectedDate(dateInitialState);
  };

  return (
    <RORContext.Provider
      value={{
        ror,
        loading,
        handleResetROR,
        selectedDate,
        setSelectedDate,
        setInvestment,
        investment,
        handleCalculateROR,
      }}
    >
      {children}
    </RORContext.Provider>
  );
};

export const useRORContext = () => useContext(RORContext);
