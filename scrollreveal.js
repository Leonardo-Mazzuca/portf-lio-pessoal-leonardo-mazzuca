ScrollReveal({
    reset: true,
    distance: '80px',
    duraton: 2000,
    delay: 200

});
  

ScrollReveal().reveal('.home-content, #title_content'
, { origin: 'top' });
ScrollReveal().reveal('.img_pessoal_display, .box_habilidade , .box__projects_item', { origin: 'bottom' });
ScrollReveal().reveal('.img_pessoal_display_about', { origin: 'left' });
ScrollReveal().reveal('.img__pessoal img', { origin: 'right' });


ScrollReveal().reveal('#back-end, #front-end, .box__itens', { origin: 'top' });
ScrollReveal().reveal('#photoshop, #bootstrap-react', { origin: 'bottom' });
