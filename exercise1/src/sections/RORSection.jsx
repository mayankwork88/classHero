import { Stack } from "@mui/material";
import { ProfitCard, Loader, RORForm } from "../components";
import { useRORContext } from "../context/RORContext";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  width: { lg: "40%", md: "45%", sm: "60%", xs1: "95%", xs: "100%" },
  px: { xs1: 1, xs: 1 },
  p: 4,
  pt: 1,
  gap: 1,
};

const RORSection = () => {
  const { ror, loading } = useRORContext();

  // IF loading is true
  if (loading) {
    return <Loader />;
  }
  return (
    <Stack sx={containerStyle}>{!ror ? <RORForm /> : <ProfitCard />}</Stack>
  );
};

export default RORSection;
