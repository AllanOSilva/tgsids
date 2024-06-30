function scrollToSection(event, sectionId) {
    event.preventDefault(); // Previne a ação padrão do link
    const element = document.getElementById(sectionId);
    const headerOffset = 130; // Espaço adicional de 20px
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

//evitar cliques do botão diretito do mouse
document.addEventListener('contextMenu', function(event){
    alert('não é permitido o download!');
    event.preventDefault();
})
