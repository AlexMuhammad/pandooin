export const getProducts = async (): Promise<any> => {    
    const response = await fetch(process.env.NEXT_PUBLIC_PRODUCT_API as string);  
    if (!response.ok) {
        throw new Error('Network response was not ok');
      }  
    return await response.json();
};

export const getArticles = async (): Promise<any> => {
  const response = await fetch(process.env.NEXT_PUBLIC_ARTICLE_API as string);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};
