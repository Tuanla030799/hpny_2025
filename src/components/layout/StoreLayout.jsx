'use client';

import { StoreProvider } from "../store";


const StoreLayout = ({ children }) => {
  return (
    <StoreProvider>
      {children}
    </StoreProvider>
  )
}

export default StoreLayout