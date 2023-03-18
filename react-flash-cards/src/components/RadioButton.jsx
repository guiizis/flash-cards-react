import { getNewId } from "../services/idService";

export function RadioButton({children, name, id=getNewId(),buttonChecked=true, onButtonClick=null}) {
  
  function handleRadioButtonChange() {
    if(onButtonClick) {
      onButtonClick()
     }
  }
  return(
    <div className="flex flex-row items-center space-x-2">
      <input id={id} type="radio" name={name} checked={buttonChecked} onChange={handleRadioButtonChange}/>
      <label htmlFor={name} id={id}>{children}</label>
    </div>
  )
}