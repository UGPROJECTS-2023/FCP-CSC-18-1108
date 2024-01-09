import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import "../styles/index.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { MeContextProvider } from "../context/MeContext";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MeContextProvider>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </MeContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
