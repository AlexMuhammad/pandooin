export const getProducts = async (): Promise<any> => {
  const response = await fetch(
    "https://pandooin.com/api/zamrood/itinerary?highlight=true"
  )
  .then((res) => res.json() as Promise<any>);

  console.log("response", response)

  return response;
};

export const getArticles = async (): Promise<any> => {
  const response = await fetch("https://pandooin.com/api/zamrood/article");
  return response.json();
};
