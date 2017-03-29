
var nombre=document.getElementById("nombre");
var apellido=document.getElementById("apellido");
var email=document.getElementById("correo");
var contra=document.getElementById("contraa");

var objetoCoder=JSON.parse(localStorage.getItem("nuevoUsuario"));
console.log(objetoCoder);
nombre.innerText=objetoPaciente.nome;
apellido.innerText=objetoPaciente.conome;
email.innerText=objetoPaciente.email;
contra.innerText=objetoPaciente.pass;
