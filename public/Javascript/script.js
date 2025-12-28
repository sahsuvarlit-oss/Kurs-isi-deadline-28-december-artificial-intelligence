const mobilMenyuBtn = document.querySelector(".fa-bars" )  


mobilMenyuBtn.addEventListener("click", function() {
    document.querySelector(".mobil-menyu").classList.add("aktiv")
})

const closeMenuBtn = document.querySelector(" .fa-xmark")


closeMenuBtn.addEventListener("click", function() {
        document.querySelector(".mobil-menyu").classList.remove("aktiv")
})