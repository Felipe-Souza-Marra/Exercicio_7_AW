const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require("body-parser")
const app = express();

app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/view");
app.use(bodyParser.urlencoded({ extended: true}))



app.get("", function (req, res) {
  res.render("query_form.html");
});

app.post('/info', (req, res) => {
  console.log(req.body);
  const dados = {
    nome: req.body.nome,
    email: req.body.email,
    telefone: req.body.telefone,
    mensagem: req.body.mensagem
  };
  console.log(dados);
  res.render('info', dados);
});

const app_port = 8000
app.listen(app_port, function () {
  console.log("app rodando na porta " + app_port);
});