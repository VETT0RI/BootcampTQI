// Seleção de DOM
const toDoInput = document.querySelector('.to-do-input')
const toDoButton = document.querySelector('.to-do-button')
const toDoList = document.querySelector('.to-do-list')
console.log('ola')

// Eventos de escutas
toDoButton.addEventListener('click', addToDo)
toDoList.addEventListener('click', deleteAndCheck)


// Funções
function addToDo(event) {
  event.preventDefault()
  
  const toDoDiv = document.createElement('div')
  toDoDiv.classList.add('to-do')
  
  const toDoLi = document.createElement('li') 
  toDoLi.classList.add('to-do-list')
  toDoLi.innerText = toDoInput.value
  toDoInput.value = ''

  toDoDiv.appendChild(toDoLi)
  
  const completedButton = document.createElement('button')
  completedButton.innerHTML = '<i class="fa-solid fa-check"></i>'
  completedButton.classList.add('completed-btn')
  toDoDiv.appendChild(completedButton)
  
  const trashButton = document.createElement('button')
  trashButton.innerHTML = '<i class="fas fa-trash"></i>'
  trashButton.classList.add('trash-btn')
  toDoDiv.appendChild(trashButton)
  
  toDoList.appendChild(toDoDiv)

}

function deleteAndCheck(event) {
  const item = event.target
  
  if(item.classList[0] === 'trash-btn') {
    const toDo = item.parentElement
    toDo.remove()
  } 

  if(item.classList[0] === 'completed-btn') {
    const toDo = item.parentElement
    toDo.classList.toggle('completed')
  }

}