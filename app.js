const form = document.getElementById('form');
const input = form.querySelector('input');

const tasksDiv = document.querySelector('.tasks')
const ul = document.getElementById('task-list');

const div = document.createElement('div');
const filterLabel = document.createElement('label'); //must create label to identify this section
const filterCheckbox = document.createElement('input');


/* Creating the Hide Completed checkbox to toggle on or off and filter tasks*/
filterLabel.textContent = "Hide Completed";
filterCheckbox.type = 'checkbox';
div.appendChild(filterLabel);
div.appendChild (filterCheckbox);
tasksDiv.insertBefore(div, ul); //insert new div between .tasks and before ul
filterCheckbox.addEventListener('change', (e) => {
    const isChecked = e.target.checked; //if filterCheckbox is checked, isChecked = true
    const lis = ul.children; //traversing list items collection within ul
    if (isChecked){
        for (let i = 0 ; i = lis.length; i += 1) //for loop to go through each list item 
        

    }else {
        for (let i = 0 ; i = lis.length; i += 1) //for loop to go through each list item 


    }
}



/*Separating code into functions to make it more modular 
Breaking 'submit' event 
Write function to take the text inputted and return text as list item
*/

function createLI(text) {
    // creates list item from inputted text
    const li = document.createElement('li');
    const span = document.createElement('span'); //create span to convert text element to HTML element
    span.textContent = text; 
    li.appendChild(span);
    
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
        const button = e.target; //simplify for cleaner code by assignment
        //getting list item by referencing button's parent node
        const li = button.parentNode;
        //traversing up again from li to ul
        const ul = li.parentNode
       if (button.textContent === 'remove') { 
        //remove li child from ul
        ul.removeChild(li);
       } else if (button.textContent === 'edit') { 
            const span = li.firstElementChild; //locates li's first child element
            const input = document.createElement('input'); //creates input element
            input.type = 'text'; //assigning what kind of input 
            input.value = span.textContent; //assigning the text inside span is the input value left now in editing state
            li.insertBefore (input, span); //inserts the created input first before the span element ex: (new, existing)
            li.removeChild(span); //removes existing span
            button.textContent='save'; //changes 'edit' buton text to 'save'

        } else if (button.textContent === 'save') { 
            const input = li.firstElementChild; //located li's first child element
            const span = document.createElement('span'); //creates span element
            span.textContent = input.value; //the span's text content will now be what was inputted
            li.insertBefore (span, input);// inserts the span before the input
            li.removeChild(input); //removes input
            button.textContent='edit'; //changes 'save' to 'edit'
        }
     }
})

