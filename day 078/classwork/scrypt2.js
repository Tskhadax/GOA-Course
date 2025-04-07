let body = document.body


let parentDiv = document.createElement("div")
body.appendChild(parentDiv)

let child = document.createElement("div")
parentDiv.appendChild(child)

let child2 = document.createElement("div")
parentDiv.appendChild(child2)

child.style.width= "150px"
child.style.height="150px"
child.style.backgroundColor='red'

child2.style.width= "150px"
child2.style.height="150px"
child2.style.backgroundColor='blue'

parentDiv.style.backgroundColor = "black"
parentDiv.style.width = "500px"
parentDiv.style.height = "500px"
parentDiv.style.display="flex"
parentDiv.style.justifyContent="center"
parentDiv.style.alignItems="center"
parentDiv.style.gap="20px"



