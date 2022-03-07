
import { useState } from "react";
function Form({onSubmit}){
    const [inputText, setInputText] = useState("");
    function handleChangeInputText(e){
        setInputText(e.target.value);
        console.log(inputText);
    }
    return(
        <div> 
            <input type="text" value={inputText} placeholder='add ToDo list' onChange={(e)=>{
            handleChangeInputText(e);
        }} />

         <button onClick={()=>{
             onSubmit(inputText)
             setInputText("");
         }}>Add</button></div>
        
        
    )
}
export default Form;