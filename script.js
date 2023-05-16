const button = document.querySelector(".button__dice");
const header = document.querySelector("h1");
const section = document.querySelector(".advice");
const welcome = document.querySelector(".welcome")

button.addEventListener("click", function() {
    section.textContent = "";
    welcome.style.display = "none"
    
    // section.style.position = "static";
    //async function
    const getAdvice = async function() {
        //fetching data
        const data = await fetch("https://api.adviceslip.com/advice");
        //jsoning data 
        const result = await data.json();
        //ID
        const id = result.slip.id;
        //advice text
        const advice = result.slip.advice;
        //html to put
        const html = `
        <h1>Advice #${id}</h1>
        <section class="advice">${advice}</section>
      </div>
        `
        section.insertAdjacentHTML("afterbegin", html)
    }
    getAdvice()
})

//clicking by enter
window.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        e.preventDefault();
        button.click();
    }
})
