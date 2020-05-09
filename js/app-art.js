
/*Toggling the articles*/
document.querySelectorAll(".downarrow")
    .forEach(element => element.addEventListener("click", function () {
            
        var nextNode = this.nextElementSibling;
        
        if(!nextNode.classList.contains("text_active")){
            nextNode.classList.add("text_active");
        }
        else{
            nextNode.classList.remove("text_active");
        }

        if(element.textContent == '⇧'){
            element.textContent = '⇩';
        } else if (element.textContent == '⇩'){
            element.textContent = '⇧';
        }
        
    }));

/*Toggling Articulos and Noticias*/
document.getElementById("articulos").addEventListener("click", function(e) {
    const sectionArt = document.querySelector(".articles");
    const sectionNws = document.querySelector(".news");

    if(sectionArt.classList.contains("hidden")) {
        sectionArt.classList.remove("hidden");
        sectionArt.classList.add("shown");
        sectionNws.classList.add("hidden")
        document.getElementById("articulos").classList.add("inDisplay") //For the underline in the Title
        document.getElementById("noticias").classList.remove("inDisplay")        
    }

    const all = document.querySelectorAll(".text")
    all.forEach(a => {
        a.classList.remove("text_active");
    })

    document.querySelectorAll(".downarrow")
    .forEach(element => {
        if(element.textContent == '⇧') {
            element.textContent = '⇩';      //This is only here because the page always appears on Articulos
        }
    })


});
document.getElementById("noticias").addEventListener("click", function() {
    const sectionNws = document.querySelector(".news");
    const sectionArt = document.querySelector(".articles");
    if(sectionNws.classList.contains("hidden")) {
        sectionNws.classList.remove("hidden");
        sectionNws.classList.add("shown");
        sectionArt.classList.add("hidden");
        document.getElementById("noticias").classList.add("inDisplay")
        document.getElementById("articulos").classList.remove("inDisplay")
    }

    const all = document.querySelectorAll(".text")
    all.forEach(a => {
        a.classList.remove("text_active");
    })



});