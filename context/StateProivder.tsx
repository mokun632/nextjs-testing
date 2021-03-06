import { createContext, ReactNode, useContext, useState } from 'react'

const StateContext = createContext(
  {} as {
    toggle: boolean
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
  }
)

type Props = {
  children: ReactNode
}

const StateProivder: React.VFC<Props> = ({ children }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <StateContext.Provider value={{ toggle, setToggle }}>
      {children}
    </StateContext.Provider>
  )
}
export const useStateContext = () => useContext(StateContext)

export default StateProivder
