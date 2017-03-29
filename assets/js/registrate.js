var boton=document.getElementById("registrar")
	var ficha=[];
	boton.addEventListener("click",function(a){
		a.preventDefault();
    var nombre=document.getElementById('name').value;
    var apellido=document.getElementById('lastName').value;
    var correo=document.getElementById('email').value;
    var contra=document.getElementById('password').value;

    function Registro(nome,conome,email,pass) {
      this.nome=nome;
      this.conome=conome;
      this.email= email;
      this.pass=pass;
      }
      if((nombre!=0)&&(apellido!=0)&&(correo!=0)&&(contra!=0)){
    localStorage.setItem("nuevoUsuario",JSON.stringify(new Registro (nombre,apellido,correo,contra)));
    window.location="login.html"
  }else{
    alert("Debe completar campos");
  }
    });
    var nome=document.getElementById('name');
    var conome=document.getElementById('lastName');
    var email=document.getElementById('email');
    var pass=document.getElementById('password');
    var inputs=document.getElementsByClassName("obligatorio")
    var mensaje= document.getElementById('mensaje')
    var emailRegex= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    var tagName = document.getElementsByTagName("imput");

    for(var i=0;i<inputs.length;i++){
			inputs[i].onblur=function(j) {
			if(this.value.trim().length==0){
				//this.value="";
				mensaje.innerText=" *Este campo es obligatorio"
			}
    }};


  /*  for(var i=0;i<tagName.length;i++){
			tagName[i].onblur=function(r) {
        if ((emailRegex.test(this.value[2])==false)) {
          mensaje.innerText="* Ingrese un email valido"
  			}else if ((emailRegex.test(this.value[2])==true)) {
          return true;
        }
			}}*/

    var letras= function(l){
		var codigoTecla=l.keyCode;
		if((codigoTecla>=97 && codigoTecla<=122)||(codigoTecla<=90&&codigoTecla>=65)||codigoTecla==39||codigoTecla==32){
			 return true
			 }else{
			 return false
			 }
			}

      nome.onkeypress=letras;
      conome.onkeypress=letras
