function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "1em";
    
    var text;
    
    if(name.length < 3){
      text = "Ingresá un nombre válido";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 3){
      text = "Ingresá un asunto válido";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Ingresá un teléfono válido";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Ingresá un email válido";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 140){
      text = "Ingresá un mensaje mayor a 140 caracteres";
      error_message.innerHTML = text;
      return false;
    }
  alert("Gracias! Tus comentarios fueron correctamente enviados. Te responderé a la brevedad.");
    return true;
  }