const crud = require('../helper/tarefas');


exports.api = (req, res) => {
    res.json({ "api": "My Tasks", "versão": "1.0.0" })
}


exports.listar = (req, res) => {
   res.json(crud.listar(req.query.search));
}

exports.listarPorID = (req, res) => {
    const id = req.params.id;
    res.status(201).json( crud.listarPorId(id))
}

exports.criar = (req, res) => {
   res.status(201).json({ "id":crud.criar(req.body)})
}


exports.atualizar = (req, res) => {
    const id = req.params.id;
    crud.atualizar(id, req.body)
    res.status(204).send();
}

exports.deletar = (req, res) => {
    const id = req.params.id;
    res.status(204).json( crud.deletar(id))
}
exports.toggleFixed = (req, res) =>{
    const body = req.body
    const id = req.params.id
    crud.toggleFixed(id, body)

    return res.status(204).send()
}