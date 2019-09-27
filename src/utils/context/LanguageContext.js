import React, { createContext, useState } from "react"

const LanguageContext = createContext([{}, () => {}])

const LanguageProvider = props => {
  const [lang, setLang] = useState("EN")

  return (
    <LanguageContext.Provider value={[lang, setLang]}>
      {props.children}
    </LanguageContext.Provider>
  )
}

export { LanguageContext, LanguageProvider }
