let url = "http://secret-taiga-87491.herokuapp.com/todos"
proxyUrl = 'https://cors-anywhere.herokuapp.com/'


let getTodos = () => {
    fetch(proxyUrl + url).then(function(response) {
        console.log(response);
      })
}

window.addEventListener('load', function() {
    console.log('All assets are loaded')
    document.getElementById("todo-get-event-btn").addEventListener('click', getTodos)
})