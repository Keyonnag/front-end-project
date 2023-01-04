// create a nav bar
// create a search bar
// fetch search information for a book
// turn fetch data into cards 

let returnResults = {}; 
let apiURL = "http://openlibrary.org/search.json?q=";
let searchBtn = document.getElementById("searchBtn")


searchBtn.addEventListener("click", function(){
    getData()
})  

// function runSearch(){
//     let searchString = $("#searchBar").val();
//     let searchURL = apiURL + searchString;
//     fetch(searchURL)
//     .then((response) => response.json())
//     .then((data) => buildResultCard(data))
    
// }

async function getData() {
    let searchString = $("#searchBar").val();
    let searchURL = apiURL + searchString;
    const response = await fetch(searchURL)
    const data = await response.json() 
    buildResultCard(data.docs)
}

// getData()

function buildResultCard(resultArr) {
    let results = $("#searchResults")
    results.empty()


  for (var i = 0; i < resultArr.length; i++) {
         var arr = resultArr[i];
         console.log(resultArr)
        let cardTitle = arr.title
        let bookAuthor = arr.author_name
        let cardText = arr.first_publish_year
    
        var card = document.createElement("div")
        card.classList.add("card")
        results.append(card)

        var row = document.createElement("div")
        row.classList.add("row", "g-0")
        card.append(row)

        var column = document.createElement("div")
        column.classList.add("col-9" , "col-sm-8")
        row.append(column)

        var cardBody = document.createElement("div")
        cardBody.classList.add("card-body")
        column.append(cardBody)

        var title = document.createElement("h5")
        title.classList.add("card-title")
        title.textContent = cardTitle
        cardBody.append(title)

        var author = document.createElement("h6")
        author.classList.add("card-subtitle", "mb-2")
        author.textContent = bookAuthor
        cardBody.append(author)

        var genre = document.createElement("p")
        genre.classList.add("card-text")
        genre.textContent = "Published Date: " + cardText
        cardBody.append(genre)
    }

}


