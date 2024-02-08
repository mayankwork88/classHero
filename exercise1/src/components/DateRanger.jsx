import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { subBusinessDays, format } from "date-fns";
import { useEffect, useState, useRef } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function CustomDateRangePicker({
  selectedDate,
  setSelectedDate,
  size = "small",
}) {
  const [showInput, setShowInput] = useState(false);
  const calenderRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (calenderRef.current && !calenderRef.current.contains(e.target)) {
        setShowInput(false);
      }
    };
    document?.addEventListener("click", handleClickOutside, true);

    return () =>
      document?.removeEventListener("click", handleClickOutside, true);
  }, []);

  return (
    <Stack
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      <Stack direction="row" gap={1}>
        <TextField
          size={size}
          value={`${format(
            selectedDate[0]?.startDate,
            "MM/dd/yyyy"
          )} - ${format(selectedDate[0]?.endDate, "MM/dd/yyyy")}`}
          placeholder="MM/DD/YYYY"
          onClick={() => setShowInput((prev) => !prev)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CalendarMonthIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack
        ref={calenderRef}
        sx={{
          position: "absolute",
          top: "45px",
          left: {
            lg: "-8vw",
            md: "-8vw",
            sm: "-12vw",
            xs1: "-30vw",
            xs: "-45vw",
          },
          zIndex: "1000000",
        }}
      >
        {showInput ? (
          <DateRange
            className="calendarElement"
            onChange={(item) => setSelectedDate([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={true}
            months={1}
            maxDate={subBusinessDays(new Date(), 1)}
            direction="horizontal"
            scroll={{ enabled: false }}
            ranges={selectedDate}
          />
        ) : null}
      </Stack>
    </Stack>
  );
}
