import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDiscription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//pegar todos os botoes que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    //adicionar a escuta
    button.addEventListener("click", handleClick)
})


/**Quando o botao delete for clicado ele abre a modal  **/
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
    const text = check ? "Marcar como lida " : "Excluir "

    modalTitle.innerHTML = `${text}esta pergunta`
    modalDiscription.innerHTML = `Tem certeza que deseja ${text} essa pergunta?`
    //abrir modal
    modal.open()
}