import { getArticles, getProducts } from "@/repositories";
import { useQuery } from "@tanstack/react-query";

export const getProductKey = () => ["products"];
export const getArticleKey = () => ["articles"];

export const useProducts = () => {
  const result = useQuery({
    queryKey: getProductKey(),
    queryFn: getProducts,
  });

  return result;
};

export const useArticles = () => {
  const result = useQuery({
    queryKey: getArticleKey(),
    queryFn: getArticles,
  });

  return result;
};
