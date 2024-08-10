import Home from "@/components/pages/home";
import { getQueryClient } from "@/libs/queryClient";
import { getArticleKey, getProductKey } from "@/queries";
import { getArticles, getProducts } from "@/repositories";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function HomePage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: getProductKey(),
    queryFn: getProducts,
  });

  await queryClient.prefetchQuery({
    queryKey: getArticleKey(),
    queryFn: getArticles,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home />
    </HydrationBoundary>
  );
}
