export function Button({children: description="descrição do botão", onButtonClick = null}) {
  
  function handleButtonClick() {
    if(onButtonClick) {
      onButtonClick()
    }
  }

  return <button className='bg-gray-200 p-2 rounded-md m-2' onClick={handleButtonClick}>{description}</button>
}
