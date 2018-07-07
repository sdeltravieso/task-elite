import axios from "axios";

export default {
    // Gets all users
    getUsers: function() {
        console.log("hit");
      return axios.get("/api/user/");
    },
    // Gets user by id
    getUser: function(id) {
        console.log("hit");
      return axios.get("/api/users/" + id);
    },
    // Gets all departments
    getDepartments: function() {
      return axios.get("/api/departments/");
    },
    // Gets department by id
    getDepartment: function(id) {
      return axios.get("/api/departments/" + id);
    },
    // Gets all tasks
    getTasks: function() {
      return axios.get("/api/task/");
    },
    // Gets task by id
    getTask: function(id) {
      return axios.get("/api/task/" + id);
    },

    createTask: function(taskData) {
      return axios.post("/api/newtask/", taskData);
    },




    // Gets the book with the given id
    getBook: function(id) {
      return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function(id) {
      return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function(bookData) {
      return axios.post("/api/books", bookData);
    }
  };  