import axios from "axios";

export default {
  searchBooks: function(book) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q="+book);
  },
    // Saves a book to the database
    saveBook: function(bookData) {
      return axios.post("/api/books", bookData);
    },
  // Gets the book with the given id
  findBook: function() {
    return axios.get("/api/books/");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
