import * as React from 'react'

export const IntroDataContext = React.createContext()

export default IntroDataProvider = ({children}) => {
  const [ isIntroDataComplete, setIsIntroDataComplete ] = React.useState(false);

  return (
    <IntroDataContext.Provider value={{ isIntroDataComplete, setIsIntroDataComplete }}>
      {children}
    </IntroDataContext.Provider>
  )
}