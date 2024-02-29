"use client";
import { IInfo } from "@/lib/type";
import { FormAddInformationSchema } from "@/schemas";
import { createContext, useContext, useState } from "react";
import { z } from "zod";

type AppProviderProps = {
  children?: React.ReactNode;
};
const AppContext = createContext({
  data: {} as z.infer<typeof FormAddInformationSchema>,
  handleSetData: (values: z.infer<typeof FormAddInformationSchema>) => {},
});

const AppProvider = ({ children }: AppProviderProps) => {
  const [data, setData] = useState<z.infer<typeof FormAddInformationSchema>>({
  } as z.infer<typeof FormAddInformationSchema>);
  const handleSetData = (values: z.infer<typeof FormAddInformationSchema>) => {
    setData({ ...values });
  };
  return (
    <AppContext.Provider value={{ data, handleSetData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => {
  const appContext = useContext(AppContext);
  return appContext;
};

export default AppProvider;
