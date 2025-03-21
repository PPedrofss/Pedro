// console.log('oi' )

var express = require('express')
var ejs = require('ejs')
var app = express()
app.use(express.json())

var gastos = []

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

app.get('/cadastro', function(req, res){
    var valor = req.query.valor
    var descricao = req.query.descricao
    var data = req.query.data

    gastos.push({
        valor: valor,
        descricao: descricao,
        data: data
    })

    console.log(gastos)
    res.render('formulario')
})


app.listen(3000, function(){
    console.log('servidor da mudança 21/03/2025')
})