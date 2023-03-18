import { useEffect, useState } from "react"

export function FlashCard({title='titulo', description='descrição', showFlashCardTitle}) {
  const [showTitle, setShowTitle] = useState(showFlashCardTitle)
  const fontSizeClassName = showTitle ? 'text-xl':'text-sm' 

  useEffect(()=>{
    setShowTitle(showFlashCardTitle)
  },[showFlashCardTitle])

  function handleShowTilte() {
    setShowTitle(currentShowTitle => !currentShowTitle)
  }

  return(
    <div className={
      `shadow-lg p-2 bg-blue w-80 h-48 
      m-2
      flex flex-row items-center 
      justify-center 
      font-semibold 
      ${fontSizeClassName}
      cursor-pointer
      `}
      onClick={handleShowTilte}
      >
      {showTitle ? title: description}</div>
  )
}