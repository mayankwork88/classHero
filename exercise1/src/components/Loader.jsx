import { Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const styles = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  inset: 0,
  background: "#fff",
};
const Loader = () => {
  return (
    <Stack sx={styles}>
      <CircularProgress size={60} />
    </Stack>
  );
};

export default Loader;
