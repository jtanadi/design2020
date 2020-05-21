import fetch from "isomorphic-unfetch";

export const jsonFetcher = async (url: string) => {
  const response = await fetch(url);
  return await response.json();
};

export const textFetcher = async (url: string) => {
  const response = await fetch(url);
  return await response.text();
};
