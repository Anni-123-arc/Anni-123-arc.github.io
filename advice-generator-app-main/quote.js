const btn = document.getElementById('btn');

btn.addEventListener("click", function () {
    // No need to check the event target since we are directly adding the listener to the button
    fetch("https://api.gameofthronesquotes.xyz/v1/random")
      .then((response) => response.json())
      .then((data) => renderData(data))
      .catch((error) => console.error('Error fetching data:', error)); // Added error handling
});


function renderData(data) {
    const quote =document.getElementById('quote');
    const no =document.getElementById('no');

    quote.innerHTML = '"' + data.sentence + '"';

    no.innerHTML = data.character.name;
    
}