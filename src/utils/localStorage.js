export const setLocalStorage = (data, key) => {
  if (typeof data === 'string') {
    localStorage.setItem(key, data);
  }
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

export const setTokens = ({ refreshToken, token }) => {
  localStorage.setItem('tokens', JSON.stringify({ refreshToken, token }));
};

export const getTokens = () => JSON.parse(localStorage.getItem('tokens'));

export const deleteTokens = () => {
  localStorage.removeItem('tokens');
};
