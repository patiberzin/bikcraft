if(window.SimpleSlide) {
new SimpleSlide({
    slide: "quote", //nome do atributo data-slide="principal"
    time: 5000 //tempo de transição dos slides
})

new SimpleSlide({
    slide: "portfolio", //nome do atributo data-slide="principal"
    time: 5000,
    nav: true
})
}

if(window.SimpleSlide) { //Só se o SimpleAnime existir
new SimpleAnime();
}