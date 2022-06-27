const form = document.getElementById('form');
const input = form.querySelector('input');
const ul = document.getElementById('task-list');


/*Separating code into functions to make it more modular 
Breaking 'submit' event 
Write function to take the text inputted and return text as list item
*/

function createLI(text) {
    // creates list item from inputted text
    const li = document.createElement('li');
    li.textContent = text;
    
    // adds checkbox to list item 
    const label = document.createElement('label');
    label.textContent = 'Completed';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    li.appendChild(label);

    //add 'edit button' to list items
    const editButton = document.createElement('button');
    editButton.textContent = 'edit';
    li.appendChild(editButton);

    //adds 'remove button' to list items
    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove';
    li.appendChild(removeButton);

    //return list item to handler
    return li;

}




/* forms have a special event called 'submit' and
will fire both for clicking and pressing 'enter'*/

form.addEventListener ('submit', (e) => {
    // prevents refreshing page because submit behaviors refresh
    e.preventDefault();
    const text = input.value;
    input.value='';

    //storing modular function into li to call function
    const li = createLI(text);
    // adds created list item to ul
    ul.appendChild(li);
})

/* event bubbling to change color of list item all at once
adding event handler to ul tag to bubble up when checkbox's state changes
'Change Event Handler'
if checkbox is checked = true
unchecked = false
*/

ul.addEventListener ('change', (e) => {
    const checkbox = e.target;
    const checked = checkbox.checked;
    //using parentNode 2x to traverse up to label and then up to 
    const listItem = checkbox.parentNode.parentNode;

    //change class name when checked to change styling
    //if it is checked, add className
    if (checked) {
        listItem.className = 'responded';
    } else {
        listItem.className = '';
    }
})

ul.addEventListener ('click', (e) => {
    //filtering non-buttons for clicks
    if (e.target.tagName === 'BUTTON') {
       if (e.target.textContent === 'remove') { 
        //getting list item by referencing button's parent node
        const li = e.target.parentNode;
        //traversing up again from li to ul
        const ul = li.parentNode
        //remove li child from ul
        ul.removeChild(li);
       } else if (e.target.textContent === 'edit') { 
        console.log('edit');
        }

     }
})