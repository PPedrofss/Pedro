// console.log('oi' )

var express = require('express')
var ejs = require('ejs')
var app = express()
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/teste', function(req, res){
    res.render('home')
})

app.get('/cana', function(req, res){
    var idade = req.query.idade
    var nome = req.query.nome
    res.render('cana', { idade, nome })
})

app.get('/formulario', (req, res) => {
    res.render('formulario')
})


app.listen(3000, function(){
    console.log('ta no ar 2')
})