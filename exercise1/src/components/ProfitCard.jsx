import { useTheme } from "@emotion/react";
import { Stack, Box, Button } from "@mui/material";
import { useRORContext } from "../context/RORContext";
import { formattedDate } from "../Utils/utils";
import { PrimaryHeading, PrimaryHeadingMd } from "../ui/Typography";
import { roundOff } from "../Utils/utils";

const ProfitCard = () => {
  const { ror, handleResetROR } = useRORContext();
  const theme = useTheme();

  const getHeadingSection = (label, value) => (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <PrimaryHeadingMd sx={{ color: "#fff" }}>{label}</PrimaryHeadingMd>
      <PrimaryHeading sx={{ color: "#F3F8FF" }}>{value}</PrimaryHeading>
    </Box>
  );

  return (
    <Stack
      sx={{ background: theme.palette.primary.main, borderRadius: 1, p: 2 }}
    >
      {getHeadingSection("Invested Amount", `$ ${ror?.investment}`)}
      {getHeadingSection(
        "Selected Date",
        `${formattedDate(ror?.startDate)} - ${formattedDate(ror?.endDate)}`
      )}
      {getHeadingSection("Max Profit", `$ ${roundOff(ror?.maxReturn)}`)}
      {getHeadingSection("Buying Date", ror?.buyingDate)}
      {getHeadingSection("Selling Date", ror?.sellingDate)}
      <Button
        variant="contained"
        sx={{
          background: theme.palette.primary.contrastText,
          color: theme.palette.primary.main,
          mt: 2,
        }}
        onClick={handleResetROR}
      >
        Do it Again
      </Button>
    </Stack>
  );
};

export default ProfitCard;
