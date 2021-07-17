const container = document.querySelector('#container'); 
const content = document.createElement('div')
content.classList.add('content'); 
content.textContent = "Hey I'm red!"; 
content.style.color = 'red';
container.appendChild(content); 

const blue = document.createElement('h3'); 
blue.classList.add('blue'); 
blue.textContent = "I am a blue h3"; 
blue.style.color = 'blue'
container.appendChild(blue)

// create a new div
const newDiv = document.createElement('div'); 
newDiv.classList.add('newDiv')

// add a background color and border
newDiv.style.backgroundColor = 'pink'
newDiv.style.border = '1px solid black'; 
newDiv.style.width = '500px'
newDiv.style.height = '500px'

// Inside of the div place: 
// h1 that says "I'm in a div"

const titleElement = document.createElement('h1')
titleElement.textContent = "I'm a div"



// Inside of the div place: 
// p that says "ME TOO!"
const para = document.createElement('p'); 
para.textContent = "ME TOO!"

// append child 
container.appendChild(newDiv); 
newDiv.appendChild(titleElement)
newDiv.appendChild(para)