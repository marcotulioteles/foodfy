const fs = require('fs')
const data = require('../data.json')

exports.index = function(req, res) {
    return res.render('admin/recipes', {items:data.recipes})
}

exports.show = function(req, res) {
    
    const recipeIndex = req.params.id
    
    recipes = {
        ...data.recipes[recipeIndex],
        id:recipeIndex
    }
    return res.render('admin/recipedetail', {recipes})
}

exports.edit = function(req, res) {
    
    const recipeIndex = req.params.id
   
    recipes = {
        ...data.recipes[recipeIndex],
        id:recipeIndex
    }
    return res.render('admin/edit', {recipes})
}

exports.create = function(req, res) {
    return res.render('admin/create')
}

exports.post = function(req, res) {
    
    const keys = Object.keys(req.body)

    for (key of keys) {

        if (req.body[key]=="") {
            return res.send('Please, fullfill all fields')
        }
    }

    const id = Number(data.recipes.length)
    
    const recipe = {
        ...req.body,
        id
    }

    data.recipes.push(recipe)   

    fs.writeFile('data.json', JSON.stringify(data, null, 2),function(err){
        if (err) return res.send('Writing file error')

        return res.redirect('/admin/recipes')
    })
}

exports.delete = function(req,res) {
    const recipeIndex = req.body.id

    recipes = {
        ...data.recipes[recipeIndex],
        id:recipeIndex
    }

    /*const { id } = req.body*/

    const filteredRecipes = data.recipes.filter(function(recipe){
        return recipe.id != recipes.id
    })

    data.recipes = filteredRecipes

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if(err) return res.send('Write File Error!')

        return res.redirect('/admin/recipes')
    })

    /*return res.send(recipeIndex)*/
}

exports.put = function(req,res) {
    
    const { id } = req.body
    let index = 0

    const foundRecipe = data.recipes.find(function(recipe, foundIndex){
        if (id == recipe.id) {
            index = foundIndex
            return true
        }
    })

    if (!foundRecipe) return res.send("Recipe is not found!")

    const recipe = {
        ...foundRecipe,
        ...req.body,
        id: Number(req.body.id)
    }

    data.recipes[index] = recipe

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("Write File Error!")

        return res.redirect(`/admin/recipes/${id}`)
    })
}