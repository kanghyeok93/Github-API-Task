export const headers = () => {
  return {
    Accept: 'application/vnd.github.v3+json',
  };
};

export const objToQueryString = obj => {
  const keys = [];
  for (const key in obj) {
    keys.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
  }
  return keys.join('&');
};
