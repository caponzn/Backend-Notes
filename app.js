const express = require('express')
const app = express()
const rotas = require('./routers')
const cors = require('cors')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors({origin:'*'}))

app.get('/api', rotas.api)

// implmente as rotas:
// /api/listar
app.get('/api/listar', rotas.listar)
// /api/listar/:id
app.get('/api/listar/:id', rotas.listarPorID)
// /api/criar
app.post('/api/criar', rotas.criar)
// /api/atualizar/:id
app.put('/api/atualizar/:id', rotas.atualizar)
// /api/deletar/:id
app.delete('/api/deletar/:id', rotas.deletar)

app.put('/api//togglefixed/:id', rotas.toggleFixed)

const port = 3000 

app.listen(port, () => {
  console.log(`App listening on: http://localhost:${port}`)
})

