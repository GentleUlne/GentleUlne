        const {db} = require('../db/connection');
    

class pagamentoController{
  
    // LISTAR TODOS OS REGISTROS
    index(req,res){
        
       
            db.query('SELECT * FROM forma_pagamento ORDER BY id',(err,result)=>{
              if(err){
                console.log(`Houve um erro ao listar os clientes: ${err}`)
              }
              res.render('pagamento/listar',{pagamento:result.rows})
            
              
            })
            }
              
           


    create(req,res){
        res.render('pagamento/adicionar')
    }


    store(req,res){
        const query = {
            text:'INSERT INTO forma_pagamento(descricao) VALUES ($1)',
            values:[req.body.descricao]
          }

          db.query(query,(err,result)=>{
            if(err){
              console.log(`Houve um erro ao inserir o cliente: ${err}`)
            }
            res.redirect('/pagamento/listar') 
          })    
    }
    
    edit(req,res){
        
        const query = {
           text:'SELECT * FROM forma_pagamento WHERE id=$1',
           values:[req.params.id] 
        }
        db.query(query,(err,result)=>{
            if(err){
                console.log(`houve um erro ao editar: ${err}`)
            }
            res.render('pagamento/editar',{pagamento:result.rows[0]})
        })
    }

    update(req,res){
        const dados = req.body
        const query = {
            text:'UPDATE forma_pagamento SET descricao=$1  WHERE id=$2',
            values:[dados.descricao, dados.id]
        }
        db.query(query,(err,result)=>{
            if(err){
                console.log(`Houve um erro ao atualizar o registro: ${err}`)
            }
                res.redirect('/pagamento/listar')
        })
    }

    delete(req,res){
        const id = req.params.id
        const query = {
            text:'DELETE FROM forma_pagamento WHERE id=$1',
            values:[id]
        }
        db.query(query,(err,result)=>{
            if(err){
                console.log(`Houve um erro ao excluir: ${err}`)
            }
            res.redirect('../../pagamento/listar')
        })
    }
}
module.exports = new pagamentoController()