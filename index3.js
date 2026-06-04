 let task=document.querySelector("#task");
 let inps=document.querySelector("#inps");
 let btn=document.querySelector("#btn");
 



 btn.addEventListener("click",function(e){
    if(task.value!==""){
     let newtask=document.createElement("li");
     let del=document.createElement("button");
     let newdiv=document.createElement("div");
     newdiv.textContent=task.value;
     del.textContent="Remove";
     del.classList.add("btn");
     newtask.classList.add("li");
     newdiv.classList.add("newdiv");
     newtask.appendChild(newdiv);
     newdiv.appendChild(del);
     inps.appendChild(newtask);
     newdiv.style="text-transform: capitalize;"
     task.value="";

     del.addEventListener("click",function(){
        newtask.remove();
        del.remove();
     })
    }else{
        alert("please write the task");
    }
 })



