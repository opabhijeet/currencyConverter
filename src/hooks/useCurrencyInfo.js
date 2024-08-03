import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
  const [currencyInfo, setCurrencyInfo] = useState({});
  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/d1138b8a478710694705cbff/latest/USD`)
    .then((res) => res.json())
    .then((res) => setCurrencyInfo(res.conversion_rates))
    .catch((err) => console.log(err));
  }, [currency]);
  return currencyInfo;
}
export default useCurrencyInfo;