import { Button, Stack, TextField, InputAdornment } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { CustomDateRangePicker, ConfirmationText } from ".";
import { useRORContext } from "../context/RORContext";

const RORForm = () => {
  const {
    selectedDate,
    setSelectedDate,
    setInvestment,
    investment,
    handleCalculateROR,
  } = useRORContext();

  const handleInvestmentChange = (e) => {
    setInvestment(e.target.value);
  };

  return (
    <form>
      <Stack direction={"row"} justifyContent={"space-between"} gap={1}>
        <TextField
          required
          type="number"
          name="investment"
          placeholder="Investment Amount"
          onChange={handleInvestmentChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MonetizationOnIcon />
              </InputAdornment>
            ),
          }}
        />
        <CustomDateRangePicker
          size={"large"}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </Stack>
      <ConfirmationText amount={investment} date={selectedDate} />
      <Button
        sx={{ flexGrow: 1, width: "100%" }}
        variant="contained"
        type="submit"
        onClick={handleCalculateROR}
      >
        Calculate
      </Button>
    </form>
  );
};

export default RORForm;
