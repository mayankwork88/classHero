import { useState } from "react";
import { Stack } from "@mui/material";
import { CustomToggleButton, ShowToast } from "./components";
import GoldPricesSection from "./sections/GoldPricesSection";
import RORSection from "./sections/RORSection";

const App = () => {
  const [selectedSection, setSelectedSection] = useState("price");

  return (
    <Stack p={2} pb={6} direction={"column"} alignItems={"center"} gap={2}>
      <CustomToggleButton
        defaultValue={selectedSection}
        onChange={(val) => setSelectedSection(val)}
      />
      {selectedSection === "price" ? <GoldPricesSection /> : <RORSection />}
      <ShowToast />
    </Stack>
  );
};

export default App;
