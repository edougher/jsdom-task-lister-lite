
//document.addEventListener("DOMContentLoaded", () => {
//  
//
//});
function main() {
  createNewTask()
}

function createNewTask() {
  const newForm = document.getElementById("create-task-form");
  newForm.addEventListener('submit', function(e) {
  e.preventDefault()
  console.log("helloworld"); 
    let ul = document.getElementById('tasks');
    let li = document.createElement('li');
    let inputText = document.getElementById('new-task-description');
    li.innerHTML = inputText.value;
    ul.appendChild(li);
  }); 
  
}

main()




