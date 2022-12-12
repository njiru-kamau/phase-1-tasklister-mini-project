
var input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('id', 'task');
document.body.appendChild(input);



var button = document.createElement('button');
button.innerHTML = 'Add Task';
button.setAttribute('id', 'addTask');
document.body.appendChild(button);



var taskList = document.createElement('ul');
taskList.setAttribute('id', 'taskList');
document.body.appendChild(taskList);