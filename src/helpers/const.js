export const API = "https://api.myairbaby.net/";

export const ADMIN = "admin@admin.com";

export const getTokens = () => {
  const tokens = JSON.parse(localStorage.getItem("tokens"));
  const Authorization = `Bearer ${tokens.access}`;
  const config = {
    headers: {
      Authorization,
    },
  };
  return config;
};
