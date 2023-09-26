export const setSearchParams = (key: string, value: string) => {
  const url = new URL(window.location.href);
  const searchParams = new URLSearchParams(url.search);

  searchParams.set(key, value);

  url.search = searchParams.toString();
  window.history.replaceState({}, '', url.toString());
};
