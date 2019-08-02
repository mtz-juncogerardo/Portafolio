//Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navbar-list');

hamburger.addEventListener('click',()=>{

    navLinks.classList.toggle('open');

});


//Modal
const modalTitle = document.getElementById('modal-title');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-desc');
const closeBtn = document.getElementById('close-btn');
const tecImage = document.getElementsByClassName('tec-img');

//Technology Description Object
const tech = {
  html:{
      title:"HTML y CSS",
      description: "Html es un lenguaje de marcado que se utiliza para estructurar las paginas web. <br><br>Por otro lado CSS es una hoja de estilos que permite añadir diseño a la pagina como posicionar elementos, añadir colores, tamaños y animaciones. <br><br>Gracias a estas 2 herramientas se pueden crear increibles Paginas web."
    },
  js:{
      title:"Javascript",
      description: "Es un lenguaje de programación que permite añadir funcionalidad a los sitios web. <br><br>Por ejemplo cuando hiciste click en el logo se abrio esta ventanita. <br><br>Esto se logro gracias a Javascript!"
    },
  sass:{
      title:"Sass",
      description: "Sass es una extension de CSS que permite escibrir de manera mas concisa y rapida los diseños de las paginas web"
    },
  bootstrap:{
      title:"Bootstrap",
      description: "Bootstrap es una libreria que facilita el desarrollo de sitios web al tener diseños ya establecidos. <br><br>Practicamente es un archivo CSS del que podemos tomar diferentes estilos para aplicarlos a nuestra pagina."
    },
  node:{
      title:"Node JS y Express JS",
      description: "NodeJS es una herramienta que nos permite ejecutar Javascript (El lenguaje de programación) del lado del servidor, gracias a esto podemos crear aplicaciones web escalables. <br><br>ExpressJS es un framework que trabaja en conjunto con node y nos ofrece muchas herramientas que hace el escribir NodeJS mucho mas facil"
    },
  aws:{
      title:"Amazon Web Services",
      description: "Es una plataforma en la nube que ofrece distintos servicios de infraestructura. <br><br>Por ejemplo: redes, almacenamiento, servicios para aplicaciones, seguridad, etc."
    },
  mongo:{
      title:"Mongo DB",
      description: "MongoDB es un sistema de base de datos no relacional que permite crear bases de datos de manera rapida y dinamica. <br><br>Esta base de datos se usa cuando el esquema de la base de datos es sencillo, o cuando no es necesario usar una base de datos relacional."
    },
  handlebars:{
      title:"Handlebars Template",
      description: "Handlebars es un motor de plantillas. <br><br>Este nos permite al momento de escribir HTML concatenar variables que haran que el sitio web se presente con distinta información dependiendo de la funcionalidad que le dimos."
    },
  react:{
    title: "React",
    description: "React es una Libreria de Javascript que introduce el copncepto de los componentes. Basicamente nos permite armar un sitio web como si fueran piezas de lego, (Lo que facilita muchisimo el desarrollo). No solo esto sino que esta tecnologia tambien nos permite hacer aplicaciónes moviles usando React Native."
  }
};


//Open Modal
for (let item of tecImage) {
  item.addEventListener('click',openModal);
}

function openModal(e) {

  modal.style.display = "flex";

  switch (e.target.classList[1]) {
    case "design":
      modalTitle.innerText = tech.html.title;
      modalBody.innerHTML = tech.html.description;
      break;
    case "js":
    modalTitle.innerText = tech.js.title;
    modalBody.innerHTML = tech.js.description;
      break;
    case "sass":
    modalTitle.innerText = tech.sass.title;
    modalBody.innerHTML = tech.sass.description;
      break;
    case "boot":
    modalTitle.innerText = tech.bootstrap.title;
    modalBody.innerHTML = tech.bootstrap.description;
      break;
    case "node":
    modalTitle.innerText = tech.node.title;
    modalBody.innerHTML = tech.node.description;
      break;
    case "post":
    modalTitle.innerText = tech.postgre.title;
    modalBody.innerHTML = tech.postgre.description;
      break;
    case "dock":
    modalTitle.innerText = tech.docker.title;
    modalBody.innerHTML = tech.docker.description;
      break;
    case "aws":
    modalTitle.innerText = tech.aws.title;
    modalBody.innerHTML = tech.aws.description;
      break;
    case "mongo":
    modalTitle.innerText = tech.mongo.title;
    modalBody.innerHTML = tech.mongo.description;
      break;
    case "hand":
    modalTitle.innerText = tech.handlebars.title;
    modalBody.innerHTML = tech.handlebars.description;
    break;
    case "react":
      modalTitle.innerText = tech.react.title;
      modalBody.innerHTML = tech.react.description;
  }
}


//Close Modal
closeBtn.addEventListener('click',()=>{
  modal.style.display = "none";
});

window.addEventListener('click', (e)=>{
  if(e.target === modal){
    modal.style.display = "none";
  }
});
