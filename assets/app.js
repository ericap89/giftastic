//var topics = ["nba", "mlb", "nfl", "wwe","nhl"]

document.addEventListener('click' , e => {
    if(e.target.className === 'btn btn-primary') {
        let sport = e.target.dataset.sport
        // having trouble making 10 pop up on page 
        fetch(`https://api.giphy.com/v1/gifs/random?api_key=njVUZBDxs3oRwcPnm4u5KEmIO5DfUac8&tag=${sport}&limit=10&rating=g`)
            .then(r => r.json())
            .then(r => {
                let url = r.data.images.fixed_height.url
                document.querySelector('#gifs').innerHTML = `
                <img src="${url}" alt="${sport}">
                `   
            })
            .catch(e => console.error(r))
    }
})
// add animation and still click events
// Make search bar render new buttons

