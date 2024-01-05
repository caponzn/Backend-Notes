const fs = require('fs');
const crypto =  require('node:crypto');

const fileName = 'data/tarefas.json';

let tarefas = JSON.parse(fs.readFileSync(fileName));

function listar(search){

        return tarefas.filter(t => {
            if(search){
                return t.titulo.includes(search)
            }
            return true
        })
    

}


function listarPorId(id){
    return tarefas.find(t => t.id.toString() === id.toString());
}


function criar(tarefa){

    tarefa.id = crypto.randomUUID();

    // set date created and updated
    tarefa.dateCreated = new Date().toISOString();
    tarefa.dateUpdated = new Date().toISOString();

    // add and save tarefa
    tarefas.push(tarefa);
    saveData();
    
    return tarefa.id;

}

function atualizar(id, params) {
    const task = tarefas.find(t => t.id.toString() === id.toString());

    // set date updated
    task.dateUpdated = new Date().toISOString();

    // update and save
    Object.assign(task, params);
    saveData();
    console.log("Atualizei")
}


function deletar(id) {
    // filter out deleted task and save
    tarefas = tarefas.filter(t => t.id.toString() !== id.toString());
    saveData();
    
}


// private helper functions

function saveData() {
    fs.writeFileSync(fileName, JSON.stringify(tarefas, null, 2));
}

const crud = {
    criar,
    listar,
    listarPorId,
    atualizar,
    deletar
};
function toggleFixed(id){
    const task = tarefas.find(t => t.id.toString() === id.toString);

    task.dateUpdated = new Date().toISOString();
    if (task.fixed)
        task.fixed = !task.fixed
    else
        task.fixed = true

    const params = {"fixed": task.fixed}

    Object.assign(task, params);
    saveData();
}


module.exports = crud;