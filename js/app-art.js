
/*Toggling the articles*/
document.querySelectorAll(".downarrow")
    .forEach(element => element.addEventListener("click", function () {
            
        var nextNode = this.nextElementSibling;
        console.log(nextNode)

        if(!nextNode.classList.contains("text_active")){
            nextNode.classList.add("text_active");
        }
        else{
            nextNode.classList.remove('text_active');
        }

        if(element.textContent == '⇧'){
            element.textContent = '⇩';
        } else if (element.textContent == '⇩'){
            element.textContent = '⇧';
        }
        
    }));
            