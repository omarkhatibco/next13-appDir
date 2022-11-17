export const fetcher = async (endpoint: string) => {
  const res = await fetch(
    `https://api.unsplash.com/${endpoint}/?client_id=AYc73P7xKnh9EfUcAxL9RGkMTtwYbLz31jFxyEsraj4`,
  );
  return res.json();
};
