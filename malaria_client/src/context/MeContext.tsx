import { createContext, ReactNode, useContext } from "react";
import { useQuery, RefetchOptions, RefetchQueryFilters } from "react-query";
import { getMe } from "../api-core";

export interface Me {
  _id: string;
  email: string;
  last_name: string;
  first_name: string;
}

const MeContext = createContext<{
  user: Me;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => any;
  // @ts-ignore
}>(null);

function MeContextProvider({ children }: { children: ReactNode }) {
  const { data, isLoading, refetch } = useQuery("me", getMe);

  return (
    <MeContext.Provider value={{ user: data?.data, refetch }}>
      {isLoading ? <h1>loading...</h1> : children}
    </MeContext.Provider>
  );
}

const useMe = () => useContext(MeContext);

export { MeContextProvider, useMe };
