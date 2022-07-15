const selectContainer = document.querySelector('.select-container')
const selectContainerBtn = document.querySelector('.select-container button')
const selectContainerBtnValue = document.querySelector('.select-container button .value')
const options = document.querySelectorAll('.option')

selectContainerBtn.onclick = () => {
    selectContainer.classList.toggle('open')
}

options.forEach(opt => {
    opt.onclick = () => {
        selectContainer.classList.toggle('open')
        selectContainerBtnValue.innerText = opt.innerText
    }
})

const select = document.querySelector('.select')
const selectBtn = document.querySelector('.select button')
const selectBtnValue = document.querySelector('.select button .value')
const option = document.querySelectorAll('.option')

selectBtn.onclick = () => {
    select.classList.toggle('open')
}

options.forEach(opt => {
    opt.onclick = () => {
        select.classList.toggle('open')
        selectBtnValue.innerText = opt.innerText
    }
})


const hamburger = document.querySelector(".hamburger")
const navmenu = document.querySelector(".navmenu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("clicl", () => {
    hamburger.classList.remove("active")
    navmenu.classList.remove("active")
}))