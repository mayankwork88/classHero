import { Stack } from "@mui/material";
import { LineChart, CustomDateRangePicker, Loader } from "../components";
import { usePriceContext } from "../context/PriceContext";
import { PrimaryDarkHeading, PrimaryHeading } from "../ui/Typography";
import { formattedDate } from "../Utils/utils";

const GoldPricesSection = () => {
  const { selectedDate, setSelectedDate, userData, loading } =
    usePriceContext();
  if (loading) {
    return <Loader />;
  }
  return (
    <Stack width="100%" height="78vh">
      <Stack direction={"row"} justifyContent={"space-between"} gap={1}>
        <PrimaryDarkHeading>
          Showing Data from{" "}
          <PrimaryHeading>
            {formattedDate(selectedDate[0]?.startDate)}
          </PrimaryHeading>{" "}
          to{" "}
          <PrimaryHeading>
            {formattedDate(selectedDate[0]?.endDate)}
          </PrimaryHeading>
        </PrimaryDarkHeading>
        <CustomDateRangePicker
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </Stack>
      <LineChart chartData={userData} />
    </Stack>
  );
};

export default GoldPricesSection;
