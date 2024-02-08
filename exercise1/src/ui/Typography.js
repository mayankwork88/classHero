import { styled, Typography } from "@mui/material";

export const PrimaryDarkHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.1rem",
  color: theme.palette.dark.main,
}));

export const PrimaryDarkHeadingSmLight = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "0.8rem",
  color: theme.palette.dark.light,
}));

export const PrimaryDarkHeadingSmDark = styled("span")(({ theme }) => ({
  fontWeight: 600,
  fontSize: "0.8rem",
  color: theme.palette.dark.main,
}));

export const PrimaryHeading = styled("span")(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.1rem",
  color: theme.palette.primary.main,
}));

export const PrimaryHeadingMd = styled("span")(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.primary.main,
}));
