import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Typography } from "@mui/material";

const CustomToggleButton = ({ onChange, defaultValue }) => {
  const [alignment, setAlignment] = React.useState(defaultValue);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    onChange(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton
        value="price"
        sx={{ display: "flex", flexDirection: "row", gap: 1 }}
      >
        <TrendingUpIcon /> <Typography>Gold Price</Typography>
      </ToggleButton>
      <ToggleButton
        value="ror"
        sx={{ display: "flex", flexDirection: "row", gap: 1 }}
      >
        <MonetizationOnIcon /> <Typography>Rate Of return</Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default CustomToggleButton;
