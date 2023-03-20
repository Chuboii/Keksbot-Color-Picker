let body = document.querySelector(".container")

duplicateColorContainers()
function duplicateColorContainers() {
    for (let i = 0; i < 60; i++) {
    
        
        let newColorContainers = document.createElement("div")
        body.append(newColorContainers)
        newColorContainers.classList.add("color-containers")
        
    }
    
}
let colorContainer = document.querySelectorAll(".color-containers")


function generateColors() {


    colorContainer.forEach(colorContainerEl => {
        let colorFunction = addColorNumbers()

        colorContainerEl.style.backgroundColor = `#${colorFunction}`
        colorContainerEl.innerHTML = `#${colorFunction}`

            colorContainerEl.onclick = () => {
                document.querySelector(".a").value = `#${colorFunction}`
                document.querySelector(".b").value = `#${colorFunction}`
            }
        

    })
}
generateColors()


function addColorNumbers() {
    let colorIndex = "0123456789abcdef"
    let colors = ""
    let colorLength = 6

    for (let i = 0; i < colorLength; i++) {
        const randomNumber = Math.floor(Math.random() * colorIndex.length)

        colors += colorIndex.substring(randomNumber, randomNumber + 1)
       

    }
    return colors
}
addColorNumbers()


function testColors() {
    let input = document.querySelector(".a").value
    let body = document.querySelector("body")

    if (input.includes("#")) {
        body.style.backgroundColor = input
   
        
    }
    else {
        body.style.backgroundColor = "#" + input
        console.log("#" + input);
    }


  
}

function generateRandomColor() {
    colorContainer.forEach(colorContainerEl => {
        let colorFunction = addColorNumbers()



            
        document.querySelector(".a").value = `#${colorFunction}`
            
        

    })

}

function removeBgColor() {
let bodyBg = document.querySelector("body")
    bodyBg.style.backgroundColor = "white"   
    
    document.querySelector(".a").value =""
}

let containa = document.querySelector(".active")

window.addEventListener("scroll", () => {
    if (scrollY > 400) {
        containa.style.position = "fixed"
        containa.style.top = "0"
    }
    else {
        containa.classList.add("active")
        containa.style.position = "fixed"
        containa.style.top = "-1000px"
        
    }
})