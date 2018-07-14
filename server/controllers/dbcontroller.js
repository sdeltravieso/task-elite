db = require("../models");

module.exports = function(app) {
  //Get department by ID
  app.get("/api/department/:id", function(req, res) {
    db.Department.find({
      where: {
        id: req.params.id
      }
    }).then(function(dbDepartment) {
      res.json(dbDepartment);
    });
  });

  // get all departments
  app.get("/api/departments", function(req, res) {
    console.log("hit from get all departments in dbcontroller.js");
    db.Department.findAll({}).then(function(dbDepartment) {
      console.log(dbDepartment);
      res.json(dbDepartment);
    });
  });
  // get all users
  app.get("/api/user", function(req, res) {
    console.log("hit from dbcontroller.js");
    db.User.findAll({}).then(function(dbuser) {
      console.log(dbuser);
      res.json(dbuser);
    });
  });

  //Get user by ID, or by username if not a number
  app.get("/api/user/:id", function(req, res) {
    if (!isNaN(req.params.id)) {
      db.User.find({
        where: {
          id: req.params.id
        }
      }).then(function(dbUser) {
        res.json(dbUser);
      });
    } else {
      db.User.find({
        where: {
          username: req.params.id
        }
      }).then(function(dbUser) {
        res.json(dbUser);
      });
    }
  });

  // get all tasks
  app.get("/api/task", function(req, res) {
    console.log("hit from dbcontroller.js");
    db.Task.findAll({}).then(function(dbTask) {
      console.log(dbTask);
      res.json(dbTask);
    });
  });
  
  // get all incomplete tasks
  app.get("/api/incompleteTask/:complete", function(req, res) {
    console.log("hit from dbcontroller.js");
    db.Task.findAll({
		where: {
			completed: false
		}
	}).then(function(dbTask) {
      console.log(dbTask);
      res.json(dbTask);
    });
  });
  
  // get all complete tasks
  app.get("/api/completedTask/:completed", function(req, res) {
    console.log("hit from dbcontroller.js");
    db.Task.findAll({
		where: {
			completed: true
		}
	}).then(function(dbTask) {
      console.log(dbTask);
      res.json(dbTask);
    });
  });
  
  // complete a task
  app.put("/api/completeTask/:id", function(req, res) {
    console.log("hit from dbcontroller.js");
    db.Task.update({
		completed: true
	}, {
		where: {
			id: req.params.id
		}
	}).then(function(dbTask) {
      console.log(dbTask);
      res.json(dbTask);
    });
  });

  //Get task by ID
  app.get("/api/task/:id", function(req, res) {
    db.Task.find({
      where: {
        id: req.params.id
      }
    }).then(function(dbTask) {
      res.json(dbTask);
    });
  });

  //Get tasks by department id
  app.get("/api/department/tasks/:id", function(req, res) {
    db.Task.findAll({
      where: {
        department_id: req.params.id
      }
    }).then(function(dbTask) {
      res.json(dbTask);
    });
  });

  //Get incomplete tasks by department id
  app.get("/api/department/:id/incompletetasks", function(req, res) {
    db.Task.findAll({
      where: {
        department_id: req.params.id,
        completed: false
      }
    }).then(function(dbTask) {
      res.json(dbTask);
    });
  });

  //get completed tasks by department id
  app.get("/api/department/:id/completedtasks", function(req, res) {
    db.Task.findAll({
      where: {
        department_id: req.params.id,
        completed: true
      }
    }).then(function(dbTask) {
      res.json(dbTask);
    });
  });

  //Get all projects with the owner id
  app.get("/api/project/owner/:id", function(req, res) {
    db.Owner.findAll({
      where: {
        owner: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  //Get the project id
  app.get("/api/project/:id", function(req, res) {
    db.Project.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  //Post a new project
  app.post("/api/newproject", function(req, res) {
    var project = req.body;
    db.Project.create({
      project_name: project.name,
      description: project.description,
      owner_id: project.owner
    }).then(function(dbProject) {
      console.log("dbProject added to projects");
      res.status(200).send("project added to db");
    });
  });

  //Post a new user
  app.post("/api/newuser/", function(req, res) {
    var user = req.body;
    db.User.create({
      username: user.username,
      fullname: user.fullname,
      email: user.email,
      password: user.password
    }).then(function(dbUser) {
      console.log("user added to db");
      res.status(200).send("user added to db");
    });
  });

  //Post a new department
  app.post("/api/newdepartment", function(req, res) {
    var department = req.body;
    db.Department.create({
      departmentName: department.departmentName,
      description: department.description,
    //   project_id: project.project_id
    }).then(function(dbDepartment) {
      console.log("department added to db");
      res.status(200).send("department added to db");
    });
  });

  //Post a new task
  app.post("/api/newtask", function(req, res) {
    console.log("Hit from post a new task in dbcontoller.js");
    var task = req.body;
    db.Task.create({
      taskName: task.taskName,
      description: task.description,
      completed: false,
      department_id: task.department,
      assigned_user: 0
    })
      .then(function(dbTask) {
        console.log("user added to db");
		res.status(200).send("user added to db");
      })
      .catch(error => res.status(422).json(error));
  });

//   // Remove project
//   app.delete("/api/delete-project/:id", async (req, res) => {
//     const { id } = req.params;
//     let project = await db.Project.remove({ _id: id }, (err, res) => {
//       if (err) return err;
//       return res;
//     });
//     res.send(project);
//   });

// Remove Task
  app.delete("/api/delete-task/:id", function(req, res) {
    // We just have to specify which task we want to destroy with "where"
    db.Task.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTask) {
      res.json(dbTask);
    });
  });

//   remove department
  app.delete("/api/delete-department/:id", function(req, res) {
    // We just have to specify which department we want to destroy with "where"
    db.Department.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbDepartment) {
      res.json(dbDepartment);
    });
  });
  
};
