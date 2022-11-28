import { createContext, useState } from "react";

export const PurchaseContext = createContext({});

export function PurchaseContextProvider({ children }) {
  const [purchasedata, setPurchasedata] = useState([]);

  return (
    <PurchaseContext.Provider value={{ purchasedata, setPurchasedata }}>
      {children}
    </PurchaseContext.Provider>
  );
}
