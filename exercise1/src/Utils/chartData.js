export const chartData = (theme) => ({
  labels: [],
  datasets: [
    {
      type: "line",
      label: "Gold Prices",
      data: [],
      backgroundColor: [theme.palette.primary.main],
      borderColor: theme.palette.primary.main,
      borderWidth: 2,
    },
  ],
});
