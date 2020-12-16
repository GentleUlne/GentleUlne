const express = require('express')
const nunjucks = require('nunjucks')
const ClienteController = require('./src/controllers/clienteController')
const UsuarioController = require('./src/controllers/usuarioController')
const {db}   = require ('./src/db/connection')
const pagamentoController = require('./src/controllers/pagamentoController')
const categoria_produto = require ('./src/controllers/categoriaProdutosController')
//db.query('SELECT * FROM cliente',(err,result)=>{
  //if(err){
   // console.log(`Houve um erro ao listar os clientes: ${err}`)
 // }
 // console.table(result.rows)


  db.query('SELECT * FROM categoria_produto',(err,result)=>{
    if(err){
      console.log(`Houve um erro ao listar os clientes: ${err}`)
    }
    console.table(result.rows)

//  res.render('cliente/listar',{cliente:result.rows})

  
})



const app = express()
const port = 3000
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.set('view engine','.html')

nunjucks.configure('./src/views', {
  autoescape: true,
  express: app
});

app.get('/',(req,res)=>{
  res.render('index')
})

app.get('/categoria-produto/listar', categoria_produto.index)

app.get('/categoria-produto/adicionar',categoria_produto.create)
app.post('/categoria-produto/salvar',categoria_produto.store)
app.get('/categoria-produto/editar/:id',categoria_produto.edit)
app.get('/categoria-produto/deletar/:id',categoria_produto.delete)
app.post('/categoria-produto/atualizar',categoria_produto.update)



// ROTAS PARA CADASTRO DE CLIENTES




app.get('/cliente/listar', ClienteController.index)

app.get('/cliente/adicionar',ClienteController.create)
app.post('/cliente/salvar',ClienteController.store)
app.get('/cliente/editar/:id',ClienteController.edit)
app.get('/cliente/deletar/:id',ClienteController.delete)
app.post('/cliente/atualizar',ClienteController.update)
//app.get('/cliente/excluir/:id',ClienteController.delete)




//rotas para usuário
app.get('/usuario/listar', UsuarioController.index)

app.get('/usuario/adicionar',UsuarioController.create)
app.post('/usuario/salvar',UsuarioController.store)
app.get('/usuario/editar/:id',UsuarioController.edit)
app.get('/usuario/deletar/:id',UsuarioController.delete)
app.post('/usuario/atualizar',UsuarioController.update)

//rotas para forma pagamento
app.get('/pagamento/listar', pagamentoController.index)

app.get('/pagamento/adicionar',pagamentoController.create)
app.post('/pagamento/salvar',pagamentoController.store)
app.get('/pagamento/editar/:id',pagamentoController.edit)
app.get('/pagamento/deletar/:id',pagamentoController.delete)
app.post('/pagamento/atualizar',pagamentoController.update)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})