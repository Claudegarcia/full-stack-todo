const db = require("./models");
// Routes
// =============================================================
module.exports = function(app) {
  //use app to setup api routes

  //route to create a todo
  app.post("/api/todos", function(req, res){
   db.Todo.create({name: req.body})
   res.json(todo);
  })

  //route to get all the todos
  app.get("/api/todos", function(req, res) {
   db.Todo.findAll({}).then(function(data) {res.json(data)});
   })
};
// superagent