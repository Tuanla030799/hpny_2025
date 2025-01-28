import { useContext } from "react"
import Context from "./Context"

export const useStore = () => {
  const context = useContext(Context)

  if (!context) {
    throw new Error('useStore must be used within a ContextProvider');
  }

  return context
}