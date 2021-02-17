function toggleButton(){
   const btn  = document.getElementById("btn");
   btn.disabled = false;
}
let addBtn = document.getElementById("btn");
let taskRow = document.getElementById('task-row');

addBtn.addEventListener("click", function() {
  let userValue = document.getElementById('add-text');
  if(userValue.value===null || userValue.value.trim()===''){
     const message = document.createElement("h1");
     message.innerText = " please enter your todo";
     taskRow.appendChild(message);
  }else{
  let myNote = '';
  myNote +=` <p>${userValue.value}</p>
  <button id="edit">edit</button> <button id="delete">delete</button> 
  `;
  const mainDiv = document.createElement('div');
  mainDiv.className = 'my-task';
  mainDiv.innerHTML = myNote;
  taskRow.appendChild(mainDiv);
  userValue.value = '';}
 });

 document.getElementById("task-row").addEventListener("click",function(event){
    const option = event.target.innerText;
   //  console.log(option);
    if(option==='delete'){  
      // event.target.parentNode.;
     event.target.parentNode.remove();
     setTimeout( function(){ document.getElementById("lblsuccess").style.display = "none"; } ,3000);	

    }
    if(option==='edit'){
    const editItem = event.target.parentNode.children[0].innerText;
    event.target.parentNode.remove()
   //  console.log(editItem);
     document.getElementById('add-text').value = editItem;
   // event.target.parentNode.children[0].innerText = editItem;

    }
 });
   
      
   
