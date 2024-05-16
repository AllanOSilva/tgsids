function scrollToSection(event, sectionId) {
    event.preventDefault(); // Previne a ação padrão do link
    const element = document.getElementById(sectionId);
    const headerOffset = 20; // Espaço adicional de 20px
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}