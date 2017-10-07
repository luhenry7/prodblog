var playerTitleElement = document.getElementById('player_title');

playerTitleElement.addEventListener('click', updateName);

function updateName(event) 
    {
 var name = prompt('Enter a new name');
 event.target.textContent = 'Player 1: ' + name;}
 
 
 