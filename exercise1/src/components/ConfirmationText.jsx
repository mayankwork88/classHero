import { Stack } from "@mui/material";
import { formattedDate } from "../Utils/utils";
import {
  PrimaryDarkHeadingSmLight,
  PrimaryDarkHeadingSmDark,
} from "../ui/Typography";

const ConfirmationText = ({ amount, date }) => {
  return (
    <Stack direction={"row"} gap={2} my={1}>
      {amount ? (
        <PrimaryDarkHeadingSmLight>
          Entered Amount:
          <PrimaryDarkHeadingSmDark> ${amount}</PrimaryDarkHeadingSmDark>
        </PrimaryDarkHeadingSmLight>
      ) : null}

      {date[0]?.startDate ? (
        <PrimaryDarkHeadingSmLight>
          Selected Date:{" "}
          <PrimaryDarkHeadingSmDark>
            {" "}
            {formattedDate(date[0]?.startDate)} -{" "}
            {formattedDate(date[0]?.endDate)}
          </PrimaryDarkHeadingSmDark>
        </PrimaryDarkHeadingSmLight>
      ) : null}
    </Stack>
  );
};

export default ConfirmationText;
