const btnForward = document.getElementById("btn-forward");
const btnBackward = document.getElementById("btn-backward");
let cartaoAtual = 0;
const mutants = document.querySelectorAll(".cartao");

btnForward.addEventListener("click", function(){
    const LastMutant = cartaoAtual === mutants.length - 1;
    if(LastMutant) return;

    hideMutantsSelected();

    cartaoAtual++;
    showMutant();
});

btnBackward.addEventListener("click", function (){
    const FirstMutant = cartaoAtual === 0;
    if(FirstMutant) return;

    hideMutantsSelected();

    cartaoAtual--;
    showMutant();
});

function showMutant() {
    mutants[cartaoAtual].classList.add("selected");
}

function hideMutantsSelected() {
    const cartaoSelected = document.querySelector(".selected");
    cartaoSelected.classList.remove("selected");
}