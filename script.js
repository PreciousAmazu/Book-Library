const apiKey = 'AIzaSyAAzUtvW-IzzdSbJAhNaLMMhzMYlfiHzkY';

// Fetch books from Google Books API
function searchBooks() {
  var searchInput = document.getElementById("searchInput").value;
  var url = "https://www.googleapis.com/books/v1/volumes?q=" + searchInput;

  fetch(url)
    .then(response => response.json())
    .then(data => displayResults(data.items))
    .catch(error => console.log(error));
}
// Display search results
function displayResults(books) {
  var container = document.getElementById("resultsContainer");
  container.innerHTML = "";

  books.forEach(book => {
    var title = book.volumeInfo.title;
    var author = book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown Author";
    var thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "";
    var previewLink = book.volumeInfo.previewLink;

    var bookElement = document.createElement("div");
    bookElement.classList.add("book");

    var titleElement = document.createElement("h2");
    titleElement.textContent = title;

    var authorElement = document.createElement("p");
    authorElement.textContent = "By " + author;

    var thumbnailElement = document.createElement("img");
    thumbnailElement.src = thumbnail;

    var previewLinkElement = document.createElement("a");
    previewLinkElement.href = previewLink;
    previewLinkElement.target = "_blank";
    previewLinkElement.textContent = "View Details";

    bookElement.appendChild(titleElement);
    bookElement.appendChild(authorElement);
    bookElement.appendChild(thumbnailElement);
    bookElement.appendChild(previewLinkElement);

    container.appendChild(bookElement);
  });
}
// Add event listeners
var searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", searchBooks);
