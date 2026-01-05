/*Hamburger nav bar*/
const navSlide = () => {
    const burger2 = document.querySelector('.burger2');
    const navMini = document.querySelector('.nav-mini');
    const navLinksMini = document.querySelectorAll('.nav-mini li');
  
    // Toggle NavBar Mini
    burger2.addEventListener('click', () => {
      navMini.classList.toggle('nav-active');
      // Animate links
      navLinksMini.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.4
          }s`;
        }
      });
      // Burger Animation
      burger2.classList.toggle('toggle');
    });
  };
  
  navSlide();
  
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
const articulosTab = document.getElementById("articulos");
const noticiasTab = document.getElementById("noticias");
const sectionArt = document.querySelector(".articles");
const sectionNws = document.querySelector(".news");

const setTabParam = (tabValue) => {
    const url = new URL(window.location.href);
    url.searchParams.set("tab", tabValue);
    history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
};

const showArticulos = () => {
    if (sectionArt.classList.contains("hidden")) {
        sectionArt.classList.remove("hidden");
        sectionArt.classList.add("shown");
        sectionNws.classList.add("hidden");
        articulosTab.classList.add("inDisplay"); //For the underline in the Title
        noticiasTab.classList.remove("inDisplay");
    }
    setTabParam("articulos");
    const all = document.querySelectorAll(".text");
    all.forEach(a => {
        a.classList.remove("text_active");
    });

    document.querySelectorAll(".downarrow")
        .forEach(element => {
            if (element.textContent == '⇧') {
                element.textContent = '⇩';      //This is only here because the page always appears on Articulos
            }
        });
};

const showNoticias = () => {
    if (sectionNws.classList.contains("hidden")) {
        sectionNws.classList.remove("hidden");
        sectionNws.classList.add("shown");
        sectionArt.classList.add("hidden");
        noticiasTab.classList.add("inDisplay");
        articulosTab.classList.remove("inDisplay");
    }

    setTabParam("noticias");
    const all = document.querySelectorAll(".text");
    all.forEach(a => {
        a.classList.remove("text_active");
    });
};

articulosTab.addEventListener("click", showArticulos);
noticiasTab.addEventListener("click", showNoticias);

// Allow linking directly to the Noticias tab via URL (e.g. ?tab=noticias or #noticias)
const params = new URLSearchParams(window.location.search);
const wantsNoticias = params.get("tab") === "noticias"
    || params.get("section") === "noticias"
    || window.location.hash.toLowerCase() === "#noticias";

if (wantsNoticias) {
    showNoticias();
}
