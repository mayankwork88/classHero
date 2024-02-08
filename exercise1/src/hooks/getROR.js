const useGetROR = () => {
  const calculateRoR = (data, investment) => {
    if (data.length < 2 || investment <= 0) {
      return 0;
    }
    let maxReturn = 0;
    let minPrice = data[0].cena;
    let buyingDate = data[0].data;
    let sellingDate = data[1].data;

    for (let i = 1; i < data.length; i++) {
      const currentPrice = data[i].cena;
      const returns = currentPrice - minPrice;

      if (returns > maxReturn && returns <= investment) {
        maxReturn = returns;
        sellingDate = data[i].data;
      }

      if (currentPrice < minPrice) {
        minPrice = currentPrice;
        buyingDate = data[i].data;
      }
    }
    return { maxReturn, buyingDate, sellingDate };
  };
  return { calculateRoR };
};

export default useGetROR;
