const data = require('../data.json')

exports.home = function(req, res){
    return res.render('users/home')
}

exports.about = function(req, res){
    return res.render('users/about')
}

exports.recipesPage = function(req, res){
    return res.render('users/recipes', {items:data.recipes})
}

exports.recipesIndex = function(req, res) {
    
    const recipeIndex = req.params.id
    const recipes = {
        ...data.recipes[recipeIndex],
        id:recipeIndex
    }

    return res.render('users/recipedetails', {recipes})
}