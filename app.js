const input = document.querySelector('input');
const task = document.querySelector('#submit')
const ul = document.getElementById('task-list');
const form = document.querySelector('form');

/* 
*/
function createLi (text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text;
    li.appendChild(span);

}


/* When you input value and click 'add task', 
a li is created and the task is added to the ul
*/

form.addEventListener ('click', (e) => {
    e.preventDefault();
    const text = input.value;
    input.value = "";
    const li = createLi(text);
    ul.appendChild(li);
})