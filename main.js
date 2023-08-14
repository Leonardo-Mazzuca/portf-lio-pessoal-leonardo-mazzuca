

const boxHabilidades = document.getElementsByClassName("box_habilidade");

// efeito da box serviços : ultima section

for(let i = 0; i < boxHabilidades.length; i++){
    const boxHabilidade = boxHabilidades[i];


    boxHabilidade.addEventListener("click", function() {
      const boxId = this.id;
      
      if (boxId === "a-bot") {
          window.location.href = "#bot";
      } else if (boxId === "a-front-end") {
          window.location.href = "#front-end-box";
      } else if (boxId === "a-back-end") {
          window.location.href = "#back-end-box";
      }
  });

    

    boxHabilidade.addEventListener("mouseenter", function() {
        const btnAcessar = boxHabilidade.querySelector(".acessar-btn");
        btnAcessar.style.display = "block";

        const iconAnimate = boxHabilidade.querySelector(".icon__habilidade");

        iconAnimate.style.transition = "transform 0.5s";

        iconAnimate.style.transform = "rotate(360deg)";
    });

    boxHabilidade.addEventListener("mouseleave", function() {

        const btnAcessar = boxHabilidade.querySelector(".acessar-btn");
        btnAcessar.style.display = "none";

        const iconAnimate = boxHabilidade.querySelector(".icon__habilidade");
        iconAnimate.style.transform = "rotate(0deg)";
    });
}



// ============================= menu animation - mobile =============================

let menuHamburger = document.querySelector('header .navigation_menu-hamburger');

document.querySelector('.navigation_menu-hamburger .toggle').onclick = function(){
  this.classList.toggle('active');
  menuHamburger.classList.toggle('active');
}

// ============================= menu animation - desktop =============================

let navMenuItems = document.querySelectorAll('.navegador__item');
let sections = document.querySelectorAll('section');


navMenuItems.forEach(item => {
  const link = item.querySelector('a'); 
  item.addEventListener('click', function() {
    link.click(); 
  });
});

window.addEventListener('scroll', function() {
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - window.innerHeight / 2;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navMenuItems.forEach(item => {
    const targetSection = item.querySelector('a').getAttribute('href').substring(1);
    item.classList.toggle('active', targetSection === currentSection);
  });
});





// ============================= send btn =============================

const userId = 'AI62Hl2-sQZgzl5EN';
const templateId = 'template_cd1wx2t';


(function(){
  emailjs.init(userId);
})();

document.getElementById('send-btn').addEventListener('click', function(){


  let feedBackInput = document.getElementById('feedbackInput').value;
  let fromName = document.getElementById('fromNameInput').value;

  const toName = 'Leonardo'; 


  const templateParams = {
    to_email: 'devmazzuca@gmail.com',
    message: feedBackInput,
    to_name: toName,
    from_name: fromName
  };

  emailjs.send('service_bwvy3fs', templateId, templateParams, userId).then(function(response){
    console.log('e-mail enviado: ', response);
    document.getElementById('fromNameInput').value = '';
    document.getElementById('feedbackInput').value = '';
    document.getElementById('confirmation').classList.add('show');


    setTimeout(function(){
      document.getElementById('confirmation').classList.remove('show');
    }, 3000)


  },function(error){
    console.error('falha no envio: ', error)
  });

});

// ============================= copiar conteúdo - box - itens =============================
 


document.addEventListener('DOMContentLoaded', () => {
  const contatoElements = document.querySelectorAll('.box__itens');

  contatoElements.forEach((element) => {
      element.addEventListener('click', () => copyToClipboard(element));
  });
});

function copyToClipboard(element) {
  const contentToCopy = element.querySelector('.box__item_dado').textContent.trim();

  navigator.clipboard.writeText(contentToCopy).then(() => {
        document.getElementById('confirmation-box_item').classList.add('show-item');


        setTimeout(function(){
          document.getElementById('confirmation-box_item').classList.remove('show-item');
        }, 3000)
      })
      .catch((error) => {
          console.error('Erro ao copiar conteúdo para a área de transferência: ', error);
      });
}
