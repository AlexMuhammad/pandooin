"use client";

import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { queryClientConfig } from "@/libs/queryClient";

const Providers = ({ children }: React.PropsWithChildren) => {
  const [queryClient] = React.useState(
    () => new QueryClient(queryClientConfig)
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Providers;
