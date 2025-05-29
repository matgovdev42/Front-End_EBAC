/*Adicionar interatividadee ao clicar em um dos
"property-card" ele se torna ativo (classe ACTIVE)
e exibe no console (ou em uma DIV) o tipo selecionado. */

//Espera até que DOM esteja carregado
document.addEventListener("DOMContentLoaded", function(){
    const cards = document.querySelectorAll(".property-card");

    cards.forEach(card => {
        card.addEventListener("click", () =>{
            //remove classe 'active' de todos
            cards.forEach(c => c.classList.remove("active"));
            //adiciona classe 'active' ao clicado
            card.classList.add("active");
            //obtem o nome da propriedade clicada
            const type = card.querySelector("p").textContent;
            //simula carregamento de templates específicos
            showTemplatesFor(type);
        });
    });
    function showTemplatesFor(types){
        console.log (`carregando templates para: ${type}`);
        //aqui você poderia alterar dinamicamente uma <div ia = "template-section">, por exemplo.
        const templateSection = document.getElementById("template-section");
        if (templateSection){
            templateSection.innerHTML = <p>exibindo templates para:
                <strong>${types}</strong>
            </p>
        }
    }
});