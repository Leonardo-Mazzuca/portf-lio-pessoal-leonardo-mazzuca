ScrollReveal({
    reset: true,
    distance: '80px',
    duraton: 2000,
    delay: 200

});
  

ScrollReveal().reveal('.home-content, #title_content'
, { origin: 'top' });
// ScrollReveal().reveal('.img_pessoal_display_about, .home-content h2, .contato__entrar_textos h3', { origin: 'left' });
// ScrollReveal().reveal('.home-content h1, .img__pessoal img, .texto__entrar_em_contato', { origin: 'right' });

// alteracoes
ScrollReveal().reveal('.img_pessoal_display_about, .home-content h2, .contato__entrar_textos h3', { origin: 'left' });
ScrollReveal().reveal('.home-content h1, .img__pessoal img, .texto__entrar_em_contato', { origin: 'right' });



ScrollReveal().reveal('#back-end, #front-end, .box__itens', { origin: 'top' });
ScrollReveal().reveal('#photoshop, #bootstrap-react', { origin: 'bottom' });
