export const fetcher = async (endpoint: string) => {
  const res = await fetch(`https://api.unsplash.com/${endpoint}/?client_id=`);
  return res.json();
};
