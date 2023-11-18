import { addForm, btnAdd, listCount, listGroup, textInput } from "../core/selectors";
import { createList, listCounter } from "./function";


export const addFormHandler= async(event) => {
     event.preventDefault();
     const formData=new FormData(addForm);
// console.log(formData.get("textInput"));
textInput.disabled=true;
btnAdd.disabled=true;
btnAdd.innerText="...LOADING"






const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "ToDoList":formData.get("textInput")
});

const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,

};


const req=await fetch("http://localhost:5174/api/todo",requestOptions)
// fetch("http://localhost:5173/api/todo", requestOptions)
const data=await req.json()
// console.log(data);




listGroup.append (createList(textInput.value));

listCount.innerText= listCounter();
textInput.value=null;
textInput.disabled=false;
btnAdd.disabled=false;



btnAdd.innerHTML=` <svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke-width="1.5"
stroke="currentColor"
class="w-4 h-4"
>
<path
  stroke-linecap="round"
  stroke-linejoin="round"
  d="M12 4.5v15m7.5-7.5h-15"
/>
</svg>`


// fetch("http://localhost:5174/api/todo", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
addForm.reset();
}
export const delBtn=() => {
  
  
}








