const ulElement = document.querySelector(".content ul.demo");
const liElementCollection = ulElement.querySelectorAll("li");

liElementCollection.forEach((liElement) => {
    liElement.addEventListener("click", (event) => {
        const liElement = event.currentTarget;


        /** CODAR AQUI */
        const ulElement = document.querySelector(".content ul.demo");
const liElementCollection = ulElement.querySelectorAll("li");

liElementCollection.forEach((liElement) => {
    liElement.addEventListener("click", (event) => {
        const liElement = event.currentTarget;


        if (liElement.classList.contains("selected")) {
            liElement.classList.remove("selected");
            return;
        }

        liElementCollection.forEach((el) => {
            el.classList.remove("selected");
        });

        liElement.classList.add("selected");

        

    
    });
});
    });
});

