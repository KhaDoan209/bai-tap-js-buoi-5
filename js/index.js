var btn__list__1 = document.getElementById("bai-1-list");
var btn__list__2 = document.getElementById("bai-2-list");

function OpenBook() {
  var book1 = document.getElementById("book_1");
  var book2 = document.getElementById("book_2");

  if (btn__list__1.classList.contains("active")) {
    book1.className = "fa-solid fa-book-open me-2";
  } else {
    book1.className = "fa-solid fa-book me-2";
  }

  if (btn__list__2.classList.contains("active")) {
    book2.className = "fa-solid fa-book-open me-2";
  } else {
    book2.className = "fa-solid fa-book me-2";
  }
}
