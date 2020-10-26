const express = require('express')
const routes = express.Router()
const users = require('./controllers/users')
const recipes = require('./controllers/admin')

/*Navigation routes for users*/
routes.get('/', users.home)
routes.get('/about', users.about)
routes.get('/recipes', users.recipesPage)
routes.get('/recipe/:id', users.recipesIndex)

/*Navigation routes for admin*/
routes.get('/admin/recipes', recipes.index) //show the recipes list
routes.get('/admin/recipes/:id', recipes.show) //show the recipe detail after click on "view"
routes.get('/admin/recipes/:id/edit', recipes.edit) //show the editing recipe form
routes.get('/admin/create', recipes.create)
routes.post('/admin/recipes', recipes.post)
routes.delete('/admin/recipes', recipes.delete)
routes.put('/admin/recipes', recipes.put)
//routes.put("/admin/recipes", recipes.put); // Editar uma receita

module.exports = routes