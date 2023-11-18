import {  addFormHandler } from "./app/handler";
import { addForm } from "./core/selectors";

class App{



    listener(){
        addForm.addEventListener("submit",addFormHandler)



        
        
    }
 init(){
console.log("HEllo");
this.listener();
 }

}
export default App;