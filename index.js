console.log('hello world')

let message = document.querySelector('aside')


function addMovie(event){
    event.preventDefault() //do not refresh page
    let inputField = document.querySelector('input')
  
  
    let movie = document.createElement('li') // creates a new html (list) element
    let movieTitle = document.createElement('span') // creates a new html (span) element
    movieTitle.textContent  = inputField.value  //whatever is typed in the input field is the new movie text
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle) //makes the span a child of the list element
    document.querySelector('ul').appendChild(movie) // make the list element a child of the ul element

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'

    deleteBtn.addEventListener('click', deleteMovie,)

    movie.appendChild(deleteBtn)
  }

  function deleteMovie (event) {
    event.target.parentNode.remove() 
    message.textContent = 'Movie Deleted'
  }
  
  function crossOffMovie (event) {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked') === true) {
        return message.textContent = 'Movie watched'
    } else {
        return message.textContent = 'Movie Added back!'
    }
  }
  
  document.querySelector('form').addEventListener('submit', addMovie)