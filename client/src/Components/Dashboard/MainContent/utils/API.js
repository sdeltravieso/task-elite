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
  // Gets all completed tasks
  getCompletedTasks: function(completed) {
    return axios.get("/api/completedTask/" + completed);
  },
  // Gets all completed tasks
  getInCompletedTasks: function(completed) {
    return axios.get("/api/incompleteTask/" + completed);
  },
  // Gets task by id
  getTask: function(id) {
    return axios.get("/api/task/" + id);
  },
  
  // create a new task
  createTask: function(taskData) {
    return axios.post("/api/newtask/", taskData);
  },

  // complete a task
  completeTask: function(id) {
    return axios.put("/api/completeTask/" + id);
  },
  
  // Deletes the task with the given id
  deleteTask: function(id) {
    return axios.delete("/api/delete-task/" + id);
  },
  
  // create a new department
  createDepartment: function(departmentData) {
    return axios.post("/api/newdepartment/", departmentData);
  },
  
  // Deletes the department with the given id
  deleteDepartment: function(id) {
    return axios.delete("/api/delete-department/" + id);
  }
}