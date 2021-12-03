import AsyncStorage from '@react-native-async-storage/async-storage';

// check if value is empty
export const isEmpty = data => {
  return (
    typeof data === 'undefined' ||
    data === null ||
    data === '' ||
    data === 'NaN'
  );
};

// convert numbers to thousands K
export function nFormatter(num, digits) {
  const si = [
    {value: 1, symbol: ''},
    {value: 1e3, symbol: 'k'},
    {value: 1e6, symbol: 'M'},
    {value: 1e9, symbol: 'G'},
    {value: 1e12, symbol: 'T'},
    {value: 1e15, symbol: 'P'},
    {value: 1e18, symbol: 'E'},
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
}

// get AsyncStorage
export const getData = async key => await AsyncStorage.getItem(key);

// save AsyncStorage
export const storeData = async (key, value) => {
  return await AsyncStorage.setItem(key, value);
};
